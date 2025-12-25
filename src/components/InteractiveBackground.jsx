import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // CONFIGURATION
    const spacing = 30; // Jarak antar titik diperapat
    const baseRadius = 1.5; 
    const hoverRadius = 150; 
    const color = "rgba(255, 255, 255, 0.2)"; // Ganti jadi PUTIH TRANSPARAN agar terlihat di background gelap

    let mouse = { x: -1000, y: -1000 }; // Default mouse jauh di luar layar

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      // Tambah buffer area agar dot penuh satu layar
      for (let x = 0; x < width + spacing; x += spacing) {
        for (let y = 0; y < height + spacing; y += spacing) {
          particles.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let size = baseRadius;
        let finalColor = color;

        if (distance < hoverRadius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (hoverRadius - distance) / hoverRadius;
            
            // Efek Repulsion (Menjauh dari mouse)
            const direction = -1; 
            p.vx = forceDirectionX * force * direction * 2;
            p.vy = forceDirectionY * force * direction * 2;
            
            // Highlight: Jadi Cyan Terang & Besar saat dekat mouse
            size = baseRadius * 2.5;
            finalColor = "rgba(0, 225, 255, 1)"; 
        } else {
            if (p.x !== p.originX) {
                const dx = p.x - p.originX;
                p.vx -= dx * 0.05;
            }
            if (p.y !== p.originY) {
                const dy = p.y - p.originY;
                p.vy -= dy * 0.05;
            }
        }

        p.vx *= 0.9;
        p.vy *= 0.9;
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = finalColor;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect(); // Koreksi posisi mouse relatif canvas
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ 
            zIndex: 0, // Pastikan di layer 0 (Background)
            position: 'fixed' 
        }} 
    />
  );
};

export default InteractiveBackground;