import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { useHistory, useLocation } from "react-router-dom";
import "./style.css";

export default function Navbar(props) {
  const location = useLocation();
  console.log(location.pathname);

  const history = useHistory();

  const handleLogoutClick = (event) => {
    API.logout().then((res) => {
      props.logoutHandle();
      history.push("/");
    });
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <div className="navbar-item">
            <a href="/about">About</a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {!props.currentUser && location.pathname !== "/signup" ? (
                <Link className="button is-primary" to="/signup">
                  <strong>Sign up</strong>
                </Link>
              ) : (
                ""
              )}

              {!props.currentUser && location.pathname !== "/login" ? (
                <Link className="button is-light" to="/login">
                  Log In
                </Link>
              ) : (
                ""
              )}

              {props.currentUser ? (
                <button className="button is-light" onClick={handleLogoutClick}>
                  Log Out
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
