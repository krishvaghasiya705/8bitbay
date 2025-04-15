import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, loading, children }) => {
  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;