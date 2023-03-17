import  React from 'react';
import body from '../../style/body.css';
import bg from '../../assets/campus.jpg';
import {Link} from 'react-router-dom'
function IndexBody(){

    return (
        <>
        <div className='indexBody'>
            
      <img className='background' src={bg} alt ="background"/>
       
        </div>
        <div className='txt'>
        <h1>Welcome To <span style={{color:'red'}} >Online Library</span> </h1>
        <h3>A place to enhance your knowledge</h3>
        <div className='btn'> 
        <Link to ='/admin'><button className='btnstyle'>Admin login</button></Link>
        <Link to='/student-login'><button className='btnstyle'>Student login</button></Link>
        
        </div>
       
        </div>
        
        </>
    )
}
export default IndexBody