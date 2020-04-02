import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Register from './Register';
import Navbar from './Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Login'
import Profile from './Profile'
import DoctorsList from './DoctorsList'
import PatientDetail from './PatientDetail'
function MainRoutes()
{
    return(
        <Router>
            <Navbar/>
                <Route path='/Home' component={Register}/>
                <Route path='/Login' component={Login}/>
                <Route path='/SignUp' component={Register}/>
                <Route path='/Profile/:id' component={Profile}/>
                <Route path='/DocList' component={DoctorsList}/>
                <Route path='/PatientDets/:id' component={PatientDetail}/>

           
        </Router>
    )
}
export default MainRoutes