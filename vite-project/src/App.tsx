import { useState } from 'react'
import Home from './Pages/Home'
import Album from './Pages/Album'
import NotFound from './Pages/NotFound'
import Checkout from './Pages/Checkout'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Routes> 
         <Route path="/" element = {<Album/>}/> 
         <Route path="*" element = {<NotFound/>}/>
         <Route path="Home" element = {<Album/>}/>
         <Route path="/Album" element = {<Home/>}/>
         <Route path="/Checkout" element = {<Checkout/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
