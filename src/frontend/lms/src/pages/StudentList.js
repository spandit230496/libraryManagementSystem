import React from "react";
import Navigation from "../component/Navigation.js";
import Footer from "../component/Footer.js";
import IndexStyle from '../style/IndexStyle.css'
import AboutBody from "../component/body/AboutBody.js";
import AdminNavigation from "../component/AdminNavigation.js";
import StudentListSQL from "../component/body/StudentListSQL.js";

function StudentList(){
    
    return (
    <>
    <AdminNavigation/>
    <StudentListSQL/>
    <Footer/>
    
    
    
    </>)
}
export default StudentList;