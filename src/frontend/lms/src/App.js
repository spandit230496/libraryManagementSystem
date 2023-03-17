import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import StudentRegister from './pages/StudentRegister';
import StudentLogin from './pages/StudentLogin';
import StaffLogin from './pages/StaffLogin';
import AdminLogin from './pages/AdminLogin';
import About from './pages/About';
import AdminNavigation from './component/AdminNavigation';
import StaffNavigation from './component/StaffNavigation';
import StudentNavigation from './component/StudentNavigation';
import StaffNav from './component/StaffNav';
import StudentList from './pages/StudentList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <div className="App">
      
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Index />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/student_register' element={<StudentRegister />} />
        <Route path='/student-login' element={<StudentLogin />} />
        <Route path='/staff-login' element={<StaffLogin />} />
        <Route path='/about' element={<About/>} />
    {/* ---------------------------------------------------------------- */
    }
        <Route path='/admin-nav' element={<AdminNavigation/>} />
        <Route path='/staff-nav' element={<StaffNav/>} />
        <Route path='/student-nav' element={<StudentNavigation/>} />
        {/* ---------------------------------------------------------------- */
    }

       <Route path='/student-list' element={<StudentList/>} />
      </Routes>


    </div>
  );
}

export default App;
