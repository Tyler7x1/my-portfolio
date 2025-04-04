import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VideoBackground from "../components/VideoBackground.jsx";
import Header from "../components/Header.jsx";
import User from "../components/User.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToSection from "../components/ScrollToSection.jsx";

// ✅ Wrap the full homepage layout in a component
function HomePage() {
    return (
        <>
            <section id="home"><User /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
        </>
    );
}

export default function App() {
    return (
        <Router>
            <ScrollToSection />
            <div className="relative">
                <VideoBackground />
                <div className="relative z-10">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}
