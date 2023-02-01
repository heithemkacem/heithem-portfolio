import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  home: {
    height: "calc(100vh - 70px)",
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  container: {
    [theme.breakpoints.only("md")]: {
      paddingTop: "10rem",
    },
    [theme.breakpoints.only("sm")]: {
      paddingTop: "10rem",
    },
    [theme.breakpoints.only("xs")]: {
      paddingTop: "10rem",
    },
    display: "flex !important",
    flexDirection: "column",
    height: "55%",
    zIndex: 1,
    paddingTop: "60px",
  },
  text: {
    width: "500px",
    padding: "1rem",
    paddingRight: "0",
    alignSelf: "flex-start",
    fontSize: "1.5rem !important",
    fontWeight: "700 !important",
  },
  texth1: {
    width: "500px",
    padding: "1rem",
    paddingRight: "0",

    alignSelf: "flex-start",
    fontSize: "3rem !important",
    fontWeight: "700 !important",
    color: "gray !important",
  },
  homeButtonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    width: "95%",
  },
  homeButton: {
    fontWeight: "800 !important",
    letterSpacing: "0.1em !important",
    backgroundImage: "linear-gradient(to right, #42bbbb, #00c1c1)",
    "&:hover": {
      opacity: "0.85",
      transition: "all 0.2s ease-in-out",
    },
  },
}));
