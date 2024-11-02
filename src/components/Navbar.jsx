/* eslint-disable react/prop-types */
import logo from "../assets/logo.png";
import dollar from "../assets/dollar.png";
import MenuItems from "./MenuItems";
import PropTypes from "prop-types";

const Navbar = ({ credit = 0 }) => {
  return (
    <div className="navbar bg-base-100 bg-opacity-80 border fixed top-0 backdrop-blur-sm z-50">
      <div className="navbar-start w-1/3 md:w-1/2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <MenuItems />
          </ul>
        </div>
        <a href="#" className="hidden sm:block">
          <img className="" src={logo} alt="logo" />
        </a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuItems />
        </ul>
      </div>

      <div className="navbar-end w-2/3 md:w-1/2">
        <div className=" border-2 bg-base-100 backdrop-blur-sm rounded-xl px-6 py-3 font-semibold text-sm md:text-base flex gap-1 items-center">
          {credit} Coin
          <img className="w-4 h-4" src={dollar} alt="dollar img" />
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  credit: PropTypes.number.isRequired,
};

export default Navbar;
