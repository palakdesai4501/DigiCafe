import React from "react";
import SideBar from "./components/SideBar";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="app-container">
      <SideBar />
      <Title title="Featured Posts" />
    </div>
  );
};

export default App;
