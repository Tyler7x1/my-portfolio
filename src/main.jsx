import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './css/index.css'; // Tailwind or custom CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
