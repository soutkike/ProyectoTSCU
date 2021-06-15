import React from "react";
import "../components/styles/headerstyles.css";
import gitHubLogo from "./styles/static/github.png";
import telegramLogo from "./styles/static/telegram.png";
const Footer = () => (
  <div className="col-12 mt-4 mb-4">
    <div className="d-flex justify-content-between  w-25 mx-auto ">
      <a href="https://github.com/soutkike/ProyectoTSCU">
        <img src={gitHubLogo} alt="github" />
      </a>
      <a href="https://github.com/soutkike/ProyectoTSCU">
        <img src={telegramLogo} alt="telegram" />
      </a>
    </div>
  </div>
);

export default Footer;
