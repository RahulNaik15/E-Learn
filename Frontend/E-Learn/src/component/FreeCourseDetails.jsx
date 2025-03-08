import React from "react";
import { useParams } from "react-router-dom";
import list from "../../public/list.json"; 
import { Link } from "react-router-dom";
import Footer from "./Footer";

const FreeCourseDetails = () => {
  const { id } = useParams();  // Get course ID from URL
  const course = list.find((item) => item.id.toString() === id); // Find course by ID

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
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">{course.title}</p>
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
         <div>
           <ul className="menu w-90 h-80 mt-40 rounded-2xl border border-[#EAECF0] bg-white shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]">
            <li>
                <h2 className="menu-title text-xl text-black">Skills you will gain</h2>
                <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400">
                <li><a>{course.skills[0]}</a></li>
                <li><a>{course.skills[1]}</a></li>
                <li><a>{course.skills[2]}</a></li>
                <li><a>{course.skills[3]}</a></li>
                <li><a>{course.skills[4]}</a></li>
                </ul>
            </li>
          </ul>
         </div>
         <div className="">
           <div className=" w-[23vw] text-center border cursor-pointer bg-[#1974d2] text-white hover:border-[#0e39a9] rounded-lg px-2 py-3 duration-200">
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
