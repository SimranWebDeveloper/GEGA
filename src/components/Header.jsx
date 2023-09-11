import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";
 import { CiLight } from "react-icons/ci";
import { GlobalContext } from '../context/GlobalContext';
const Header = () => {
  // dark-light mode
  const{ mode,toggleMode}=useContext(GlobalContext)
  
  


  return (
    // Header section
  <header className={` relative py-12   dark:text-gega-grey text-black dark:bg-black bg-gega-grey ${mode && 'dark' } `}   >
    {/* Dark-light mode */}
    <button className='absolute top-3 right-3 text-3xl' onClick={toggleMode} >
      {mode? <MdOutlineDarkMode/> : <CiLight/>} 
      
    </button>
    {/* Header container */}
    <div className="container flex items-center justify-between space-x-8 lg:space-x-16 ">
      {/* Logo */}
      <NavLink className='pl-4 md:pl-0  text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey ' to='/'>GEGA</NavLink>

    {/* Mobile Menu */}
    <div className='block md:hidden pr-4'>
      <button><GiHamburgerMenu className='text-2xl'/></button>
    </div>

      {/* Navigation */}
      <nav className='hidden md:flex justify-between flex-1 py-12'>
        {/* Menu */}
        <ul className='flex justify-between items-center lg:text-lg  space-x-4 lg:space-x-8'>
          <li> <NavLink to={'/'} className={' hover:text-gega-melon transition duration-500'}>movie</NavLink></li>
          <li> <NavLink to={'/'} className={' hover:text-gega-melon transition duration-500'}>celebrities</NavLink></li>
          <li> <NavLink to={'/'} className={' hover:text-gega-melon transition duration-500'}>blog</NavLink></li>
          <li> <NavLink to={'/'} className={' hover:text-gega-melon transition duration-500'}>news</NavLink></li>
          <li> <NavLink to={'/'} className={' hover:text-gega-melon transition duration-500'}>about</NavLink></li>
        </ul>
        {/* Login Area */}
        <div className='flex justify-between items-center space-x-4 lg:space-x-8 '>
          {/* Search Area */}
          
            <form >
              <div className='group border-r px-4 py-1 mx-4'>
                <input type="text" className='bg-transparent opacity-0 group-hover:opacity-100 transition duration-500 border-b border-gega-red focus:outline-none w-24 lg:w-44'/>
                <button className='-ml-4 group-hover:ml-0 transition duration-500'><AiOutlineSearch className='group-hover:text-gega-red transition duration-500 text-lg'/></button>  
            </div>
          </form>
          {/* Sign Area */}
          <div className='flex justify-center items-center space-x-4 lg:space-x-8 lg:text-lg'>
            <NavLink to={'/'} className={'hover:text-gega-red transition duration-500'}>Login</NavLink>
            <NavLink to={'/'} className={'bg-gega-red px-3 py-1 hover:bg-rose-600  transition duration-500  uppercase whitespace-nowrap'}>Sign Up</NavLink>
          </div>

        </div>
      </nav>

      
    </div>
  </header>
  )
}

export default Header