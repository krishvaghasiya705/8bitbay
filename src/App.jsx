import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./common/header";
import Footer from "./common/footer";
import GameDetails from "./pages/gamedetails/GameDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamedetails/:id" element={<GameDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
