import { motion } from "framer-motion";

export default function GuestbookEntries({ entries, formatDate }) {
  return (
    <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400/50">
      <div className="relative z-10 w-full max-w-3xl mt-12 space-y-6 pb-16">
        {entries.length === 0 ? (
          <p className="text-center text-gray-500">No messages yet. Be the first!</p>
        ) : (
          entries.map((entry) => (
            <motion.div
              key={entry._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-3 py-2 rounded-lg">
                  <img
                    src={entry.user?.avatarUrl}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <a
                    href={entry.user?.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-semibold text-sm hover:underline"
                  >
                    {entry.user?.username}
                  </a>
                </div>
                <p className="text-xs text-gray-400">{formatDate(entry.createdAt)}</p>
              </div>
              <p className="text-gray-200 text-left">{entry.message}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
