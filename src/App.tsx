import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack';
import TopBar from './components/TopBar/TopBar'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import ErrorPage from "./error-page";
import { Code, Launch, ChatBubbleOutline } from "@mui/icons-material";



function App() {

  return (
    <div className="App">
      
      <TopBar />


      <body className="App-body" >
        <img src={logo} className="App-logo" alt="logo" />
        <br />
<br />
        <Stack spacing={2} direction="row" marginLeft="10px">
      <Button
        variant="contained"
        target="_blank"
        href="https://us-east-2.console.aws.amazon.com/amplify/apps/dydv7y5329qud/overview"
        endIcon={<Launch />}>
        Amplify
      </Button>
      <Button
        variant="contained"
        target="_blank"
        href="https://github.com/ehmkeoct/fxweb"
        endIcon={<Code />}>
        Project GitHub
      </Button>
      <Button
        variant="contained"
        target="_blank"
        href="https://docs.google.com/document/d/1vz_G-1d9GsbOT2399IGgQ0AQPzIruA4rvICJb8uFDPg/edit?usp=sharing
"
        endIcon={<ChatBubbleOutline />}>
        Document
      </Button>
    </Stack>
      </body>
    </div> );
}
export default App;
