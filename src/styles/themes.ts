import { DefaultTheme } from "styled-components";
import "@fontsource/kanit";

const theme: DefaultTheme = {
  colors: {
    background: "#101010",
    cardBackground: "#1a191b",
    text: "#FFFFFF",
    textLink1: "#57ABFA",
    textLink2: "#8C53FF",
    shadow: "0px 0px 45px #541496",
    imgShadow: "0px 0px 15px #541496",
    button: {
      loginForm: "rgba(84, 20, 150, 0.93)",
      login: "linear-gradient(94deg, #C764EC 0%, #4A36B1 100%)",
      utilsButton: "#57ABFA",
    },
  },

  fontFamilies: {
    mainFontFamily: "kanit, roboto, sans serif",
  },

  fontSizes: {
    mainFontSize: "1rem",
    biggerFontSize: "1.125rem",
    biggestFontSize: "1.25rem",
    bigTitleFontSize: "2rem",
  },

  sizes: {
    mobileWidth: "320px",
    desktopBreakpoint: "900px",
    inputHeight: "60px",
  },
};

export default theme;
