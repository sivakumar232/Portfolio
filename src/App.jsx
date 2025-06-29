import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Connector from "./components/Connector";
import About from './components/About';
import Projects from './components/Projects';
import Contact from "./components/Contact";
const App = () => {
  return (
    <BrowserRouter>
    <Connector/>
    </BrowserRouter>
  );
};

export default App;
