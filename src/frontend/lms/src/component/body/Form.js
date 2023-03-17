import  React from 'react';
import body from '../../style/body.css';
import bg from '../../assets/campus.jpg';
import {Link} from 'react-router-dom'
function Form(){

    return (
        <>
        <div className='indexBody'>
            
      <img className='background' src={bg} alt ="background"/>
       
        </div>
        <div className='select'>
          <h1>I want to Register</h1><span><Link to='/student_register'><button className='btnstyle'>Student</button></Link></span>
         <Link to='/staff_register'><button className='btnstyle'>Staff</button></Link>
        </div>
       
     
        
        </>
    )
}
export default Form