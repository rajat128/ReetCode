import React, { useEffect, useState } from 'react'
import { questions } from './data'
import { useParams } from 'react-router-dom'
import Editor from './Editor';
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
function EachQue({}) {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate=useNavigate()
    let { id } = useParams();
    let t=id.replace(/-/g, ' ');
    t=t.toUpperCase()
    const [details, setDetails] = useState({
        question: "",
        example: {
          input: "",
          output: "",
          explain: ""
        }
      });
    useEffect(()=>{
        const foundQuestion = questions.find((item) => item.title.toUpperCase() === t);
        if (foundQuestion) {
          setDetails({
            question: String(foundQuestion.question),
            diff:foundQuestion.diff,
            accept:foundQuestion.accept,
            company:foundQuestion.company,
            example: {
              input: String(foundQuestion.example.input),
              output: foundQuestion.example.output,
              explain: foundQuestion.example.explanation
            }
          });
        }
        
    },[id])
  return (
   <>
   <div className='flex justify-center items-center'>
   <nav className="flex justify-between max-sm:px-2 px-10 w-full text-black ">
        <img src='https://img.atcoder.jp/assets/atcoder.png' className='rounded-full h-16' onClick={()=>navigate("/")}></img>
        <div className='flex justify-center items-center hover:font-semibold hover:cursor-pointer' onClick={()=>navigate("/home")}>Problems</div>
        <div className='flex justify-center items-center hover:font-semibold hover:cursor-pointer' onClick={() => navigate("/doubts")}>Doubts</div>
        <div className='flex justify-center items-center hover:font-semibold hover:cursor-pointer text-white'>
       <Menu isLazy>
          <MenuButton as={Button}  >{<img src="src\components\Profile.jpg" className='h-14 w-14 rounded-full'></img>}</MenuButton>
          <MenuList className="">
          
              <MenuItem
               
                bg={ "gray.800" }
                _hover={{
               
                  bg: "gray.700",
                }}
               onClick={logout}
                className="text-white"
              >
                {"Logout"}
                &nbsp;
                <Text as="span" color="gray.600" fontSize="sm" className="text-white">
                  
                </Text>
              </MenuItem>
            
          </MenuList>
        </Menu>
         
        </div>
      </nav>
      </div>
   <div className=' text-black w-[100vw] overflow-x-hidden '>
    <div className='px-10 py-5'>
    <h1 className=' text-xl font-semibold ml-5 mb-2'>{t}</h1>
    <div className='flex '>
            <div className={` ${details.diff=="Easy"?" text-green-500 ":details.diff=="Medium"?" text-yellow-500 ":" text-red-500 "} px-5 py-2 rounded-3xl bg-slate-50 font-bold cursor-pointer`}>{details.diff}</div>  
            <div className='px-5 py-2 rounded-3xl bg-slate-50 ml-2 font-semibold text-gray-600 cursor-pointer' >{details.accept}</div>  
            <div className='px-5 py-2 rounded-3xl bg-slate-50 ml-2 font-semibold text-gray-500 cursor-pointer'>{details.company}</div>  
    </div>
    <h1 className=' mt-2 text-lg '>
        {details.question}
    </h1>
    <h1 className='mt-2'>Example:</h1>
    <div>
        <h1>Input: {details.example.input}</h1>
        <h1> Output: {details.example.output}</h1>
        <h1>Explanation: {details.example.explain}</h1>
    </div>
    </div>
    <Editor name={t}/>
   </div>
   </>
  )
}

export default EachQue
