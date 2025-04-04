import React, { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectData";

export default function ProjectCarousel() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [projectsPerPage, setProjectsPerPage] = useState(2);
  const scrollIntervalRef = useRef(null);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoScroll = () => {
    scrollIntervalRef.current = setInterval(() => {
      setDirection(1);
      setPage(prev => (prev + 1) % totalPages);
    }, 5000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(scrollIntervalRef.current);
  }, [totalPages, projectsPerPage]);

  const handleLeft = () => {
    setDirection(-1);
    setPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  const handleRight = () => {
    setDirection(1);
    setPage(prev => (prev + 1) % totalPages);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleRight,
    onSwipedRight: handleLeft,
    trackMouse: true
  });

  const currentProjects = projects.slice(page * projectsPerPage, page * projectsPerPage + projectsPerPage);

  return (
    <>
      <div className="flex justify-between items-center mb-4 px-4">
        <button onClick={handleLeft}><FaChevronLeft className="text-white text-2xl hover:scale-110 transition" /></button>
        <button onClick={handleRight}><FaChevronRight className="text-white text-2xl hover:scale-110 transition" /></button>
      </div>

      <div {...swipeHandlers} className="relative overflow-hidden min-h-[400px] sm:min-h-[500px] px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {currentProjects.map((project, i) => (
              <ProjectCard
                key={`${project.name}-${i}`}
                project={project}
                isHovered={hoveredIndex === i}
                setHoveredIndex={setHoveredIndex}
                index={i}
                startAutoScroll={scrollIntervalRef}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > page ? 1 : -1);
              setPage(i);
            }}
            className={`h-2 w-2 rounded-full ${page === i ? 'bg-blue-500 scale-110' : 'bg-gray-500'} transition`}
          />
        ))}
      </div>
    </>
  );
}
