import React from 'react'
import { Link } from 'react-router-dom'

function Cards({item}) {
  return (
<>
        <div className='mt-4 my-3 p-3'>
            <div className="card w-92 bg-base-100 shadow-lg hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
            <figure>
                    <img className='h-40 w-full'
                    src={item.image}
                    alt="courses" />
            </figure>
        <div className="card-body gap-5">
            <h2 className="card-title">
            {item.name}
        <div className="badge bg-[#1974d2] text-white">{item.category}</div>
            </h2>
            <p className='text-base font-medium text-[#64748b]'>{item.title}</p>
       <div className="card-actions flex justify-between">
       <div className="badge badge-outline border cursor-pointer hover:bg-[#1974d2] hover:text-white hover:border-[#0e39a9] rounded-lg px-2 py-4 duration-200">₹ {item.price}</div>
       <Link to={`/course/${item.id}`} className="badge badge-outline border cursor-pointer hover:bg-[#1974d2] hover:text-white hover:border-[#0e39a9] rounded-lg px-2 py-4 duration-200">View Course</Link>
       </div>
       </div>
       </div>  
    </div>
</>
  )
}

export default Cards