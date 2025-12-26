import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs, FaHtml5, FaTimes, FaDownload, FaEye } from "react-icons/fa";
import { SiTailwindcss, SiLaravel, SiMysql, SiFigma, SiNextdotjs } from "react-icons/si";

// =========================================================================
// DATA PROJECT
// =========================================================================

/* --- TEMPLATE UNTUK MENAMBAH PROJECT BARU ---
   Copy kode di bawah ini dan paste ke dalam array projectData:

   {
     id: 99, // Ganti dengan angka urut selanjutnya
     title: "Nama Project Kamu",
     desc: "Deskripsi singkat project...",
     tech: ["React", "Tailwind", "API"], // Teknologi yang dipakai
     img: "/assets/ssProject/nama_file_gambar.png", // Masukkan gambar ke folder public
     link: "https://github.com/username/repo", // Link repository
   },
*/

const projectData = [
  {
    id: 1,
    title: "Website Kemahasiswaan BEM FTI",
    desc: "Dirancang untuk memfasilitasi mahasiswa FTI dalam mengakses layanan advokasi.",
    tech: ["Google Site", "HTML5", "Vanilla ES6"],
    img: "/assets/ssProject/web_kemahasiswaan.png",
    link: "https://sites.google.com/view/kemahasiswaan-bem-fti-ug/beranda",
  },
  {
    id: 2,
    title: "SXC International Summit",
    desc: "Website Organisasi, untuk memfasilitasi pendaftaran event atau lomba.",
    tech: ["Figma", "Prisma", "Javascript"],
    img: "/assets/ssProject/web_sxc25.png",
    link: "https://sxcintersummit.com/",
  },
  {
    id: 3,
    title: "Portfolio V1",
    desc: "Versi pertama portofolio menggunakan HTML CSS murni.",
    tech: ["HTML", "CSS", "JS"],
    img: "/assets/ssProject/project1.png",
    link: "https://github.com/fidhera",
  },
  {
    id: 4,
    title: "E-Commerce Dashboard",
    desc: "Dashboard admin untuk manajemen produk dan penjualan.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    img: "/assets/ssProject/project1.png",
    link: "https://github.com/fidhera",
  },
  {
    id: 5,
    title: "AI Chatbot Interface",
    desc: "Antarmuka chat modern dengan integrasi API OpenAI.",
    tech: ["React", "Tailwind", "API"],
    img: "/assets/ssProject/project1.png",
    link: "https://github.com/fidhera",
  },
];

// =========================================================================
// DATA SERTIFIKAT
// =========================================================================

/* --- TEMPLATE UNTUK MENAMBAH SERTIFIKAT BARU ---
   Copy kode di bawah ini dan paste ke dalam array certificateData:

   {
     id: 99, // Angka urut
     title: "Judul Sertifikat",
     issuer: "Penerbit (Google, Dicoding, dll)",
     date: "Bulan Tahun",
     img: "/assets/ssSertif/nama_file.png", 
   },
*/

