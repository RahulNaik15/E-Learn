import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import FreeCourse from '../component/FreeCourse'
import Footer from '../component/Footer'


const Home = ({setShowLogin}) => {

  
  return (
    <>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Banner></Banner>
      <FreeCourse></FreeCourse>
      <Footer></Footer>
      </>
  )
}

export default Home