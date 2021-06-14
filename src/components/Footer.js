import React from "react";
import "../components/styles/headerstyles.css";
import gitHubLogo from "./styles/static/github.png";
import telegramLogo from "./styles/static/telegram.png";
const Footer = () => (
  <div class="col-12 mt-4 mb-4">
    <div class="d-flex justify-content-between  w-25 mx-auto ">
      <a href="https://github.com/soutkike/ProyectoTSCU" target="_blank">
        <img src={gitHubLogo} />
      </a>
      <a href="https://github.com/soutkike/ProyectoTSCU" target="_blank">
        <img src={telegramLogo} />
      </a>
    </div>
  </div>
);

export default Footer;
