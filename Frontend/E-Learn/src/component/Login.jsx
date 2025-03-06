import React from 'react'

const Login = () => {
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box flex flex-col items-center justify-center">
           <form method="dialog">
           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
           </form>
             <h3 className="font-bold text-lg text-center mb-8">Login</h3>
             <div className='flex flex-col gap-8 mb-7 w-sm'>
                 <input className='px-5 py-2 border rounded-lg' type="email" placeholder='Email' required></input>
                 <input className='px-5 py-2 border rounded-lg' type="password" placeholder='Password' required></input>     
             </div>
             <div>
                  <button className='bg-[#1974d2] hover:bg-[#0e39a9] text-white px-5 w-sm py-2 border rounded-lg mb-4 cursor-pointer'>Login</button>
                  <p>Create a new account ? <span className='text-[#1974d2] cursor-pointer'>Sign Up</span></p>
                      
             </div>
          </div>
       </dialog>  
    </div>
  )
}

export default Login