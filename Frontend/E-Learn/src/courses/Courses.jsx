import React from 'react'
import Navbar from '../component/Navbar'
import Course from '../component/Course'
import Footer from '../component/Footer'


const Courses = ({setShowLogin}) => {
  return (
      <>
          <Navbar setShowLogin={setShowLogin} ></Navbar>
          <div className='min-h-screen'>
             <Course></Course> 
          </div>
          <Footer></Footer>
      </>
  )
}

export default Courses