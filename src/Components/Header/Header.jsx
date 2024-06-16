import { useContext, useState } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../ProviderContext/ProviderContext";

const Header = () => {
    const [open,setOpen]=useState(false);
    const {user,LogOut}=useContext(AuthContext);
    const handleLogOut=()=>{
      LogOut();
    }
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
          {user && (
            <ul className="flex gap-4">
              <NavLink to={"/profile"}>Profile</NavLink>
              <NavLink to={"/deshboard"}>Deshboard</NavLink>
            </ul>
          )}
          <div>
            {user ? (
              <div className="flex items-center gap-2">
                <p>{user.email}</p>
                <button
                  onClick={handleLogOut}
                  className="hidden md:btn btn-square w-[100px] h-[50px]text-base"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <button className="hidden md:btn btn-square w-[100px] h-[50px]text-base">
                <Link to={"/login"}>Login</Link>
              </button>
            )}
          </div>
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
              {user && (
                <>
                  <li className="py-2" onClick={() => setOpen(!open)}>
                    <NavLink to={"/deshboard"}>Deshboard</NavLink>
                  </li>
                  <li className="py-2" onClick={() => setOpen(!open)}>
                    <NavLink to={"/profile"}>Profile</NavLink>
                  </li>
                </>
              )}
              <li>
                {user && <p className="overflow-x-scroll">{user.email}</p>}
                <button className="bg-slate-200 btn btn-ghost w-24">
                  Sign Out
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    );
};

export default Header;