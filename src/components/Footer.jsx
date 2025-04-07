export default function Footer() {
    return (
      <footer className="relative flex flex-col items-center justify-center py-6 px-4 text-center text-white bg-gradient-to-tr bg-black border-t border-white/10">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-none" />
  
        <div className="relative z-10 max-w-md w-full">
          <p className="text-sm sm:text-base text-gray-200">
            Created by{" "}
            <a
              href="https://github.com/Tyler7x1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
              Jayprakash Malik
            </a>
          </p>
          <p className="mt-1 text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  