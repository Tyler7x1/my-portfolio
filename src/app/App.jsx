import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedSteamRoute from '../components/ProtectedSteamRoute';
import GuestBook from "../pages/GuestBook";

import {
  Header,
  User,
  Portfolio,
  Projects,
  Terminal,
  Contact,
  Footer,
  NotFound
} from "../components/js/components.js";

import Steam from "../pages/Steam.jsx";
import SteamLibrary from '../pages/SteamLibrary';

export default function App() {
  return (
    <Router>
      <div className="relative">
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/guestbook" element={<GuestBook />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/steam"
              element={
                <ProtectedSteamRoute>
                  <Steam />
                </ProtectedSteamRoute>
              }
            />
            <Route
              path="/steam/library"
              element={
                <ProtectedSteamRoute>
                  <SteamLibrary />
                </ProtectedSteamRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
