import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const ShowInvoices = () => {
    const [Data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        setData(JSON.parse(localStorage.getItem("Data")).Invoices)
    }

    useEffect(() => {
        fetchData();
    }, [])
    
  return (
    <section>
        {Data ? Data.map((value, key) => <div key={key}> 
            <p>InvoiceNo={value.InvoiceNo}</p>
            <p>Name={value.Name}</p> 
            <p>Date={value.Date}</p>
            <div onClick={() => navigate(`/invoice/${value.InvoiceNo}`)}>Show More...</div>
        </div>) : alert("No Invoice")}
    </section>
  )
}

export default ShowInvoices