import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Dark from "./components/Dark";
import white from "./components/White";

import slide2 from "./slide2"
import slide3 from "./slide3"

const rootElement =  document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="home" element={<App />} Route/>
      <Route path="Dark Chocolate " element={<slide2 />} Route/>
      <Route path="White Chocolate " element={<slide3 />} Route/>
    </Routes>
  </BrowserRouter>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();