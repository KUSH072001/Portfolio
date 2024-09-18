import React from 'react'
import bannerWallpaper from "../assets/banner_wallpaper.svg"

export const Expertise = () => {
  return (
    <div>
        <div className='mt-2'>
            <h1 className='mb-8 text-5xl text-center font-bold underline'>Expertise</h1>
            {/* Box section */}
            
            <div style={
        {
            backgroundImage:`url(${bannerWallpaper})`,
            backgroundSize:"cover"
        }
    
    }  className='Box-container flex py-4'>
                <div className='flex justify-center'>
                    {/* text container */}
                    <div className='w-2/3 text-center text-white space-y-2'>
                    <h1 className='text-3xl font-semibold'>I love these technologies</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident ab molestiae adipisci cum eaque, consectetur repellendus voluptatem. Voluptates rem laboriosam autem iure eos quis velit!</p>
                    <button className='text-xl px-3 py-2 bg-orange-500 rounded-full shadow-lg'>Hire Me</button>
                    </div>
                </div>
                {/* skill container */}
                <div className='flex justify-center'>
                    <div className='ALL-Skill flex h-fit  sp ace-x-3 flex-wrap w-2/3 '>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >Core-Java</p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 p2-2 mt-2 rounded-full' >JavaScript</p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >Html</p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >Css</p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >ReactJS</p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >NodeJs</p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >ExpressJs </p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >Tailwind-Css</p> 
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >Bootstrap</p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >Git</p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >Aws-Services</p>
                    <p  className='bg-slate-300 w-fit text-xl px-3 py-2 mt-2 rounded-full' >Nginx</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
