import { useEffect, useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import Languageselect from "./Languageselect";
import { CODE_SNIPPETS } from "./data";
import Output from "./Output";
// import Output from "./Output";

const Codeeditor = ({code ,setcode,language, setLanguage,outputshow, setoutputshow}) => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS[language]);
 
  useEffect(() => {
    setcode(CODE_SNIPPETS[language])
    setValue(CODE_SNIPPETS[language]);
  }, [language]);
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

console.log(language);

  return (
    <Box>
      <HStack spacing={4}>
        <div className="max-sm:flex max-sm:flex-col  flex">
        <Box className=" max-sm:w-[100vw] max-xl:w-[75vw]  w-[91vw]"  >
  <Languageselect language={language} onSelect={onSelect} />
  <Editor
    height="75vh"
    width="100%"
    theme="vs-dark"
    language={language}
    defaultValue={value}
    onMount={onMount}
    value={code}
    onChange={(value) => setcode(value)}
  />
</Box>
       {outputshow?<Output editorRef={editorRef} language={language}/>:null}
       </div>
      </HStack>
    </Box>
  );
};
export default Codeeditor;