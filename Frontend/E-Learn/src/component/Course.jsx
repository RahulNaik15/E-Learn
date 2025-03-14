import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import axios from "axios"

const Course = () => {

    const [course, setCourse] = useState([])
    
    useEffect(() => {
        const getCourse = async () => {
            try {
                const res = await axios.get("http://localhost:4001/course")
                console.log(res.data)
                setCourse(res.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        getCourse();
    },[])
  return (
      <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
              <div className='mt-28 flex flex-col items-center text-center'>
                  <h1 className='text-2xl font-bold md:text-4xl'>Explore new and trending <span className='text-[#1974d2]'>online courses</span></h1>
                  <p className='mt-6 max-w-5xl mx-auto text-[#64748b] font-semibold'>Discover top-rated courses across various fields and enhance your knowledge with expert-led training. Start learning today and gain hands-on experience with real-world projects, interactive quizzes, and industry-recognized certifications. Whether you're a beginner or an experienced professional, there's something for everyone!</p>
                  <Link to="/"><button className='bg-[#1974d2] text-white px-4 py-2 rounded-md hover:bg-[#0e39a9] duration-300 mt-6 font-semibold'>Back</button></Link>
              </div>
              <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {course.map((item) => (
                      <div key={item.id} className="w-full flex justify-center">
                          <Cards item={item}></Cards>
                      </div>
                     
                  ))}
              </div>
      </div>
      </>
  )
}

export default Course