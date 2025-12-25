import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  // 1. Motion Value untuk posisi Mouse Asli (Untuk Dot Dalam)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Spring Physics untuk Lingkaran Luar (Agar ada efek delay/karet)
  const springConfig = { damping: 25, stiffness: 120 }; // Atur kelenturan disini
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Update posisi mouseX dan mouseY secara real-time
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. DOT KECIL (Dalam) - Gerak Instan */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX, // Mengikuti mouse langsung
          y: mouseY,
          translateX: "-50%", // Supaya posisi tepat di tengah kursor
          translateY: "-50%",
        }}
      />

      {/* 2. LINGKARAN BESAR (Luar) - Gerak Smooth/Lagging */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorX, // Mengikuti spring (ada delay)
          y: cursorY,
          translateX: "-50%", // Supaya posisi tepat di tengah kursor
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;