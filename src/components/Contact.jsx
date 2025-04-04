// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            className="relative flex flex-col justify-center items-center min-h-screen text-white text-center px-6 transition-colors duration-300"
        >
            {/* Blurred Glass Background */}
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30 dark:bg-gray-900/30"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-4xl p-12 bg-gray-900/50 dark:bg-white/50 rounded-2xl shadow-2xl backdrop-blur-lg flex flex-col items-center">
                <h2 className="text-4xl font-bold text-blue-400 dark:text-blue-600">Let's Connect</h2>

                {/* Contact Links Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-10 w-full max-w-2xl bg-white/10 dark:bg-black/10 rounded-xl backdrop-blur-md p-8 border border-white/20 flex flex-col items-center space-y-6"
                >
                    <p className="text-xl text-gray-300 dark:text-gray-800 font-medium">Reach me at:</p>
                    <div className="flex justify-center space-x-10 text-3xl">
                        <a
                            href="mailto:dev.jayh4@gmail.com"
                            className="text-gray-300 dark:text-gray-800 hover:text-red-400 dark:hover:text-red-500 transition transform hover:scale-110"
                            title="Gmail"
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a
                            href="https://github.com/Tyler7x1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 dark:text-gray-800 hover:text-white dark:hover:text-black transition transform hover:scale-110"
                            title="GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jayprakash-malik/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition transform hover:scale-110"
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
