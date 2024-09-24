import React from 'react'
import { useNavigate } from "react-router-dom";
import { questions } from './data';
import { Leetcode } from '@codingsnack/leetcode-api';
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
import Login from './Login';
function SubPart({ title, accept, diff, company }) {
    const navigate = useNavigate();
    let t=title.replace(/\s/g,'-')
    t=t.toLowerCase()
 
    
    
  return (
 
    <div className="table-row border-2 hover:bg-slate-200 hover:rounded">
      <div className="table-cell py-2 max-sm:pl-0 pl-5 hover:cursor-pointer " onClick={()=>navigate(`/q/${t}`)}>{ title}</div>
      <div className="table-cell py-2">{accept}</div>
      <div className={`${diff=="Easy"?"text-green-500":diff=="Medium"?"text-yellow-500":"text-red-500"} table-cell py-2 font-semibold `}>{diff}</div>
      <div className="table-cell py-2">{company}</div>
    </div>
   
  )
}

function Allquestions() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate = useNavigate();
  return (

    <>
    {isAuthenticated?<div className="py-2 max-sm:px-2  border-black">
      <nav className="flex justify-between max-sm:px-0 px-10 w-full text-black ">
        <img src='https://img.atcoder.jp/assets/atcoder.png' className='rounded-full h-16 bg-white' onClick={()=>navigate("/")}></img>
        <div className='flex justify-center items-center hover:font-semibold hover:cursor-pointer' onClick={()=>navigate("/home")}>Problems</div>
        <div className='flex justify-center items-center hover:font-semibold hover:cursor-pointer' onClick={() => navigate("/doubts")}>Doubts</div>
        <div className='flex justify-center items-center hover:font-semibold hover:cursor-pointer text-white'>
        <Menu isLazy>
          <MenuButton as={Button} bg="white">{<img src='https://sc0.blr1.digitaloceanspaces.com/large/860264-75615-gwqpgntllz-1512392229.jpg' className='hover:cursor-pointer h-14 w-14 rounded-full'></img>}</MenuButton>
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
      <div className='max-sm:px-0 px-24 max-sm:text-xs text-black'>
        <h1 className='flex justify-center mb-5 font-semibold text-2xl'>Questions</h1>
        <div className="table w-full border-2 border-gray-200 p-5 rounded">
            
          <div className="table-header-group max-sm:text-xs">
            <div className="table-row">
              <div className="table-cell py-2 max-sm:px-0 pl-5 font-semibold max-sm:mr-1 ">Title</div>
              <div className="table-cell py-2 font-semibold max-sm:mr-1">Acceptance</div>
              <div className="table-cell py-2 font-semibold max-sm:mr-1">Difficulty</div>
              <div className="table-cell py-2 font-semibold max-sm:mr-1">Company</div>
            </div>
          </div>
          <div className="table-row-group border-2 ">
            {questions.map(item => {
              return (
                <SubPart title={item.title} accept={item.accept} diff={item.diff} company={item.company}  />
              )
            })}
          </div>
        </div>
      </div>
    </div>:<Login/>}
    </>
  )
}

export default Allquestions
