import { Boxes , Code, Target, Zap, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import React from 'react'

const Skills = () => {
  return (
  <section id="Skills" className=" w-full py-20 md:py-32 relative bg-slate-900/50 ">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />

 <div className="container mx-auto px-6 md:px-20 max-w-7xl  relative z-10">
<div className="heading flex flex-col items-center justify-center text-center mb-5 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-sm font-semibold mb-2">
            <Boxes  className="w-4 h-4 relative" />
            <span className="leading-none  relative top-[1px]">Technical Arsenal</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col text-3xl md:text-6xl px-4 py-2 -mb-4 ">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-5">
              Skills & <span className="text-3xl md:text-5xl font-bold py-auto  leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 ">
              Expertise
            </span>
            </h1>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: [-5, 5, -5] }}
            transition={{
              duration: 0.5,
              x: {
                duration: 1.9,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            className="w-24 px-7 rounded-full h-1 bg-linear-to-r from-indigo-400 to bg-cyan-500"></motion.div>
        </div>
 <div className=" skiils grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
</div>
</div>


  </section>
  )
}

export default Skills
