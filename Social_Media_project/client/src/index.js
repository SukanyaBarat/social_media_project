import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DarkModeContextProvider} from "./context/darkModeContext";
import {AuthContextProvider} from "./context/authContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DarkModeContextProvider>
    <AuthContextProvider>
    <App/>
   </AuthContextProvider>
    </DarkModeContextProvider> 
  </React.StrictMode>
);


reportWebVitals();
