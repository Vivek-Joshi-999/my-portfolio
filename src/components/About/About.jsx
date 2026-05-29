import { User, Code, Target, Zap, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../../assets/profile8.png";

const About = () => {
  const strengths = ["Problem Solving", " Time management", "Quick learner"];
  return (
    <section id="About" className="py-20 md:py-32 relative -mt-15">
      <div className="container max-w-7xl mx-auto md:px-3">
        <div className="heading flex flex-col items-center justify-center text-center mb-5 md:mb-20">
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
        <div className="about grid grid-cols-1 px-6 gap-12  items-center lg:grid-cols-12 lg:gap-24 md:px-10  ">
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
                className=" hidden md:block md:aspect-[4/4] max-w-md mx-auto relative rounded-3xl ">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500  "
                    src={profile}
                    alt="Profile"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          {/* right section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.5 }}
            className="right lg:col-span-7 space-y-10">
            {/* Professional */}
            <div className="relative space-y-8">
              <span className="absolute -left-8 top-0 bottom-0 w-1 bg-linear-to-b from-indigo-500 to-transparent rounded-full hidden md:block" />
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Code className="w-6 h-6 text-indigo-400" />
                Professional Summary
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                I’m an MCA student specializing in Full Stack Development and Cloud Computing. I enjoy building responsive and user-friendly web applications, working with both frontend and backend technologies, and improving my skills in modern web development.

              </p>
            </div>

            {/* carrier objective */}
            <div className="relative space-y-7">
              <span className="absolute -left-8 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-500 to-transparent rounded-full hidden md:block" />
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Target className="w-6 h-6 text-cyan-400" />
                Career Objective
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
               To use my knowledge of software development and modern web technologies in a dynamic environment, contribute to real-world projects, and continuously improve my technical and problem-solving skills.

              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="inline-flex gap-3 justify-start items-center">
                <Zap className="text-yellow-300" />
                <h2 className="text-white text-2xl font-bold">
                  {" "}
                  Key Strengths
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {strengths.map((strength, key) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: key * 0.1 }}
                    key={key}
                    className="flex items-center text-white gap-2 text-md  px-4 py-2 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-800 hover:border-slate-600 transition-all shadow-sm">
                    <CircleCheck size={18} className="text-indigo-400" />
                    {strength}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
