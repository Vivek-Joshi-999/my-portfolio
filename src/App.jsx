import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050816] overflow-hidden  ">
      {/* BACKGROUND */}
      <div className="absolute bottom-[550px] left-[-100px] w-[400px] h-[400px] bg-blue-600 opacity-30 blur-[200px] rounded-full"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:25px_25px]" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* NAVBAR */}

        <Navbar />

        {/* HERO */}
        <main className="flex flex-col items-center  ">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}
