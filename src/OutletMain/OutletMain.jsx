import { NavLink, Outlet } from "react-router-dom";
import "./OutletMain.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function OutletMain() {
  const [close, setClose] = useState(false);
  return (
    <div className="navbar-section">
      <div onClick={() => setClose(!close)}>
        {close ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
      <div className="left">
        <ul
          className={`md:static absolute duration-500 ease-in-out ${
            close ? "" : "left-[-200px]"
          }`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500" : "undefined"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500" : "undefined"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500" : "undefined"
              }
              to="/info"
            >
              information
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500" : "undefined"
              }
              to="/contact"
            >
              Guide
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}
export default OutletMain;
