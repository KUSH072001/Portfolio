import React, { useEffect, useRef } from "react";
import bannerImg from "../assets/bannerimages.png";
import bannerWallpaper from "../assets/banner_wallpaper.svg"
import Typed from "typed.js";
const Banner = () => {
  const el=useRef(null)
  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ["Frontend developer","Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div style={
        {
            backgroundImage:`url(${bannerWallpaper})`,
            backgroundSize:"cover"
        }
    
    } className="flex items-center py-20">
      <div className=" w-full flex items-center justify-center text-white">
        {/* Text */}
        <div className="w-2/3">
          <h2 className="text-3xl font-semibold">Hi, I am</h2>
          <h3 className=" mt-3 text-5xl mx-4 font-semibold">Krishna Deshmukh</h3>
          <h2 className="mt-3 text-2xl font-semibold"> I am a <span className="text-3xl font-bold underline" ref={el}></span></h2>
          <p className="mt-3">A computer science graduate who is seeking to find the opportunity to in a fun and challenging working environment that will
          encourage me to improve and learn new and necessary skills
          </p>
          <div className="space-x-4 flex mt-4"> 
            {/* links logos */}
            <a className="hover:bg-orange-400 cursor-pointer w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center">
          <i className="fa-brands text-3xl fa-facebook"></i>  </a>
          <a className="hover:bg-orange-400 cursor-pointer w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center">
          <i className="fa-brands text-3xl fa-instagram"></i></a>

          <a href="https://www.linkedin.com/in/krishna-deshmukh-692197249" className="hover:bg-orange-400 cursor-pointer w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center">
          <i className="fa-brands text-3xl fa-linkedin"></i>
          </a>
          <a className="hover:bg-orange-400 cursor-pointer w-16 h-16 rounded-full bg-gray-800 flex justify-center items-center">
          <i className="fa-brands text-3xl fa-github"></i>
          </a>
    {/* link logo end */}
          </div>
          <br/>
          <a href="/contact" className="text-xl px-3 py-2 bg-orange-500 shadow rounded-full">Contact Me</a>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        {/* Image */}
        <img src={bannerImg} alt="" className="rounded-full my-2 shadow-lg w-2/3" />
      </div>
    </div>
  );
};

export default Banner;
