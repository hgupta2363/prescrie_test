import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './css/Zoom.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import nl2br from 'react-newline-to-break'; 
export default class Zoomcall extends Component{
  state={
     Name:'',
  }
  componentDidMount()
  {   
    /*  var id=window.location.pathname.split('/')[2]
      axios.get('http://localhost:5000/final/'+id).then(res=>{
            this.setState({
                Name:res.data.docName.replace(/%20/g, " "),
                HospName:res.data.HospitalName.replace(/%20/g, " "),
                DocName:res.data.docName.replace(/%20/g, " "),
                Slot:res.data.Slot.replace(/%20/g, " "),
                Pname:res.data.name.replace(/%20/g, " ")

              })
        })*/
  }
  render()
  {
    const mystring="\n7lstjK9NTyett_oeXtFiEQ&redirect_uri=https://yourapp.com\n"
    return (
      <div className="zoom-grid container">
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
       ZoomCall Link
      </Typography>
      <Grid container spacing={3}>
        
        
        
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value="7lstjK9NTyett_oeXtFiEQ&redirect_uri=https://yourapp.com"
          />
        </Grid>
        <Grid item xs={12} class="zoom-para">
        Dear <b>Himashu</b> your appointment has been confirmed at <b>SMS</b> hospital with Doc <b>DR.R Gowri</b> at 03 hours. "
        Please install Zoom app using the below link for video consulting with your Doctor.
    <Link>{nl2br(mystring)}</Link>
        Requesting you to follow the live status through whats-app by typing "STATUS"
        Kindly note that the doctor's availability and token order may vary to handle emergency cases.
        We will alert you once the Doctor is ready
        </Grid>
      </Grid>
    </React.Fragment>
    </div>
    );
  }
 
}
