import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
// import InteractiveBackground from "./components/InteractiveBackground"; // 1. KOMENTARI IMPORT INI

function App() {
  return (
    <div className="relative min-h-screen bg-primary font-poppins selection:bg-[#00E1FF] selection:text-primary overflow-x-hidden">
      
      {/* 1. BACKGROUND LAYER */}
      {/* 2. KOMENTARI KOMPONEN INI AGAR TIDAK DI-RENDER */}
      {/* <InteractiveBackground /> */}

      {/* 2. UI LAYER */}
      <CustomCursor />
      <Navbar />
      
      {/* 3. CONTENT LAYER */}
      <main className="flex flex-col gap-0 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
      </main>

      <Footer />
    </div>
  );
}

export default App;