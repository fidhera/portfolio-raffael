import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"; 
//import MarqueeLogs from "./MarqueeLogs"; 
import { FaImage } from "react-icons/fa6"; 

const About = () => {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-[#0F0041] transform-gpu">
      
      {/* 1. BACKGROUND (Static - Ringan & GPU Accelerated) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
            src="/assets/ancient_house2.webp" 
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity will-change-transform" 
            alt="Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0041] via-[#0F0041]/90 to-[#0F0041] opacity-95"></div>
        {/* Grid pattern yang lebih ringan */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      </div>

      {/* 2. TOMBOL TOGGLE */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPhoto(!showPhoto)}
        className="absolute top-28 right-6 md:top-32 md:right-20 z-40 p-3 md:p-4 bg-[#00E1FF]/10 border-2 border-[#00E1FF]/30 rounded-full hover:bg-[#00E1FF]/20 hover:border-[#00E1FF] transition-colors duration-300"
      >
        <FaImage className={`text-xl md:text-2xl text-[#00E1FF] transition-transform duration-500 ${showPhoto ? 'rotate-180' : ''}`} />
      </motion.button>

      {/* 3. TAGLINE ATAS */}
      <div className="absolute top-10 md:top-14 w-full flex justify-center z-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-2 bg-[#00E1FF]/5 border border-[#00E1FF]/20 rounded-full backdrop-blur-sm"
          >
              <span className="text-[#00E1FF] text-lg">✧</span>
              <span className="text-gray-300 font-poppins text-[10px] md:text-sm tracking-wider uppercase text-center">
                  Passionate about coding and creative technology
              </span>
              <span className="text-[#00E1FF] text-lg">✧</span>
          </motion.div>
      </div>

      {/* =========================================
          4. CONTAINER UTAMA
         ========================================= */}
      <div className="z-10 w-full max-w-7xl px-4 md:px-20 mt-10 h-full min-h-[500px] flex items-center justify-center relative">
        
        {/* WRAPPER AGAR ANIMASI HALUS */}
        <motion.div 
            layout 
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full ${showPhoto ? 'justify-between' : 'justify-center'}`}
        >

            {/* --- KOLOM TEKS --- */}
            <motion.div 
                layout 
                className="flex flex-col items-start text-left max-w-2xl relative z-20 w-full"
                style={{ margin: showPhoto ? "0" : "0 auto" }} 
            >
                <motion.div layout className="mb-6 w-full">
                    <p className="font-mono text-[#00E1FF] text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00E1FF] rounded-full animate-pulse"></span>
                        C:/Users/Raffael/Profile
                    </p>
                    <h2 className="text-5xl md:text-7xl font-poppins font-black text-white leading-tight">
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#00FFA3]">ME.</span>
                    </h2>
                </motion.div>
                
                <motion.div layout className="w-24 h-1.5 bg-gradient-to-r from-[#00E1FF] to-transparent mb-8 rounded-full"></motion.div>

                <motion.div layout className="space-y-6 text-gray-300 font-poppins text-base md:text-lg leading-relaxed">
                    
                    {/* PARAGRAF 1 */}
                    {/* INDO: Seorang mahasiswa Teknik Informatika Universitas Gunadarma yang tidak hanya berbicara dengan kode, tapi juga dengan manusia. */}
                    <p>
                        An <span className="font-bold text-[#00E1FF]">Informatics Engineering</span> student at Gunadarma University who speaks not only in code but also connects with people through technology.
                    </p>
                    
                    {/* PARAGRAF 2 */}
                    {/* INDO: Saat ini aktif sebagai Asisten Laboratorium, tempat saya mempertajam fundamental teknis sembari mengajar. */}
                    <p className="flex flex-wrap items-center gap-2">
                        Currently sharpening my technical fundamentals while teaching as a 
                        <span className="inline-block font-bold text-white bg-[#00E1FF]/10 px-3 py-1 rounded-md border border-[#00E1FF]/20 text-sm md:text-base whitespace-nowrap">
                            Laboratory Assistant
                        </span>.
                    </p>
                    
                    {/* PARAGRAF 3 */}
                    {/* INDO: Di luar akademik, saya menyeimbangkan logika dengan aksi nyata mengabdi di BEM FTI serta menangani kebutuhan teknis di Divisi IT SXC Intersummit. */}
                    <p>
                        Beyond academics, I balance logic with real-world impact by serving at <span className="font-bold text-white border-b border-red-500/50 hover:border-red-500 transition-colors cursor-default">BEM FTI</span> and managing technical needs as part of the IT Division at <span className="font-bold text-white border-b border-purple-500/50 hover:border-purple-500 transition-colors cursor-default">SXC Intersummit</span>.
                    </p>

                </motion.div>

                <motion.div layout className="mt-10 w-full bg-[#00E1FF]/5 border-l-4 border-[#00E1FF] p-4 rounded-r-lg backdrop-blur-sm">
                    <p className="text-gray-400 font-mono italic text-sm md:text-base">
                        "Great things never come from comfort zones."
                    </p>
                </motion.div>
            </motion.div>

            {/* --- KOLOM FOTO (MUNCUL DARI KANAN) --- */}
            <AnimatePresence mode="popLayout">
                {showPhoto && (
                    <motion.div 
                        initial={{ opacity: 0, x: 50, scale: 0.9 }} // Jarak x dikurangi biar ga berat render
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10 mt-8 md:mt-0"
                    >
                        {/* CARD CONTAINER */}
                        <div className="relative p-[2px] rounded-2xl overflow-hidden group w-full max-w-[320px] md:max-w-[380px]">
                             {/* Border Gradient Diam */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00E1FF] via-transparent to-[#00FFA3] opacity-60"></div>
                            
                            {/* Inner Card */}
                            <div className="relative z-10 bg-[#0F0041]/90 rounded-xl p-6 border border-[#00E1FF]/30 backdrop-blur-md h-full flex flex-col items-center">
                                 
                                {/* Glow Belakang (Dikurangi blurnya) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[#00E1FF]/10 rounded-full blur-[30px]"></div>

                                {/* Foto Utama */}
                                <img 
                                    loading="lazy"
                                    src="/assets/profile/profile_rb.webp" 
                                    alt="Raffael Fidhera" 
                                    // Pake CSS drop-shadow biasa, jangan filter SVG yang berat
                                    className="w-[240px] md:w-[300px] h-auto object-contain relative z-10 drop-shadow-lg" 
                                />
                                
                                {/* Dekorasi Sudut */}
                                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#00E1FF]"></div>
                                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#00E1FF]"></div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
      </div>

    </section>
  );
};

export default About;