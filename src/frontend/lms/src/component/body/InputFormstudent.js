import  React, { useEffect, useState } from 'react';
import body from '../../style/body.css';
import bg from '../../assets/campus.jpg';
import {Link} from 'react-router-dom';
//import { useEffect } from 'react';
import { addStudent } from '../../services/student_service';
function Form(){
const [data,setData]=useState({
  name:"",
  age:"",
  department:"",
  email:"",
  

})
useEffect(()=>{console.log(data)},[data])


const handleChange=(e,property)=>{
  console.log("name changed");
  console.log(e.target.value);
  setData({...data,[property]:e.target.value
  })
}
const saveData=(e)=>{
  
  e.preventDefault();
  console.log(data);

  addStudent(data).then((resp)=>{
console.log(resp)}).catch((err)=>{
  console.log(err)
})

  

}

    return (

        <>
        <div className='indexBody'>
            
      <img className='background' src={bg} alt ="background"/>
       
        </div>
        {JSON.stringify(data)}
        <div className='select'>
         <div><input type='text'onChange={(e)=>handleChange(e,'name')} value={data.name}/></div>
         <div><input type='text'  onChange={(e)=>handleChange(e,'age')} value={data.age}/></div>
         <div><select onChange={(e)=>handleChange(e,'department')} value={data.department}><option >ME</option>
         <option>CS</option>
         <option>IT</option>
         <option>EE</option>
         <option>BIOTECH</option></select></div>
         
         <div><input type='email' onChange={(e)=>handleChange(e,'email')} value={data.email}/></div>
         <button onSubmit={saveData}>Save</button>
        </div>
       
     
        
        </>
    )
}
export default Form