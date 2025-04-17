import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
import { toast } from "react-hot-toast";

export default function Loginremindingbutton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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

  return (
    <div className="fixed bottom-4 right-4">
      {!user ? (
        <button
          className="bg-pixelBlue text-white px-4 py-2 rounded-lg font-pixel shadow-pixel animate-pulse hover:bg-cardGrey transition"
          onClick={() => (window.location.href = "/login")}
        >
          Log In
        </button>
      ) : (
        <button
          className="bg-pixelBlue text-white px-4 py-2 rounded-lg font-pixel shadow-pixel hover:bg-pixelYellow transition"
          onClick={handleLogout}
        >
          Log Out
        </button>
      )}
    </div>
  );
}
