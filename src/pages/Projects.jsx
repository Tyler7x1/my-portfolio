import React from "react";
import ProjectCarousel from "../components/ProjectCarousel";

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30"></div>
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">Projects</h2>
        <ProjectCarousel />
      </div>
    </section>
  );
}
