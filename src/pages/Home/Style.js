import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  main: {
    minHeight: "100vh",
    fontSize: "62.5%",
    font: "sans-serif",
    backgroundImage: "linear-gradient(to right, #cc2b5e, #753a88)",
    position: "relative",
  },
  container: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    justifyContent: "space-between",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.53)",
    borderRadius: "1rem",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(8.3px)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  container__heading: {
    flex: "0 0 40%",
    backgroundColor: "#e0e4ec",
    padding: "1.6rem",
    fontSize: "1.2rem",
    fontWeight: "400",
    color: "#888",
  },
  container__content: {
    flex: 1,
    padding: "1rem",
    fontSize: "0.8rem",
    fontWeight: "300",
    color: "#342b2b",
    "&:hover": {
      color: "#d92727",
      cursor: "pointer",
    },
  },
  container__image: {
    transform: "translateY(30%)",
    marginRight: "1rem",
  },
  container__terms: {
    flex: "0 0 20%",
    padding: "1rem",
    borderTop: "1px solid #888",
    display: "inline-block",
    width: "70%",
    margin: "1rem auto 0.5rem auto",
  },
}));

export default useStyles;
