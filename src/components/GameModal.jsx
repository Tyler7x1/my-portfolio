import React from 'react';
import { Dialog } from '@headlessui/react';

const fallbackImage = '/fallback.png';

const GameModal = ({ game, onClose }) => (
  <Dialog open={!!game} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <Dialog.Panel className="bg-[#1b2838] text-white p-6 rounded-lg max-w-lg w-full shadow-xl">
      <Dialog.Title className="text-xl font-bold mb-2">{game?.name}</Dialog.Title>
      <img
        src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game?.appid}/capsule_231x87.jpg`}
        alt={game?.name}
        className="w-full rounded mb-4"
        onError={(e) => (e.currentTarget.src = fallbackImage)}
      />
      <p className="mb-2 font-semibold">
        Playtime: {(game?.playtime_forever / 60).toFixed(1)} hrs
      </p>
      <p className="text-sm text-gray-400">App ID: {game?.appid}</p>
      <div className="mt-4 text-right">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded bg-[#66c0f4] hover:bg-[#4ca0d0] text-white"
        >
          Close
        </button>
      </div>
    </Dialog.Panel>
  </Dialog>
);

export default GameModal;
