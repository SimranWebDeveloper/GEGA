import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'


const Footer = () => {
          // dark-light mode
          const{ mode,toggleMode}=useContext(GlobalContext)
  return (
    <div className={`footer-section  dark:text-gega-grey text-black dark:bg-black bg-gega-grey ${mode && 'dark' }`}>
      {/* Footer container */}
      <div className='container  '>
        <div className='flex flex-col md:flex-row pb-8 px-10 lg:pl-0'>
          {/* left */}
          <div className='order-last md:order-none  basis-1/3 mb-2'>
          <NavLink className='   text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey ' to='/'>GEGA</NavLink>
            <p className='text-sm mt-2 tracking-wider'>2023 Simran Abbasov No &copy; COPYRIGHT</p>
          </div>
          {/* middle */}
          <div className='basis-1/3 mb-2'>
            <h3 className='text-3xl text-gega-red mb-2'>link</h3>
            <div className='grid grid-cols-5 gap-2'>
       
                <NavLink className='col-span-2 hover:text-gega-melon duration-300'> movie </NavLink>
                <NavLink className='col-span-2 hover:text-gega-melon duration-300'>celebrates </NavLink>
                <NavLink className='col-span-2 hover:text-gega-melon duration-300'> blog </NavLink>
                <NavLink className='col-span-2 hover:text-gega-melon duration-300'>news </NavLink>
                <NavLink className='col-span-2 hover:text-gega-melon duration-300'>about</NavLink>
        
            </div>
            <div>
            </div>
          </div>
          {/* right */}
          <div className='basis-1/3 mb-2'>
            <h3 className='text-4xl text-gega-red mb-2'>FOLLOW US</h3>
            <form className='flex   '>
              <input type="text" placeholder='type your email' className='bg-transparent uppercase border  placeholder:text-xs outline-none sim'/>
              <input type="submit" value='subscribe'  className='bg-gega-red text-gega-white uppercase border border-gega-red px-2 py-1'/>
            </form>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer