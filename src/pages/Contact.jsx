// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            className="relative flex flex-col justify-center items-center min-h-screen text-white text-center px-4 sm:px-6 md:px-10 transition-colors duration-300"
        >
            <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-black to-blue-900"></div>

            <div className="relative z-10 w-full max-w-4xl p-6 sm:p-10 md:p-12 bg-gray-900/50 rounded-2xl shadow-2xl backdrop-blur-lg flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">Let's Connect</h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 sm:mt-10 w-full max-w-2xl bg-white/10 rounded-xl backdrop-blur-md p-6 sm:p-8 border border-white/20 flex flex-col items-center space-y-6"
                >
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium">Reach me at:</p>

                    <div className="flex flex-wrap justify-center gap-8 sm:gap-10 text-2xl sm:text-3xl">
                        <a
                            href="mailto:dev.jayh4@gmail.com"
                            className="text-gray-300 hover:text-red-400 transition transform hover:scale-110"
                            title="Gmail"
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a
                            href="https://github.com/Tyler7x1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition transform hover:scale-110"
                            title="GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jayprakash-malik/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
                            title="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
