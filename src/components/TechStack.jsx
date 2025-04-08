// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiMongodb, SiJavascript, SiExpress, SiTailwindcss,
  SiTypescript, SiEjs, SiRedis, SiDocker
} from "react-icons/si";

const categories = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-400", tooltip: "Markup language for the web" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400", tooltip: "Styling the web beautifully" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-300", tooltip: "Core frontend scripting language" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", tooltip: "Typed superset of JavaScript" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400", tooltip: "Utility-first CSS framework" },
    { name: "EJS", icon: <SiEjs />, color: "text-yellow-200", tooltip: "Templating engine for server-side rendering" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400", tooltip: "Frontend library for UI development" }
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400", tooltip: "JavaScript runtime for backend" },
    { name: "Express", icon: <SiExpress />, color: "text-white", tooltip: "Minimal Node.js web framework" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", tooltip: "NoSQL database" },
    { name: "Redis", icon: <SiRedis />, color: "text-red-500", tooltip: "In-memory data store and cache" },
  ],
  DevOps: [
    { name: "Docker", icon: <SiDocker />, color: "text-blue-500", tooltip: "Containerization platform" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500", tooltip: "Version control system" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-300", tooltip: "Git repository hosting" },
  ],
};

export default function TechStack() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900/60 to-gray-950 opacity-40 blur-2xl" />
      <div className="relative z-10 max-w-6xl w-full space-y-16">
        {Object.entries(categories).map(([category, stack]) => (
          <div key={category}>
            <h2 className={`text-3xl font-bold mb-6 text-center ${category === "Frontend" ? "text-cyan-400" : category === "Backend" ? "text-green-400" : "text-yellow-400"}`}>
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {stack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  title={tech.tooltip}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex flex-col items-center bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:shadow-lg hover:scale-[1.05] transition-all duration-300"
                >
                  <div className={`text-4xl mb-3 ${tech.color}`}>{tech.icon}</div>
                  <span className="text-sm text-gray-300 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
