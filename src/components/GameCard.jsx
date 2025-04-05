import React from 'react';
import { Clock } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const fallbackImage = '/fallback.jpg';

const GameCard = ({ game, onClick, onHoverStart, onHoverEnd }) => (
  <motion.div
    key={game.appid}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="w-full sm:w-[280px] md:w-[300px] bg-gradient-to-b from-[#1c1f26] to-[#2a475e] hover:from-[#2a475e] hover:to-[#1c1f26] rounded-lg p-4 shadow-lg cursor-pointer border border-[#66c0f4]/20 hover:border-[#66c0f4]/40 transition-all duration-300 hover:shadow-[#66c0f4]/20 hover:scale-[1.03]"
    onClick={() => onClick(game)}
    whileHover={{ y: -5 }}
    onMouseEnter={onHoverStart}
    onMouseLeave={onHoverEnd}
  >
    <div className="w-full aspect-[231/87] rounded mb-3 overflow-hidden relative">
      <img
        src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/capsule_231x87.jpg`}
        alt={game.name}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => (e.currentTarget.src = fallbackImage)}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
        <div className="flex items-center text-sm font-semibold text-white">
          <Clock className="w-4 h-4 mr-1" />
          <span>{(game.playtime_forever / 60).toFixed(1)} hrs</span>
        </div>
      </div>
    </div>
    <p className="text-base font-medium truncate text-[#c7d5e0] group-hover:text-white transition-colors">
      {game.name}
    </p>
  </motion.div>
);

export default GameCard;
