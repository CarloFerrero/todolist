import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="30"
          viewBox="0 0 53 30"
        >
          <text
            id="toDo"
            fill="#12141d"
            fontSize="23"
            fontFamily="DMSans-Regular, DM Sans"
          >
            <tspan x="0" y="23">
              to
            </tspan>
            <tspan
              y="23"
              fill="#05299e"
              fontFamily="DMSans-Bold, DM Sans"
              fontWeight="700"
            >
              Do
            </tspan>
          </text>
        </svg>
      </div>

      <div className="hamburger-menu-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="8.5"
          viewBox="0 0 34 8.5"
        >
          <g
            id="Componente_40_2"
            dataname="Componente 40 – 2"
            transform="translate(0.5 0.5)"
          >
            <line
              id="Linea_182"
              dataname="Linea 182"
              x2="33"
              fill="none"
              stroke="#12141d"
              strokeLinecap="round"
              strokeWidth="1"
            />
            <line
              id="Linea_183"
              dataname="Linea 183"
              x2="20.5"
              transform="translate(12.5 7.5)"
              fill="none"
              stroke="#12141d"
              strokeLinecap="round"
              strokeWidth="1"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
