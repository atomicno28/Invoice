import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './Landing'
import AddInvoice from './AddInvoice'
import ShowInvoices from './ShowInvoices';
import Invoice from './Invoice';
const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/addInvoice" element={<AddInvoice />} />
        <Route path="/showInvoices" element={<ShowInvoices />} />
        <Route path="/invoice" element={<Invoice />} />
    </Routes>
  )
}

export default App