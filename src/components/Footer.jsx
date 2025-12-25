// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative w-full pt-20 pb-10 px-4 md:px-20 bg-[#050505] overflow-hidden flex flex-col justify-between min-h-[80vh]">
      
      {/* =========================================
          1. BACKGROUND LAYER (Sama seperti Resume)
         ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gambar Rumah Kuno */}
        <img 
            src="/assets/ancient_house.png" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale" 
            alt="Background" 
        />
        {/* Overlay Gradient agar teks terbaca jelas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_0%,#050505_80%)]"></div>

        {/* Efek Glow Pojok Kanan Bawah */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#00E1FF]/10 rounded-full blur-[120px]"></div>
      </div>

      {/* =========================================
          2. MAIN CONTENT
         ========================================= */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0 mt-10">
        
        {/* --- KIRI: BIG TYPOGRAPHY & CTA --- */}
        <div className="w-full md:w-2/3">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="flex items-center gap-2 text-[#00E1FF] font-mono tracking-widest mb-4">
                    <span className="w-2 h-2 bg-[#00E1FF] rounded-full animate-pulse"></span>
                    WHAT'S NEXT?
                </p>
                
                {/* Judul Raksasa */}
                <h1 className="text-6xl md:text-[130px] font-black leading-[0.9] text-white tracking-tighter mix-blend-screen">
                    LET'S <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] via-white to-[#00E1FF] bg-[length:200%_auto] animate-gradient">
                        CONNECT
                    </span>
                </h1>

                <p className="text-gray-400 text-lg md:text-2xl mt-8 max-w-xl font-light">
                    Punya ide gila atau proyek menantang? <br />
                    Mari berkolaborasi dan bangun sesuatu yang legendaris.
                </p>

                {/* Tombol Utama */}
                <motion.a 
                    href="mailto:fidheraa@gmail.com"
                    whileHover={{ scale: 1.05, gap: "1.5rem" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 inline-flex items-center gap-4 px-10 py-5 bg-[#00E1FF] text-[#050505] rounded-full font-bold text-lg md:text-xl shadow-[0_0_40px_rgba(0,225,255,0.4)] hover:shadow-[0_0_60px_rgba(0,225,255,0.6)] transition-all"
                >
                    Say Hello <FaArrowRight />
                </motion.a>
            </motion.div>
        </div>

        {/* --- KANAN: CONTACT INFO & SOCIALS --- */}
        <div className="w-full md:w-1/3 flex flex-col gap-10 md:items-end text-left md:text-right">
            
            {/* Contact Details */}
            <div className="space-y-6">
                <div className="group">
                    <h4 className="text-gray-500 font-mono text-sm mb-1 group-hover:text-[#00E1FF] transition-colors">EMAIL ME</h4>
                    <a href="mailto:fidheraa@gmail.com" className="text-xl md:text-2xl text-white font-bold hover:text-[#00E1FF] transition-colors">
                        fidheraa@gmail.com
                    </a>
                </div>
                
                <div className="group">
                    <h4 className="text-gray-500 font-mono text-sm mb-1 group-hover:text-[#00E1FF] transition-colors">CALL / WA</h4>
                    <a href="https://wa.me/6285817710869" target="_blank" rel="noreferrer" className="text-xl md:text-2xl text-white font-bold hover:text-[#00E1FF] transition-colors">
                        +62 858 1771 0869
                    </a>
                </div>

                <div className="group">
                    <h4 className="text-gray-500 font-mono text-sm mb-1 group-hover:text-[#00E1FF] transition-colors">BASE STATION</h4>
                    <p className="text-xl md:text-2xl text-white font-bold flex items-center md:justify-end gap-2">
                       <FaMapMarkerAlt className="text-[#00E1FF]" /> Tangerang Selatan
                    </p>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
                {[
                    { icon: <FaGithub />, link: "https://github.com/fidhera" },
                    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/raffael-fidhera-yahya-254336301/" },
                    { icon: <FaInstagram />, link: "https://www.instagram.com/fidhera/" },
                    { icon: <FaWhatsapp />, link: "https://wa.me/6285817710869" }
                ].map((social, idx) => (
                    <motion.a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -5, backgroundColor: "#00E1FF", color: "#000" }}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white text-xl transition-all duration-300 bg-white/5 backdrop-blur-sm"
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </div>

            {/* Floating Decoration Pills (Moved here for better layout) */}
            <div className="flex flex-wrap justify-end gap-3 max-w-xs opacity-60">
                {['UI/UX Design', 'Frontend Dev', 'Backend Dev', 'Fullstack'].map((skill, i) => (
                    <div key={i} className="px-4 py-1.5 border border-white/10 rounded-full text-xs text-gray-400 bg-white/5">
                        {skill}
                    </div>
                ))}
            </div>

        </div>
      </div>

      {/* =========================================
          3. COPYRIGHT BAR
         ========================================= */}
      <div className="relative z-10 w-full mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <p>© {currentYear} Raffael Fidhera Yahya. All rights reserved.</p>
        
        <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>

        {/* Kode Hiasan */}
        <p className="font-mono text-xs opacity-50 hidden md:block">
            git commit -m "Initial release"
        </p>
      </div>

    </footer>
  );
};

export default Footer;