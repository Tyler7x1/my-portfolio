import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import FadeIn from "./FadeIn";
import {
    SiNodedotjs, SiExpress, SiMongodb, SiEjs, SiArduino,
    SiGoogledrive, SiAxios, SiTailwindcss, SiSocketdotio
} from 'react-icons/si';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import empManageImage from '../assets/EmpManage.png';
import floodSenseImage from '../assets/FloodSense.png';
import metaBucketImage from '../assets/MetaBucket.png';
import echoRelayImage from '../assets/echorelay.png';

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
        image: empManageImage,
        completed: true
    },
    {
        name: "FloodSense",
        description: "A MERN web app that displays real-time IoT sensor data.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Arduino (C++)"],
        repo: "https://github.com/Tyler7x1/FloodSense",
        image: floodSenseImage,
        completed: true
    },
    {
        name: "Meta Bucket",
        description: "A Node.js application that routes file uploads to the Google Drive account.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Google Drive API", "Axios"],
        repo: "https://github.com/Soujanya2004/Google-Cloud-Storage/tree/jay",
        image: metaBucketImage,
        completed: true
    },
    {
        name: "Echo Relay",
        description: "File sharing web app with storage connecting to multiple Google Drive APIs.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS", "Google Drive API", "Axios", "WebSocket"],
        repo: "https://github.com/theoneandonlyshadow/Echo-Relay",
        image: echoRelayImage,
        completed: false
    }
];

export default function Projects() {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [projectsPerPage, setProjectsPerPage] = useState(2);
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const scrollIntervalRef = useRef(null);

    // Handle responsive projects per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setProjectsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setProjectsPerPage(2);
            } else {
                setProjectsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const startAutoScroll = () => {
        scrollIntervalRef.current = setInterval(() => {
            setDirection(1);
            setPage((prev) => (prev + 1) % totalPages);
        }, 5000);
    };

    useEffect(() => {
        startAutoScroll();
        return () => clearInterval(scrollIntervalRef.current);
    }, [totalPages, projectsPerPage]);

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
        <section
            id="projects"
            className="relative min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 scroll-mt-20 transition-colors duration-300"
        >
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30"></div>

            <div className="relative z-10 w-full max-w-4xl lg:max-w-6xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-600 mb-6">
                    Projects
                </h2>

                <div className="flex justify-between items-center mb-4 px-2 sm:px-4">
                    <button 
                        onClick={handleLeft} 
                        className="cursor-pointer p-2 sm:p-0"
                        aria-label="Previous projects"
                    >
                        <FaChevronLeft className="text-white text-xl sm:text-2xl hover:scale-110 transition" />
                    </button>
                    <button 
                        onClick={handleRight} 
                        className="cursor-pointer p-2 sm:p-0"
                        aria-label="Next projects"
                    >
                        <FaChevronRight className="text-white text-xl sm:text-2xl hover:scale-110 transition" />
                    </button>
                </div>

                <div {...swipeHandlers} className="relative overflow-hidden min-h-[400px] sm:min-h-[500px] px-1 sm:px-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-6"
                        >
                            {currentProjects.map((project, i) => {
                                const isHovered = hoveredIndex === i;

                                return (
                                    <FadeIn key={`${project.name}-${page}`}>
                                        <div
                                            onMouseEnter={() => {
                                                setHoveredIndex(i);
                                                clearInterval(scrollIntervalRef.current);
                                            }}
                                            onMouseLeave={() => {
                                                setHoveredIndex(null);
                                                startAutoScroll();
                                            }}
                                            className="bg-gray-800/30 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition duration-300 relative flex flex-col w-full max-w-xs sm:max-w-sm mx-auto h-[350px] sm:h-[400px] overflow-hidden"
                                        >
                                            <AnimatePresence mode="wait">
                                                {!isHovered ? (
                                                    <motion.div
                                                        key="image-container"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="w-full h-full"
                                                    >
                                                        <img
                                                            src={project.image}
                                                            alt={project.name}
                                                            className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                                                            loading="lazy"
                                                        />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="details"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="p-4 sm:p-6 flex flex-col justify-between h-full"
                                                    >
                                                        {!project.completed && (
                                                            <span className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">
                                                                🚧 In Progress
                                                            </span>
                                                        )}
                                                        <div>
                                                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">{project.name}</h3>
                                                            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
                                                        </div>

                                                        <div className="mt-auto">
                                                            <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-1 sm:mb-2">Technologies:</h4>
                                                            <div className="flex flex-wrap gap-2 sm:gap-3">
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
                                                            className="mt-3 sm:mt-4 text-blue-400 hover:text-blue-300 hover:underline transition text-xs sm:text-sm"
                                                        >
                                                            View Repository →
                                                        </a>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > page ? 1 : -1);
                                setPage(i);
                            }}
                            className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${page === i ? 'bg-blue-500 scale-110' : 'bg-gray-500'}`}
                            aria-label={`Go to project page ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}