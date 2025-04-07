import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Laptop2, Wrench } from "lucide-react";
import About from "../components/progTimeline";
import EducationTimeline from "../components/EducationTimeline";
import TechStack from "../components/TechStack";

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState("techstack");

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10 overflow-hidden pt-24 pb-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 mb-12 pt-6">
          Portfolio Showcase
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
        <button
            onClick={() => setActiveTab("techstack")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "techstack"
                ? "bg-green-500 text-white shadow-lg"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <Wrench className="w-5 h-5" />
            Tech Stack
          </button>
          <button
            onClick={() => setActiveTab("programming")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "programming"
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <Laptop2 className="w-5 h-5" />
            Programming Journey
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "education"
                ? "bg-purple-500 text-white shadow-lg"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            Education Timeline
          </button>
        </div>

        <div className="relative min-h-[60vh]">
          <AnimatePresence mode="wait">
            {activeTab === "programming" && (
              <motion.div
                key="programming"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <About />
              </motion.div>
            )}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <EducationTimeline />
              </motion.div>
            )}
            {activeTab === "techstack" && (
              <motion.div
                key="techstack"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <TechStack />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
