import FadeIn from './FadeIn.jsx';

export default function About() {
    return (
        <section  
            className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-6 transition-colors duration-300"
        >
            {/* Blurred Glass Background */}
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30 dark:bg-gray-900/30"></div>

            {/* Fade-In Content */}
            <FadeIn direction="up" delay={0.2}>
                <div className="relative z-10 p-10 max-w-3xl">
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 dark:text-blue-600 tracking-wide">
                        About Me
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-gray-300 dark:text-gray-400 text-lg md:text-xl leading-loose">
                        I'm <span className="font-semibold text-white dark:text-gray-900">Jayprakash Malik</span>, a  
                        <span className="text-blue-300 dark:text-blue-500 font-semibold"> Backend Developer</span> aiming to specialize in building 
                        scalable and efficient server-side applications.  
                        I love working with  
                        <span className="text-blue-400 dark:text-blue-600 font-semibold"> Node.js, Express.js, MongoDB,</span> and  
                        <span className="text-blue-400 dark:text-blue-600 font-semibold"> React</span>.
                    </p>

                    {/* Education */}
                    <p className="mt-6 text-gray-300 dark:text-gray-400 text-lg md:text-xl leading-loose">
                        Currently, I'm pursuing a  
                        <span className="text-blue-300 dark:text-blue-500 font-semibold"> Bachelor of Computer Applications</span> degree at  
                        <a 
                            href="https://presidencyuniversity.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 dark:text-blue-600 hover:underline hover:text-blue-300 dark:hover:text-blue-500 transition duration-300"
                        >
                            {" "}Presidency University
                        </a>, Bengaluru.
                    </p>

                    {/* Learning & Collaboration */}
                    <p className="mt-6 text-gray-300 dark:text-gray-400 text-lg md:text-xl leading-loose">
                        I am always eager to explore new technologies and collaborate with fellow developers to create innovative applications.
                    </p>
                </div>
            </FadeIn>
        </section>
    );
}
