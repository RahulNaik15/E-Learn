import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const FreeCourseDetails = () => {
  const { id } = useParams();  // Get course ID from URL
  const [course, setCourse] = useState(null);
  
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get("http://localhost:4001/course");
        const foundCourse = res.data.find((item) => item.id === Number(id));
        setCourse(foundCourse);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourse();
  }, [id]);


  if (!course) {
    return <h2 className="text-center text-red-500 text-2xl">Course Not Found</h2>;
  }

    return (
      
    <>
        <div className="flex justify-between px-20 mt-3 bg-base-200 pt-3 pb-3">
            <a href='/' className="text-3xl font-bold cursor-pointer"><span className='text-[#1974d2] font-bold'>E</span> <span className='text-[#0e39a9] font-bold'>Learn</span></a>
            <Link to='/'><button className=" border cursor-pointer bg-[#1974d2] text-white hover:border-[#0e39a9] rounded-lg px-3 py-2 duration-200 ">Home</button></Link>  
        </div>  
            
    <div className="flex justify-between  px-20 mt-10 mb-[70px]">
          <div className="flex flex-col gap-7">
            <h1 className="w-25 px-4 py-1 text-center font-medium text-[#196AE5] bg-[#E8F0FC] rounded-4xl border-2 border-[#196AE5]">{course.category}</h1>
            <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium w-[70%]">{course.title}</p>
            <img className="w-[30vw] h-[35vh] rounded" src={course.image} alt={course.name} />

         <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Course Video</h2>
                <iframe className="w-[30vw] h-[38vh] rounded"
                src={course.videoUrl} 
                title={course.name}
                allowFullScreen
                ></iframe>
         </div>
       </div>


        <div className="flex flex-col gap-10 items-center justify-start pr-[10vw]">
         <div className="w-100 h-90 mt-40 border-1 border-gray-300 shadow-lg rounded-2xl  bg-white p-6 ">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Skills you will gain</h1>           
            <ul className="space-y-6 text-gray-600 text-lg">
                {course.skills?.map((item,index)=>(
                    <li key={index} className="flex items-center space-x-2">
                    <span className="text-[#1974d2]">✔</span>
                    <span className="text-[#196AE5] bg-[#E8F0FC] rounded-4xl border-2 border-[#196AE5] px-2  ">{item}</span>
                    </li>
                ))}          
            </ul>
          </div>
         <div className="">
           <div className=" w-[26vw] text-center border cursor-pointer bg-[#1974d2] text-white hover:border-[#0e39a9] rounded-lg px-2 py-3 duration-200">
           {course.price > 0 ? `Price: ₹${course.price}` : "₹ 0"}
           </div>
         </div>   
       </div>     
    </div>
    <Footer></Footer>      
    </>        
  );
};

export default FreeCourseDetails;
