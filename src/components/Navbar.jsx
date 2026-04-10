

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
  className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'
>
 
<div className='max-w-7xl border border-white'>
  <h1 className="text-white text-lg sm:text-xl font-bold">
         Port<span className="text-indigo-400">Folio</span>
       </h1>
</div>

</motion.header>
  )
}

export default Navbar
