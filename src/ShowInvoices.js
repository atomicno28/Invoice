import React, {useState, useEffect} from 'react'
import Invoice from './Invoice';

const ShowInvoices = () => {
    const [Data, setData] = useState([]);

    const fetchData = async () => {
        setData(JSON.parse(localStorage.getItem("Data")).Invoices)
        console.log(Data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    
  return (
    <section>
        {Data ? Data.map((value, key) => <Invoice key={key} InvoiceNo={value.InvoiceNo} Name={value.Name} Mobile={value.Mobile} Date={value.Date} Items={value.Items}/>) : alert("No Invoice")}
    </section>
  )
}

export default ShowInvoices