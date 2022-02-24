import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ethers } from "ethers";
import MaskIcon from "../../images/metamask.svg";
import Image from "../../images/metaBack.png";
import useStyles from "./Style";
import { Snackbar } from "@material-ui/core";

const Profile = () => {
  const [error, setError] = useState();
  const [userName, setUserName] = useState("");
  const [snackState, setSnackState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = snackState;
  const classes = useStyles();
  const { state } = useLocation();

  //signing function
  const signMessage = async ({ setError, message }) => {
    try {
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();

      return {
        message,
        address,
        signature,
      };
    } catch (err) {
      setError(err.message);
    }
  };

  //snackbar functions
  const snackBarHandler = (newState) => {
    setSnackState({ open: true, ...newState });
  };

  const handleClose = (previousState) => {
    setSnackState({ ...previousState, open: false });
  };

  //submit form
  const handleSign = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    setError();
    const sig = await signMessage({
      setError,
      message: data.get("name"),
    });
    if (sig) {
      setUserName(sig.message);
      snackBarHandler({ vertical: "top", horizontal: "center" });
    }
  };

  return (
    <div className={classes.main}>
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message={`You have logged in as ${userName}`}
          key={vertical + horizontal}
        />
      </div>
      <div className={classes.container}>
        <div className={classes.container__heading}>
          <img src={MaskIcon} className={classes.container__image} />
          Start editing your profile
        </div>
        <div className={classes.container__content}>
          <div className={classes.formContainer}>
            <form onSubmit={handleSign}>
              <label htmlFor="name" className={classes.form__label}>
                Full name
              </label>
              <div className={classes.form__group}>
                <input
                  type="text"
                  name="name"
                  className={classes.form__input}
                  id="name"
                  placeholder="Full name"
                  required
                />
              </div>
              <label htmlFor="name" className={classes.form__label}>
                Wallet address
              </label>
              <div className={classes.form__group}>
                <input
                  type="text"
                  className={classes.form__input}
                  id="name"
                  placeholder="ٌWallet address"
                  disabled
                  value={state.address}
                />
              </div>
              <div className={classes.form__group}>
                <button className={classes.form__button}>Submit</button>
              </div>
            </form>
          </div>

          <div className={classes.imageContainer}>
            <img src={Image} className={classes.backImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
