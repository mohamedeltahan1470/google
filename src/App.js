import React, { useState} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routess from './components/AppRoutes';
import './App.css'; 
import {useContext } from "react";
 import ThemeContext from "./ThemeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const {theme} = useContext(ThemeContext);

  return (
  <div className={`${theme}`}>
     <div className="min-h-screen ">
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

      <Routess />

      <Footer />
    </div>
   </div>
  );
}

export default App;
