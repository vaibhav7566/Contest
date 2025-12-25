import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router";
import { removeUser } from "../features/AuthSlice";

const HomeLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
    alert("User Logged Out Successfully!");
  };

  return (
    <div className="flex w-full h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white">
      
      {/* Sidebar */}
      <nav className="flex flex-col w-64 bg-black/40 backdrop-blur-md border-r border-gray-700 p-6">
        
        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-wide">
            My<span className="text-gray-400">App</span>
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col gap-4 flex-1">
          <li>
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="users"
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              Users
            </NavLink>
          </li>

          <li>
            <NavLink
              to="products"
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              Products
            </NavLink>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-red-500 hover:text-white transition"
        >
          LogOut
        </button>
      </nav>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
