import axios from "axios";
import { language as Languages } from "./components/data";
const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
  });
  
  export const executeCode = async (language, sourceCode) => {
    const response = await API.post("/execute", {
      language: language,
      version:Languages[language],
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    console.log(response.data);
    
    return response.data;
  };