import React from "react";
import ProjectCarousel from "../components/ProjectCarousel";

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-gradient-to-br from-black to-blue-900 text-white">
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 mb-8">
          Projects
        </h2>
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 sm:p-10">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
}
