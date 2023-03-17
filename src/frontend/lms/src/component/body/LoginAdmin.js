import  React from 'react';
import body from '../../style/body.css';
import bg from '../../assets/campus.jpg'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function LoginAdmin(){
  const navigate =useNavigate();
   const adminNav=()=>{
    navigate('/admin-nav')
   }
    return (
        <>
        <div className='indexBody'>
            
      <img className='background' src={bg} alt ="background"/>
       
        </div>
        <div className='txt'>
     
        <div><level>Name</level><input type='text'/></div>
         <div><level>Password</level><input type='password'/></div>
         
        <button className='btnstyle' onClick={adminNav}>Login</button>
        
        </div>
       
        
        
        </>
    )
}
export default LoginAdmin