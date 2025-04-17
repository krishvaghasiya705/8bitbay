import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebaseconfig";
import Home from "./pages/home";
import Header from "./common/header";
import Footer from "./common/footer";
import GameDetails from "./pages/gamedetails/GameDetails";
import AboutPage from "./pages/about/about";
import Admin from "./pages/admin/admin";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ProtectedRoute from "./utility/ProtectedRoute";
import { Toaster, toast } from "react-hot-toast";
import Loginremindingbutton from "./components/loginremindingbutton";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email === "kvaghasiya705@gmail.com") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(`Logout Error: ${error.message}`);
    }
  };
  const noHeaderFooterRoutes = ["/login", "/signup"];

  return (
    <>
      <Toaster />
      {!noHeaderFooterRoutes.includes(location.pathname) && (
        <Header onSearch={setSearchQuery} />
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          {/* <Route path="/gamedetails/:id/:name" element={<GameDetails />} /> */}
          <Route path="/gamedetails/:id" element={<GameDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAdmin={isAdmin} loading={loading}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {!noHeaderFooterRoutes.includes(location.pathname) && (
        <Loginremindingbutton />
      )}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
