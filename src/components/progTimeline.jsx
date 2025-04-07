import { motion } from "framer-motion";

const timeline = [
  {
    title: "QBasic",
    description:
      "Began my journey into computer science, learning the basics of programming with QBasic in school.",
    date: "2014",
  },
  {
    title: "Microsoft Visual Basic",
    description:
      "Due to my interest in QBasic and computer science in general, I quickly moved on to Microsoft Visual Basic, expanding my knowledge of programming.",
    date: "2014",
  },
  {
    title: "C",
    description:
      "Studied the basics of C programming, which helped me understand the basics of computer science and programming in a more in-depth way.",
    date: "2015",
  },
  {
    title: "Java",
    description:
      "Stepped into backend development by learning Java, which helped me understand the basics of object-oriented programming.",
    date: "2018 - 2022",
  },
  {
    title: "Nodejs | MEEN Stack Development",
    description:
      "Due to my knowledge in Java and OOP, I picked up JavaScript and Nodejs, which helped me to build server-side applications using MEEN (with EJS) stack.",
    date: "2023 - present",
  },
  {
    title: "Open to Opportunities",
    description:
      "Actively looking for internships or freelance work in backend engineering.",
    date: "Now",
    isCurrent: true,
  },
];

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800/60 to-gray-950 opacity-40 blur-2xl" />

      <style>{`
        @keyframes auraPulse {
          0%, 100% {
            box-shadow: 0 0 0px rgba(0, 255, 255, 0.2), 0 0 10px rgba(0, 255, 180, 0.4), 0 0 20px rgba(0, 255, 180, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 180, 0.5), 0 0 90px rgba(0, 255, 180, 0.3);
          }
        }
        .aura-glow {
          animation: auraPulse 2.5s infinite ease-in-out;
        }
      `}</style>

      <div className="relative z-10 max-w-5xl w-full pb-10">

        <div className="relative w-full">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 z-0 rounded-full animate-pulse" />

          <div className="flex flex-col space-y-16">
            {timeline.map((event, index) => {
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
                      className={`relative group bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30 ${
                        event.isCurrent
                          ? "aura-glow border-cyan-400 shadow-cyan-400/30"
                          : ""
                      }`}
                    >
                      <h3 className="text-xl font-bold text-blue-300 drop-shadow-sm">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-400 italic">
                        {event.date}
                      </p>
                      <p className="mt-3 text-base text-gray-300 leading-relaxed">
                        {event.description}
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
