import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/configs/themes/index";
import Header from "./layouts/sections/Header";
import Footer from "./layouts/sections/Footer";
import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header /> */}
    <Routes />
    {/* <Footer /> */}
  </React.StrictMode>
);
