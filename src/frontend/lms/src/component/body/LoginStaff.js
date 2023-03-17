import  React from 'react';
import body from '../../style/body.css';
import bg from '../../assets/campus.jpg';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function LoginStaff(){

  const navigate =useNavigate();
  const StaffNav=()=>{
   navigate('/staff-nav')
  }
    return (
        <>
        <div className='indexBody'>
            
      <img className='background' src={bg} alt ="background"/>
       
        </div>
        <div className='txt'>
        <div><level>Email</level><input type='text'/></div>
         <div><level>Password</level><input type='password'/></div>
         
        <button className='btnstyle' onClick={StaffNav}>Staff login</button>
        
        </div>
       
     
        
        </>
    )
}
export default LoginStaff