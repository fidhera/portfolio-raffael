/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0041",
        glass: "rgba(255, 255, 255, 0.1)",
        neon: "#00D8FF", // Warna tegas untuk nama (Cyan Neon)
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        antonio: ['Antonio', 'sans-serif'],
        aclonica: ['Aclonica', 'sans-serif'], // Tambahkan font Aclonica disini
        mono: ['Consolas', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}