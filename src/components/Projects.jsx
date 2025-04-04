import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiEjs,
    SiArduino,
    SiGoogledrive,
    SiAxios,
    SiTailwindcss,
    SiSocketdotio
} from 'react-icons/si';

// Map technology names to corresponding icons
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
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const scrollPos = useRef(0);
    const animationFrame = useRef(null);

    const duplicatedProjects = [...projects, ...projects];

    const smoothAutoScroll = useCallback(() => {
        if (!scrollRef.current || isHovered) {
            animationFrame.current = requestAnimationFrame(smoothAutoScroll);
            return;
        }

        scrollPos.current += 1;

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
        return () => cancelAnimationFrame(animationFrame.current);
    }, [smoothAutoScroll]);

    return (
        <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center py-16 px-6 transition-colors duration-300">
            {/* Blurred Glass Background */}
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30 dark:bg-gray-900/30"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 dark:text-blue-600 mb-8">
                    My Projects
                </h2>

                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="scroll-container overflow-x-auto whitespace-nowrap"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="scroll-content flex gap-6">
                            {duplicatedProjects.map((project, index) => (
                                <div
                                    key={`${project.name}-${index}`}
                                    className="project-card w-[300px] min-w-[300px] bg-gray-800/30 dark:bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 relative flex flex-col"
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
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.map((tech, i) => (
                                                <div key={i} title={tech}>
                                                    {techIcons[tech] || (
                                                        <span className="text-xs">{tech}</span>
                                                    )}
                                                </div>
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
            </div>
        </section>
    );
}
