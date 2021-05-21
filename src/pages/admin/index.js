import React from "react";
import Header from "./components/header";
import Main from "./components/main";

function AdminPage(props) {
  return (
    <div className="bg-primary overflow-hidden ">
      <Header />
      <div className="">
        <Main />
      </div>
    </div>
  );
}

export default AdminPage;
