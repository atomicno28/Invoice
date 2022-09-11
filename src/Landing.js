import React from 'react'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

  return (
    <div style={{textAlign:'center'}}>
    <h1 > Welcome! </h1>
    <p style={{marginBottom:'70px'}}> Want to buy something </p>
    <button style={{color:"ButtonText", boxRadius:"10%"}} onClick={()=>navigate("/addInvoice")}> TAP TO ADD INVOICES </button>
    <button style={{color:"ButtonText", boxRadius:"10%"}} onClick={()=>navigate("/showInvoices")}> TAP TO SHOW INVOICES </button>
    </div>
  )
}

export default Landing;