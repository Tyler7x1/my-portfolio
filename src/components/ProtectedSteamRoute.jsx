import React from 'react';
import { useAuth } from './authContext.jsx';
import NotFound from '../pages/404.jsx';

export default function ProtectedSteamRoute({ children }) {
  const { isUnlocked } = useAuth();

  if (!isUnlocked) {
    return <NotFound />;
  }

  return children;
}
