import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';
//import {Button,Spinner}  from 'react-bootstrap/Button';

// or less ideally
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Button,Spinner}  from 'react-bootstrap';

{/* The following line can be included in your src/index.js or App.js file*/}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App />
    {/* <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
    <Button>Submit</Button> */}
{/* material UI */}
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
