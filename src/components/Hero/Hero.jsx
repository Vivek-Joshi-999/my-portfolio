import { motion } from "framer-motion";
import profile2 from "../../assets/profile2.png";


import { ArrowRight, Download, Code, Braces } from "lucide-react";

export default function Hero() {
  return (
    // outer layer
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative min-h-screen flex items-center">
      {/* inner layer */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* main layer for resonsiveness */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          {/* left section */}
          <div className="flex-1 space-y-8 text-center lg:text-left ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8">
              <div className="inline-flex bg-indigo-500/10 text-indigo-300  border-indigo-500/20  font-medium text-sm mb-2 items-center rounded-full gap-2 px-2 py-1.5">
                <span className="w-2 h-2  rounded-full bg-indigo-500 animate-pulse" />
                Available for New Opportunities
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-2 tracking-tight font-semibold ">
                Hi, I'm
                <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                  Vivek Joshi
                </span>
              </h1>

              <h2 className=" text-xl md:text-2xl text-white font-medium max-w-xl mx-auto lg:mx-0">
                MCA Student | Full Stack Developer
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
                href="/resume.pdf"
                download
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
          <div className="flex-1 relative w-full max-w-md lg:max-w-none mx-auto ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                boxShadow: [
                  "10px 0px 20px #000080",
                  "0px 10px 20px #000080",
                  "-10px 0px 20px #000080",
                  "0px -10px 20px #000080",
                  "10px 0px 20px #000080",
                ],
              }}
              transition={{
                opacity: { duration: 0.8 }, // runs once ✅
                scale: { duration: 0.8 }, // runs once ✅
                boxShadow: {
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity, // only shadow repeats ✅
                },
              }}
              
              className="md:aspect-[4/5] max-w-md mx-auto relative rounded-3xl ">
              <div className="rounded-3xl overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500  "
                  src={profile2}
                  alt="Profile"
                />
              </div>
              {/* card div */}
              <div className=" absolute bottom-6 left-6 right-6 bg-slate-900/60 backdrop-blur-md z-50  flex  items-center justify-start border  border-white/10 shadow-xl p-3 rounded-2xl gap-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center border border-indigo-500/30 bg-indigo-500/20">
                    <Code className="text-indigo-300" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      Open to Work
                    </p>
                    <p className="text-slate-400 text-xs">Seeking SDE Roles</p>
                  </div>
                </div>
              </div>
              {/* floating cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
                transition={{
                  opacity: { duration: 0.8 }, // runs once ✅
                  scale: { duration: 0.8 }, // runs once ✅
                  y: {
                    duration: 1.9,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
                className="hidden absolute top-[10%] left-[-10%] md:flex items-center justify-center bg-slate-800/80 backdrop-blur-md gap-2 p-3 shadow-xl z-20 border border-slate-700 rounded-xl">
                <div className="rounded-lg p-2 bg-blue-600/20">
                  <Code className="text-white" size={18} />
                </div>
                <p className="text-slate-200 text-sm font-semibold">React</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, x: [-5, 5, -5] }}
                transition={{
                  opacity: { duration: 0.8 }, // runs once ✅
                  scale: { duration: 0.8 }, // runs once ✅
                  x: {
                    duration: 1.9,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
                className="hidden absolute bottom-[25%] right-[-10%] md:flex items-center justify-center bg-slate-800/80 backdrop-blur-md gap-2 p-3 shadow-xl z-20 border border-slate-700 rounded-xl">
                <div className="rounded-lg p-2 bg-blue-600/20">
                  <Braces className="text-pink-400" size={18} />
                </div>
                <p className="text-white text-sm font-semibold">C++</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
