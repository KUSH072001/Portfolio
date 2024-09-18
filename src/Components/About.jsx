import React, { useState } from "react";
import AboutBanner from "../assets/AboutBanner.webp";
const About = () => {
    const [data,setData]=useState({
        Image:AboutBanner,
        title:"Mern Stack Developer",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam fugit nisi enim, iusto perspiciatis aliquam dolores autem. Dignissimos vero quia minus doloribus exercitationem numquam, aspernatur ad. Perspiciatis, assumenda nisi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error, minima exercitationem ut repudiandae fugiat dicta et molestiae esse nostrum minus quas excepturi voluptatibus. Velit, minus ipsa. Nemo, consequuntur nihil. ",
    actionButton:{
        title:"Read More",
        link:"/readmore"
    },
    }
)
  return (
    <>
      <div className="py-16  ">
        <h1 className="text-center pb-16 text-5xl font-bold underline">About Me</h1>
        <div className=" flex justify-center bg-gray-200">
          {/* image */}
          <div className="w-full flex justify-center">
            <img src={AboutBanner} alt="" />
          </div>
          {/* Text */}
          <div className="border w-full px-40">
           <h1 className="text-5xl font-semibold py-9 text-center">{data.title}</h1>
          <p>{data.desc} </p>
          <button className="px-4 py-2 text-xl mt-5 bg-orange-500 hover:bg-orange-300 rounded-full">{data.actionButton.title}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
