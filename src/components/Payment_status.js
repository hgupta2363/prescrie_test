import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import "./payment_status.css"
 const Payment_status=()=> {
  
  const handleZoom=()=> {
    window.location="/zoom_call"
  }
    return(
    <div class="receipt">

    <center><h1>validation succesfull</h1></center>
   

  
    <table class="table-receipt">
        <thead>
        <tr>
            <th class="th-header"
                colspan="2">PAYMENT RECEIPT
            </th>
        </tr>
        </thead>
        <tbody>
      
       
        <tr>
            <td class="td-title">orderid</td>
            <td class="td-content">ORD399</td>
        </tr>
        <tr>
            <td class="td-title">MID</td>
            <td class="td-content">LEuwfW20127010084496</td>
        </tr>
        <tr>
            <td class="td-title">TXNAMOUNT</td>
            <td class="td-content">1.00</td>
        </tr>
        <tr>
            <td class="td-title">CURRENCY</td>
            <td class="td-content">INR</td>
        </tr>
        <tr>
            <td class="td-title">TXN_STATUS</td>
            <td class="td-content">success</td>
        </tr>
       
        </tbody>
       
        <button class="button" onClick={handleZoom}> zoom meeting</button>
       
         <tr>
            <td class="td-bottom"
                colspan="2">Thank you!.
            </td>
        </tr>
    </table>
 
</div>)
  }
export default Payment_status