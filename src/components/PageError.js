import React from "react";
import errorImage from "./styles/static/404.png";
import "./styles/pageerror.css";
import Header from "./Header";
import Footer from "./Footer";
const PageError = () => (
  <div>
    <Header />
    <div className="PageError">
      <img src={errorImage} alt="Error"></img>
    </div>
    <Footer></Footer>
  </div>
);

export default PageError;
