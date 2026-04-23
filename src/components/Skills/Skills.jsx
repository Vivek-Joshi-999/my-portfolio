import { Boxes , Code, Target, Zap, CircleCheck,FileCodeCorner,Cloud  } from "lucide-react";
import { motion } from "framer-motion";
import { skillsData } from "./SkillData";
import CardDesign from "./CardDesign";


import React from 'react'

const Skills = () => {
  return (
  <section id="Skills" className=" w-full py-20 md:py-32 relative bg-gradient-to-br from-slate-950/40 via-blue-950/40 to-slate-900/40 ">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent " />

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

         

        {/* GRID (square style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillsData.map((item) => (
            <CardDesign key={item.id} {...item} />
          ))}

             <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      boxShadow: "0px 20px 40px rgba(14, 165, 233, 0.25)",
      }}
      transition={{
        opacity: { duration: 0.6 },
        y: { duration: 0.6 },
        scale: { duration: 0.6 },

        default: { duration: 0.3, ease: "easeOut" },
      }}
      transition={{ duration: 0.6}} className="group p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 overflow-hidden flex flex-col items-center justify-center text-center">

      {/* Icon */}
      <div className="p-4 rounded-full bg-cyan-500/10 mb-5">
        <Cloud className="w-10 h-10 text-cyan-400" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-white">
        Always Learning
      </h2>

      {/* Subtitle */}
      <p className="text-slate-400 text-sm mt-2">
        Exploring new technologies every day
      </p>

    </motion.div>
        </div>


</div>


  </section>
  )
}

export default Skills
