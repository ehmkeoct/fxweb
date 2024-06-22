import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack';
import TopBar from './components/TopBar/TopBar'
import Login from './components/Login/Login'
import ErrorPage from "./error-page";
import ResponsiveAppBar from './components/Header/Header'
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Dashboard/>
    </div>
    );
}
export default App;
