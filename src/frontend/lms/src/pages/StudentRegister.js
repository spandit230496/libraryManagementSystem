import React from "react";
import Navigation from "../component/Navigation.js";
import Footer from "../component/Footer.js";
import IndexStyle from '../style/IndexStyle.css'
import InputFormstudent from "../component/body/InputFormstudent";


function StudentRegister(){
    
    return (
    <>
    <Navigation/>
    <InputFormstudent/>
   <Footer/>
    
    </>
    )
}
export default StudentRegister;