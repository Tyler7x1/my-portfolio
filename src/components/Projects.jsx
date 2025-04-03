import React, { useState, useRef, useEffect, useCallback } from 'react';

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
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const scrollPos = useRef(0);
    const animationFrame = useRef(null);

    // Duplicate projects for seamless looping
    const duplicatedProjects = [...projects, ...projects];

    const smoothAutoScroll = useCallback(() => {
        if (!scrollRef.current || isHovered) {
            animationFrame.current = requestAnimationFrame(smoothAutoScroll);
            return;
        }

        scrollPos.current += 1; // Slower scroll speed
        
        // Reset to start when reaching the middle point for seamless looping
        if (scrollPos.current >= scrollRef.current.scrollWidth / 2) {
            scrollPos.current = 0;
            scrollRef.current.scrollLeft = 0;
        } else {
            scrollRef.current.scrollLeft = scrollPos.current;
        }

        animationFrame.current = requestAnimationFrame(smoothAutoScroll);
    }, [isHovered]);

    useEffect(() => {
        animationFrame.current = requestAnimationFrame(smoothAutoScroll);
        return () => {
            cancelAnimationFrame(animationFrame.current);
        };
    }, [smoothAutoScroll]);

    return (
        <section id="projects" className="min-h-screen bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-16 px-6 transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 dark:text-blue-600 mb-8">
                My Projects
            </h2>

            <div className="relative mx-auto max-w-7xl">
                <div 
                    ref={scrollRef}
                    className="scroll-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="scroll-content">
                        {duplicatedProjects.map((project, index) => (
                            <div 
                                key={`${project.name}-${index}`} 
                                className="project-card bg-gray-800 dark:bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 relative flex flex-col"
                            >
                                {!project.completed && (
                                    <span className="absolute top-3 right-3 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                                        🚧 In Progress
                                    </span>
                                )}
                                
                                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-3">
                                    {project.name}
                                </h3>

                                <p className="text-gray-300 dark:text-gray-700 flex-grow whitespace-normal">
                                    {project.description}
                                </p>

                                <div className="mt-4">
                                    <h4 className="text-sm font-semibold text-gray-400 dark:text-gray-600 mb-2">
                                        Technologies Used:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="bg-blue-600 dark:bg-blue-300 text-white dark:text-gray-900 text-xs font-medium px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a 
                                    href={project.repo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block text-blue-400 dark:text-blue-600 hover:text-blue-300 dark:hover:text-blue-500 hover:underline transition"
                                >
                                    View Repository →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}