import { useState, useEffect } from "react"; // Tambah useEffect
import { createPortal } from "react-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs, FaHtml5, FaTimes, FaDownload, FaEye, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SiTailwindcss, SiLaravel, SiMysql, SiFigma, SiNextdotjs } from "react-icons/si";

// =========================================================================
// DATA PROJECT
// =========================================================================

const projectData = [
  {
    id: 1,
    title: "Website Kemahasiswaan BEM FTI",
    desc: "Dirancang untuk memfasilitasi mahasiswa FTI dalam mengakses layanan advokasi.",
    tech: ["Google Site", "HTML5", "Vanilla ES6"],
    img: "/assets/ssProject/web_kemahasiswaan.webp",
    link: "https://sites.google.com/view/kemahasiswaan-bem-fti-ug/beranda",
  },
  {
    id: 2,
    title: "SXC International Summit",
    desc: "Website Organisasi, untuk memfasilitasi pendaftaran event atau lomba.",
    tech: ["Figma", "Prisma", "Javascript"],
    img: "/assets/ssProject/web_sxc25.webp",
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
// DATA SERTIFIKAT (MANUAL ARRAY - AMAN TIDAK DIUBAH)
// =========================================================================

const certificateData = [
  // 1. Belajar Dasar Pemrograman Web
  {
    id: 1,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Mar 2024",
    img: "/assets/ssSertif/dasar_pemrograman_web.webp",
  },

  // 2. Belajar Dasar Pemrograman JavaScript
  {
    id: 2,
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Apr 2024",
    img: "/assets/ssSertif/dasar_pemrograman_js.webp",
  },

  // 3. Membuat Front-End Web untuk Pemula
  {
    id: 3,
    title: "Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024",
    img: "/assets/ssSertif/frontend_pemula.webp",
  },

  // 4. Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)
  {
    id: 4,
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024",
    img: "/assets/ssSertif/cloud_practitioner.webp",
  },

  // 5. Memulai Pemrograman Dengan Java
  {
    id: 5,
    title: "Memulai Pemrograman Dengan Java",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024",
    img: "/assets/ssSertif/pemrograman_java.webp",
  },

  // 6. Belajar Membuat Aplikasi Back-End untuk Pemula
  {
    id: 6,
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Jul 2024",
    img: "/assets/ssSertif/backend_pemula.webp",
  },

  // 7. Managemenen Proyek
  {
    id: 7,
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024",
    img: "/assets/ssSertif/manajemen_proyek.webp",
  },

  // 8. Belajar Dasar AI
  {
    id: 8,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024",
    img: "/assets/ssSertif/dasar_ai.webp",
  },

  // 9. Belajar Dasar Data Science
  {
    id: 9,
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024",
    img: "/assets/ssSertif/dasar_datascience.webp",
  },

  // 10. Belajar Dasar Structured Query Language (SQL)
  {
    id: 10,
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024",
    img: "/assets/ssSertif/dasar_sql.webp",
  },

  // 11. Belajar Strategi Pengembangan Diri
  {
    id: 11,
    title: "Belajar Strategi Pengembangan Diri",
    issuer: "Dicoding Indonesia",
    date: "Okt 2024",
    img: "/assets/ssSertif/pengembangan_diri.webp",
  },
];

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
// SUB-COMPONENTS (DIPINDAHKAN KE LUAR)
// =========================================================================

// 1. PROJECT CARD
const ProjectCard = ({ data }) => (
  <motion.a 
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full bg-[#1a1a2e]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#00E1FF]/50 transition-all duration-300 block shadow-lg cursor-pointer"
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

// 2. CERTIFICATE CARD (FIXED CURSOR & ANIMATION)
const CertificateCard = ({ data, onClick }) => (
  <motion.div 
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      // Perbaikan: cursor-pointer agar jelas bisa diklik
      className="group bg-[#1a1a2e]/90 border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-[#00E1FF]/50 transition-all duration-300 shadow-md relative"
  >
      <div className="aspect-[16/10] w-full bg-gray-800 overflow-hidden relative">
          <img src={data.img} alt={data.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500" />
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

// 3. TECH CARD
const TechCard = ({ item }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-[#1a1a2e]/80 border border-white/5 rounded-xl hover:bg-[#00E1FF]/5 hover:border-[#00E1FF]/30 transition-all duration-300 group backdrop-blur-sm cursor-default">
      <div className="text-4xl text-gray-400 group-hover:text-[#00E1FF] mb-3 transition-colors">
          {item.icon}
      </div>
      <span className="text-gray-300 font-medium text-sm group-hover:text-white">{item.name}</span>
  </div>
);

// 4. MODAL COMPONENT (PORTAL) - FIXED: ESC KEY & CURSOR
const Modal = ({ data, onClose }) => {
  
  // FIX: Tambahkan Event Listener untuk tombol ESCAPE
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!data) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
      />
      
      {/* Content dengan Animasi Pop-Up */}
      <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          // FIX: cursor-auto dipasang Paksa di sini agar cursor muncul kembali
          className="relative w-full max-w-4xl bg-[#1a1a2e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] z-[100000] cursor-auto"
      >
          <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#0B0B15]">
              <h3 className="text-white font-bold text-lg truncate pr-4">{data.title}</h3>
              <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors cursor-pointer">
                  <FaTimes />
              </button>
          </div>
          <div className="p-1 bg-black flex-1 overflow-auto flex items-center justify-center">
              <img src={data.img} alt={data.title} className="max-w-full h-auto max-h-[70vh] object-contain" />
          </div>
          <div className="p-4 border-t border-white/10 bg-[#0B0B15] flex justify-between items-center">
              <div className="text-xs text-gray-400">
                  Issued by <span className="text-white">{data.issuer}</span> • {data.date}
              </div>
              <a href={data.img} download={`${data.title}.png`} className="flex items-center gap-2 px-4 py-2 bg-[#00E1FF] text-[#0B0B15] rounded-lg font-bold hover:bg-white transition-colors text-sm cursor-pointer">
                  <FaDownload /> Download
              </a>
          </div>
      </motion.div>
    </div>,
    document.body
  );
};

// =========================================================================
// KOMPONEN UTAMA (PROJECTS)
// =========================================================================

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [visibleCerts, setVisibleCerts] = useState(3);
  const [selectedCert, setSelectedCert] = useState(null);

  // --- LOGIC LOAD MORE ---
  const handleLoadMoreProjects = () => setVisibleProjects((prev) => Math.min(prev + 3, projectData.length));
  const handleLoadLessProjects = () => setVisibleProjects(3);
  const handleLoadMoreCerts = () => setVisibleCerts((prev) => Math.min(prev + 3, certificateData.length));
  const handleLoadLessCerts = () => setVisibleCerts(3);

  return (
    <section id="projects" className="relative w-full px-4 md:px-20 py-24 bg-[#0F0041] overflow-hidden">
        
        {/* BACKGROUND DECORATION */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
                src="/assets/ancient_house2.png" 
                alt="Background" 
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F0041] via-[#0F0041]/70 to-[#0F0041]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F0041_90%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
            {/* TAGLINE */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 px-6 py-2 mb-10 bg-[#00E1FF]/5 border border-[#00E1FF]/20 rounded-full backdrop-blur-sm"
            >
                <span className="text-[#00E1FF] text-lg">✧</span>
                <span className="text-gray-300 font-poppins text-xs md:text-sm tracking-wider uppercase">Explore my Project</span>
                <span className="text-[#00E1FF] text-lg">✧</span>
            </motion.div>

            {/* HEADER */}
            <div className="mb-20 text-center w-full max-w-4xl mx-auto flex flex-col items-center">
                <p className="font-mono text-[#00E1FF] text-sm tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-[#00E1FF] rounded-full animate-pulse"></span>
                    C:/Users/Raffael/Projects
                </p>
                <h2 className="text-5xl md:text-7xl font-poppins font-black text-white leading-tight drop-shadow-[0_0_40px_rgba(0,225,255,0.4)] mb-6">
                    MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#00FFA3]">PROJECT.</span>
                </h2>
                <div className="flex items-center justify-center gap-4 mb-6 opacity-50">
                    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#00E1FF]"></div>
                    <div className="w-2 h-2 bg-[#00E1FF] rotate-45"></div>
                    <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#00E1FF]"></div>
                </div>
                <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                    A collection of my technical projects, professional certifications, and the technology stack I use to build digital solutions.
                </p>
            </div>

            {/* TABS */}
            <div className="flex justify-center mb-16 w-full">
                <div className="flex bg-[#1a1a2e]/90 backdrop-blur p-1.5 rounded-full border border-white/10 shadow-lg">
                    {['projects', 'certificates', 'tech'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize relative cursor-pointer ${activeTab === tab ? 'text-[#0B0B15]' : 'text-gray-400 hover:text-white'}`}
                        >
                            {activeTab === tab && (
                                <motion.div layoutId="active-pill" className="absolute inset-0 bg-[#00E1FF] rounded-full" transition={{ type: "spring", duration: 0.6 }} />
                            )}
                            <span className="relative z-10">{tab === 'tech' ? 'Tech Stack' : tab}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* CONTENT */}
            <div className="min-h-[400px] w-full">
                <AnimatePresence mode="wait">
                    {/* 1. PROJECTS TAB */}
                    {activeTab === 'projects' && (
                        <motion.div key="projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projectData.slice(0, visibleProjects).map((item) => (
                                    <ProjectCard key={item.id} data={item} />
                                ))}
                            </div>
                            <div className="flex justify-center mt-12">
                                {visibleProjects < projectData.length ? (
                                    <button onClick={handleLoadMoreProjects} className="flex items-center gap-2 px-8 py-3 bg-[#1a1a2e] border border-[#00E1FF]/30 text-[#00E1FF] rounded-full hover:bg-[#00E1FF] hover:text-[#0B0B15] transition-all duration-300 font-medium cursor-pointer">
                                        Show More ({projectData.length - visibleProjects}) <FaChevronDown />
                                    </button>
                                ) : (
                                    projectData.length > 3 && (
                                        <button onClick={handleLoadLessProjects} className="flex items-center gap-2 px-8 py-3 bg-[#1a1a2e] border border-red-500/30 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 font-medium cursor-pointer">
                                            Show Less <FaChevronUp />
                                        </button>
                                    )
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* 2. CERTIFICATES TAB */}
                    {activeTab === 'certificates' && (
                        <motion.div key="certificates" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {certificateData.slice(0, visibleCerts).map((item) => (
                                    <CertificateCard key={item.id} data={item} onClick={() => setSelectedCert(item)} />
                                ))}
                            </div>
                            <div className="flex justify-center mt-12">
                                {visibleCerts < certificateData.length ? (
                                    <button onClick={handleLoadMoreCerts} className="flex items-center gap-2 px-8 py-3 bg-[#1a1a2e] border border-[#00E1FF]/30 text-[#00E1FF] rounded-full hover:bg-[#00E1FF] hover:text-[#0B0B15] transition-all duration-300 font-medium cursor-pointer">
                                        Show More ({certificateData.length - visibleCerts}) <FaChevronDown />
                                    </button>
                                ) : (
                                    certificateData.length > 3 && (
                                        <button onClick={handleLoadLessCerts} className="flex items-center gap-2 px-8 py-3 bg-[#1a1a2e] border border-red-500/30 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 font-medium cursor-pointer">
                                            Show Less <FaChevronUp />
                                        </button>
                                    )
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* 3. TECH STACK TAB */}
                    {activeTab === 'tech' && (
                        <motion.div key="tech" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="space-y-12">
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

        {/* MODAL PORTAL */}
        <AnimatePresence>
            {selectedCert && (
                <Modal data={selectedCert} onClose={() => setSelectedCert(null)} />
            )}
        </AnimatePresence>

        {/* CYBER DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center z-30">
            <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00E1FF]/50 to-transparent"></div>
            <div className="absolute bottom-[-10px] w-[200px] h-[50px] bg-[#00E1FF]/20 blur-[50px] rounded-full"></div>
        </div>

    </section>
  );
};

export default Projects;