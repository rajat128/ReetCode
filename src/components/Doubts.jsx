import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Doubts() {
    const navigate = useNavigate();
    const[isFemale,setFemale]=useState(false);
    const[isMale,setMale]=useState(false);
    const[isClicked,setClicked]=useState(false);
    function click(text){
        setClicked(true)
        navigator.clipboard.writeText(text)
    }
  return (
   
    <>


{isFemale && !isMale?
     <div class=" h-screen relative flex flex-col px-4 pt-24 pb-12 font-sans text-gray-700 bg-slate-200 sm:px-6 lg:px-8">
  <div class="flex-1 space-y-8">
    <div class="sticky w-full max-w-xl px-8 py-12 mx-auto space-y-4 bg-white border rounded-2xl shadow-2xl">
      <h2 class="space-y-1 text-2xl font-bold leading-none text-gray-900">
        <span class="block text-sm text-blue-700">Contact Me </span>
        <span class="block px-5">Hiiii</span>
      </h2>
      <p className='px-10 flex flex-col text-green-600 font-semibold'>
      <span className='flex '>
      <h1>Instagram: rajat_parihar_26</h1> <button className='ml-3 cursor-pointer' onClick={()=>click("rajat_parihar_26")}><svg class="h-5 w-5 text-green-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg></button></span>
      <span className='flex '>
      <h1>Phone Number: 8669608115</h1> <button className='ml-3 cursor-pointer'  nClick={()=>click("8669608115")}><svg class="h-5 w-5 text-green-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg></button></span>
      </p>
      <button  className={`${isClicked?"": "pointer-events-none bg-slate-100 text-gray-950 font-semibold"} flex justify-center border-2 px-5 py-1 rounded bg-red-500 text-white hover:bg-transparent hover:text-red-500 hover:font-semibold`} onClick={()=>navigate("/home")}>Go Back</button>
    </div>
   
    
  </div>
  
</div>:isMale? <>
<div class=" h-screen relative flex flex-col px-4 pt-24 pb-12 font-sans text-gray-700 bg-slate-200 sm:px-6 lg:px-8">
  <div class="flex-1 space-y-8">
    <div class="sticky w-full max-w-xl px-8 py-12 mx-auto space-y-4 bg-white border rounded-2xl shadow-2xl">
      <h2 class="space-y-1 text-2xl font-bold leading-none text-gray-900">
        <span class="block text-sm text-blue-700">Male </span>
        <span class="block">If Male</span>
      </h2>
      <p className='px-16 text-red-600 font-bold'>
     Doubts==NULL
      </p>
      
    </div>
   
    
  </div>
  
</div>
</>:<>

   <div className='flex justify-center items-center h-screen'>
    <div>
    <div className='flex justify-center font-semibold text-xl font-sans mb-20 '>
      Tell Your Gender
    </div>
   <div class="flex mt-5">
          <div class="m-3">
            <button
              class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              onClick={()=>setMale(true)}
              >
              <span class="mx-auto">Male</span>
            </button>
          </div>
          <div class="m-3">
            <button
              class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              onClick={()=>setFemale(true)}
              >
              <span class="mx-auto">Female</span>

            </button>
          </div>
        </div>

        </div>
   </div>
</>}
    </>    
  )
}

export default Doubts