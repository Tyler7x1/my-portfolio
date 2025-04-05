import React from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import GameCard from './GameCard';

const GameGrid = ({ games, onCardClick, onHoverStart, onHoverEnd }) => (
  <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <AnimatePresence>
      {games.map((game) => (
        <GameCard
          key={game.appid}
          game={game}
          onClick={onCardClick}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
        />
      ))}
    </AnimatePresence>
  </motion.div>
);

export default GameGrid;
