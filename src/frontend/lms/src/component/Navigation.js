import React from 'react'
import NavStyle from '../style/NavStyle.css'
 import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import Register from '../pages/Register'
function Navigation(){


    return (
        <>
       
        <div className='nav'>
         <img className='logo' src={logo} alt ="background"/> 
         <div className="nav-bar">
         <ul>
          <Link to='/' className='a'> Home</Link>
          <Link to='/register'  className='a'> Register</Link>
         <Link to='/admin'  className='a'> Admin</Link>
         <Link to='/student-login'  className='a'> Student login</Link> 
         <Link to='/staff-login'  className='a'>Staff login</Link>
         {/* <Link to='/search'  className='a'> Search</Link> */}
         <Link to='/about'  className='a'> About</Link>
         
         </ul>
         



        </div>
        
        
        </div>
        
        </>
    )
}
export default Navigation