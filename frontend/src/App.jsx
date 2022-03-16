import "./App.css";
import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import AnimeList from "./views/AnimeList";
import AnimeInfo from "./views/AnimeInfo";
import Login from "./views/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animelist" element={<AnimeList />} />
        <Route path="/animelist/info/:animeid" element={<AnimeInfo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
