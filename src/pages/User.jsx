import { useState, useEffect, useMemo } from 'react';
import { MapPin } from "lucide-react";

import FadeIn from "../components/FadeIn";

export default function User() {
    const [professionText, setProfessionText] = useState('');
    const [professionIndex, setProfessionIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    const professionOptions = useMemo(() => [
        'Backend Developer.',
        'Video Gamer.',
        'Node.js Developer.',
        'MERN Stack Developer.'
    ], []);

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetweenWords = 1000;

    useEffect(() => {
        const currentProfession = professionOptions[professionIndex];

        const timer = setTimeout(() => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                    setProfessionText(currentProfession.substring(0, charIndex - 1));
                } else {
                    setIsDeleting(false);
                    setProfessionIndex((prev) => (prev + 1) % professionOptions.length);
                }
            } else {
                if (charIndex < currentProfession.length) {
                    setCharIndex((prev) => prev + 1);
                    setProfessionText(currentProfession.substring(0, charIndex + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseBetweenWords);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, professionIndex, professionOptions]);

    const handleDownload = () => {
        const resumeUrl = "/Jayprakash_Malik.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.setAttribute("download", "Jayprakash_Malik_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-4 sm:px-6 md:px-8 transition-colors duration-300 bg-gradient-to-br from-black to-blue-900"

        >
            <FadeIn>
                <div className="max-w-screen-md bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-8 sm:p-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Hi! I'm <span className="text-teal-400">Jayprakash Malik</span>.
                    </h1>

                    <h3 className="text-base sm:text-lg md:text-2xl mt-2 text-gray-300 font-medium">
                        A <span className="text-cyan-300 font-semibold">{professionText}</span>
                        <span className="animate-pulse">|</span>
                    </h3>

                    <p className="mt-4 text-gray-400 text-sm sm:text-base px-2 sm:px-6 flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <a
                            href="https://www.google.com/maps/place/Bengaluru,+Karnataka,+India/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:underline hover:text-gray-300 transition"
                        >
                            Bengaluru, Karnataka
                        </a>
                    </p>


                    <p className="mt-6 text-gray-300 text-sm sm:text-base px-2 sm:px-6">
                        Check out the{" "}
                        <a href='/terminal'>
                            <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition">Terminal</span>
                        </a> Section and type <code className="bg-gray-800 text-yellow-300 px-1 rounded">help</code> to get started.
                    </p>

                    <button
                        onClick={handleDownload}
                        className="mt-6 px-6 py-3 bg-teal-500/40 backdrop-blur-lg text-white font-semibold rounded-xl shadow-md hover:bg-teal-600/50 transition duration-300 cursor-pointer"
                    >
                        Download Resume
                    </button>
                </div>
            </FadeIn>
        </section>
    );
}
