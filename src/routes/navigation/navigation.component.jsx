import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import SignIn from "../sign-in/sign-in.component";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <Logo className="logo" />
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
