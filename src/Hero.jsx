import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    // outer layer
    <section
      id="home"
      className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative min-h-screen flex items-center">
      {/* inner layer */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* main layer for resonsiveness */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          {/* left section */}
          <div className="flex-1 space-y-8 text-center lg:text-left ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8">
              <div className="inline-flex bg-indigo-500/10 text-indigo-300  border-indigo-500/20  font-medium text-sm mb-2 items-center rounded-full gap-2 px-2 py-1.5">
                <span className="w-2 h-2  rounded-full bg-indigo-500 animate-pulse" />
                Available for New Opportunities
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-2 tracking-tight font-semibold ">
                Hi, I'm
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                  Vivek joshi
                </span>
              </h1>

              <h2 className=" text-xl md:text-2xl text-white font-medium max-w-xl mx-auto lg:mx-0">
                MCA Student | Full Stack Developer | Cloud Computing Enthusiast
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base  text-slate-400 md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I build scalable web applications and explore the latest in cloud
              technologies. Passionate about solving complex problems with
              elegant, robust code and seamless user experiences.
            </motion.p>

            <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5, delay:0.2}}
             className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="px-6 font-medium font-semibold  text-white rounded-xl py-3 group inline-flex transition-all items-center gap-1 bg-indigo-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                View Projects{" "}
                <ArrowRight
                  size={22}
                  className=" group-hover:translate-x-1 transition-transform"
                />{" "}
              </a>

              <a
                href="#projects"
                className="px-6 font-md font-semibold  text-white rounded-xl py-3 group inline-flex  hover:border border-slate-200/20 transition-all items-center gap-1 bg-indigo-600/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                Download Resume{" "}
                <Download
                  size={22}
                  className=" group-hover:translate-y-1 transition-transform"
                />{" "}
              </a>
            </motion.div>
          </div>
          {/* right section */}
          <div className="right text-white"> </div>
        </div>
      </div>
    </section>
  );
}
