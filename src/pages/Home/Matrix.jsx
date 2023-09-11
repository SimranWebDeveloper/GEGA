import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'


const Matrix = () => {
        // dark-light mode
        const{ mode,toggleMode}=useContext(GlobalContext)
  return (
    <div className={`matrix-section  text-gega-grey dark:text-black bg-black dark:bg-gega-grey ${mode && 'dark' }`} >
        {/* matrix  section container */}
        <div className=' container flex justify-between items-center relative  '>
            {/* Left content */}
            <div className='hidden md:block  md:basis-1/3 lg:basis-1/2'>
                <img src='../../../src/images/matrix.png' alt=""  className='lg:absolute lg:bottom-0'/>
            </div>
            {/* Right content */}
            <div className='pl-10 lg:pl-0 md:basis-2/3 lg:basis-1/2 '>
                {/* Right comtent text */}
                <div className='py-10 w-3/4'>
                    <p className='text-gega-melon tracking-wider'>ACTION, DRAMA, THRILLER</p>
                    <p className='text-3xl font-bold'>MATRIX RELOADED</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus unde repellat impedit consequatur soluta obcaecati totam animi excepturi est vero?</p>
                    <p className='text-gega-red'>8 WINS 34 NOMINATIONS</p>

                </div>
            </div>
            {/* Oldie */}
            <div className='left-10 absolute -top-12 lg:left-0 w-24 h-24 rounded-full  bg-gega-melon text-center flex items-center '>
                <p className='font-gemunu text-xl text-gega-red -rotate-45 font-bold'>OLDIE & GOLDIE</p>
            </div>

        </div>
    </div>
  )
}

export default Matrix