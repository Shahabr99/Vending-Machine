import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Redbull from './Redbull';
import Jerky from './Jerky';
import Doritos from './Doritos';
import Links from './Links'


function VendingMachine() {


  return (
      <BrowserRouter>
        <Links />
        <Routes >
          <Route path="/redbull" element={<Redbull />}/>
          <Route path="/doritos" element={<Doritos />}/>
          <Route path="/jerky" element={<Jerky />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default VendingMachine;
