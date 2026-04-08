import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center text-white text-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-indigo-400">Vivek</span> 👋
        </h1>

        <p className="mt-4 text-slate-400 text-sm sm:text-base">
          Full Stack Developer | React | Cloud
        </p>
      </motion.div>

    </div>
  );
}