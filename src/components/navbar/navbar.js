import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/var")}>var</button>

      <div className="two">
        <h1>this is two</h1>
        <div className="three">
          <h1>this three</h1>
        </div>
      </div>
    </>
  );
};
export default Navbar;
