const MarqueeLogs = () => {
  return (
    <div className="w-full mt-20 overflow-hidden relative group">
      
      {/* Style CSS Internal untuk Animasi Marquee 
          (Agar tidak perlu setting tailwind.config lagi)
      */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 20s linear infinite;
        }
        /* Logika PAUSE saat mouse hover di area group */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* TRACK ANIMASI */}
      <div className="animate-marquee">
        
        {/* KITA RENDER 2 KALI (LOOPING) AGAR SEAMLESS */}
        {[0, 1].map((loopIndex) => (
          <div key={loopIndex} className="flex gap-20 px-10 items-center">
            
            {/* ICON 1: VS CODE */}
            {/* Pastikan file icon_vscode.png ada di folder public/assets/ */}
            <img 
                src="/assets/icon_vscode.png" 
                alt="VS Code" 
                className="h-[60px] w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" 
            />

            {/* DUPLIKASI ICON (Karena di prompt cuma ada 1 gambar vs code) */}
            {/* Jika Anda punya icon lain (misal: figma, react, dll), ganti src-nya di sini */}
            <img src="/assets/icon_vscode.png" alt="Tool 2" className="h-[60px] w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="/assets/icon_vscode.png" alt="Tool 3" className="h-[60px] w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="/assets/icon_vscode.png" alt="Tool 4" className="h-[60px] w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="/assets/icon_vscode.png" alt="Tool 5" className="h-[60px] w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="/assets/icon_vscode.png" alt="Tool 6" className="h-[60px] w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            
          </div>
        ))}

      </div>
    </div>
  );
};

export default MarqueeLogs;