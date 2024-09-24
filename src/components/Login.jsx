import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
function Login() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleAuth = async () => {
      await loginWithRedirect();
    };
  
    React.useEffect(() => {
      if (isAuthenticated) {
        navigate("/home");
      }
    }, [isAuthenticated, navigate]);
  return (
    <>
    <div className='h-screen'>
    <nav className="flex justify-between max-sm:px-0 px-10 w-full text-black">
        <img src='https://img.atcoder.jp/assets/atcoder.png' className='rounded-full h-16' onClick={()=>navigate("/")}></img>
        <div className='flex justify-center items-center hover:font-semibold cursor-not-allowed'>Problems</div>
        <div className='flex justify-center items-center hover:font-semibold cursor-not-allowed' >Doubts</div>
        <div className='flex justify-center items-center hover:font-semibold hover:cursor-pointer font-semibold text-lg' onClick={handleAuth}>LogIn</div>
        </nav>
        <div class=" h-screen relative flex flex-col px-4 pt-24 pb-12 font-sans text-gray-700 bg-slate-200 sm:px-6 lg:px-8">
  <div class="flex-1 space-y-8">
    <div class="sticky w-full max-w-xl px-8 py-12 mx-auto space-y-4 bg-white border rounded-2xl shadow-2xl">
      <h2 class="space-y-1 text-2xl font-bold leading-none text-gray-900 flex justify-center">
        
        Login To Access The Questions
      </h2>
     

    </div>
   
    
  </div>
  
</div>
    </div>
    </>
  )
}

export default Login