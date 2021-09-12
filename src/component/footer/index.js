import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { SiLogmein, SiDribbble } from "react-icons/si";
import "./style.css";

const Footer = () => {
  return (
    <div className="flex-footer">
      <div className="social">
        <SiDribbble className="margin-right" />
        <span className="footer-text">Dribble</span>
        <GoMarkGithub className="margin-right" />
        <span className="footer-text">Github</span>
        <SiLogmein className="margin-right" />
        <span className="footer-text">Linkedin</span>
      </div>
      <div className="copy">
        <p className="footer-text">© Built with pain by me</p>
      </div>
    </div>
  );
};

export default Footer;
