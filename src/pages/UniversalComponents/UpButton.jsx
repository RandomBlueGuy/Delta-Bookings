import React from "react";
import "./UpButton.css";
import upIcon from "../../assets/Icons/up.svg";
import { useState } from "react";

function UpButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    document.documentElement.scrollTop > 200
      ? setVisible(true)
      : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="up"
      id="scrollButton"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <img src={upIcon} alt="" />
    </button>
  );
}

export default UpButton;
