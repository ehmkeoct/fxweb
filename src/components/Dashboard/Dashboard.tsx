import React from 'react';
import Button from "@mui/material/Button"
import TopBar from '../../components/TopBar/TopBar'

export default function Dashboard() {
  return(
    
    <body className="App-body" >
      <TopBar/>
      <Dashboard/>
      <h2>Dashboard</h2>
    <br />
    <Button variant="contained"
      className="App-link"
      href="https://github.com/ehmkeoct/fxweb"
      target="_blank"
      rel="noopener noreferrer"
    >
      Project GitHub
    </Button><br /><br />
    <Button variant="contained"
      className="App-link"
      href="https://us-east-2.console.aws.amazon.com/amplify/apps/dydv7y5329qud/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ampllify
    </Button>
  </body>
  );
}