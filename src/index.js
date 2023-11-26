// import React from 'react';
// import { BrowserRouter } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <BrowserRouter >
//     <App />
//     </BrowserRouter>,
//     document.getElementById("root")
// );

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginApp from './Login/LoginApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <BrowserRouter >
     <LoginApp/>
    </BrowserRouter>,
    document.getElementById("root")
);