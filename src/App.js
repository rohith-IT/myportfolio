import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/global/navbar'
import Footer from './Components/global/footer'

export default function App() {
  return (
    <div>
      
      <Navbar/>
      <Home/>
      <Footer/>
    
    </div>
  )
}
