import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  main: {
    minHeight: "100vh",
    fontSize: "62.5%",
    font: "sans-serif",
    backgroundImage: "linear-gradient(to right, #11998e, #38ef7d)",
    position: "relative",
  },
  container: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
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
    textAlign: "center",
  },
  container__image: {
    marginRight: "1rem",
    transform: "translateY(20%)",
  },
  container__content: {
    flex: 1,
    color: "#342b2b",
    display: "flex",
  },
  formContainer: {
    flex: 1,
    padding: "1.5rem",
  },
  imageContainer: {
    flex: 1,
  },
  form__group: {
    marginBottom: "2rem",
  },
  form__input: {
    fontSize: "0.9rem",
    fontFamily: "inherit",
    color: "inherit",
    padding: "0.3rem 0.6rem",
    borderRadius: "2px",
    backgroundColor: "rbga(#fff, 0.5)",
    border: "none",
    borderBottom: "3px solid transparent",
    width: "90%",
    transition: "all 0.3s",
    marginTop: "0.6rem",

    "&:focus ": {
      outline: "none",
      boxShadow: "0 1rem 2rem rgba($color-black, 0.1)",
      borderBottom: "3px solid #55c57a",
    },

    "&:focus:invalid": {
      borderBottom: "3px solid #ff7730",
    },
  },
  form__label: {
    fontSize: "0.7rem",
    fontWeight: "700",
  },
  form__button: {
    backgroundColor: "#28b485",
    color: "#fff",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "0.3rem 2rem",
    borderRadius: "2rem",
    transition: "all .2s",
    position: "relative",
    fontSize: "0.8rem",
    cursor: "pointer",
    border: "none",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: " 0 2rem 3rem rgba(#000)",
    },
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  backImage: {
    width: "50%",
  },
}));

export default useStyles;
