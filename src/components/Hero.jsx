import { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaReact, FaJs, FaNodeJs, FaMusic } from "react-icons/fa"; // Added FaMusic
import { SiTailwindcss } from "react-icons/si";

// --- KONFIGURASI TEXT ---
const ROLES = ["Front End Developer", "UI/UX Designer", "Informatics Student"];

// --- KOMPONEN TYPING TEXT (DIPERBAIKI) ---
const TypewriterText = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const tick = () => {
      let i = roleIndex % ROLES.length;
      let fullText = ROLES[i];
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(50);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => prev + 1);
        setDelta(150);
      }
    };

    let ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, roleIndex, delta]);

  return (
    <span className="text-[#00E1FF] drop-shadow-[0_0_10px_rgba(0,225,255,0.8)] font-mono">
      {text}<span className="animate-pulse">|</span>
    </span>
  );
};

// --- KOMPONEN ITEM VS CODE MELAYANG (OPTIMIZED) ---
const FloatingElement = ({ src, delay, x, y, size }) => {
    return (
        <motion.img 
            src={src}
            className="absolute z-10 opacity-40 pointer-events-none hidden md:block will-change-transform transform-gpu" // Optimization
            style={{ width: size, top: y, left: x }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
                y: [0, -25, 0], 
                rotate: [0, 5, -5, 0],
                opacity: 0.5
            }}
            transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: delay 
            }}
        />
    )
}

