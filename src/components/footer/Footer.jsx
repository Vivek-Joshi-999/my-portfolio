import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer id="Footer" className="w-full border-t border-slate-800/80">
      <div className="container flex flex-col justify-center items-center gap-5 p-6">
        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
          Port<span className="text-indigo-400">Folio</span>
        </span>
        <div className="flex justify-center items-center gap-3 p-3">
          <a
            href="https://github.com/Vivek-Joshi-999"
            target="_blank"
            rel="noopener noreferrer">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 shadow-sm">
              <FaGithub size={20} className="text-white" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/vivek-joshi-"
            target="_blank"
            rel="noopener noreferrer">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 shadow-sm">
              <FaLinkedinIn size={20} className="text-white" />
            </div>
          </a>
        </div>
        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Vivek joshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
