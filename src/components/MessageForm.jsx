export default function MessageForm({ message, setMessage, onSubmit }) {
    return (
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm text-gray-300">Your Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full bg-white/10 text-white px-4 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
            placeholder="Write something nice ✨"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition font-semibold py-2 rounded-lg shadow-md mx-auto block pl-4 pr-4 cursor-pointer"
        >
          Post Comment
        </button>
      </form>
    );
  }
  