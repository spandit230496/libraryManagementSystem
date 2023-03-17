import React from "react";
//import Navigation from "../component/Navigation.js";
import Footer from "../component/Footer.js";
import IndexStyle from '../style/IndexStyle.css'
import IndexBody from "../component/body/IndexBody.js";
import AdminNavigation from "../component/AdminNavigation.js";


function AdminHome(){
    
    return (
    <>
    <AdminNavigation/>
    <IndexBody/>
    <Footer/>
    
    
    
    </>)
}
export default AdminHome;