import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Invoice = () => {
  const {id} = useParams();
  const [Data, setData] = useState({});

  const fetchData = () => {
    setData(JSON.parse(localStorage.getItem("Data")).Invoices.find(o => o.InvoiceNo == id));
  }

  useEffect(() => {
      fetchData();
  }, [])

  return (
    <div>
      <p>Invoice No: {Data.InvoiceNo}</p>
      <p>Name: {Data.Name}</p>
      <p>Mobile: {Data.Mobile}</p>
      <p>Date: {Data.Date}</p>
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
            {Data.Items ? Data.Items.map((value, key) => { 
              return(
              <tr key={key}>
                <td>{value.pname}</td>
                <td>{value.quantity}</td>
                <td>{value.price}</td>
                <td>{value.quantity*value.price}</td>
              </tr>)
            }): <></>}
          </tbody>
        </table>
    </div>
  )
}

export default Invoice