// --- KOMPONEN DEKORASI SAMPING (OPTIMIZED) ---
const TechLine = ({ side }) => {
    const positionClass = side === 'left' ? 'left-6' : 'right-6';
    return (
        <div className={`absolute ${positionClass} top-1/2 -translate-y-1/2 h-[60vh] hidden md:flex flex-col items-center justify-center gap-4 z-20`}>
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#00E1FF]/30 to-transparent relative overflow-hidden">
                <motion.div 
                    className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-[#00E1FF] to-transparent will-change-transform" // Optimization
                    animate={{ top: ["-20%", "120%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: side === 'left' ? 0 : 2 }}
                />
            </div>
        </div>
    )
}

// --- KOMPONEN UTAMA HERO ---
const Hero = () => {
  // 1. SETUP STATE MUSIK (EASTER EGG)
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 2. FUNGSI TOGGLE MUSIK
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.4; // Volume 40%
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary px-4 md:px-20 pt-20 transform-gpu"> {/* Optimization: transform-gpu */}
      
      {/* --- AUDIO ELEMENT (Hidden) --- */}
      <audio ref={audioRef} loop>
        <source src="/assets/music/SZA - Kill Bill (Official Audio).mp3" type="audio/mp3" />
      </audio>

      {/* =========================================
          1. BACKGROUND LAYER 
         ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gambar Rumah Kuno */}
        <img 
            src="/assets/ancient_house.webp" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity will-change-transform" // Optimization
            alt="Background" 
        />
        {/* Vignette & Grading */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F0041_90%)]"></div>
        <div className="absolute inset-0 bg-[#0F0041]/70 mix-blend-multiply"></div>

        {/* Efek Atmosfer - OPTIMIZED: Slower animation & will-change */}
        <motion.div 
            className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] will-change-transform" // Reduced blur slightly for performance
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#00E1FF]/20 rounded-full blur-[100px] will-change-transform" // Reduced blur slightly for performance
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 2. FLOATING ICONS */}
      <FloatingElement src="/assets/vscode_1.png" size="60px" x="5%" y="20%" delay={0} />
      <FloatingElement src="/assets/vscode_2.png" size="50px" x="90%" y="15%" delay={1.5} />
      <FloatingElement src="/assets/vscode_3.png" size="40px" x="10%" y="80%" delay={0.5} />
      <FloatingElement src="/assets/vscode_4.png" size="70px" x="85%" y="70%" delay={2} />

      {/* 3. TECH LINES */}
      <TechLine side="left" />
      <TechLine side="right" />

      {/* =========================================
          4. KONTEN UTAMA
         ========================================= */}
      <div className="z-10 w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">
        
        {/* --- KOLOM KIRI: TEXT & BUTTONS --- */}
        <motion.div 
            className="w-full md:w-1/2 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Tagline Kecil + EASTER EGG TRIGGER */}
            <motion.div 
                onClick={toggleMusic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                    flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-sm w-fit cursor-pointer border transition-all duration-500
                    ${isPlaying 
                        ? "bg-[#00E1FF]/20 border-[#00E1FF] shadow-[0_0_15px_rgba(0,225,255,0.5)]" 
                        : "bg-white/5 border-white/10 hover:bg-white/10" 
                    }
                `}
            >
                <span className="text-yellow-400 relative">
                    {isPlaying ? (
                        <FaMusic className="animate-bounce text-[#00E1FF]" />
                    ) : (
                        <span className="animate-pulse">🚀</span>
                    )}
                </span>
                
                <span className="text-xs font-poppins text-gray-300 tracking-wider uppercase select-none">
                    {isPlaying ? "Now Playing: Coding Vibes..." : "thriving from promises"}
                </span>

                {/* Mini Visualizer when playing */}
                {isPlaying && (
                    <div className="flex gap-1 h-3 items-end ml-2">
                        <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-[#00E1FF] rounded-full"></motion.div>
                        <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-[#00E1FF] rounded-full"></motion.div>
                        <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-1 bg-[#00E1FF] rounded-full"></motion.div>
                    </div>
                )}
            </motion.div>

            {/* Judul Besar */}
            <h1 className="text-5xl md:text-7xl font-poppins font-black text-white leading-[1.1] mb-4 drop-shadow-[0_0_20px_rgba(0,225,255,0.3)]">
                WELCOME TO MY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#00FFA3]">PORTFOLIO</span>
            </h1>

            {/* Typing Subtitle */}
            <div className="text-2xl md:text-3xl font-bold mb-6 text-gray-200">
                I am a <TypewriterText />
            </div>

            {/* Deskripsi */}
            <p className="text-gray-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
                I craft responsive and visually engaging websites using React, Tailwind CSS, and modern web technologies. Transforming ideas into digital reality.
            </p>

            {/* TECH STACK BUTTONS (Glassmorphism) */}
            <div className="flex flex-wrap gap-3 mb-8">
                {[
                    { icon: FaReact, text: "React" },
                    { icon: FaJs, text: "Javascript" },
                    { icon: FaNodeJs, text: "Node.js" },
                    { icon: SiTailwindcss, text: "Tailwind" }
                ].map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 px-5 py-2.5 bg-[#1A1A2E]/60 border border-[#00E1FF]/20 rounded-full hover:bg-[#00E1FF]/10 hover:border-[#00E1FF] transition-all duration-300 cursor-default group backdrop-blur-md">
                        <tech.icon className="text-[#00E1FF] group-hover:scale-110 transition-transform" />
                        <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white">{tech.text}</span>
                    </div>
                ))}
            </div>

            {/* SOCIAL ICONS */}
            {/* <div className="flex gap-6 items-center">
                <a href="#" className="text-2xl text-gray-400 hover:text-white hover:scale-125 transition-transform duration-300"><FaGithub /></a>
                <a href="#" className="text-2xl text-gray-400 hover:text-pink-500 hover:scale-125 transition-transform duration-300"><FaInstagram /></a>
                <a href="#" className="text-2xl text-gray-400 hover:text-blue-500 hover:scale-125 transition-transform duration-300"><FaLinkedin /></a>
            </div> */}
        </motion.div>

        {/* --- KOLOM KANAN: FOTO PROFIL --- */}
        <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            {/* Background Glow di belakang foto */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00E1FF]/20 rounded-full blur-[80px] -z-10 will-change-transform"></div>
            
            {/* Foto Profil */}
            <div className="relative">
                <img 
                    loading="lazy"
                    src="/assets/profile/profile.webp" 
                    alt="Raffael Fidhera" 
                    className="w-[280px] md:w-[320px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative z-10 hover:scale-[1.02] transition-transform duration-500" 
                />
                
                {/* Dekorasi Garis Tech di sekitar foto */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#00E1FF]/50 rounded-tr-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#00E1FF]/50 rounded-bl-3xl"></div>
            </div>
        </motion.div>

      </div>

      {/* 5. GRID FLOOR - Optimized opacity and render */}
      <div className="absolute bottom-0 w-full h-[150px] z-0 pointer-events-none opacity-60">
          <div className="w-full h-full bg-gradient-to-t from-[#0F0041] via-transparent to-transparent absolute top-0 z-20"></div>
          <div 
            className="w-full h-full opacity-20"
            style={{
                backgroundImage: `linear-gradient(#00E1FF 1px, transparent 1px), linear-gradient(90deg, #00E1FF 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg) translateY(50px) scale(1.5)',
                transformOrigin: 'bottom center',
                maskImage: 'linear-gradient(to top, black, transparent)',
                willChange: 'transform' // GPU Hint
            }}
          ></div>
      </div>

    </section>
  );
};

export default Hero;