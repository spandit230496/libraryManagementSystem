import  React from 'react';
import body from '../../style/body.css';
import bg from '../../assets/campus.jpg';
import {Link} from 'react-router-dom';
import AboutStyle from '../../style/AboutStyle.css'
function AboutBody(){

    return (
        <>
        <div className='indexBody'>
            
      <img className='background' src={bg} alt ="background"/>
       
        </div>
        <div className='abt'>
          <h1>Brief History</h1>
          <p>The Institution was started by the Government of Odisha under the Industries Department in the year 1962 and was named "Composite Polytechnic", Rourkela.
             In the year 1966, the name was changed to "Rourkela Polytechnic" and again in 1968 the institution was renamed "State Technological Institute", Rourkela. 
             Subsequently in the year 1976 the name was changed to UTKALMANI GOPABANDHU INSTITUTE OF ENGINEERING, Rourkela (UGIE).</p>
             
             <p>The institute was established to cater the needs of Rourkela Steel Plant along with other industries of the State.
               It was the only institution in Eastern India imparting Diploma Engineering in Chemical and Metallurgical branches. 
              The institute got another feather on its cap by introducing Ceramic Technology in the year 1995 for the first time in Eastern India.</p>
              <h1>Location</h1>
              <p>The institute is located in the tribal belt of the state of Orissa in the Industrial Estate on the foothills of Rourkela (Dist. Sundargarh, Orissa).
                 It is about 1 km. from the Main Road, near STI Chowk and 6 km. west of Rourkela Railway Station. 
                There prevails a peaceful academic environment. Rourkela is 500 km. from Kolkata and 349 km from Bhubaneswar by road, via Talcher.</p>
        </div>
       
     
        
        </>
    )
}
export default AboutBody