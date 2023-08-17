/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nm-blue": {
          100: "#41B6E6",
          light: "#D2F2FF",
        },
        "nm-green": {
          100: "#7AE1BF",
          light: "#E4F9F2",
        },
        "nm-error": {
          100: "#EA5252",
          light: "#FBECEC",
        },
        "nm-gray": {
          100: "#4B4B4B",
        },
      },
      backgroundImage: {
        "footer-texture": "url('/img/footer_banner.png')",
        "super-easy": "url('/img/super_easy_pro.png')",
        "package-building": "url('/img/package_building.png')",
        "client-partnar": "url('/img/clent_bg.png')",
        "service-hero": "url('/img/servicer_hero_banner.png')",
        "main-hero-bg": "url('/img/hero_bg.png')",
      },
    },
  },
  plugins: [],
};
