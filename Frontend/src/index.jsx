// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { AuthContextProvider } from "./context/authContext";
// import { DarkModeContextProvider } from "./context/darkModeContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <DarkModeContextProvider>
//       <AuthContextProvider>
//         <App />
//       </AuthContextProvider>
//     </DarkModeContextProvider>
//   </React.StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { DarkModeContextProvider } from './context/darkModeContext';
import './style.scss'; // Ensure your main styles are imported

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);