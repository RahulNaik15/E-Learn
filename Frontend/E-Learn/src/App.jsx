import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Courses from './courses/Courses'
import { useState } from 'react'
import Login from './component/Login'
import ContactUs from './component/ContactUs'
import AboutUs from './component/AboutUs'
import FreeCourseDetails from './component/FreeCourseDetails'
import PaidCourseDetails from './component/PaidCourseDetails'
import { useAuth } from './context/AuthProvider'
import ProtectedRoute from './component/ProtectedRoute'
import { ToastContainer } from 'react-toastify';


function App() {
  
  const { user: authUser } = useAuth(); // ✅ Fixed useAuth
  console.log(authUser);

  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
      
      <div className='dark:bg-slate-900 dark:text-white' >

        <BrowserRouter>
          {showLogin && <Login setShowLogin={setShowLogin} />}
          <ToastContainer />
        <Routes>
          <Route path="/" element={<Home setShowLogin={setShowLogin}></Home>}></Route>
          <Route path="/course"
            element={
              <ProtectedRoute>
                <Courses setShowLogin={setShowLogin} />
              </ProtectedRoute>
            }
          />
          <Route path="/course/:id" element={<FreeCourseDetails />}/>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route
            path="/paid-course/:id"
            element={
              <ProtectedRoute>
                <PaidCourseDetails />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<AboutUs></AboutUs>}></Route> 
          <Route path="/login" element={<Login></Login>}  ></Route>
        </Routes>
      </BrowserRouter>
      </div>
      
      
    </>
  )
}

export default App
