import React from 'react'
import Home from './pages/Home'
import About from './pages/about'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Contact from './pages/contact'
import Pagenotfound from './pages/Pagenotfound'
import Products from './pages/products'


const App = () => {
  return (
    <>
      <Navbar/>
      {/* routing set up for app*/}
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/contact'  element={<Contact/>} />
        <Route path='/products'  element={<Products/>} />
        <Route path='*'  element={<Pagenotfound/>} />



      </Routes>
    </>
  )
}

export default App

