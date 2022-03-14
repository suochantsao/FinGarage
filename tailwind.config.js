module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ["Work Sans", "sans-serif"],
        NotoSans: ["Noto Sans TC", "sans-serif"],
      },
      backgroundImage: {
        "home-banner": "url('./images/banner.jpg')",
      },
    },
  },
  plugins: [],
};
