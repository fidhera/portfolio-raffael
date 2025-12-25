// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// Menambahkan icon baru untuk stats tambahan
import { FaDownload, FaFilePdf, FaBriefcase, FaGraduationCap, FaCode, FaMedal, FaUsers, FaLayerGroup, FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="relative w-full px-4 md:px-20 py-24 bg-primary overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      {/* =========================================
          1. BACKGROUND LAYER (Style ala Hero)
         ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gambar Rumah Kuno */}
        <img 
            src="/assets/ancient_house.png" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            alt="Background" 
        />
        {/* Vignette & Grading */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F0041_90%)]"></div>
        <div className="absolute inset-0 bg-[#0F0041]/70 mix-blend-multiply"></div>

        {/* Efek Atmosfer (Ungu & Biru) */}
        <motion.div 
            className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
            className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#00E1FF]/20 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity }}
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
          3. DIGITAL DOSSIER CARD
         ========================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Border Gradient Container */}
        <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-[#00E1FF]/50 via-transparent to-[#00FFA3]/50">
            
            {/* Inner Glass Card */}
            <div className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden group">
                
                {/* Dekorasi HUD (Pojok-pojok) */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#00E1FF]/50"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#00E1FF]/50"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#00E1FF]/50"></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#00E1FF]/50"></div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    
                    {/* Kiri: Icon Besar & Visual */}
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                        <div className="relative w-48 h-48 flex items-center justify-center bg-[#00E1FF]/10 rounded-full border border-[#00E1FF]/30 shadow-[0_0_40px_rgba(0,225,255,0.2)] group-hover:scale-105 transition-transform duration-500 mb-6">
                            <FaFilePdf className="text-7xl text-[#00E1FF] drop-shadow-lg" />
                            {/* Orbiting Dot */}
                            <motion.div 
                                className="absolute inset-0 border border-dashed border-[#00E1FF]/40 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                        
                        {/* Status Badge */}
                        <div className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            AVAILABLE FOR WORK
                        </div>
                    </div>

                    {/* Kanan: Ringkasan & Tombol */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white mb-2">Raffael Fidhera Yahya</h3>
                        <p className="text-gray-400 mb-8 font-mono text-sm border-b border-white/10 pb-4 inline-block">
                            Fullstack Developer & UI/UX Designer
                        </p>

                        {/* Extended Mini Stats (6 Cards) */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                            
                            {/* 1. Education */}
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                                <FaGraduationCap className="text-[#00E1FF] mb-2 text-lg" />
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Education</span>
                                <span className="text-white font-bold text-xs md:text-sm">Gunadarma</span>
                            </div>

                            {/* 2. Experience */}
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                                <FaBriefcase className="text-[#00FFA3] mb-2 text-lg" />
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Experience</span>
                                <span className="text-white font-bold text-xs md:text-sm">Lab Assistant</span>
                            </div>

                            {/* 3. Projects */}
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                                <FaCode className="text-purple-400 mb-2 text-lg" />
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Projects</span>
                                <span className="text-white font-bold text-xs md:text-sm">5+ Completed</span>
                            </div>

                            {/* 4. Certificates */}
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                                <FaMedal className="text-yellow-400 mb-2 text-lg" />
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Certificates</span>
                                <span className="text-white font-bold text-xs md:text-sm">8+ Earned</span>
                            </div>

                            {/* 5. Organization */}
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                                <FaUsers className="text-pink-400 mb-2 text-lg" />
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Organization</span>
                                <span className="text-white font-bold text-xs md:text-sm">BEM FTI</span>
                            </div>

                            {/* 6. Skills */}
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                                <FaLayerGroup className="text-cyan-400 mb-2 text-lg" />
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Tech Stack</span>
                                <span className="text-white font-bold text-xs md:text-sm">15+ Tools</span>
                            </div>

                        </div>

                        {/* Tombol Download & Preview */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <motion.a 
                                // GANTI PATH INI SESUAI LOKASI FILE ANDA DI FOLDER PUBLIC
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

                {/* Hiasan Scan Line (Animasi Turun Naik) */}
                <motion.div 
                    className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00E1FF] to-transparent opacity-50"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
      </motion.div>

      {/* 4. GRID FLOOR DECORATION (Opsional: Agar mirip Home banget) */}
      <div className="absolute bottom-0 w-full h-[150px] z-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-[#0F0041] via-transparent to-transparent absolute top-0 z-20"></div>
          <div 
            className="w-full h-full opacity-20"
            style={{
                backgroundImage: `linear-gradient(#00E1FF 1px, transparent 1px), linear-gradient(90deg, #00E1FF 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg) translateY(50px) scale(1.5)',
                transformOrigin: 'bottom center',
                maskImage: 'linear-gradient(to top, black, transparent)'
            }}
          ></div>
      </div>

{/* --- GLASS BAR DIVIDER --- */}
<div className="absolute bottom-0 w-full h-16 bg-white/5 backdrop-blur-md border-t border-white/10 z-30 flex items-center justify-center overflow-hidden">
    <div className="flex gap-10 opacity-30 font-mono text-sm text-[#00E1FF] whitespace-nowrap animate-marquee">
        <span>/// SYSTEM_TRANSITION ///</span>
        <span>NEXT_MODULE: RESUME_DATA</span>
        <span>/// LOADING_ASSETS... ///</span>
        <span>SECURE_CONNECTION_ESTABLISHED</span>
        <span>/// SYSTEM_TRANSITION ///</span>
        <span>NEXT_MODULE: RESUME_DATA</span>
        <span>/// LOADING_ASSETS... ///</span>
    </div>
</div>
    </section>
  );
};

export default Resume;