import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const SignUp = () => {
  return (
      <>
        <div className='flex h-screen items-center justify-center '>
                <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-md">
                  <div className="">
                   <form method="dialog">
                   <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                   </form>
                     <h3 className="font-bold text-lg text-center mb-8">Sign Up</h3>
                      <div className='flex flex-col gap-8 mb-7 w-sm'>
                         <input className='px-5 py-2 border rounded-lg' type="text" placeholder='Full Name' required></input>
                         <input className='px-5 py-2 border rounded-lg' type="email" placeholder='Email' required></input>
                         <input className='px-5 py-2 border rounded-lg' type="password" placeholder='Password' required></input>     
                     </div>
                     <div>
                          <button className='bg-[#1974d2] hover:bg-[#0e39a9] text-white px-5 w-sm py-2 border rounded-lg mb-4 cursor-pointer'>Sign Up</button>
                          <p>Have account ? <button onClick={() => document.getElementById("my_modal_3").showModal()} className='text-[#1974d2] cursor-pointer'>Login</button><Login></Login></p>
                              
                     </div>
                  </div>
               </div>  
            </div>
      </>
  )
}

export default SignUp