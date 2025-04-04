import FadeIn from '../components/FadeIn.jsx';

export default function About() {
    return (
        <section  
            className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-4 sm:px-6 md:px-10 transition-colors duration-300"
        >
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30"></div>

            <FadeIn direction="up" delay={0.2}>
                <div className="relative z-10 p-4 sm:p-8 md:p-10 max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 tracking-wide">
                        About Me
                    </h2>

                    <p className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
                        I'm <span className="font-semibold text-white">Jayprakash Malik</span>, a  
                        <span className="text-blue-500 font-semibold"> Backend Developer</span> aiming to specialize in building 
                        scalable and efficient server-side applications.  
                        I love working with  
                        <span className="text-blue-600 font-semibold"> Node.js, Express.js,</span> and <span className="text-blue-600 font-semibold"> MongoDB</span>.
                    </p>

                    <p className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
                        Currently, I'm pursuing a  
                        <span className="text-blue-400 font-semibold"> Bachelor of Computer Applications</span> degree at  
                        <a 
                            href="https://presidencyuniversity.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline hover:text-blue-300 transition duration-300"
                        >
                            {" "}Presidency University
                        </a>, Bengaluru.
                    </p>

                    <p className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
                        I am always eager to explore new technologies and collaborate with fellow developers to create innovative applications.
                    </p>
                </div>
            </FadeIn>
        </section>
    );
}
