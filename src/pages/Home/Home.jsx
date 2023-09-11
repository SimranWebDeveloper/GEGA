import React, { useContext } from "react";
import { BsPlayFill, BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Home2 from "./Home2";
import Matrix from "./Matrix";
import Post from "./Post";
import { GlobalContext } from "../../context/GlobalContext";
import batman from "../../images/batman.jpg"
// import {GoArrowRight} from 'react-icons/g'
const Home = () => {
  // dark-light mode
  const{ mode,toggleMode}=useContext(GlobalContext)

  return (
    // Hero section
    <>
      <div className={`home-section group relative h-96 lg:h-128 font-open dark:text-gega-grey text-black dark:bg-black bg-gega-grey ${mode && 'dark' }`}  id="dasda">
        {/* Hero img */}
        <img
          src={batman}
          alt="batman"
          className="h-full w-full object-cover"
        />
        {/* Hero content */}
        <div className="w-full absolute bottom-0 bg-gradient-to-b from-transparent to-black">
          {/* Hero content container */}
          <div className="container pl-10 lg:pl-0">
            <h3 className="text-gega-melon tracking-wide group-hover:mb-1 duration-500">
              ACTION, DARAMA, THRILLER
            </h3>
            <h1 className="text-gega-grey text-4xl lg:text-6xl group-hover:mb-1 duration-500">
              THE DARK KNIGHT
            </h1>
            <p className=" w-3/4 lg:w-2/3 text-sm lg:text-base text-gega-grey group-hover:mb-2 duration-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quas officia aut quidem? Numquam fuga quis repellendus ad beatae
              culpa?
            </p>
            {/* Detail container */}
            <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-20 duration-1000">
              <button className="flex space-x-8 items-center text-gega-grey text-2xl  font-gemunu uppercase hover:text-gega-red duration-500">
                watch trailer{" "}
                <BsPlayFill className="bg-gega-red ml-2 p-1 text-gega-grey   border-none rounded-full" />
              </button>
              <button className="flex space-x-8 items-center text-gega-grey text-2xl  font-gemunu uppercase hover:text-gega-red duration-500">
                FULL SYNOPSIS{" "}
                <BsArrowRight className="bg-gega-red ml-2 p-1 text-gega-grey  border-none  rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Home2 />
      <Matrix/>
      <Post/>
    </>
  );
};

export default Home;
