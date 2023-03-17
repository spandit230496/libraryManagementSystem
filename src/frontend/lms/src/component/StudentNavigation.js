import React from 'react'
import NavStyle from '../style/NavStyle.css'
 import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import Register from '../pages/Register'
function StudentNavigation(){


    return (
        <>
       
        <div className='nav'>
         <img className='logo' src={logo} alt ="background"/> 
         <div className="nav-bar">
         <ul>
          <Link to='/student-nav' className='a'> Home</Link>
         
         <Link to='/student-list'  className='a'>Issued Book</Link> 
         <Link to='/'  className='a'>Logout</Link>
         
         
         </ul>
         



        </div>
        
        
        </div>
        
        </>
    )
}
export default StudentNavigation