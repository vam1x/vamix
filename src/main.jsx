import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animations.css';
// Page-specific styles must follow the base styles, including on first navigation.
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
