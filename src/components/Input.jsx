import React from 'react';

export function Input({ className = '', ...props }) {
  return (
    <input
      type="text"
      className={`px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
      {...props}
    />
  );
}
