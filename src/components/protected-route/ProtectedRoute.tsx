import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../services/useAuth";

interface IProtectedRoute {
  children: any;
}

export const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
