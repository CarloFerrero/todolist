import React from "react";
import { TodoPage } from "../index";
import { Header, SidebarMenu, Footer } from "../../component/index";
import "./style.css";

function App() {
  return (
    <div>
      <Header />
      <div className="flex-main">
        <SidebarMenu />
        <TodoPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
