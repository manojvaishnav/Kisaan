import React from "react";
import "./Admin.css";
import Table from "./Table/Table";
const Admin = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <h1>Hello, Admin</h1>
          <a href="/farmers">Farmers</a>
          <a href="/merchants">Merchants</a>
          <a href="/landlords">Landlords</a>
        </div>
        <div className="right">
          <Table title="Farmer Table"/>
        </div>
      </div>
    </>
  );
};

export default Admin;
