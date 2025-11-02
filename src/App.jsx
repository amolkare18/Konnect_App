import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
 

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  )
}

export default App
