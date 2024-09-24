import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { configDotenv } from 'dotenv';
import theme from './components/theme.js';
let domain = `${import.meta.env.REACT_APP_AUTH_DOMAIN}`;
let clientId = `${import.meta.env.REACT_APP_CLIENTID}`;
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Auth0Provider
    domain="dev-3v338n0cbkpdb41k.us.auth0.com"
    clientId="4OMJ9pLy3BMAzFmTFm2J4N7yQUZWilLR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    audience="https://dev-3v338n0cbkpdb41k.us.auth0.com/api/v2/"
  >
    <ChakraProvider theme={theme} >
      <App />
      </ChakraProvider>
    </Auth0Provider>

)
