import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 text-[#64748b] text-base">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">
          About <span className="text-[#1974d2]">E</span> <span className="text-[#0e39a9]">Learn</span>
        </h2>
        <p className="text-gray-700 text-lg text-center mb-4">
          Welcome to <span className="text-[#1974d2] font-semibold">E</span> <span className="text-[#0e39a9]">Learn</span> – your one stop platform for mastering IT and technology skills.  
          Whether you are a beginner or an experienced professional, we offer high-quality free and paid courses tailored to boost your knowledge and career.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>📚 **Expert-Led Courses** – Learn from industry professionals.</li>
          <li>🎓 **Free & Paid Courses** – Choose what fits your learning needs.</li>
          <li>🚀 **Hands-On Learning** – Gain real-world experience with projects.</li>
          <li>💡 **Flexible Learning** – Learn at your own pace, anytime, anywhere.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Our Mission</h3>
        <p className="text-gray-700">
          Our mission is to make quality IT and tech education **accessible, affordable, and career-driven**.  
          We aim to bridge the gap between theoretical knowledge and practical skills.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Join Us Today!</h3>
        <p className="text-gray-700">
          Start your journey towards excellence in technology.  
          Explore our courses and **unlock new opportunities!**
        </p>

        <div className="flex justify-center mt-6">
          <Link to="/">
                <button className="w-full bg-[#1974d2] text-white py-2 px-[70px] rounded-lg hover:bg-[#0e39a9] transition">
                    Home     
                </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
