import React from "react";
import "../styles.css";

let currentDate = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {currentDate} </p>
    </footer>
  );
}

export default Footer;
