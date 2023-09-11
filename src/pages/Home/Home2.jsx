import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsPlayFill, BsArrowRight } from "react-icons/bs";
import { GlobalContext } from "../../context/GlobalContext";




const Home2 = () => {
    // dark-light mode
    const{ mode,toggleMode}=useContext(GlobalContext)
  return (
    <div className= {`movie-section  py-24  font-open dark:text-gega-grey text-black dark:bg-black bg-gega-grey ${mode && 'dark' }`}>
      {/* Movie Content */}
      <div className="container flex flex-col lg:flex-row  lg:space-x-16 lg:space-y-0  space-y-8   ">
        {/* Left content */}
        <div className="basis-2/3 ">
          {/* Titles */}
          <div className="flex divide-x-2 space-x-2 text-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0">
            <h2 className="text-gega-red pl-2 "><NavLink>LATEST</NavLink></h2>
            <h2 className="text-gega-melon hover:text-gega-red pl-2 duration-500 "><NavLink>POPULAR</NavLink></h2>
            <h2 className="text-gega-melon hover:text-gega-red pl-2 duration-500 "><NavLink>BEST</NavLink></h2>
          </div>
          {/* Image Container */}
          <div className="flex flex-wrap ">
            {/* Image 1 */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              {/* Image */}
              <img src="../../../src/images/mv1.jpg" alt="" className="group-hover:scale-110 group-hover:opacity-50 duration-300" />
              {/* Imge detail container */}
              <div className="absolute px-5 bottom-0 text-white">
                <h3 className=" group-hover:text-gega-melon duration-500 mb-2">oblivion</h3>
                <p className="opacity-0 mb-3 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est.</p>
                {/* icon div */}
                <div className="  flex space-x-8">
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsPlayFill className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300   border-none text-3xl" />
                  </NavLink>
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsArrowRight className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300  border-none text-3xl " />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Image 2 */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              {/* Image */}
              <img src="../../../src/images/mv2.jpg" alt="" className="group-hover:scale-110 group-hover:opacity-50 duration-300" />
              {/* Imge detail container */}
              <div className="absolute px-5 bottom-0 text-white">
                <h3 className=" group-hover:text-gega-melon duration-500 mb-2">oblivion</h3>
                <p className="opacity-0 mb-3 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est.</p>
                {/* icon div */}
                <div className="  flex space-x-8">
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsPlayFill className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300   border-none text-3xl" />
                  </NavLink>
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsArrowRight className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300  border-none text-3xl " />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Image 3 */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              {/* Image */}
              <img src="../../../src/images/mv3.jpg" alt="" className="group-hover:scale-110 group-hover:opacity-50 duration-300" />
              {/* Imge detail container */}
              <div className="absolute px-5 bottom-0 text-white">
                <h3 className=" group-hover:text-gega-melon duration-500 mb-2">oblivion</h3>
                <p className="opacity-0 mb-3 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est.</p>
                {/* icon div */}
                <div className="  flex space-x-8">
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsPlayFill className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300   border-none text-3xl" />
                  </NavLink>
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsArrowRight className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300  border-none text-3xl " />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Image 4 */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              {/* Image */}
              <img src="../../../src/images/mv4.jpg" alt="" className="group-hover:scale-110 group-hover:opacity-50 duration-300" />
              {/* Imge detail container */}
              <div className="absolute px-5 bottom-0 text-white">
                <h3 className=" group-hover:text-gega-melon duration-500 mb-2">oblivion</h3>
                <p className="opacity-0 mb-3 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est.</p>
                {/* icon div */}
                <div className="  flex space-x-8">
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsPlayFill className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300   border-none text-3xl" />
                  </NavLink>
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsArrowRight className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300  border-none text-3xl " />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Image 5 */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 ">
              {/* Image */}
              <img src="../../../src/images/mv5.jpg" alt="" className="group-hover:scale-110 group-hover:opacity-50 duration-300" />
              {/* Imge detail container */}
              <div className="absolute px-5 bottom-0 text-white">
                <h3 className=" group-hover:text-gega-melon duration-500 mb-2">oblivion</h3>
                <p className="opacity-0 mb-3 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est.</p>
                {/* icon div */}
                <div className="  flex space-x-8">
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsPlayFill className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300   border-none text-3xl" />
                  </NavLink>
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsArrowRight className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300  border-none text-3xl " />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Image 6 */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              {/* Image */}
              <img src="../../../src/images/mv6.jpg" alt="" className="group-hover:scale-110 group-hover:opacity-50 duration-300" />
              {/* Imge detail container */}
              <div className="absolute px-5 bottom-0 text-white">
                <h3 className=" group-hover:text-gega-melon duration-500 mb-2">oblivion</h3>
                <p className="opacity-0 mb-3 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est.</p>
                {/* icon div */}
                <div className="  flex space-x-8">
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsPlayFill className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300   border-none text-3xl" />
                  </NavLink>
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsArrowRight className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300  border-none text-3xl " />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Image 7 */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
              {/* Image */}
              <img src="../../../src/images/mv1.jpg" alt="" className="group-hover:scale-110 group-hover:opacity-50 duration-300" />
              {/* Imge detail container */}
              <div className="absolute px-5 bottom-0 text-white">
                <h3 className=" group-hover:text-gega-melon duration-500 mb-2">oblivion</h3>
                <p className="opacity-0 mb-3 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est.</p>
                {/* icon div */}
                <div className="  flex space-x-8">
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsPlayFill className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300   border-none text-3xl" />
                  </NavLink>
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsArrowRight className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300  border-none text-3xl " />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Image 8 */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
              {/* Image */}
              <img src="../../../src/images/mv2.jpg" alt="" className="group-hover:scale-110 group-hover:opacity-50 duration-300" />
              {/* Imge detail container */}
              <div className="absolute px-5 bottom-0 text-white">
                <h3 className=" group-hover:text-gega-melon duration-500 mb-2">oblivion</h3>
                <p className="opacity-0 mb-3 group-hover:opacity-100 group-hover:mb-10 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est.</p>
                {/* icon div */}
                <div className="  flex space-x-8">
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsPlayFill className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300   border-none text-3xl" />
                  </NavLink>
                  <NavLink className='opacity-0 group-hover:opacity-100 group-hover:mb-5 hover:text-gega-red duration-300 '>
                    <BsArrowRight className=" ml-2 p-1 text-gega-grey hover:text-gega-red duration-300  border-none text-3xl " />
                  </NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Right content */}
        <div className="basis-1/3  pl-10 lg:pl-0">
          {/* Titles */}
          <h3 className="text-2xl mb-8 ">hot news</h3>
          {/* News Container */}
          <div className=" flex flex-row flex-wrap lg:flex-nowrap lg:flex-col justify-start lg:justify-between lg:h-full  space-y-4 pb-16">
            {/* Item1 */}
            <div className=" group flex items-center space-x-4  basis-3/4  md:basis-1/2 ">
              {/* New Img container */}
              <div className="basis-1/3 h-full">
                <img src="../../../src/images/new1.jpg" alt=""  className="h-full w-full object-cover "/>
              </div>
              <div className="basis-2/3">
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto.</p>
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300 text-xs font-gemunu font-bold">ON SEP 09.10.2023</p>

              </div>
            </div>
            {/* Item2 */}
            <div className=" group flex items-center space-x-4 basis-3/4  md:basis-1/2 ">
              {/* New Img container */}
              <div className="basis-1/3 h-full">
                <img src="../../../src/images/new1.jpg" alt=""  className="h-full w-full object-cover object-cover"/>
              </div>
              <div className="basis-2/3">
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto.</p>
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300 text-xs font-gemunu font-bold">ON SEP 09.10.2023</p>

              </div>
            </div>
            {/* Item3 */}
            <div className=" group flex items-center space-x-4 basis-3/4  md:basis-1/2 ">
              {/* New Img container */}
              <div className="basis-1/3 h-full">
                <img src="../../../src/images/new1.jpg" alt=""  className="h-full w-full object-cover"/>
              </div>
              <div className="basis-2/3">
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto.</p>
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300 text-xs font-gemunu font-bold">ON SEP 09.10.2023</p>

              </div>
            </div>
            {/* Item4 */}
            <div className=" group flex items-center space-x-4 basis-3/4  md:basis-1/2 ">
              {/* New Img container */}
              <div className="basis-1/3 h-full">
                <img src="../../../src/images/new1.jpg" alt=""  className="h-full w-full object-cover"/>
              </div>
              <div className="basis-2/3">
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto.</p>
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300 text-xs font-gemunu font-bold">ON SEP 09.10.2023</p>

              </div>
            </div>
            {/* Item5 */}
            <div className=" group flex items-center space-x-4 basis-3/4  md:basis-1/2 md:hidden lg:flex">
              {/* New Img container */}
              <div className="basis-1/3 h-full">
                <img src="../../../src/images/new1.jpg" alt=""  className="h-full w-full object-cover"/>
              </div>
              <div className="basis-2/3">
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto.</p>
                <p className="group-hover:text-gega-melon group-hover:cursor-pointer duration-300 text-xs font-gemunu font-bold">ON SEP 09.10.2023</p>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
