import { useState, useEffect, useMemo } from 'react';
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
            className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-4 sm:px-6 md:px-8 transition-colors duration-300"
        >
            <FadeIn>
                <div className="max-w-screen-md">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Hi! I'm <span className="text-blue-400">Jayprakash Malik</span>.
                    </h1>

                    <h3 className="text-base sm:text-lg md:text-2xl mt-2 text-gray-300 font-medium">
                        A <span className="text-blue-300 font-semibold">{professionText}</span>
                        <span className="animate-pulse">|</span>
                    </h3>

                    <p className="mt-4 text-gray-400 text-sm sm:text-base px-2 sm:px-6">
                        I'm a 3rd-year student at 
                        <a 
                            href="https://presidencyuniversity.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline hover:text-blue-300 transition"
                        >
                            {" "}Presidency University
                        </a>, Bengaluru.
                    </p>

                    <p className="mt-6 text-gray-300 text-sm sm:text-base px-2 sm:px-6">
                        If you're a developer, check out the{" "}
                        <span className="text-blue-400 font-semibold">Terminal</span> Section and type <code className="bg-gray-800 text-yellow-300 px-1 rounded">help</code> to get started.
                    </p>

                    <button 
                        onClick={handleDownload} 
                        className="mt-6 px-6 py-3 bg-blue-500/50 backdrop-blur-lg text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600/50 transition duration-300"
                    >
                        Download Resume
                    </button>
                </div>
            </FadeIn>
        </section>
    );
}
