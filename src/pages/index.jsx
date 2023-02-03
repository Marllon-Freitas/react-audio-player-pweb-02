import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import MusicDetails from "./MusicDetails";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.path}>
      <Route path="/" element={<Home />} />
      <Route exact path="/music/:id" element={<Home />} />
    </Routes>
  );
}

export default Pages;
