import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link untuk scroll halus
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek Glass memadat saat discroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    // Z-INDEX 100 PENTING AGAR SELALU DI ATAS ELEMENT LAIN
    <nav className="fixed top-4 left-0 w-full flex justify-center z-[100] px-4">
      
      {/* --- CONTAINER UTAMA --- */}
      <div 
        className={`
          relative flex justify-between items-center 
          transition-all duration-300 ease-in-out
          ${isOpen ? 'rounded-2xl' : 'rounded-full'}
          ${scrolled || isOpen ? 'bg-[#050505]/80 border-white/10' : 'bg-white/5 border-white/20'}
          backdrop-blur-md border shadow-lg
          w-full max-w-[1200px] h-[60px] px-6 md:px-8
        `}
      >
        
        {/* 1. LOGO */}
        <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="text-lg md:text-xl font-poppins font-bold text-white cursor-pointer tracking-wide"
        >
            My Portfolio<span className="text-[#00E1FF]">.</span>
        </Link>

        {/* 2. DESKTOP MENU (Hidden di HP) */}
        <ul className="hidden md:flex gap-8 font-poppins text-sm text-gray-300">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.to} 
                smooth={true} 
                duration={500} 
                offset={-100} // Agar tidak tertutup navbar saat scroll stop
                className="hover:text-[#00E1FF] cursor-pointer transition-colors font-medium hover:drop-shadow-[0_0_8px_rgba(0,225,255,0.5)]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 3. MOBILE HAMBURGER ICON (Visible di HP) */}
        <div className="md:hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl focus:outline-none"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>

        {/* 4. MOBILE MENU DROPDOWN */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[70px] left-0 w-full bg-[#1a1a2e]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl md:hidden flex flex-col gap-4 items-center"
                >
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            onClick={() => setIsOpen(false)} // Tutup menu saat diklik
                            className="text-gray-300 text-lg font-medium hover:text-[#00E1FF] w-full text-center py-2 border-b border-white/5 last:border-none"
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;