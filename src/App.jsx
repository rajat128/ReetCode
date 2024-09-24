import { useState } from 'react'
import Editor from './components/Editor'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Allquestions from './components/Allquestions';
import Doubts from './components/Doubts';
import EachQue from './components/EachQue';
function App() {


  return (
    <>
      <div>
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Allquestions/>}></Route>
        <Route path='/code' element={<Editor/>}></Route>
        <Route path='/q/:id' element={<EachQue/>}></Route>
        <Route path='/doubts' element={<Doubts/>}></Route>
      
    </Routes>
    </BrowserRouter>
      </div>
    </>
  )
}

export default App
