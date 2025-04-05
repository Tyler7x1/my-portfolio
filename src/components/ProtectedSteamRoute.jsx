import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedSteamRoute = ({ children }) => {
  const location = useLocation();

  const allowed = location.state?.fromTerminal === true;

  return allowed ? children : <Navigate to="/" replace />;
};

export default ProtectedSteamRoute;
