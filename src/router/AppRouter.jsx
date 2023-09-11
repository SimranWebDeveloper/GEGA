import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop'
import Blog from '../pages/Blog'
import Pages from '../pages/Pages'
import Contact from '../pages/Contact'

const AppRouter = () => {
  return (

        <BrowserRouter basename='/SimranWebDeveloper/GEGA'>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/pages' element={<Pages/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>


  )
}

export default AppRouter