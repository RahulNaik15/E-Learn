import React, { useState } from 'react';
import close from "../assets/cross.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ setShowLogin }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [currState, setCurrState] = useState("Login");
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,     
        }

        try {
            if (currState === "Sign Up") {
                const res = await axios.post("http://localhost:4001/user/signup", userInfo)
                console.log(res.data);
                toast.success("Signup Successfully", {
                    position: "top-center",
                });
            }
            else {
                const res = await axios.post("http://localhost:4001/user/login", {
                    email: data.email,
                    password:data.password,
                }) 
                console.log(res.data);
                toast.success("Login Successful!", {
                    position: "top-center",
                });
                login(res.data.user); // Store user in context
                navigate("/course"); // Navigate to the course page
            }
            localStorage.setItem("Users", JSON.stringify(userInfo));
            setShowLogin(false);
        }
        catch (err) {
           if (err.response) {
            console.error(err);
               toast.error(err.response.data.message, {
               position: "top-center",
            }); 
        }
    }   
  }

    

    return (
        <>  
        <div className="fixed inset-0 z-10 bg-[#00000090] bg-opacity-20 backdrop-blur-md flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[min(23vw,330px)] bg-white flex flex-col gap-6 p-6 rounded-md text-gray-500 text-sm animate-fadeIn">
                <div className="flex justify-between items-center text-black">
                    <h2 className='font-bold text-xl'>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={close}
                        alt="Close"
                        className="w-5 cursor-pointer"
                    />
                </div>

                <div className="flex flex-col gap-5">
                    {currState === "Login" ? null : (
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="outline-none border border-gray-300 p-2 rounded"
                            {...register("fullname", { required: true })}
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="outline-none border border-gray-300 p-2 rounded"
                        {...register("email", { required: true })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="outline-none border border-gray-300 p-2 rounded"
                        {...register("password", { required: true })}
                    />
                </div>

                <button className="border-none py-2 rounded bg-[#1974d2] hover:bg-[#0e39a9] text-white text-base cursor-pointer ">
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>

              
                <div className="flex items-start gap-2 -mt-3">
                    <input type="checkbox" required className="mt-1" />
                    <p>By continuing, I agree to the terms of use and privacy policy</p>
                </div>

                {/* Switch between Login & Sign Up */}
                <p>
                    {currState === "Login" ? (
                        <>
                            Create a new account?{" "}
                            <span
                                onClick={() => setCurrState("Sign Up")}
                                className="text-[#1974d2] font-medium cursor-pointer"
                            >
                                Click Here
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <span
                                onClick={() => setCurrState("Login")}
                                className="text-[#1974d2] font-medium cursor-pointer"
                            >
                                Login Here
                            </span>
                        </>
                    )}
                </p>
            </form>
        </div>
    </>
    );
};

export default Login;
