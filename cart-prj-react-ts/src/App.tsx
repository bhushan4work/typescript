import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import "/src/index.css"
 
export default function App() {

  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </>
  )
}
