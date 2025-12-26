// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaDownload, FaFilePdf, FaBriefcase, FaGraduationCap, FaCode, FaMedal, FaUsers, FaLayerGroup, FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="relative w-full px-4 md:px-20 py-24 bg-primary overflow-hidden flex flex-col items-center justify-center min-h-screen transform-gpu">
      
      {/* =========================================
          1. BACKGROUND LAYER (OPTIMIZED)
         ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gambar Rumah - Tambahkan transform-gpu agar dirender GPU */}
        <img 
            src="/assets/ancient_house.png" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity transform-gpu will-change-transform" 
            alt="Background" 
        />
        
        {/* Gradient Static - Tidak perlu dianimasikan */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F0041_90%)]"></div>
        <div className="absolute inset-0 bg-[#0F0041]/70 mix-blend-multiply"></div>

        {/* Efek Atmosfer - OPTIMASI: Durasi diperlambat & Will-Change */}
        <motion.div 
            className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] will-change-transform"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }} // Diperlambat biar ringan
        />
        <motion.div 
            className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#00E1FF]/10 rounded-full blur-[100px] will-change-transform"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }} // Diperlambat biar ringan
        />
      </div>

      {/* =========================================
          2. HEADER SECTION
         ========================================= */}
      <div className="relative z-10 text-center mb-16">
        <p className="font-mono text-[#00E1FF] text-sm tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-[#00E1FF] rounded-full animate-pulse"></span>
            C:/Users/Raffael/Documents
        </p>
        <h2 className="text-5xl md:text-7xl font-poppins font-black text-white leading-tight drop-shadow-[0_0_30px_rgba(0,225,255,0.3)]">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#00FFA3]">RESUME.</span>
        </h2>
      </div>

      {/* =========================================
          3. DIGITAL DOSSIER CARD (OPTIMIZED)
         ========================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // PENTING: Animasi cuma sekali pas discroll, biar ga berat
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-[#00E1FF]/50 via-transparent to-[#00FFA3]/50">
            
            {/* Inner Glass Card - Kurangi Blur jika masih lag (backdrop-blur-xl -> md) */}
            <div className="bg-[#1a1a2e]/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden group transform-gpu">
                
                {/* Dekorasi HUD Statis */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#00E1FF]/50"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#00E1FF]/50"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#00E1FF]/50"></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#00E1FF]/50"></div>

                <div className="flex flex-col md:flex-row items-center gap-10 relative z-20">
                    
                    {/* Kiri: Icon Besar */}
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                        <div className="relative w-48 h-48 flex items-center justify-center bg-[#00E1FF]/10 rounded-full border border-[#00E1FF]/30 shadow-[0_0_40px_rgba(0,225,255,0.2)] mb-6 transform-gpu">
                            <FaFilePdf className="text-7xl text-[#00E1FF] drop-shadow-lg" />
                            {/* Orbiting Dot - Gunakan SVG circle biar lebih ringan dari div border */}
                            <motion.div 
                                className="absolute inset-0 rounded-full border border-dashed border-[#00E1FF]/40"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }} // Diperlambat
                                style={{ willChange: "transform" }}
                            />
                        </div>
                        
                        <div className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            AVAILABLE FOR WORK
                        </div>
                    </div>

                    {/* Kanan: Stats */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white mb-2">Raffael Fidhera Yahya</h3>
                        <p className="text-gray-400 mb-8 font-mono text-sm border-b border-white/10 pb-4 inline-block">
                            Fullstack Developer & UI/UX Designer
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                            <StatCard icon={<FaGraduationCap className="text-[#00E1FF]" />} label="Education" value="Gunadarma" />
                            <StatCard icon={<FaBriefcase className="text-[#00FFA3]" />} label="Experience" value="Lab Assistant" />
                            <StatCard icon={<FaCode className="text-purple-400" />} label="Projects" value="5+ Completed" />
                            <StatCard icon={<FaMedal className="text-yellow-400" />} label="Certificates" value="8+ Earned" />
                            <StatCard icon={<FaUsers className="text-pink-400" />} label="Organization" value="BEM FTI" />
                            <StatCard icon={<FaLayerGroup className="text-cyan-400" />} label="Tech Stack" value="15+ Tools" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                             <motion.a 
                                href="/assets/Doc/CV ats updatee.pdf" 
                                download="CV_Raffael_Fidhera.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-[#00E1FF] to-[#00FFA3] text-[#050505] font-bold rounded-full shadow-[0_0_20px_rgba(0,225,255,0.4)] hover:shadow-[0_0_30px_rgba(0,225,255,0.6)] transition-all cursor-pointer"
                            >
                                <FaDownload /> Download CV
                            </motion.a>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-3 px-8 py-3 border border-[#00E1FF]/50 text-[#00E1FF] font-bold rounded-full hover:bg-[#00E1FF]/10 transition-all cursor-pointer"
                                onClick={() => window.open("/assets/Doc/CV ats updatee.pdf", "_blank")}
                            >
                                <FaEye className="text-lg" /> Preview
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Hiasan Scan Line - REVISI: Pake Translate Y (GPU) bukan Top (CPU) */}
                <motion.div 
                    className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00E1FF] to-transparent opacity-50 will-change-transform"
                    animate={{ y: ["0%", "500px", "0%"] }} // Asumsi tinggi card sekitar 500px
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
      </motion.div>

      {/* 4. GRID FLOOR - OPTIMIZED */}
      <div className="absolute bottom-0 w-full h-[150px] z-0 pointer-events-none opacity-60">
          <div className="w-full h-full bg-gradient-to-t from-[#0F0041] via-transparent to-transparent absolute top-0 z-20"></div>
          {/* Mengurangi kompleksitas grid pattern */}
          <div 
            className="w-full h-full opacity-20"
            style={{
                backgroundImage: `linear-gradient(#00E1FF 1px, transparent 1px), linear-gradient(90deg, #00E1FF 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg) translateY(50px) scale(1.5)',
                transformOrigin: 'bottom center',
                willChange: 'transform'
            }}
          ></div>
      </div>

     {/* GLASS BAR - ANIMATED MARQUEE */}
      <div className="absolute bottom-0 w-full h-16 bg-white/5 backdrop-blur-md border-t border-white/10 z-30 flex items-center overflow-hidden pointer-events-none">
         {/* Container Gerak */}
         <motion.div 
            className="flex whitespace-nowrap opacity-30 font-mono text-sm text-[#00E1FF]"
            animate={{ x: ["0%", "-50%"] }} // Bergerak dari 0 sampai setengah panjang container
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 20 // Atur kecepatan di sini (makin besar angka, makin pelan)
            }}
         >
             {/* --- SET 1 (Teks Asli) --- */}
             <div className="flex gap-10 pr-10">
                <span>/// SYSTEM_READY ///</span>
                <span>NEXT_MODULE: RESUME_DATA</span>
                <span>/// LOADING_ASSETS... ///</span>
                <span>SECURE_CONNECTION_ESTABLISHED</span>
                <span>/// SYSTEM_OPTIMIZED ///</span>
             </div>

             {/* --- SET 2 (Duplikat untuk Looping Mulus) --- */}
             <div className="flex gap-10 pr-10">
                <span>/// SYSTEM_READY ///</span>
                <span>NEXT_MODULE: RESUME_DATA</span>
                <span>/// LOADING_ASSETS... ///</span>
                <span>SECURE_CONNECTION_ESTABLISHED</span>
                <span>/// SYSTEM_OPTIMIZED ///</span>
             </div>
         </motion.div>
      </div>

    </section>
  );
};

// Komponen Kecil dipisah biar render lebih cepat
const StatCard = ({ icon, label, value }) => (
    <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
        <div className="mb-2 text-lg">{icon}</div>
        <span className="text-[10px] text-gray-400 uppercase tracking-wider">{label}</span>
        <span className="text-white font-bold text-xs md:text-sm">{value}</span>
    </div>
);

export default Resume;