module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluePokemon: "#566CD6",
        textPokemon: "#40415E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
