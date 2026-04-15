import { User } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About py-20 md:py-32 relative">
      <div className="container max-w-7xl mx-auto md:px-12">
        <div className="heading flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <motion.div
          initial={{opacity:0 ,y:25}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5}}

          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-sm font-semibold mb-2">
            <User className="w-4 h-4 relative" />
            <span className="leading-none  relative top-[1px]">About me</span>
          </motion.div>

          <motion.div
          initial={{opacity:0 ,y:25}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5,delay:0.2}}
           className="flex flex-col text-3xl md:text-6xl px-4 py-2 -mb-4 ">
            <span className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Passionate About Building
            </span>
            <span className="text-3xl md:text-5xl font-bold py-auto  leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6">
              Digital Experiences
            </span>
          </motion.div>

           <motion.div
          initial={{opacity:0 }}
          whileInView={{opacity:1,x:[-5,5,-5]}}
          transition={{duration:0.5, x: {
                    duration: 1.9,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },}}
          className="w-24 px-7 rounded-full h-1 bg-gradient-to-r from-indigo-400 to bg-cyan-500"></motion.div>
        </div>
        <div className="about">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
