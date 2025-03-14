import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import FreeCourse from '../component/FreeCourse'
import Footer from '../component/Footer'
import { useAuth } from '../context/AuthProvider';

const Home = ({setShowLogin}) => {
const { user: authUser } = useAuth(); // Get the logged-in user
  
  return (
    <>
      <Navbar setShowLogin={setShowLogin} authUser={authUser} ></Navbar>
      <Banner></Banner>
      <FreeCourse></FreeCourse>
      <Footer></Footer>
      </>
  )
}

export default Home