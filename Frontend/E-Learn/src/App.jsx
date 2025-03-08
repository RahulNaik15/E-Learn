import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Courses from './courses/Courses'
import { useState } from 'react'
import Login from './component/Login'
import ContactUs from './component/ContactUs'
import AboutUs from './component/AboutUs'
import FreeCourseDetails from './component/FreeCourseDetails'
import PaidCourseDetails from './component/PaidCourseDetails'

function App() {
  
  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
      
      <div className='dark:bg-slate-900 dark:text-white' >

        <BrowserRouter>
          {showLogin && <Login setShowLogin={setShowLogin} />}
        <Routes>
          <Route path="/" element={<Home setShowLogin={setShowLogin}></Home>}></Route>
          <Route path="/course" element={<Courses setShowLogin={setShowLogin}></Courses>}></Route>
          <Route path="/course/:id" element={<FreeCourseDetails></FreeCourseDetails>} />  
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="/paid-course/:id" element={<PaidCourseDetails />} />
          <Route path="/about" element={<AboutUs></AboutUs>}></Route>    
        </Routes>
      </BrowserRouter>
      </div>
      
      
    </>
  )
}

export default App
