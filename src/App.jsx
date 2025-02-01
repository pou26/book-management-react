import React from "react";
import Navbar from "./components/Navbar";
import "./components/style.css"
import { Outlet } from "react-router-dom";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default App;