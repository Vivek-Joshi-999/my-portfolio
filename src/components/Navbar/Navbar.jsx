import React, { useEffect, useState } from "react";
import { CodeXml } from "lucide-react";
import { ListCollapse } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [scrolled, setscroll] = useState(false);

  const navItems = [
    { label: "Home", id: "Home" },
    { label: "About", id: "About" },
    { label: "Skills", id: "Skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setscroll(window.scrollY > 50);
      console.log("Window scrolled");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50  
  ${
    scrolled
      ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent bg-slate-950/70 backdrop-blur-md border-slate-800/50 py-2 shadow-lg shadow-black/10 "
      : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent bg-transparent py-2"
  }
  
  `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-2 flex items-center justify-between  ">
        <div className="flex gap-2 items-center justify-center ">
          <span className="bg-indigo-500/10 p-2 rounded-xl hover:bg-indigo-500/20 transition-colors">
            {" "}
            <CodeXml className="text-indigo-400 animate-pulse" />
          </span>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
            Port<span className="text-indigo-400">Folio</span>
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-slate-300 font-semibold">
          {navItems.map((item) => (
            <NavItem key={item.label} label={item.label} id={item.id} />
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setopen(!open)}>
          {open ? <X /> : <ListCollapse />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=" md:hidden bg-slate-900/80 backdrop-blur-md border-t border-white/10 ">
            <div className="  flex flex-col px-6 py-4 gap-4 backdrop-blur-md border-t border-white/20 text-white font-semibold">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={() => setopen(false)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className=" w-fit origin-left hover:text-indigo-400">
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;