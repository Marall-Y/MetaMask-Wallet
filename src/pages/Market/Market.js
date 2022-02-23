import React from "react";
import MaskIcon from "../../images/metamask.svg";
import { useLocation } from "react-router-dom";
import useStyles from "./Style";

const Market = () => {
  const { state } = useLocation();
  const classes = useStyles();

  console.log("state", state);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.container__heading}>
          <img src={MaskIcon} className={classes.container__image} />
          Buy Token Page
        </div>
        <div className={classes.container__content}>
          <div>
            <h2 className={classes.container__title}>User Balance:</h2>
            <p style={{ fontSize: "0.7rem" }}>{state.balance} ETH</p>
          </div>

          <div>
            <h2 className={classes.container__title}>Wallet Address:</h2>
            <p style={{ fontSize: "0.7rem" }}>{state.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
