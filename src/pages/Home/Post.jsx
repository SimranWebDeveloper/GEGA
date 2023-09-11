import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import { GlobalContext } from '../../context/GlobalContext'

const Post = () => {
        // dark-light mode
        const{ mode,toggleMode}=useContext(GlobalContext)
  return (
    <div className={`post-section k  font-gemunu py-24 dark:text-gega-grey text-red-600 dark:bg-black bg-gega-grey ${mode && 'dark' }`}>
        {/* Container  */}
        <div className='container px-10 lg:px-0 '>
            {/* Title */}
            <NavLink className='text-gega-red text-2xl'>POPULAR POSTS</NavLink>
            {/* Grid area */}
            <div className='grid  grid-cols-6 gap-6 '>
                {/* item 1 */}
                <div className='border border-gega-red    col-span-6 md:col-span-3 '>
                    <div className='flex justify-between items-center border-b border-gega-red  p-5 '>
                        <p>ACCUSANTIUM DOLOREMQUE LAUDANT...</p>
                        <img src="../../../src/images/userava1.jpg" alt=""  className='rounded-full  '/>
                    </div>
                    {/* item 1 paragraf */}
                    <p className='border-b border-gega-red p-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur temporibus dolorem nihil excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
                    {/* item 1 footer */}
                    <div className='flex justify-end space-x-4 text-xs p-5'>
                    <span className=' '>ON DEC 17, 2022 </span>
                    <span><NavLink className='flex items-center space-x-2'><FaRegComment/> 12</NavLink></span>
                    <span><NavLink className='flex items-center space-x-2'><AiOutlineHeart/> 9</NavLink></span>
                    
                    
                    </div>
                </div>
                {/* item 2 */}
                <div className='border border-gega-red    col-span-6 md:col-span-3 '>
                    <div className='flex justify-between items-center border-b border-gega-red  p-5 '>
                        <p>ACCUSANTIUM DOLOREMQUE LAUDANT...</p>
                        <img src="../../../src/images/userava1.jpg" alt=""  className='rounded-full  '/>
                    </div>
                    {/* item 1 paragraf */}
                    <p className='border-b border-gega-red p-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur temporibus dolorem nihil excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
                    {/* item 1 footer */}
                    <div className='flex justify-end space-x-4 text-xs p-5'>
                    <span className=' '>ON DEC 17, 2022 </span>
                    <span><NavLink className='flex items-center space-x-2'><FaRegComment/> 12</NavLink></span>
                    <span><NavLink className='flex items-center space-x-2'><AiOutlineHeart/> 9</NavLink></span>
                    
                    
                    </div>
                </div>
                {/* item 3 */}
                <div className='border border-gega-red    col-span-6 md:col-span-3 lg:col-span-2 '>
                    <div className='flex justify-between items-center border-b border-gega-red  p-5 '>
                        <p>ACCUSANTIUM DOLOREMQUE LAUDANT...</p>
                        <img src="../../../src/images/userava1.jpg" alt=""  className='rounded-full  '/>
                    </div>
                    {/* item 1 paragraf */}
                    <p className='border-b border-gega-red p-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur temporibus dolorem nihil excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
                    {/* item 1 footer */}
                    <div className='flex justify-end space-x-4 text-xs p-5'>
                    <span className=' '>ON DEC 17, 2022 </span>
                    <span><NavLink className='flex items-center space-x-2'><FaRegComment/> 12</NavLink></span>
                    <span><NavLink className='flex items-center space-x-2'><AiOutlineHeart/> 9</NavLink></span>
                    
                    
                    </div>
                </div>
                {/* item 4 */}
                <div className='border border-gega-red   col-span-6 md:col-span-3 lg:col-span-2 '>
                    <div className='flex justify-between items-center border-b border-gega-red  p-5 '>
                        <p>ACCUSANTIUM DOLOREMQUE LAUDANT...</p>
                        <img src="../../../src/images/userava1.jpg" alt=""  className='rounded-full  '/>
                    </div>
                    {/* item 1 paragraf */}
                    <p className='border-b border-gega-red p-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur temporibus dolorem nihil excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
                    {/* item 1 footer */}
                    <div className='flex justify-end space-x-4 text-xs p-5'>
                    <span className=' '>ON DEC 17, 2022 </span>
                    <span><NavLink className='flex items-center space-x-2'><FaRegComment/> 12</NavLink></span>
                    <span><NavLink className='flex items-center space-x-2'><AiOutlineHeart/> 9</NavLink></span>
                    
                    
                    </div>
                </div>
                {/* item 5 */}
                <div className='border border-gega-red    col-span-6 md:col-span-3 lg:col-span-2 hidden lg:block'>
                    <div className='flex justify-between items-center border-b border-gega-red  p-5 '>
                        <p>ACCUSANTIUM DOLOREMQUE LAUDANT...</p>
                        <img src="../../../src/images/userava1.jpg" alt=""  className='rounded-full  '/>
                    </div>
                    {/* item 1 paragraf */}
                    <p className='border-b border-gega-red p-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur temporibus dolorem nihil excepturi quos. Amet cupiditate aperiam temporibus perferendis?</p>
                    {/* item 1 footer */}
                    <div className='flex justify-end space-x-4 text-xs p-5'>
                    <span className=' '>ON DEC 17, 2022 </span>
                    <span><NavLink className='flex items-center space-x-2'><FaRegComment/> 12</NavLink></span>
                    <span><NavLink className='flex items-center space-x-2'><AiOutlineHeart/> 9</NavLink></span>
                    
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post