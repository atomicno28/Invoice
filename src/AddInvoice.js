import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/Addinvoice.css'
const AddInvoice = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({pname: "", quantity: "", price: ""});
   const [entry, setEntry] = useState([]);
   const [details, setDetails] = useState({InvoiceNo: "", Name: "", Mobile: "", Date: "", TotalAmount: ""});
   const handleItemChange = (e) => {
     setItem({...item, [e.target.name]: e.target.value});
    }
    const handleDetailsChange = (e) => {
      setDetails({...details, [e.target.name]: e.target.value});
    }
    const AddItem = () => {
      setEntry(prevEntry => [...prevEntry, item]);
    }
    const AddInvoice = () => {
      let data = JSON.parse(localStorage.getItem("Data"));
      if(data == null){
        data = {};
        data.Invoices = []
      }
     const invoice = {InvoiceNo: data.Invoices.length+1, Name: details.Name, Mobile: details.Mobile, Date: details.Date, Items: entry};
     data.Invoices.push(invoice);
     localStorage.setItem("Data", JSON.stringify(data));
     navigate("/");
   }

  return (
    <div>
    <form  className='form-group' style={{margin:'5rem'}} action="/" method='post'>
       <div>
          <label htmlFor=""> Name </label>
          <input className='form-control' type="text" name='Name' onChange={handleDetailsChange}/>
          <label htmlFor=""> Mobileno. </label>
          <input className='form-control' type="text" name='MobileNo.' onChange={handleDetailsChange}/>
          <label htmlFor=""> Date </label>
          <input className='form-control' type="text" name='Date' onChange={handleDetailsChange}/>
       </div>
        <div className='form-group' style={{margin:'5rem'}} >
              <label htmlFor=""> Product </label>
              <input className='form-control' type="text" name='pname' onChange={handleItemChange}/>
              <label htmlFor=""> Quantity. </label>
              <input className='form-control' type="number" name='quantity' onChange={handleItemChange}/>
              <label htmlFor=""> Price </label>
              <input className='form-control' type="number" name='price' onChange={handleItemChange}/>
              <div className='btn btn primary' onClick={AddItem}> Add Item </div>
        </div>
        <table style={{margin:'5rem'}}>
          <thead>
            <tr >
              <th > Product Name</th>
              <th > Quantity </th>
              <th > Price </th>
              <th > Amount</th>
            </tr>
          </thead>
          <tbody>
            {entry.map((value, key) => { return(
              <tr key={key}>
                <td>{value.pname}</td>
                <td>{value.quantity}</td>
                <td>{value.price}</td>
                <td>{value.quantity*value.price}</td>
              </tr>)
            })}
          </tbody>
        </table>
        <div className='btn btn primary' onClick={AddInvoice}> Proceed </div>
    </form>
    </div>
  )
}

export default AddInvoice