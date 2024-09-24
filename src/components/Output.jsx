import { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "../Api";
import { javascript } from "@codemirror/lang-javascript";
import { repositionTooltips } from "@uiw/react-codemirror";
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const extensions = [javascript({ jsx: true })];
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    console.log(sourceCode);
    
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      let response= await executeCode(language, sourceCode);
    //   response=response.json();
      console.log(response);
      
      setOutput(response.run.output.split("\n"));
      response.run.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%" >
      <Text mb={2} fontSize="lg">
        Output
      </Text>
     
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
          bg="#22c55e"
          
      >
        Run Code 
      </Button>
      
      {output?
      <div className="max-sm:w-[100vw] "><CodeMirror
                //  width="50%" 
    height="calc(75vh)"
                  value={JSON.stringify(output)}
                  extensions={extensions}
                  theme={okaidia}
                  readOnly={true}
                  className="text-white"
                /></div>:null
                }
    </Box>
  );
};
export default Output;