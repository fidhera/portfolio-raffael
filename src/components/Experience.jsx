import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaTimes, FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

// --- DATA PENGALAMAN (UPDATED REVISI) ---
const experiences = [
  // =================================================================
  // 3 TERATAS (DITAMPILKAN AWAL)
  // =================================================================
  
  // 1. ASLAB SISFO
  {
    id: 1,
    // role: "Asisten Lab Sistem Informasi",
    role: "Information Systems Lab Assistant",
    company: "Universitas Gunadarma",
    // period: "Maret 2025 - Sekarang",
    period: "March 2025 - Present",
    type: "Work",
    desc: [
      // "Berkontribusi sebagai bagian dalam Laboratorium Sistem Informasi di Universitas Gunadarma.",
      "Contributing as an integral part of the Information Systems Laboratory at Gunadarma University.",
      // "Tugas utama menjadi Tutor Praktikum dan Asisten Praktikum.",
      "Serving as a Practicum Tutor and Assistant, guiding students through technical coursework and practical exams."
    ],
    color: "from-cyan-500 to-blue-600"
  },

  // 2. BEM FTI
  {
    id: 2,
    // role: "Badan Eksekutif Mahasiswa FTI",
    role: "Student Executive Board (BEM) FTI",
    company: "Universitas Gunadarma",
    // period: "November 2024 - Sekarang",
    period: "Nov 2024 - Present",
    type: "Organization",
    desc: [
      // "Berkontribusi dalam departemen advokasi dan kesejahteraan mahasiswa dengan fokus pada layanan, fasilitas, dan kebijakan akademik.",
      "Contributing to the Advocacy and Student Welfare department, focusing on academic services, facilities, and policies.",
      // "Mengedepankan nilai aktif, responsif, dan solutif dalam memberikan solusi terhadap permasalahan mahasiswa.",
      "Prioritizing active, responsive, and solution-oriented approaches to resolve student issues.",
      // "Memastikan hak dan kesejahteraan mahasiswa FTI UG terpenuhi secara optimal.",
      "Ensuring the rights and welfare of FTI UG students are optimally fulfilled."
    ],
    color: "from-purple-500 to-pink-500"
  },

  // 3. SXC SUMMIT
  {
    id: 3,
    // role: "StudentsxCEOs International Summit",
    role: "UI/UX & Backend Developer",
    company: "StudentsxCEOs International Summit",
    // period: "Juli 2025 - Sekarang",
    period: "July 2025 - Present",
    type: "Organization",
    desc: [
      // "Bertugas membuat tampilan antarmuka (UI/UX) pada halaman utama dan event page menggunakan Figma.",
      "Designing high-fidelity UI/UX for the main landing page and event pages using Figma.",
      // "Mendevelop backend untuk sistem pendaftaran peserta dan pengelolaan tiket menggunakan Laravel dan MySQL.",
      "Developing backend systems for participant registration and ticketing management using Laravel and MySQL.",
      // "Berhasil mengelola trafik pengunjung event hingga 1000+ user dengan responsivitas tinggi.",
      "Successfully managing high-traffic event data (1000+ users) with optimized responsiveness."
    ],
    color: "from-emerald-400 to-cyan-500"
  },

  // =================================================================
  // SHOW MORE ITEMS (DITAMPILKAN SAAT KLIK TOMBOL)
  // =================================================================

  // 4. ASLAB HPC
  {
    id: 4,
    // role: "Asisten Lab HPC (High Performance Computing)",
    role: "HPC Lab Assistant",
    company: "Universitas Gunadarma",
    // period: "September 2024 – November 2024",
    period: "Sept 2024 – Nov 2024",
    type: "Work",
    desc: [
      // "Mengelola dan mendukung kegiatan pembelajaran di balik layar, khususnya dalam pemrograman HPC.",
      "Managing and supporting backend learning activities, specifically in High Performance Computing (HPC) programming.",
      // "Berperan sebagai penyedia asistensi teknis untuk mahasiswa, termasuk membantu simulasi berbasis HPC.",
      "Providing technical assistance for students, including support for HPC-based simulations.",
      // "Pemecahan masalah secara real-time melalui platform live chat.",
      "Conducting real-time troubleshooting and problem-solving via live chat platforms."
    ],
    color: "from-blue-600 to-indigo-600"
  },

  // 5. TIM KORSA
  {
    id: 5,
    // role: "Tim Korsa – Badan Semi Otonom BEM FTI UG",
    role: "Fuel Engine Division",
    company: "Tim Korsa Universitas Gunadarma",
    // period: "Juli 2025 – Sekarang",
    period: "July 2025 – Present",
    type: "Team",
    desc: [
      // "Bertugas dan berkontribusi dalam perkembangan divisi Fuel Engine Remote Control.",
      "Contributing to the development of the Fuel Engine Remote Control division.",
      // "Untuk tujuan lomba KKI (Kontes Kapal Indonesia).",
      "Preparing technical mechanics for the Indonesian Ship Contest (KKI/Kontes Kapal Indonesia)."
    ],
    color: "from-red-500 to-orange-500"
  },

  // 6. TECH CAREER EXPO (VOLUNTEER)
  {
    id: 6,
    // role: "Wakil Ketua Divisi Media Kreatif",
    role: "Vice Head of Creative Media",
    company: "TechCareer Expo 2025",
    // period: "Februari 2025 - Mei 2025",
    period: "Feb 2025 - May 2025",
    type: "Volunteer",
    desc: [
      // "Mengelola tim desain yang menghasilkan 10+ konten untuk media sosial, cetak, dan backdrop acara.",
      "Leading the design team to produce 10+ creative assets for social media, print, and event backdrops.",
      // "Mengoordinasikan produksi video highlight dan konten promosi event menggunakan Canva & CapCut.",
      "Coordinating the production of highlight videos and promotional content using Canva & CapCut.",
      // "Mengawasi timeline rilis konten sosial media secara rutin selama 4 minggu sebelum acara.",
      "Overseeing the social media content release timeline for 4 weeks pre-event."
    ],
    color: "from-fuchsia-500 to-purple-600"
  },

  // 7. GUNADARMA MENGABDI (VOLUNTEER)
  {
    id: 7,
    // role: "Divisi Perlengkapan Pembangunan",
    role: "Construction Logistics Division",
    company: "Gunadarma Mengabdi 10",
    // period: "Februari 2025",
    period: "Feb 2025",
    type: "Volunteer",
    desc: [
      // "Menjadi penanggung jawab logistik pembangunan sarana edukasi di lokasi pengabdian.",
      "Person in charge of logistics for educational facility construction at the service location.",
      // "Mengatur distribusi alat dan material pembangunan 20+ alat pembangunan.",
      "Managing the distribution of over 20 types of construction tools and materials.",
      // "Mengawasi barang dan perlengkapan selalu terjaga keamanannya.",
      "Ensuring the security and maintenance of all field equipment."
    ],
    color: "from-orange-400 to-amber-500"
  },

  // 8. ENGINEERING CUP (VOLUNTEER)
  {
    id: 8,
    // role: "Divisi Perlengkapan",
    role: "Logistics Division",
    company: "Engineering Cup x Ruang Ekspresi",
    // period: "Juli 2025",
    period: "July 2025",
    type: "Volunteer",
    desc: [
      // "Menjadi penanggung jawab dalam penyiapan dan pengawasan perlengkapan untuk perlombaan.",
      "Responsible for preparing and supervising equipment for various competitions.",
      // "Mengurus pembelian dan pendistribusian piala sebagai bentuk apresiasi kepada para pemenang lomba.",
      "Managing the procurement and distribution of trophies for competition winners.",
      // "Berkoordinasi dengan panitia teknis lainnya untuk kelancaran acara.",
      "Coordinating with other technical committees to ensure event smoothness."
    ],
    color: "from-green-500 to-teal-500"
  },

  // 9. PKKMB FTI UG (VOLUNTEER)
  {
    id: 9,
    // role: "Divisi PK (Penanggung Jawab Kelompok)",
    role: "Group Leader (PK Division)",
    company: "PKKMB FTI UG 2024",
    // period: "September 2024",
    period: "Sept 2024",
    type: "Volunteer",
    desc: [
      // "Memimpin 1 kelompok mahasiswa baru (20–25 peserta).",
      "Leading a group of 20–25 new students during orientation.",
      // "Mengatur komunikasi kelompok, pengarahan teknis, dan kontrol keaktifan selama 1 hari kegiatan.",
      "Managing group communication, technical direction, and activity monitoring throughout the event."
    ],
    color: "from-blue-400 to-cyan-400"
  },

  // 10. ITSOCIART 4.0 (VOLUNTEER)
  {
    id: 10,
    // role: "Divisi Perlengkapan",
    role: "Logistics Division",
    company: "ITSOCIART 4.0",
    // period: "Juli 2024",
    period: "July 2024",
    type: "Volunteer",
    desc: [
      // "Menyiapkan dan mendistribusikan perlengkapan acara seni dan lomba antar fakultas.",
      "Preparing and distributing equipment for inter-faculty art and competition events.",
      // "Berhasil menyiapkan 40+ unit alat perlombaan sebelum waktu pelaksanaan.",
      "Successfully securing 40+ competition tools prior to the event execution."
    ],
    color: "from-rose-400 to-pink-500"
  },

  // 11. LIST SINGKAT LAINNYA (DIGABUNG BIAR RAPI)
  {
    id: 11,
    role: "Logistics Division",
    company: "PKKMB FTI UG 2025",
    period: "Sep 2025",
    type: "Volunteer",
    desc: [
      // "PKKMB 2025 - Divisi perlengkapan",
      "PKKMB 2025: Handling logistics and venue preparation for new student orientation.",
      // "LDKO BEM FTI - Divisi perlengkapan",
      //"LDKO BEM FTI: Managing equipment for the Basic Leadership Training of the Student Executive Board."
    ],
    color: "from-gray-500 to-slate-600"
  },

    // 12. PERLAP LDKO BEM FTI UG 25/26
  {
    id: 12,
    role: "Logistics Division",
    company: "BEM FTI Universitas Gunadarma",
    period: "Nov 2025",
    type: "Volunteer",
    desc: [
      // "PKKMB 2025 - Divisi perlengkapan",
      //"PKKMB 2025: Handling logistics and venue preparation for new student orientation.",

      // "LDKO BEM FTI - Divisi perlengkapan",
      "LDKO BEM FTI: Managing equipment for the Basic Leadership Training of the Student Executive Board."
    ],
    color: "from-blue-500 to-slate-600"
  },
];

