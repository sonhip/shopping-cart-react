import React from "react";
import { Link } from "react-router-dom";

function ReCheckout() {
  return (
    <>
      <div style={{ marginTop: "56px" }}>
        <h2 className="p-4 sm:px-8 sm:text-2xl">
          Please <Link to="/login">login</Link> for buying!
        </h2>
      </div>
    </>
  );
}

export default ReCheckout;
