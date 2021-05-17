import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

function ExportBill() {
  const [timer, setTimer] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    timer > 0 &&
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
  }, [timer]);
  if (timer === 0) {
    dispatch(push("/"));
  }
  return (
    <div>
      <div className="flex flex-col mt-32 items-center px-8 justify-center">
        <h1 className="text-xl">
          Your order is in processing, we'll contact you soon!
        </h1>
        <h1 className="text-xl">
          If you have any question, please call 911 for help!
        </h1>
        <div>
          <Link className="text-xl" to="/">
            Go back to shopping mall
          </Link>
        </div>
        <div className="h-16 w-16 rounded-full bg-indigo-200 text-2xl font-bold flex items-center justify-center">
          {timer}
        </div>
      </div>
    </div>
  );
}

export default ExportBill;
