import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const PaidCourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    const fetchPaidCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/api/paidcourses/${id}`);
        setCourse(response.data);

        const paidCourses = JSON.parse(localStorage.getItem("paidCourses")) || [];
        if (paidCourses.includes(id)) {
        setIsPaid(true);
      }
      } catch (error) {
        console.error("Error fetching course details:", error);
      } 
    };

    fetchPaidCourse();
  }, [id]);

  const handlePaymentSuccess = () => {
    if (!name || !cardNumber || !expiryDate || !cvv) {
      toast.error("Invalid Data", {
      });
      return;
    }

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      toast.error("Invalid Data", {
      });
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      toast.error("Invalid Data", {
      });
      return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
      toast.error("Invalid Data", {
      });
      return;
    }

    setTimeout(() => {
      toast.success("Payment Successful!", {
      });
      setIsPaid(true);
      setShowPayment(false);

      const paidCourses = JSON.parse(localStorage.getItem("paidCourses")) || [];
        if (!paidCourses.includes(id)) {
           paidCourses.push(id);
           localStorage.setItem("paidCourses", JSON.stringify(paidCourses));
        }
    }, 2000);
  };

  if (!course) {
    return <h2 className="text-center text-red-500 text-2xl">Course Not Found</h2>;
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-between px-20 mt-3 bg-base-200 pt-3 pb-3">
        <a href='/' className="text-3xl font-bold cursor-pointer"><span className='text-[#1974d2] font-bold'>E</span> <span className='text-[#0e39a9] font-bold'>Learn</span></a>
        <Link to='/'><button className=" border cursor-pointer bg-[#1974d2] text-white hover:border-[#0e39a9] rounded-lg px-3 py-2 duration-200 ">Home</button></Link>  
       </div>  

      <div className="flex justify-between px-20 mt-10 mb-[70px]">
        <div className="flex flex-col gap-7">
          <h1 className="w-25 px-4 py-1 text-center font-medium text-[#B37000] bg-[#FFF5E5] rounded-4xl border-2 border-[#E69000]">
            {course.category}
          </h1>
          <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium w-[70%]">{course.title}</p>
          <img className="w-[30vw] h-[35vh] rounded" src={course.image} alt={course.name} />

          {isPaid ? (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Course Video</h2>
              <iframe
                className="w-[30vw] h-[38vh] rounded"
                src={course.videoUrl}
                title={course.name}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="mt-6">
              <div role="alert" className="alert alert-error alert-outline w-[30vw]">
                 <span className="font-xl font-medium">Buy the Course to Unlock the Video</span>
               </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-10 items-center justify-start pr-[10vw]">
          <div className="w-100 h-90 mt-40 border-1 border-gray-300 shadow-lg rounded-2xl  bg-white p-6 ">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Skills you will gain</h1>           
            <ul className="space-y-6 text-gray-600 text-lg">
                {course.skills.map((item,index)=>(
                    <li key={index} className="flex items-center space-x-2">
                    <span className="text-[#1974d2]">✔</span>
                    <span className="text-[#196AE5] bg-[#E8F0FC] rounded-4xl border-2 border-[#196AE5] px-2  ">{item}</span>
                    </li>
                ))}          
            </ul>
          </div>

          <div className="">
            {!isPaid ? (
              <button
                className="w-[26vw] text-center border cursor-pointer bg-[#1974d2] text-white hover:border-[#0e39a9] rounded-lg px-2 py-3 duration-200"
                onClick={() => setShowPayment(true)}
              >
                Buy Now - ₹{course.price}
              </button>
            ) : (
              <div className="w-[23vw] text-center border cursor-pointer bg-green-600 text-white rounded-lg px-2 py-3">
                Purchased
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment Popup */}
      {showPayment && (
        <div className="fixed inset-0 bg-[#00000090] bg-opacity-20 backdrop-blur-md flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-center mb-4">Complete Your Payment</h2>

            <label className="block text-sm font-medium mb-1">Cardholder Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="block text-sm font-medium mt-3">Card Number</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="Enter 16-digit card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="16"
              required
            />

            <div className="flex justify-between mt-3">
              <div>
                <label className="block text-sm font-medium">Expiry Date (MM/YY)</label>
                <input
                  type="text"
                  className="p-2 border rounded-md w-24 dark:bg-gray-700 dark:text-white"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  maxLength="5"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">CVV</label>
                <input
                  type="password"
                  className="p-2 border rounded-md w-16 dark:bg-gray-700 dark:text-white"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  maxLength="3"
                  required
                />
              </div>
            </div>

            <button
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={handlePaymentSuccess}
            >
              
              Pay ₹{course.price}
            </button>

            <button
              className="w-full mt-2 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300"
              onClick={() => setShowPayment(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PaidCourseDetails;
