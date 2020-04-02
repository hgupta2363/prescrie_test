import React, { Component } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import './css/Profile.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar'



const MyContext=React.createContext();

class MyProvider extends Component{
    state={
        Username:"",
        BloodGroup:'',
        Age:'',
        sessionID:'',
        LoggedStatus:false
    }
    componentDidMount()
    {   
       
         var id=window.location.pathname.split('/')[2]
        axios.get('http://localhost:5000/'+id).then(res=>{
           this.setState({
               Username:res.data.username,
               BloodGroup:res.data.bloodGroup,
               Age:res.data.age,
               sessionID:id,
               LoggedStatus:true
           })
        })
        localStorage.setItem('Logged','true');
        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }
    location = window.location
    render(){
        return( 
                
       
        <MyContext.Provider value={{
            state:this.state,
            
        }}>
            {this.props.children}
        </MyContext.Provider>
        )}
}
export default class Profile extends Component{
    
    // renderUpdate()
    // {
    //  {<Navbar LoggedStatus={this.state.LoggedStatus} />}
    // }
    render(){
        return(

            <MyProvider>
             <div>
                 <MyContext.Consumer>
                     
                     {(context)=>(
                      <React.Fragment>
                     <div className="row">
                            <div className="col-lg-4 profile-block">
                            <div className="row">
                                <div className="profilePhoto col-lg-4">

                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-12">{context.state.Age}</div>
                                        <div className="col-lg-12">{context.state.BloodGroup}</div>
                                        <div className="col-lg-12">{context.state.Username}</div>
                                    </div>
                            </div>
                     </div>   
                     </React.Fragment>  
                      )}
                     
                 </MyContext.Consumer>
                 
               </div> 
            </MyProvider>
            
        )
    }
}
