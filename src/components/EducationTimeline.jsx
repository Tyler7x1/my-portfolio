// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const education = [
  {
    title: "St. Vincent's Convent Senior Secondary School",
    description:
      "Completed high school with a strong foundation in science and mathematics, which sparked my interest in technology.",
    date: "2018 - 2020",
  },
  {
    title: "St. Vincent's Convent Senior Secondary School",
    description:
      "Pursued Higher Secondary Schooling with a focus on Computer Science and Mathematics.",
    date: "2020 - 2022",
  },
  {
    title: "Presidency University",
    description:
      "Currently pursuing Bachelor's degree in Computer Applications, learning core concepts like data structures, algorithms, OOP, and DBMS.",
    date: "2022 - present",
    isCurrent: true,
  },
  {
    title: "Self-Learning & Online Courses",
    description:
      "Continued to sharpen my skills through self-learning, online platforms like Coursera, freeCodeCamp, and YouTube tutorials.",
    date: "2022 - Present",
    isCurrent: true,
  },
];

export default function EducationTimeline() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800/60 to-gray-950 opacity-40 blur-2xl" />

      <style>{`
        @keyframes auraPulse {
          0%, 100% {
            box-shadow: 0 0 0px rgba(153, 102, 255, 0.2), 0 0 10px rgba(204, 153, 255, 0.4), 0 0 20px rgba(204, 153, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(204, 153, 255, 0.6), 0 0 60px rgba(204, 153, 255, 0.5), 0 0 90px rgba(204, 153, 255, 0.3);
          }
        }
        .aura-glow-purple {
          animation: auraPulse 2.5s infinite ease-in-out;
        }
      `}</style>

      <div className="relative z-10 max-w-5xl w-full pb-10">
        <div className="relative w-full">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-pink-500 to-fuchsia-500 z-0 rounded-full animate-pulse" />

          <div className="flex flex-col space-y-16">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex w-full items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 px-4 ${
                      isLeft ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                  >
                    <div
                      className={`relative group bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 ${
                        edu.isCurrent
                          ? "aura-glow-purple border-purple-400 shadow-purple-400/30"
                          : ""
                      }`}
                    >
                      <h3 className="text-xl font-bold text-purple-300 drop-shadow-sm">
                        {edu.title}
                      </h3>
                      <p className="text-sm text-gray-400 italic">
                        {edu.date}
                      </p>
                      <p className="mt-3 text-base text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
