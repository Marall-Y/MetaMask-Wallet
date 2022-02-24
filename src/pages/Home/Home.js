import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import MaskIcon from "../../images/metamask.svg";
import Snackbar from "@material-ui/core/Snackbar";
import { useNavigate } from "react-router-dom";
import useStyles from "./Style";

const Home = () => {
  //States
  const [errorMessage, setErrorMessage] = useState(null);
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [snackState, setSnackState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = snackState;

  const classes = useStyles();
  let navigate = useNavigate();

  //hooks
  useEffect(() => {
    if (balance == 0.0) {
      navigate(`/${address}`, {
        state: {
          balance: balance,
          address: address,
        },
      });
    } else if (balance > 0) {
      navigate("/profile", {
        state: {
          address: address,
        },
      });
    }
  }, [balance]);

  //snackbar
  const snackBarHandler = (newState) => {
    setSnackState({ open: true, ...newState });
    setTimeout(() => {
      window.location.href =
        "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en";
    }, 2000);
  };
  const handleClose = (previousState) => {
    setSnackState({ ...previousState, open: false });
  };

  //Functions

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const accountChangedHandler = (newAccount) => {
    setAddress(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet is now connected");
          getAccountBalance(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      snackBarHandler({ vertical: "top", horizontal: "center" });
      setErrorMessage(
        `Please install MetaMask browser extension.
         You will be directed automatically.`
      );
    }
  };

  return (
    <div className={classes.main}>
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message={errorMessage}
          key={vertical + horizontal}
        />
      </div>

      <div className={classes.container}>
        <div className={classes.container__heading}>{connButtonText}</div>
        <div
          className={classes.container__content}
          onClick={connectWalletHandler}
        >
          <span>
            <img src={MaskIcon} className={classes.container__image} />
          </span>
          MetaMask
        </div>
        <div className={classes.container__terms}>
          <p className={classes.terms__text}>
            By connecting I accept Swipe Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
