import React from 'react'
import Navbar from '../component/Navbar'
import Course from '../component/Course'
import Footer from '../component/Footer'


const Courses = () => {
  return (
      <>
          <Navbar></Navbar>
          <div className='min-h-screen'>
             <Course></Course> 
          </div>
          <Footer></Footer>
      </>
  )
}

export default Courses