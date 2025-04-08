// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function UserHeader({ user, onLogout }) {
  return (
    <div className="flex items-center justify-between bg-white/10 border border-white/20 px-4 py-3 rounded-xl shadow-inner mb-6">
      <div className="flex items-center gap-4">
        <img
          src={`https://avatars.githubusercontent.com/${user.username}`}
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <p className="text-base text-gray-200">
          Hello, <span className="font-semibold text-white">{user.username}</span>!
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLogout}
        className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
      >
        <span className="text-sm font-medium">Logout</span>
      </motion.button>
    </div>
  );
}
