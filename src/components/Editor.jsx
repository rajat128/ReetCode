import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Codeeditor from "./Codeeditor";
import { executeCode } from "../Api";
import { language } from "./data";
import { answers } from "./data";
import Output from "./Output";

const extensions = [javascript({ jsx: true })];

const Editor = ({ name }) => {
  const { id } = useParams();
  const [language, setLanguage] = useState("javascript");
  const [codeDetails, setCodeDetails] = useState({});
  const [show, setShow] = useState(false);

  const [code, setCode] = useState("");
  const [sol, setSol] = useState("");
  const [solshow, setSolshow] = useState(false);
  const [testCases, setTestCases] = useState([]);
  const [loadingAI, setLoadingAI] = useState(false);
  const [aiResponse, setAIResponse] = useState(null);
  const [output, setOutput] = useState("");
  const [outputshow, setoutputshow] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(code);

    setCode(e);
  };
  const evaluate=()=>{
    let res=getOutput()
    // res=String(res)
    console.log(res);
    
    setOutput(res)
    setoutputshow(true)

  }
  const getOutput = async () => {
    if (!code) {
      return;
    }
    try {
      console.log(code);

      const response = await executeCode(language, code);
      console.log(response.run.output);
      return response.run.output
      
    } catch (error) {}
  };

  const getSolution = () => {
    console.log(answers.length);
    
    answers.map((items) => {
      console.log(items.name.toUpperCase(), name);

      if (items.name.toUpperCase() == name) {
        setSol(items.q);
        setSolshow(true);
        console.log(items.name);
      }
    });
  };

  return (
    <div m={6} className="text-black w-[100vw] ">
      <div>
        {testCases?.map((testCase, i) => (
          <div
            key={i}
            mr={4}
            color={testCase ? "green" : "red"}
            fontWeight="bold"
          >
            {testCase === true ? "✅ Test Case Passed" : "❌ Test Case Failed"}
          </div>
        ))}
      </div>
      <br></br>
      <div className="text-black">
        <div className=" flex justify-center items-center">
          <Box
            minH="100vh"
            minW="50vw"
            bg="#00000"
            color="gray.500"
            // px={6}
            py={8}
            className=""
          >
            <Codeeditor
              code={code}
              setcode={setCode}
              language={language}
              setLanguage={setLanguage}
              outputshow={outputshow} setoutputshow={setoutputshow}
            />
          </Box>
        </div>
        <div className="flex justify-between max-sm:px-0 px-36 pb-5 ">
        <div >
        <div className="">
          {codeDetails ? (
            <div>
              <h3 style={{ fontWeight: "bold" }}> {codeDetails.question} </h3>
              <div>{codeDetails.description}</div>

              <button
                onClick={getSolution}
                className="flex  justify-center border-2 w-36 px-2 py-2 rounded border-green-700 bg-green-700 text-white hover:bg-transparent hover:border-[2x] hover:text-green-600 hover:font-bold"
              >
                Get Solution 👩‍💻
              </button>
             
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      
      <button
        onClick={evaluate}
        className="flex flex-wrap justify-center border-2 w-36 px-2 py-2 rounded border-blue-700 bg-blue-700 hover:border-blue-700 text-white hover:bg-transparent hover:text-blue-600 hover:font-bold"
      >
        Evaluate
      </button>
      </div>
      <div className="">
        <div className="max-sm:w-[100vw]">
      {solshow ? (
        <div className="">
                <CodeMirror
                width="100%"
                
                  value={sol}
                  extensions={extensions}
                  theme={okaidia}
                  readOnly={true}
                  className="text-white"
                />
                </div>
              ) : null}
              </div>
             
              </div>
      </div>
    </div>
  );
};

export default Editor;
