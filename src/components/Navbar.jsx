import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "../App.css";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            Google 🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
            setDarkTheme(!darkTheme)
          }}
          // className="text-xl   border rounded-full px-2 py-1 hover:shadow-lg"
          className={` text-xl   border rounded-full px-2 py-1 hover:shadow-lg ${theme}`} 
          id="color"
        >
          {darkTheme? "Dark 🌙" :"Light 💡"}
        </button>
      </div>
      <Search />
    </div>
  );
};
export default Navbar;