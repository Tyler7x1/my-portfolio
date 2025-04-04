import { useState, useEffect, useMemo } from 'react';
import FadeIn from "./FadeIn";

export default function User() {
    const [nameText, setNameText] = useState('');
    const [professionText, setProfessionText] = useState('');
    const [nameIndex, setNameIndex] = useState(0);
    const [professionIndex, setProfessionIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    const nameOptions = useMemo(() => ['Jayprakash Malik', 'Jay', 'Jayprakash'], []);
    const professionOptions = useMemo(() => [
        'Backend Developer', 
        'Video Gamer', 
        'Node.js Developer', 
        'MERN Stack Developer'
    ], []);

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetweenWords = 1000;

    useEffect(() => {
        const currentName = nameOptions[nameIndex];
        const currentProfession = professionOptions[professionIndex];

        const timer = setTimeout(() => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                    setNameText(currentName.substring(0, charIndex - 1));
                    setProfessionText(currentProfession.substring(0, charIndex - 1));
                } else {
                    setIsDeleting(false);
                    setNameIndex((prev) => (prev + 1) % nameOptions.length);
                    setProfessionIndex((prev) => (prev + 1) % professionOptions.length);
                }
            } else {
                if (charIndex < currentName.length || charIndex < currentProfession.length) {
                    setCharIndex((prev) => prev + 1);
                    setNameText(currentName.substring(0, charIndex + 1));
                    setProfessionText(currentProfession.substring(0, charIndex + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseBetweenWords);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, nameIndex, professionIndex, nameOptions, professionOptions]);

    const handleDownload = () => {
        const resumeUrl = "/Jayprakash_Malik.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Jayprakash_Malik_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section 
            className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-6 transition-colors duration-300"
        >
            <FadeIn>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Hi! I'm <span className="text-blue-400">{nameText}</span>
                    <span className="animate-pulse">|</span>
                </h1>

                <h3 className="text-lg md:text-2xl mt-4 text-gray-300 font-medium">
                    A <span className="text-blue-300 font-semibold">{professionText}</span>
                    <span className="animate-pulse">|</span>
                </h3>

                <p className="mt-4 text-gray-400 text-sm md:text-base">
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

                <button 
                    onClick={handleDownload} 
                    className="mt-6 px-6 py-3 bg-blue-500/50 dark:bg-blue-600/50 backdrop-blur-lg text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600/50 dark:hover:bg-blue-500/50 transition duration-300"
                >
                    Download Resume
                </button>
            </FadeIn>
        </section>
    );
}
