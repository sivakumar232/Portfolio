import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Connector from "./components/Connector";
const App = () => {
  return (

    <BrowserRouter>
     <Connector />
    </BrowserRouter>
  );
};

export default App;
