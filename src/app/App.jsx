import React from "react";
import VideoBackground from "../components/VideoBackground.jsx";
import Header from "../components/Header.jsx"
import User from "../components/User.jsx"
import About from "../components/About.jsx"
import Projects from "../components/Projects.jsx"
import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"

export default function App() {
    return (
        <>
            <div className="relative">
                <VideoBackground />
                {/* Your entire app */}
                <div className="relative z-10">
                    {/* Other components */}
                    <Header />
                    <User />
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </>
    );
}
