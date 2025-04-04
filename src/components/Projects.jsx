import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import FadeIn from "./FadeIn";
import {
    SiNodedotjs, SiExpress, SiMongodb, SiEjs, SiArduino,
    SiGoogledrive, SiAxios, SiTailwindcss, SiSocketdotio
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
    const [direction, setDirection] = useState(0);
    const projectsPerPage = 2;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setPage((prev) => (prev + 1) % totalPages);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalPages]);

    const handleLeft = () => {
        setDirection(-1);
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const handleRight = () => {
        setDirection(1);
        setPage((prev) => (prev + 1) % totalPages);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            setDirection(1);
            handleRight();
        },
        onSwipedRight: () => {
            setDirection(-1);
            handleLeft();
        },
        trackMouse: true
    });

    const start = page * projectsPerPage;
    const end = start + projectsPerPage;
    const currentProjects = projects.slice(start, end);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 transition-colors duration-300">
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30"></div>

            <div className="relative z-10 max-w-6xl w-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">
                    My Projects
                </h2>

                {/* Controls */}
                <div className="flex justify-between items-center mb-4 px-4">
                    <button onClick={handleLeft} className="cursor-pointer">
                        <FaChevronLeft className="text-white text-xl hover:scale-110 transition" />
                    </button>
                    <button onClick={handleRight} className="cursor-pointer">
                        <FaChevronRight className="text-white text-xl hover:scale-110 transition" />
                    </button>
                </div>

                {/* Carousel */}
                <div {...swipeHandlers} className="relative overflow-hidden min-h-[350px] px-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-wrap justify-center items-stretch gap-6"
                        >
                            {currentProjects.map((project) => (
                                <FadeIn key={project.name}>
                                    <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 relative flex flex-col w-full max-w-sm mx-auto min-h-[400px]">
                                        {!project.completed && (
                                            <span className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">
                                                🚧 In Progress
                                            </span>
                                        )}

                                        <h3 className="text-2xl font-semibold text-white mb-3">
                                            {project.name}
                                        </h3>

                                        <p className="text-gray-300 text-sm mb-4 whitespace-normal break-words flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto">
                                            <h4 className="text-sm font-semibold text-gray-400 mb-2">
                                                Technologies Used:
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {project.technologies.map((tech, i) => (
                                                    <div key={i} title={tech}>
                                                        {techIcons[tech] || <span className="text-xs">{tech}</span>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 text-blue-400 hover:text-blue-300 hover:underline transition text-sm"
                                        >
                                            View Repository →
                                        </a>
                                    </div>
                                </FadeIn>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > page ? 1 : -1);
                                setPage(i);
                            }}
                            className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${page === i ? 'bg-blue-500 scale-110' : 'bg-gray-500'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
