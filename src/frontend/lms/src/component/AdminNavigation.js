import React from 'react'
import NavStyle from '../style/NavStyle.css'
 import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import Register from '../pages/Register'
function AdminNavigation(){


    return (
        <>
       
        <div className='nav'>
         <img className='logo' src={logo} alt ="background"/> 
         <div className="nav-bar">
         <ul>
          <Link to='/' className='a'> Home</Link>
          <Link to='/add-author'  className='a'> Add Author</Link>
         <Link to='/add-book'  className='a'> Add Book</Link>
         <Link to='/student-list'  className='a'>Student list</Link> 
         <Link to='/logout'  className='a'>Logout</Link>
         
         
         </ul>
         



        </div>
        
        
        </div>
        
        </>
    )
}
export default AdminNavigation