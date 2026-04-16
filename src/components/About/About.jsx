import { User, Code, Target } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About py-20 md:py-32 relative">
      <div className="container max-w-7xl mx-auto md:px-12">
        <div className="heading flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-sm font-semibold mb-2">
            <User className="w-4 h-4 relative" />
            <span className="leading-none  relative top-[1px]">About me</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col text-3xl md:text-6xl px-4 py-2 -mb-4 ">
            <span className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Passionate About Building
            </span>
            <span className="text-3xl md:text-5xl font-bold py-auto  leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6">
              Digital Experiences
            </span>
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
        {/* about section */}
        <div className="about grid grid-cols-1 px-5 gap-12 items-center lg:grid-cols-12 lg:gap-24  ">
          <div className="left lg:col-span-5">
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
                    src="https://i.pinimg.com/1200x/36/24/85/362485cff39036464d0e54b4bdd3a5b8.jpg"
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
                      <p className="text-slate-400 text-xs">
                        Seeking SDE Roles
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="right lg:col-span-7 space-y-10">
            <div className="relative space-y-8">
              <span
                className="absolute -left-8 top-0 bottom-0 w-1 bg-linear-to-b from-indigo-500 to-transparent rounded-full hidden md:block"
              />
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Code className="w-6 h-6 text-indigo-400" />
                Professional Summary
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                As an MCA student specializing in Full Stack Development and
                Cloud Computing, I bridge the gap between elegant frontend
                interfaces and robust backend architectures. My journey involves
                crafting scalable web solutions and diving deep into
                cloud-native technologies to build resilient applications.
              </p>
            </div>
            <div className="relative space-y-7">
              <span className="absolute -left-8 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-500 to-transparent rounded-full hidden md:block" />
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Target className="w-6 h-6 text-cyan-400" />
                Career Objective
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To leverage my comprehensive understanding of software
                engineering principles and hands-on experience with modern
                frameworks in a dynamic tech environment. I aim to contribute to
                innovative projects that solve real-world problems while
                continuously evolving my technical acumen.
              </p>
            </div>
            <div>Key strengths</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
