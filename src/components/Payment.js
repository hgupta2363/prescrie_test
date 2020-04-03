import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from 'react-bootstrap/Button';
import './payment.css'
import axios from 'axios'

 class PaymentForm extends Component {
  handlePayment(e)
    {
        e.preventDefault()
        var id=window.location.pathname.split('/')
        console.log(id)
        axios.get('http://localhost:5000/final').then(res=>{
          console.log(res)
          window.location.href = res.data;
        })
    }
  render()
  
  {

  
    return (
      <div class="card">
                   
      <h1>Dr. verma</h1>
      <p class="price">$19.99</p>
      <p>Some text about the doctor</p>
   
          <button onClick={this.handlePayment}>Pay now</button>
         
    </div>
  );
}
}
export default PaymentForm

