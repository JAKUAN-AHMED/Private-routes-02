import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [open,setOpen]=useState(false);
    return (
      <div className="mt-4 mb-6 m-2">
        <nav className="flex items-center justify-between">
          <div onClick={() => setOpen(!open)} className="md:hidden">
            <button className="btn btn-ghost">Menu</button>
          </div>
          <button className="btn btn-ghost">
            <h2 className="text-3xl font-medium">Private Route</h2>
          </button>
          <ul className="hidden md:flex gap-8">
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "black" : "",
                    width: isActive ? "200px" : "",
                    border: isActive ? "2px solid tomato" : "",
                    background: isActive ? "red" : "",
                  };
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/login"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "black" : "",
                    width: isActive ? "200px" : "",
                    border: isActive ? "2px solid tomato" : "",
                    background: isActive ? "red" : "",
                  };
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "black" : "",
                    width: isActive ? "200px" : "",
                    border: isActive ? "2px solid tomato" : "",
                    background: isActive ? "red" : "",
                  };
                }}
                to={"/register"}
              >
                Register
              </NavLink>
            </li>
          </ul>
          <button className="hidden md:btn btn-square w-[100px] h-[50px]text-base">
            Login
          </button>
        </nav>
        {open && (
          <nav className="flex flex-col border rouned shadow-lg w-28 text-center md:hidden">
            <ul>
              <li onClick={() => setOpen(!open)} className="py-2">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li onClick={() => setOpen(!open)} className="py-2">
                <NavLink to={"/login"}>Login</NavLink>
              </li>
              <li onClick={() => setOpen(!open)} className="py-2">
                <NavLink to={"/register"}>Register</NavLink>
              </li>
              <button
                onClick={() => setOpen(!open)}
                className="btn btn-circle text-center w-24 m-2"
              >
                Login
              </button>
            </ul>
          </nav>
        )}
      </div>
    );
};

export default Header;