/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {},
   },
   daisyui: {
      themes: [
         {
            portfolio: {
               primary: "#6a5acd",
               secondary: "#fff",
               accent: "#ff6f00",
               neutral: "#2a2828",
               "base-100": "#FFFFFF",
               info: "#ffffffe6",
            },
         },
      ],
   },
   plugins: [require("daisyui")],
};
