import { div } from "framer-motion/client";
import { Key } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const CardDesign = ({
  title,
  icon: Icon,
  bg,
  iconColor,
  iconBg,
  skills,
  shadow,
}) => {
  return (
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
       boxShadow: `${shadow}`,
      }}
      transition={{
        opacity: { duration: 0.6 },
        y: { duration: 0.6 },
        scale: { duration: 0.6 },

        default: { duration: 0.3, ease: "easeOut" },
      }}
      transition={{ duration: 0.6}}
      className=" group p-6 md:p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50
        overflow-hidden">
      {/* content */}
      <div className="z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div>
            <div className={`rounded-xl p-3 ${iconBg}`}>
              <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        {/* skills */}
        <div className="space-y-4">
          {skills.map((skill, idx) => (
            <div key={idx}>
              {/* skill name and % */}
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">{skill.name}</span>
                <span className="text-slate-500">{skill.level}%</span>
              </div>

              {/* progress bar */}

              <div className="w-full h-2 bg-slate-900/10 border border-slate-600 rounded-2xl overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className=" h-full bg-linear-to-r from-indigo-500 to-cyan-400 rounded-2xl"></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CardDesign;
