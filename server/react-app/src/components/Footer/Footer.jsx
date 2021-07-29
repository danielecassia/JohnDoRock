import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer">
        &copy;{new Date().getFullYear()} Muudle | Todos os Direitos Reservados
      </div>
    </div>
  );
}

export default Footer;