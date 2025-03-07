import React from 'react'
import banner from "../../public/banner.svg"
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
      <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-40 gap-[7vw] items-center'>
            <div className='w-full order-2 md:order-1 md:w-1/2 flex flex-col gap-7 text-center md:text-left'>
                  <p className='text-3xl md:text-4xl font-bold '>Hello, Welcome Here Learn Something <span className='text-[#1974d2]'>New Everyday!!!</span></p>
                  <p className='text-base md:text-[20px] text-[#64748b] font-medium'>Unlock your potential with our engaging and interactive courses. Sign up today and take the first step toward mastering new skills and advancing your career!</p>
                  <div className='flex flex-col  items-center md:items-start gap-7'>
                  <label className="input validator w-full max-w-lg text-[#64748b] font-medium flex items-center border rounded-lg px-3 py-3">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                  <input type="email" placeholder="Enter your email to explore more" required className="w-full outline-none"/>
                  </label>
                  <div className="validator-hint hidden text-[#64748b]">Enter valid email address</div>
                  <Link to='/course'>
                    <button className=" px-5 py-3 rounded-lg w-48 text-[white] font-bold bg-[#1974d2] hover:bg-[#0e39a9] mt-2">View Courses</button>          
                  </Link>
                  
            </div>
            </div> 
            <div className='w-full md:w-1/2 order-1 flex justify-center'>
               <img className='rounded-lg' src={banner} alt="banner"></img>
            </div>     
      </div>
      </>
  )
}

export default Banner