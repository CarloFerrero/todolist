import React from "react";
import "./style.css";

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu-wrapper">
      <div className="in-arrivo-wrapper">
        <div className="circle yellow"></div>
        <p className="text-menu">IN ARRIVO</p>
        <p className="text-menu right">01</p>
      </div>
      <div className="oggi-wrapper">
        <div className="circle blue"></div>
        <p className="text-menu">OGGI</p>
        <p className="text-menu right">02</p>
      </div>
      <div className="prossimamente-wrapper">
        <div className="circle salmon"></div>
        <p className="text-menu">PROSSIME</p>
        <p className="text-menu right">03</p>
      </div>
    </div>
  );
};

export default SidebarMenu;
