import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      &copy;{new Date().getFullYear()} Muudle | Todos os Direitos Reservados
    </footer>
  );
}

export default Footer;