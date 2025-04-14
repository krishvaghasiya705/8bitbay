import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./common/header";
import Footer from "./common/footer";
import GameDetails from "./pages/gamedetails/GameDetails";
import AboutPage from "./pages/about/about";
import Admin from "./pages/admin/admin";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Header onSearch={setSearchQuery} />
      <main>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/gamedetails/:id/:name" element={<GameDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
