
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import About from './components/About.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className="fixed inset-0 z-[-2] w-full h-full bg-black"></div>

  </React.StrictMode>
);
