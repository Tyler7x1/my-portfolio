// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";

export default function LoginPrompt({ showLogin, setShowLogin, loginWithGitHub }) {
  return (
    <div className="text-center">
      {!showLogin ? (
        <button
          className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-medium cursor-pointer"
          onClick={() => setShowLogin(true)}
        >
          Login to Comment
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-gray-400">Continue with GitHub:</p>
            <div className="flex justify-center">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-[#333] text-white rounded-lg shadow hover:scale-105 transition cursor-pointer"
                onClick={loginWithGitHub}
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </button>
            </div>
            <button
              className="text-sm text-gray-400 underline mt-2 cursor-pointer"
              onClick={() => setShowLogin(false)}
            >
              Never mind, go back
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
