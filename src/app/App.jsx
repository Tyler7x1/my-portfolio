import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
    VideoBackground,
    Header,
    User,
    About,
    Projects,
    Contact,
    Footer,
    NotFound
  } from "../components/components.js";

export default function App() {
    return (
        <Router>
            <div className="relative">
                <VideoBackground />
                <div className="relative z-10">
                    <Header />
                    <Routes>
                        <Route path="/" element={<User />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}
