import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import { language } from "./data";
  
  const languages = Object.entries(language);
  const ACTIVE_COLOR = "black";
  
  const Languageselect = ({ language, onSelect }) => {
    console.log(languages);
    
    return (
      <Box ml={2} mb={4} className="text-black">
        <Text mb={2} fontSize="lg" className=" text-opacity-75 ">
          Language:
        </Text>
        <Menu isLazy>
          <MenuButton as={Button} className="" color={"black"}>{language}</MenuButton>
          <MenuList className="">
            {languages.map(([lang, version]) => (
              <MenuItem
                key={lang}
                color={lang === language ? ACTIVE_COLOR : "white"}
                bg={lang === language ? "gray.100" : "transparent"}
                _hover={{
                  color: ACTIVE_COLOR,
                  bg: "gray.300",
                }}
                onClick={() => onSelect(lang)}
                className=""
              >
                {lang}
                &nbsp;
                <Text as="span" color="gray.400" fontSize="sm" className="">
                  ({version})
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    );
  };
  export default Languageselect;