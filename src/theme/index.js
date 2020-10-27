import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgba(255,0,0,0.5)",
      main: "rgba(255,0,0,0.8)",
      dark: "rgba(255,0,0,1)",
    },
    secondary: {
      light: "rgba(0,255,0,0.5)",
      main: "rgba(0,255,0,0.8)",
      dark: "rgba(0,255,0,1)",
    },

    background: {
      white: {
        light: "#FFFFFF",
        main: "rgba(255,255,255, 0.2)",
        dark: "#333",
      },
      orange: {
        main: "#FA5238",
      },
    },

    text: {
      primary: "#616161",
      secondary: "#FA5238",
      default: "#FFFFFF",
    },
    
  },
  typography: {
    h1: {
      fontSize: 90,
      fontWeight: 700,
    },
  },
  spacing: 10,
});

export default theme;
