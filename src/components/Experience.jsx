import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaTimes, FaChevronRight } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

// --- DATA PENGALAMAN (DARI CV) ---
const experiences = [
  {
    id: 1,
    role: "Asisten Lab HPC",
    company: "Universitas Gunadarma",
    period: "Sept 2024 - Nov 2024",
    type: "Work",
    desc: [
      "Mengelola dan mendukung kegiatan pembelajaran pemrograman High Performance Computing (HPC).",
      "Memberikan asistensi teknis real-time kepada mahasiswa dalam simulasi berbasis HPC.",
      "Melakukan troubleshooting masalah teknis melalui platform live chat."
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    role: "Staff Adkesma",
    company: "BEM FTI Universitas Gunadarma",
    period: "Nov 2024 - Sekarang",
    type: "Organization",
    desc: [
      "Menangani advokasi dan kesejahteraan mahasiswa FTI dengan fokus pada layanan akademik.",
      "Menjadi jembatan komunikasi aktif antara mahasiswa dan birokrasi kampus.",
      "Memastikan pemenuhan hak dan fasilitas mahasiswa secara optimal."
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    role: "Asisten Lab Sistem Informasi",
    company: "Universitas Gunadarma",
    period: "Maret 2025 - Sekarang",
    type: "Work",
    desc: [
      "Bertanggung jawab sebagai Tutor Praktikum untuk mata kuliah terkait Sistem Informasi.",
      "Membantu dosen dalam pengelolaan kelas dan penilaian praktikum.",
      "Mengembangkan materi pembelajaran praktis untuk mahasiswa."
    ],
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 4,
    role: "IT Division (Fullstack)",
    company: "StudentsxCEOs Summit",
    period: "Juli 2025 - Sekarang",
    type: "Committee",
    desc: [
      "Membangun antarmuka (UI/UX) Website Event menggunakan Figma.",
      "Developing backend sistem pendaftaran & tiket dengan Laravel & MySQL.",
      "Mengelola traffic event hingga 1000+ user dengan performa stabil."
    ],
    color: "from-emerald-400 to-cyan-500"
  },
  {
    id: 5,
    role: "Logistik Pembangunan",
    company: "Gunadarma Mengabdi 10",
    period: "Februari 2025",
    type: "Volunteer",
    desc: [
      "Penanggung jawab logistik pembangunan sarana edukasi di lokasi pengabdian.",
      "Mengelola distribusi 20+ jenis alat dan material konstruksi.",
      "Mengawasi keamanan aset dan kelancaran teknis di lapangan."
    ],
    color: "from-orange-400 to-red-500"
  },
  {
    id: 6,
    role: "Wakil Ketua Media Kreatif",
    company: "TechCareer Expo 2025",
    period: "Mei 2025",
    type: "Volunteer",
    desc: [
      "Memimpin tim desain memproduksi 10+ konten visual dan backdrop.",
      "Koordinasi produksi video highlight & promosi (Canva & CapCut).",
      "Mengatur timeline publikasi media sosial selama 4 minggu pre-event."
    ],
    color: "from-indigo-400 to-purple-500"
  }
];

const Experience = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="experience" className="relative w-full px-4 md:px-20 py-20 bg-[#0F0041] overflow-hidden">
        
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00E1FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Header Section */}
        <div className="mb-16 relative z-10">
            <p className="font-mono text-[#00E1FF] text-sm tracking-widest mb-2">C:/Users/Raffael/Experience_Log</p>
            <h2 className="text-5xl md:text-6xl font-poppins font-black text-white leading-tight">
                MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#00FFA3]">JOURNEY.</span>
            </h2>
        </div>

        {/* --- GRID KARTU KECIL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {experiences.map((exp) => (
                <motion.div
                    layoutId={exp.id} // ID untuk animasi morphing
                    key={exp.id}
                    onClick={() => setSelectedId(exp.id)}
                    className="group relative cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {/* Card Body */}
                    <div className="h-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden">
                        
                        {/* Gradient Line di Atas */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color}`}></div>
                        
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} bg-opacity-20`}>
                                <FaBriefcase className="text-white text-xl" />
                            </div>
                            <span className="text-xs font-mono text-gray-400 border border-white/10 px-2 py-1 rounded-full">
                                {exp.type}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00E1FF] transition-colors">
                            {exp.role}
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">{exp.company}</p>

                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto">
                            <FaCalendarAlt />
                            <span>{exp.period}</span>
                        </div>

                        {/* Icon Arrow (Hanya hiasan) */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                            <FaChevronRight className="text-[#00E1FF]" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* --- POPUP / MODAL DETAIL --- */}
        <AnimatePresence>
            {selectedId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    
                    {/* Backdrop Gelap (Blur) */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
                    />

                    {/* Kartu Detail yang Membesar */}
                    <motion.div 
                        layoutId={selectedId} // Koneksi animasi ke kartu kecil
                        className="relative w-full max-w-2xl bg-[#0F0041] border border-[#00E1FF]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,225,255,0.3)] z-50"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedId(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors z-20"
                        >
                            <FaTimes />
                        </button>

                        {/* Content Modal */}
                        {experiences.map((exp) => {
                            if (exp.id === selectedId) {
                                return (
                                    <div key={exp.id} className="flex flex-col">
                                        
                                        {/* Header Modal dengan Gradient */}
                                        <div className={`relative p-8 bg-gradient-to-r ${exp.color}`}>
                                            <div className="relative z-10">
                                                <h2 className="text-3xl font-black text-white mb-2">{exp.role}</h2>
                                                <p className="text-white/90 text-lg font-medium flex items-center gap-2">
                                                    <BsFillRocketTakeoffFill /> {exp.company}
                                                </p>
                                            </div>
                                            {/* Pattern Hiasan */}
                                            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.png')] opacity-20 mix-blend-overlay"></div>
                                        </div>

                                        {/* Body Modal */}
                                        <div className="p-8 bg-[#0F0041]">
                                            <div className="flex items-center gap-2 mb-6 text-[#00E1FF] font-mono text-sm">
                                                <FaCalendarAlt />
                                                <span>{exp.period}</span>
                                            </div>

                                            <h4 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-4 border-b border-white/10 pb-2">
                                                Key Responsibilities
                                            </h4>

                                            <ul className="space-y-4">
                                                {exp.desc.map((item, index) => (
                                                    <motion.li 
                                                        key={index}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * index }}
                                                        className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed"
                                                    >
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E1FF] flex-shrink-0"></span>
                                                        {item}
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                                                <button 
                                                    onClick={() => setSelectedId(null)}
                                                    className="px-6 py-2 bg-white/5 hover:bg-[#00E1FF]/20 border border-white/10 hover:border-[#00E1FF] rounded-lg text-sm text-white transition-all"
                                                >
                                                    Close Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    </section>
  );
};

export default Experience;