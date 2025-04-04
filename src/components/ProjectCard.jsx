// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { techIcons } from "./projectData";

export default function ProjectCard({ project, isHovered, setHoveredIndex, index, startAutoScroll }) {
  return (
    <FadeIn key={project.name}>
      <div
        onMouseEnter={() => {
          setHoveredIndex(index);
          clearInterval(startAutoScroll.current);
        }}
        onMouseLeave={() => {
          setHoveredIndex(null);
          startAutoScroll();
        }}
        className="bg-gray-800/30 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition relative flex flex-col w-full max-w-xs sm:max-w-sm h-[350px] sm:h-[400px] overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-xl" loading="lazy" />
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 flex flex-col justify-between h-full"
            >
              {!project.completed && (
                <span className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">
                  🚧 In Progress
                </span>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              </div>
              <div className="mt-auto">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <div key={i} title={tech}>
                      {techIcons[tech] || <span className="text-xs">{tech}</span>}
                    </div>
                  ))}
                </div>
              </div>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:underline text-sm">
                View Repository →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}
