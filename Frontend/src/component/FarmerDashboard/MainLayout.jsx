import React from "react";
import './MainLayout.css'

const MainLayout = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <h1>Hello, Mister</h1>
          <a href="/equipment">Buy Equipment</a>
          <a href="/land">Request Land</a>
          <a href="/update/:id">Update Profile</a>
        </div>
        <div className="right">
          <h1>This is content</h1>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
