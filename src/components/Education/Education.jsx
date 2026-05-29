import React from "react";
import { GraduationCap, Award,Calendar ,MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Master of computer application (MCA)",
      institution: "Jecrc Univercity",
      period: "2025-2027",
      location: "Jaipur, Rajasthan",
    },
    {
      degree: "Bachloer of computer application (BCA)",
      institution: "Nibm College",
      period: "2021-2023",
      location: "Rajsamand, Rajasthan",

    },
  ];
  return (
    <section
      id="Education"
      className="mt-0 w-full py-20 md:py-32 relative bg-gradient-to-br from-slate-950/40 via-blue-950/40 to-slate-900/40">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent " />

      <div className="container mx-auto px-7 md:px-20 max-w-7xl  relative z-10"></div>

      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <div className="header flex flex-col justify-center items-center text-center mb-5 md:mb-15">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-Banner text-md mb-2 text-indigo-400 py-2 px-4 inline-flex items-center gap-2 rounded-full bg-slate-800/50 border border-slate-700 font-semibold">
            <GraduationCap className="w-5 h-5  " />
            <span className="leading-none relative top-[1]">
              Academic Journey
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heading flex  text-3xl md:text-6xl px-4 py-3 items-center justify-center mb-2">
            <h1 className="font-bold text-white leading-tight">
              Education &{" "}
              <span className="font-bold  py-auto text-transparent bg-clip-text bg-gradient-to-r  from-indigo-400 to bg-cyan-400">
                {" "}
                Background
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

        <div className=" relative">
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
               
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline Marker */}
                <div className="absolute left-6 md:left-1/2 top-0 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                    <Award className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>

                {/* card box */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                  <div className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-md border border-slate-700 hover:border-indigo-500/50 transition-colors shadow-xl group">
                  <h1 className="font-bold text-white text-2xl mb-2 group-hover:text-indigo-400">{item.degree}</h1>
                  
                  
                   <div className="text-xl text-slate-300 font-medium mb-4">
                      {item.institution}
                    </div>

                     <div className="flex  items-center gap-4 text-sm text-slate-400 mb-6">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        {item.location}
                      </div>
                      </div>
                  </div>

                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
