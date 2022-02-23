import React from "react";
import MaskIcon from "../../images/metamask.svg";
import Image from "../../images/metaBack.png";
import useStyles from "./Style";

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.container__heading}>
          <img src={MaskIcon} className={classes.container__image} />
          Start editing your profile
        </div>
        <div className={classes.container__content}>
          <div className={classes.formContainer}>
            <form>
              <label for="name" class={classes.form__label}>
                Full name
              </label>
              <div className={classes.form__group}>
                <input
                  type="text"
                  className={classes.form__input}
                  id="name"
                  placeholder="Full name"
                  required
                />
              </div>
              <label for="name" class={classes.form__label}>
                Wallet address
              </label>
              <div className={classes.form__group}>
                <input
                  type="text"
                  className={classes.form__input}
                  id="name"
                  placeholder="Full name"
                  disabled
                />
              </div>
              <div className={classes.form__group}>
                <button className={classes.form__button}>Submit</button>
              </div>
            </form>
          </div>

          <div className={classes.imageContainer}>
            <img src={Image} className={classes.backimage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
