import theme from "../../theme";
const styles = () => {
  return {
    backgroundColorDefault: {
      backgroundColor: theme.palette.background.white.light,
    },
    toolBarText: {
      color: theme.palette.text.primary,
      "&:hover": {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.white.light,
      },
    },
    img: {
      width: 50,
      height: 50,
    },
    loginButton: {
      color: theme.palette.text.primary,
      margin: theme.spacing(0.2),
      "&:hover": {
        color: theme.palette.text.secondary,
      },
    },
  };
};

export default styles;
