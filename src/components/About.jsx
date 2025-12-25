import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"; 
//import MarqueeLogs from "./MarqueeLogs"; 
import { FaImage } from "react-icons/fa6"; 

const About = () => {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-[#0F0041]">
      
      {/* 1. BACKGROUND (Static - Ringan) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
            src="/assets/ancient_house2.png" 
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity" 
            alt="Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0041] via-[#0F0041]/90 to-[#0F0041] opacity-95"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* 2. TOMBOL TOGGLE (Fixed Position agar tidak ikut gerak) */}
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
            className="flex items-center gap-3 px-6 py-2 bg-[#00E1FF]/5 border border-[#00E1FF]/20 rounded-full backdrop-blur-sm"
          >
              <span className="text-[#00E1FF] text-lg">✧</span>
              <span className="text-gray-300 font-poppins text-xs md:text-sm tracking-wider uppercase">
                  Passionate about coding and creative technology
              </span>
              <span className="text-[#00E1FF] text-lg">✧</span>
          </motion.div>
      </div>

      {/* =========================================
          4. CONTAINER UTAMA (LAYOUT GRID)
          Teknik: Menggunakan Flexbox Container
         ========================================= */}
      <div className="z-10 w-full max-w-7xl px-4 md:px-20 mt-10 h-full min-h-[500px] flex items-center justify-center relative">
        
        {/* WRAPPER AGAR ANIMASI HALUS */}
        <motion.div 
            layout // MAGIC PROP: Ini kuncinya biar smooth!
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full ${showPhoto ? 'justify-between' : 'justify-center'}`}
        >

            {/* --- KOLOM TEKS --- */}
            <motion.div 
                layout // Ikut bergerak smooth saat layout berubah
                className="flex flex-col items-start text-left max-w-2xl relative z-20"
                // Saat foto off: Kita posisikan dia di tengah secara visual, tapi tetap text-left biar rapi
                style={{ margin: showPhoto ? "0" : "0 auto" }} 
            >
                <motion.div layout className="mb-6 w-full">
                    <p className="font-mono text-[#00E1FF] text-sm tracking-[0.2em] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00E1FF] rounded-full animate-pulse"></span>
                        C:/Users/Raffael/Profile
                    </p>
                    <h2 className="text-5xl md:text-7xl font-poppins font-black text-white leading-tight">
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#00FFA3]">ME.</span>
                    </h2>
                </motion.div>
                
                <motion.div layout className="w-24 h-1.5 bg-gradient-to-r from-[#00E1FF] to-transparent mb-8 rounded-full"></motion.div>

                <motion.div layout className="space-y-6 text-gray-300 font-poppins text-base md:text-lg leading-relaxed">
                    <p>
                        Seorang mahasiswa <span className="font-bold text-[#00E1FF]">Teknik Informatika</span> Universitas Gunadarma yang tidak hanya berbicara dengan kode, tapi juga dengan manusia.
                    </p>
                    <p>
                        Saat ini aktif sebagai <span className="font-bold text-white bg-[#00E1FF]/10 px-3 py-1 rounded-md border border-[#00E1FF]/20">Asisten Laboratorium</span>, tempat saya mempertajam fundamental teknis sembari mengajar. 
                    </p>
                    <p>
                        Di luar akademik, saya menyeimbangkan logika dengan aksi nyata mengabdi di <span className="font-bold text-white border-b border-red-500/50 hover:border-red-500 transition-colors cursor-default">BEM FTI</span> serta menangani kebutuhan teknis di Divisi IT <span className="font-bold text-white border-b border-purple-500/50 hover:border-purple-500 transition-colors cursor-default">SXC Intersummit</span>.
                    </p>
                </motion.div>

                <motion.div layout className="mt-10 w-full bg-[#00E1FF]/5 border-l-4 border-[#00E1FF] p-4 rounded-r-lg backdrop-blur-sm">
                    <p className="text-gray-400 font-mono italic text-sm md:text-base">
                        "Whoever strives shall succeed."
                    </p>
                </motion.div>
            </motion.div>

            {/* --- KOLOM FOTO (MUNCUL DARI KANAN) --- */}
            <AnimatePresence mode="popLayout">
                {showPhoto && (
                    <motion.div 
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 50, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 120, damping: 15 }} // Spring animation biar kenyal dan smooth
                        className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10"
                    >
                        {/* CARD CONTAINER */}
                        <div className="relative p-[2px] rounded-2xl overflow-hidden group w-full max-w-[380px]">
                             {/* Border Gradient Diam (Lebih ringan dari animasi spin) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00E1FF] via-transparent to-[#00FFA3] opacity-60"></div>
                            
                            {/* Inner Card */}
                            <div className="relative z-10 bg-[#0F0041]/90 rounded-xl p-6 border border-[#00E1FF]/30 backdrop-blur-xl h-full flex flex-col items-center">
                                 
                                {/* Glow Belakang (Dikurangi blurnya biar tidak berat) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#00E1FF]/20 rounded-full blur-[40px]"></div>

                                {/* Foto Utama */}
                                <img 
                                    src="/assets/profile_rb.png" 
                                    alt="Raffael Fidhera" 
                                    // Drop shadow statis (class CSS) jauh lebih ringan daripada filter framer-motion
                                    className="w-[260px] md:w-[300px] h-auto object-contain relative z-10 drop-shadow-xl" 
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

      {/* MARQUEE LOGO */}
      {/* <div className="w-full z-10 mt-20"> 
          <MarqueeLogs />
      </div> */}

    </section>
  );
};

export default About;