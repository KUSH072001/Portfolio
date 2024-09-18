import React, { useState } from 'react'
import Resume from '../assets/Resume.pdf'

const Navbar = () => {
  const[brandName,setBrandName]=useState('Krishna Deshmukh');
  const [menuLinks,setMenuLinks]=useState([
    {
     title:"Home",
     link:"/home",
     id:1
    },
    {
      title:"About",
      link:"/About",
      id:2
     },
     {
      title:"Skill",
      link:"/Skill",
      id:3
     },
     {
      title:"Portfolio",
      link:"/Portfolio",
      id:4
     },
     {
      title:"Contact",
      link:"/Contact",
      id:5
     },
     
  ])
 const [hireButton,setHireButton]= useState({
    title:"Downlod CV",
    link:Resume,
 })
  return (
    <>
    <div className='h-20  flex justify-between px-4 bg-slate-300 items-center'>
    <div><h3 className='text-2xl mx-5 font-bold'>{brandName}</h3></div>
    <div className='space-x-3 font-semibold'>
      
    {
      menuLinks.map((link)=>(
        <a key={link.id} href={link.link} className='hover:text-orange-600 font-semibold'>{link.title}</a>
      ) )
    }
    </div>
    <div><a href={hireButton.link} download={Resume} className='bg-orange-600 text-black font-semibold shadow px-4 py-2 rounded-full'>{hireButton.title}</a></div>
    </div>
    
    </>
  )
}

export default Navbar