const certificateData = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Sertifikat Kompetensi ${i + 1}`,
  issuer: "Dicoding Indonesia",
  date: "Dec 2024",
  img: "/assets/ssSertif/image.png", 
}));

// =========================================================================
// DATA TECH STACK
// =========================================================================
const techStackData = {
  Frontend: [
    { name: "React", icon: <FaReact />, path: "/assets/icons/react.png" },
    { name: "Next.js", icon: <SiNextdotjs />, path: "/assets/icons/nextjs.png" },
    { name: "Tailwind", icon: <SiTailwindcss />, path: "/assets/icons/tailwind.png" },
    { name: "HTML5", icon: <FaHtml5 />, path: "/assets/icons/html.png" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, path: "/assets/icons/nodejs.png" },
    { name: "Laravel", icon: <SiLaravel />, path: "/assets/icons/laravel.png" },
  ],
  Database: [
    { name: "MySQL", icon: <SiMysql />, path: "/assets/icons/mysql.png" },
  ],
  Design: [
    { name: "Figma", icon: <SiFigma />, path: "/assets/icons/figma.png" },
  ]
};

// =========================================================================
// KOMPONEN UTAMA
// =========================================================================

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [visibleCerts, setVisibleCerts] = useState(3);
  const [selectedCert, setSelectedCert] = useState(null);

  // --- SUB-COMPONENTS ---

  const ProjectCard = ({ data }) => (
    <motion.a 
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full bg-[#1a1a2e]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#00E1FF]/50 transition-all duration-300 block shadow-lg"
        whileHover={{ y: -5 }}
    >
        <div className="h-[200px] overflow-hidden relative">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10" />
            <img src={data.img} alt={data.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00E1FF] transition-colors">{data.title}</h3>
                <FaGithub className="text-gray-400 group-hover:text-white text-xl" />
            </div>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{data.desc}</p>
            <div className="flex flex-wrap gap-2">
                {data.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono bg-[#00E1FF]/10 text-[#00E1FF] rounded-full border border-[#00E1FF]/20">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.a>
  );

  const CertificateCard = ({ data }) => (
    <motion.div 
        layoutId={`cert-${data.id}`}
        onClick={() => setSelectedCert(data)}
        className="group bg-[#1a1a2e]/90 border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-[#00E1FF]/50 transition-all duration-300 shadow-md"
        whileHover={{ y: -5 }}
    >
        <div className="aspect-[16/10] w-full bg-gray-800 overflow-hidden relative">
            <img src={data.img} alt={data.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaEye className="text-white text-3xl drop-shadow-md" />
            </div>
        </div>
        <div className="p-4 border-t border-white/5">
            <h4 className="text-white font-bold text-sm mb-1 line-clamp-1" title={data.title}>{data.title}</h4>
            <div className="flex justify-between items-center text-xs text-gray-400">
                <span>{data.issuer}</span>
                <span className="text-[#00E1FF] bg-[#00E1FF]/10 px-2 py-0.5 rounded">{data.date}</span>
            </div>
        </div>
    </motion.div>
  );

  const TechCard = ({ item }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-[#1a1a2e]/80 border border-white/5 rounded-xl hover:bg-[#00E1FF]/5 hover:border-[#00E1FF]/30 transition-all duration-300 group backdrop-blur-sm">
        <div className="text-4xl text-gray-400 group-hover:text-[#00E1FF] mb-3 transition-colors">
            {item.icon}
        </div>
        <span className="text-gray-300 font-medium text-sm group-hover:text-white">{item.name}</span>
    </div>
  );

  return (
    <section id="projects" className="relative w-full px-4 md:px-20 py-24 bg-[#0F0041] overflow-hidden">
        
        {/* =========================================
            1. BACKGROUND DECORATION (REVISI SESUAI PERMINTAAN)
            Menggunakan Ancient House 2 dengan overlay Biru Transparan
           ========================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
                src="/assets/ancient_house2.png" 
                alt="Background" 
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
            />
            {/* Gradient Overlay: Biru Tua (#0F0041) dengan transparansi di tengah */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F0041] via-[#0F0041]/70 to-[#0F0041]"></div>
            
            {/* Radial Overlay: Agar bagian tengah lebih terang/transparan sedikit */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F0041_90%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
            
            {/* 2. TAGLINE ATAS (Glassmorphism Posisinya Diperbaiki) */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 px-6 py-2 mb-10 bg-[#00E1FF]/5 border border-[#00E1FF]/20 rounded-full backdrop-blur-sm"
            >
                <span className="text-[#00E1FF] text-lg">✧</span>
                <span className="text-gray-300 font-poppins text-xs md:text-sm tracking-wider uppercase">
                    Explore my Project
                </span>
                <span className="text-[#00E1FF] text-lg">✧</span>
            </motion.div>

            {/* 3. HEADER SECTION (JUDUL UTAMA & BREADCRUMB) */}
            <div className="mb-20 text-center w-full max-w-4xl mx-auto flex flex-col items-center">
                {/* Breadcrumb Baru (Center) */}
                <p className="font-mono text-[#00E1FF] text-sm tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-[#00E1FF] rounded-full animate-pulse"></span>
                    C:/Users/Raffael/Projects
                </p>

                <h2 className="text-5xl md:text-7xl font-poppins font-black text-white leading-tight drop-shadow-[0_0_40px_rgba(0,225,255,0.4)] mb-6">
                    MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#00FFA3]">PROJECT.</span>
                </h2>
                
                {/* Garis Dekorasi Simetris */}
                <div className="flex items-center justify-center gap-4 mb-6 opacity-50">
                    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#00E1FF]"></div>
                    <div className="w-2 h-2 bg-[#00E1FF] rotate-45"></div>
                    <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#00E1FF]"></div>
                </div>

                <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                    A collection of my technical projects, professional certifications, and the technology stack I use to build digital solutions.
                </p>
            </div>

            {/* --- CUSTOM TABS NAVIGATION --- */}
            <div className="flex justify-center mb-16 w-full">
                <div className="flex bg-[#1a1a2e]/90 backdrop-blur p-1.5 rounded-full border border-white/10 shadow-lg">
                    {['projects', 'certificates', 'tech'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize relative ${
                                activeTab === tab ? 'text-[#0B0B15]' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {activeTab === tab && (
                                <motion.div 
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-[#00E1FF] rounded-full"
                                    transition={{ type: "spring", duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab === 'tech' ? 'Tech Stack' : tab}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="min-h-[400px] w-full">
                <AnimatePresence mode="wait">
                    
                    {/* 1. PROJECTS TAB */}
                    {activeTab === 'projects' && (
                        <motion.div 
                            key="projects"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projectData.slice(0, visibleProjects).map((item) => (
                                    <ProjectCard key={item.id} data={item} />
                                ))}
                            </div>

                            <div className="flex justify-center mt-12">
                                <button 
                                    onClick={() => setVisibleProjects(visibleProjects > 3 ? 3 : projectData.length)}
                                    className="px-8 py-3 bg-[#1a1a2e] border border-[#00E1FF]/30 text-[#00E1FF] rounded-full hover:bg-[#00E1FF] hover:text-[#0B0B15] transition-all duration-300 font-medium"
                                >
                                    {visibleProjects > 3 ? "Show Less" : `Show All Projects (${projectData.length})`}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* 2. CERTIFICATES TAB */}
                    {activeTab === 'certificates' && (
                        <motion.div 
                            key="certificates"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {certificateData.slice(0, visibleCerts).map((item) => (
                                    <CertificateCard key={item.id} data={item} />
                                ))}
                            </div>
                            
                            <div className="flex justify-center mt-12">
                                <button 
                                    onClick={() => setVisibleCerts(visibleCerts > 3 ? 3 : certificateData.length)}
                                    className="px-8 py-3 bg-[#1a1a2e] border border-[#00E1FF]/30 text-[#00E1FF] rounded-full hover:bg-[#00E1FF] hover:text-[#0B0B15] transition-all duration-300 font-medium"
                                >
                                    {visibleCerts > 3 ? "Show Less" : `Show All Certificates (${certificateData.length})`}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* 3. TECH STACK TAB */}
                    {activeTab === 'tech' && (
                        <motion.div 
                            key="tech"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-12"
                        >
                            {Object.entries(techStackData).map(([category, items]) => (
                                <div key={category}>
                                    <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-[#00E1FF] pl-4">{category}</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                        {items.map((item, idx) => (
                                            <TechCard key={idx} item={item} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>

        {/* --- MODAL VIEW SERTIFIKAT --- */}
        <AnimatePresence>
            {selectedCert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />
                    <motion.div 
                        layoutId={`cert-${selectedCert.id}`}
                        className="relative w-full max-w-4xl bg-[#1a1a2e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                    >
                        <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#0B0B15]">
                            <h3 className="text-white font-bold text-lg truncate pr-4">{selectedCert.title}</h3>
                            <button onClick={() => setSelectedCert(null)} className="p-2 bg-white/10 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors">
                                <FaTimes />
                            </button>
                        </div>
                        <div className="p-1 bg-black flex-1 overflow-auto flex items-center justify-center">
                            <img src={selectedCert.img} alt={selectedCert.title} className="max-w-full h-auto max-h-[70vh] object-contain" />
                        </div>
                        <div className="p-4 border-t border-white/10 bg-[#0B0B15] flex justify-between items-center">
                            <div className="text-xs text-gray-400">
                                Issued by <span className="text-white">{selectedCert.issuer}</span> • {selectedCert.date}
                            </div>
                            <a href={selectedCert.img} download={`${selectedCert.title}.png`} className="flex items-center gap-2 px-4 py-2 bg-[#00E1FF] text-[#0B0B15] rounded-lg font-bold hover:bg-white transition-colors text-sm">
                                <FaDownload /> Download
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>

{/* --- CYBER DIVIDER LINE --- */}
<div className="absolute bottom-0 left-0 w-full flex justify-center z-30">
    {/* Garis Neon */}
    <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00E1FF]/50 to-transparent"></div>
    {/* Efek Glow di Tengah */}
    <div className="absolute bottom-[-10px] w-[200px] h-[50px] bg-[#00E1FF]/20 blur-[50px] rounded-full"></div>
</div>

    </section>
  );
};

export default Projects;