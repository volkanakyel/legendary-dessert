module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      maxWidth: {
        container: "940px",
        background: "274px",
        card: "138px",
        addons: "450px",
      },
      width: {
        addons: "450px",
        container: "90%"
      },
      height: {
        banner: "568px",
      },
      fontFamily: {
        'red-hat': ['"Red Hat Text"', 'sans-serif'],
      },
    },
    fontSize: {
      xs: "12px",
      base: "14px",
      s: "16px",
      sm: "18px",
      m: "24px",
      l: "32px",
      lg: "40px",
      xl: "56px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "940px",
      xl: "1280px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      red: "#C73B0F",
      green: "#1EA575",
      rose: {
        50: "#FCF8F6",
        100: "#F5EEEC",
        300: "#CAAFA7",
        400: "#AD8A85",
        500: "#87635A",
        900: "#260F08",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
