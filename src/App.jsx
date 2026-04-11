import { motion } from "framer-motion";
import Hero from "./Hero";
import Navbar from "./components/Navbar/Navbar";
export default function App() {
  return (

    
    <div className="relative min-h-screen bg-[#050816] overflow-hidden">
      {/* GRADIENT GLOW (BOTTOM LEFT) */}
      <div
        className="absolute fixed bottom-[550px] left-[-100px] w-[400px] h-[400px] 
        bg-blue-600 opacity-30 blur-[200px] rounded-full"></div>

        <div className="realtive z-50">

      <Navbar></Navbar>
        </div>

   
<div className="relative z-10">
  <Hero />
  


</div>
<div className="relative z-10">
  <Hero />
  


</div>
<div className="relative z-10">
  <Hero />
  


</div>
      {
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:25px_25px]" />
      }

      
    </div>

  );
}
