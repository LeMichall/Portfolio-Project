import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import About from './components/about/about'  
import Footer from './components/footer/footer'
import Projects from './components/projects/projects'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
