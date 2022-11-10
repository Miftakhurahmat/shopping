import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../../Atoms/Button";
import IconLogin from "../../icons/IconLogin";
import IconLogout from "../../icons/IconLogout";

const Navbar = () => {
  let activeStyle = {
    color: "#47A025",
    fontWeight: "bold",
    backgroundColor: "#fff",
  };

  let navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/home");
  };

  useEffect(() => {}, []);

  return (
    <div id="navbar" className="navbar bg-base-100">
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Belanjapedia
        </Link>
      </div>
      <div>
        <ul className="menu menu-horizontal p-0 flex-1">
          <li>
            <NavLink
              as={Link}
              end
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          {localStorage.getItem("token") && localStorage.getItem("isAdmin") && (
            <li>
              <NavLink
                as={Link}
                to="/update"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Update
              </NavLink>
            </li>
          )}
          {localStorage.getItem("token") && localStorage.getItem("isAdmin") && (
            <li>
              <NavLink
                as={Link}
                to="/rekap"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Rekap
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              as={Link}
              to="/cart"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Cart
            </NavLink>
          </li>
        </ul>
        <ul className="flex-none">
          {!localStorage.getItem("token") && (
            <li>
              <Button buttonPrimary>
                <Link to="/login">
                  <div className="flex text-xs">
                    <IconLogin />
                    <p className="m-auto mx-2 text-xs">Login</p>
                  </div>
                </Link>
              </Button>
            </li>
          )}
          {localStorage.getItem("token") && (
            <li onClick={() => logOut()}>
              <Button buttonDanger>
                <div className="flex text-xs">
                  <IconLogout />
                  <p className="m-auto mx-2 text-xs">Logout</p>
                </div>
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