const Experience = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [showAll, setShowAll] = useState(false); 

  // Tentukan berapa item yang ditampilkan
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

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
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
            <AnimatePresence>
                {visibleExperiences.map((exp) => (
                    <motion.div
                        layoutId={exp.id} 
                        key={exp.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
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

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00E1FF] transition-colors line-clamp-2">
                                {exp.role}
                            </h3>
                            <p className="text-sm text-gray-300 mb-4">{exp.company}</p>

                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto">
                                <FaCalendarAlt />
                                <span>{exp.period}</span>
                            </div>

                            {/* Icon Arrow (Hiasan) */}
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                <FaChevronRight className="text-[#00E1FF]" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* --- TOMBOL SHOW MORE / LESS --- */}
        <div className="mt-12 flex justify-center z-20 relative">
            <button 
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 px-6 py-3 bg-[#00E1FF]/10 border border-[#00E1FF]/30 hover:bg-[#00E1FF]/20 text-[#00E1FF] rounded-full transition-all font-medium"
            >
                {showAll ? (
                    <>
                        Show Less <FaChevronUp />
                    </>
                ) : (
                    <>
                        Show More Experiences ({experiences.length - 3} Hidden) <FaChevronDown />
                    </>
                )}
            </button>
        </div>

        {/* --- POPUP / MODAL DETAIL --- */}
        <AnimatePresence>
            {selectedId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    
                    {/* Backdrop Gelap */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
                    />

                    {/* Kartu Detail */}
                    <motion.div 
                        layoutId={selectedId} 
                        className="relative w-full max-w-2xl bg-[#0F0041] border border-[#00E1FF]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,225,255,0.3)] z-50 max-h-[90vh] overflow-y-auto"
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
                                        
                                        {/* Header Modal */}
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