import React,{Component} from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import { Redirect } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';
import Image from './Image'

import './css/Login.css'



class Login extends Component{
    
    constructor(props)
    {
        super(props)
        this.onChangeEmail=this.onChangeEmail.bind(this)
        this.onChangePassword=this.onChangePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.state={
         email:'',
         password:'',
         Alert:false,
        error:''
        //  Cities:[]
        }
    }
//     componentDidMount(){
//         axios.get('https://indian-cities-api-nocbegfhqg.now.sh/cities')
//         .then(response=>{
//             if(response.data.length>0)
//             {
//                 this.setState({
//                     Cities: response.data.map(el=>el.State),
//                 })
//             }
//             }).catch(err=>{
//             console.log(err)
//             })
//   }
    // onChangeUsername(e)
    // {
    //     this.setState({
    //         username:e.target.value
    //     })
    // }
    // onChangeBloodGroup(e)
    // {
    //     this.setState({
    //         bloodGroup:e.target.value
    //     })
    // }
    // onChangeAge(e)
    // {
    //     this.setState({
    //         age:e.target.value
    //     })
    // }
    // onChangeCity(e)
    // {
    //     this.setState({
    //         City:e.target.value
    //     })
    // }
    onChangeEmail(e)
    {
        this.setState({
            email:e.target.value
        })
    }
    onChangePassword(e)
    {
        this.setState({
            password:e.target.value
        })
    }
    // onChangeDateOfBirth(e)
    // {
    //     this.setState({
    //         dateOfBirth:e.target.value
    //     })
    // }
    onSubmit(e)
    {
        e.preventDefault();
        const NewUser={
            // username:this.state.username,
            // bloodGroup:this.state.bloodGroup,
            // age:this.state.age,
            // city:this.state.city,
            email:this.state.email,
            password:this.state.password,
            // dateOfBirth:this.state.dateOfBirth
            
        }
        axios.post('http://localhost:5000/Login',NewUser).then(res=>{
          
             if(!res.data.session)
             {
               
                this.setState({Alert:true,error:res.data.error})  
            
               
             }
             else{
                window.location='/Profile/'+`${res.data.LoggedUser}`+'/';
             }
        
        }).catch(err=>{
            console.log(err)
        })
               

    }
    render()
    {
        return(
           
            <div>
               <SweetAlert
              show={this.state.Alert}
              icon='warning'
              title="Error"
              text={this.state.error}
              onConfirm={() => {this.state.Alert=false}}
            />
                 <div className="login-class row">
                 <Image/>
                     <div className='col-lg-5 login-col'>
             <form onSubmit={this.onSubmit}>
                {/* <div className="form-group">
                        <label>City</label>
                        <select ref="userInput"
                        required 
                        className="form-control"
                        value={this.state.City}
                        onChange={this.onChangeCity}>
                        {  
                            this.state.Cities.map(city=>{
                               return <option key={city}
                               value={city}>{city}
                               </option>
                            })
                     }
                        </select>
                </div> */}
                {/* <div className="form-group">
                <label>
                    Name
                </label>
                <input type="text" 
                className="form-control" 
                id="exampleInputUsername"
                value={this.state.username}
                onChange={this.onChangeUsername} 
                placeholder="Name">
                
                </input>
                </div> */}
                <div className="form-group">
                <label>
                    E-Mail
                </label>
                <input type="text" 
                className="form-control" 
                id="exampleInputUsername"
                value={this.state.email}
                onChange={this.onChangeEmail} 
                placeholder="Email">
                
                </input>
                </div>
                <div className="form-group">
                <label>
                    Password
                </label>
                <input type="text" 
                className="form-control" 
                id="exampleInputUsername"
                value={this.state.password}
                onChange={this.onChangePassword } 
                placeholder="Password">
                
                </input>
                </div>
                
                {/* <div className="form-group">
                <label>
                    Date-Of-Birth
                </label>
                <input type="text" 
                className="form-control" 
                id="exampleInputPassword1"
                value={this.state.dateOfBirth}
                onChange={this.onChangeDateOfBirth} 
                placeholder="Date-Of-Birth">
                
                </input>
                </div>
                <div className="form-group">
                <label>
                  Age
                </label>
                <input type="text" 
                className="form-control" 
               
                value={this.state.age}
                onChange={this.onChangeAge} 
                placeholder="Age">
                
                </input>
                </div>
                <div className="form-group">
                <label>
                  BloodGroup
                </label>
                <input type="text" 
                className="form-control" 
                id="exampleInputPassword1"
                value={this.state.bloodGroup}
                onChange={this.onChangeBloodGroup} 
                placeholder="BloodGroup">
                
                </input>
                </div> */}
                <div className="form-group">
                    <input type='submit' className="btn btn-primary"></input>
                </div>
                
             </form>
             </div>
            
            </div>
            </div>
        )
    }
}
export default Login
