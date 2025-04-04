import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from "./FadeIn";
import {
    SiNodedotjs, SiExpress, SiMongodb, SiEjs, SiArduino, SiGoogledrive, SiAxios, SiTailwindcss, SiSocketdotio
} from 'react-icons/si';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const techIcons = {
    "Node.js": <SiNodedotjs title="Node.js" className="text-green-500 text-2xl" />,
    "Express.js": <SiExpress title="Express.js" className="text-gray-300 text-2xl" />,
    "MongoDB": <SiMongodb title="MongoDB" className="text-green-600 text-2xl" />,
    "EJS": <SiEjs title="EJS" className="text-yellow-500 text-2xl" />,
    "Arduino (C++)": <SiArduino title="Arduino" className="text-blue-500 text-2xl" />,
    "Google Drive API": <SiGoogledrive title="Google Drive API" className="text-green-500 text-2xl" />,
    "Axios": <SiAxios title="Axios" className="text-purple-500 text-2xl" />,
    "Tailwind CSS": <SiTailwindcss title="Tailwind CSS" className="text-teal-400 text-2xl" />,
    "WebSocket": <SiSocketdotio title="WebSocket" className="text-yellow-400 text-2xl" />
};

const projects = [
    {
        name: "EmpManage",
        description: "Basic CRUD API with MongoDB connection that allows for the creation, retrieval, update, and deletion of user accounts.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
        repo: "https://github.com/Tyler7x1/EmpManage",
        completed: true
    },
    {
        name: "FloodSense",
        description: "A MERN web app that displays real-time IoT sensor data.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Arduino (C++)"],
        repo: "https://github.com/Tyler7x1/FloodSense",
        completed: true
    },
    {
        name: "Meta Bucket",
        description: "A Node.js application that routes file uploads to the Google Drive account.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Google Drive API", "Axios"],
        repo: "https://github.com/Soujanya2004/Google-Cloud-Storage/tree/jay",
        completed: true
    },
    {
        name: "Echo Relay",
        description: "File sharing web app with storage connecting to multiple Google Drive APIs.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS", "Google Drive API", "Axios", "WebSocket"],
        repo: "https://github.com/theoneandonlyshadow/Echo-Relay",
        completed: false
    }
];

export default function Projects() {
    const [page, setPage] = useState(0);
    const projectsPerPage = 1;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const [touchStartX, setTouchStartX] = useState(null);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setPage((prev) => (prev + 1) % totalPages);
        }, 3000);
        return () => clearInterval(interval);
    }, [totalPages]);

    const handleLeft = () => {
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const handleRight = () => {
        setPage((prev) => (prev + 1) % totalPages);
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (Math.abs(deltaX) > 50) {
            deltaX > 0 ? handleRight() : handleLeft();
        }

        setTouchStartX(null);
    };

    const currentProject = projects[page];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 transition-colors duration-300">
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30"></div>

            <div className="relative z-10 max-w-4xl w-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">
                    My Projects
                </h2>

                {/* Controls */}
                <div className="flex justify-between items-center mb-4 px-2">
                    <button onClick={handleLeft} className="cursor-pointer disabled:opacity-50">
                        <FaChevronLeft className="text-white text-xl" />
                    </button>
                    <button onClick={handleRight} className="cursor-pointer disabled:opacity-50">
                        <FaChevronRight className="text-white text-xl" />
                    </button>
                </div>

                {/* Carousel */}
                <div
                    className="relative overflow-hidden h-full min-h-[350px]"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentProject.name}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FadeIn>
                            <div className="bg-gray-800/30 backdrop-blur-lg rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 relative flex flex-col max-w-md mx-auto w-full">
                                    {!currentProject.completed && (
                                        <span className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">
                                            🚧 In Progress
                                        </span>
                                    )}

                                    <h3 className="text-2xl font-semibold text-white mb-3">
                                        {currentProject.name}
                                    </h3>

                                    <p className="text-gray-300 text-sm mb-4 whitespace-normal break-words">
                                        {currentProject.description}
                                    </p>

                                    <div className="mt-auto">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-2">
                                            Technologies Used:
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {currentProject.technologies.map((tech, i) => (
                                                <div key={i} title={tech}>
                                                    {techIcons[tech] || <span className="text-xs">{tech}</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href={currentProject.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 text-blue-400 hover:text-blue-300 hover:underline transition text-sm"
                                    >
                                        View Repository →
                                    </a>
                                </div>
                            </FadeIn>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                                page === i ? 'bg-blue-500 scale-110' : 'bg-gray-500'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
