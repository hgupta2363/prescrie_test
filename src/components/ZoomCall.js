import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './css/Zoom.css'
import {Link} from "react-router-dom";

export default class Zoomcall extends Component{
  state={
     Token:''
  }
  componentDidMount()
  {   var id=window.location.pathname.split('/')[2]
      this.setState({
        Token:id
      })
  }
  render()
  {
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
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </React.Fragment>
    </div>
    );
  }
 
}
