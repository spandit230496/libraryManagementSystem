import  React from 'react';
import body from '../../style/body.css';
import bg from '../../assets/campus.jpg';
import {Link} from 'react-router-dom'
import formStyle from '../../style/formStyle.css'
import { useNavigate } from 'react-router-dom';
function LoginStudent(){
   const navigate= useNavigate();
   function StudentNav(){
    navigate('/student-nav')
   }
    return ( 
        <>
        <div className='indexBody'>
            
      <img className='background' src={bg} alt ="background"/>
       
        </div>
       
        <div className='txt'>
        <div><level>Email</level><input type='text'/></div>
         <div><level>Password</level><input type='password'/></div>
        <button className='btnstyle' onClick={StudentNav}>Student login</button>
        </div>
        </>
    )
}
export default LoginStudent