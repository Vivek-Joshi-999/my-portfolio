

import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"

const Navbar = () => {
  const [open,setopen]=useState(false);
  const [scrolled,setscroll]=useState(false);

  useEffect( ()=>{

    
    const handleScroll = () => {
      setscroll(window.scrollY>50)
      console.log("Window scrolled");
      };

      window.addEventListener('scroll',handleScroll);

      return ()=> window.removeEventListener('scroll',handleScroll) ;
      
    }
      ,[] );


  return (
<motion.header
  initial={{ y: -120, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className='z-50 relative p-4'
>
  <h1 className='text-white text-xl'>Hello</h1>
</motion.header>
  )
}

export default Navbar
