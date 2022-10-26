module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        joy: "'pure joy', 'sans-serif'",
        cairo: "'Cairo', 'sans-serif'",
        pop: "'Poppins', 'sans-serif'",
        mon: "'Montserrat', 'sans-serif'",
        new: "'Take Me One', 'sans-serif'",
      },
      colors: {
        yellow: "#ffbe08",
        orange: "#fb5607",
        pink: "#ff006e",
        purple: "#8338ec",
        blue: "#3a86ff",
      },
      fontSize: {
        "2xs": ".5rem",
        "1.5xs": ".7rem",
        "1.5xl": "1.32rem",
        "2.5xl": "1.7rem",
        "4.5xl": "2.7rem",
        "5.5xl": "3.2rem",
      },
      screens: {
        "2xs": "389px",
        "1xs": "450px",
        "4xl": "2000px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
