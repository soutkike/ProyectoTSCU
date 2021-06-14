import React from "react";
import mainLogo from "./styles/static/logo.png";
import "./styles/headerstyles.css";
const Header = () => (
  <div className="row">
    <div className="col-12 pt-2 pb-2 cabecera">
      <div className="container-fluid">
        <img src={mainLogo} alt="..." height="75px" />
      </div>
    </div>
  </div>
);

export default Header;
