import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App';

/**
 * Application Entry Point
 *
 * Initializes and renders the React application to the DOM
 * - StrictMode: Enables additional development mode checks and warnings
 * - createRoot: Modern React 18+ root API for rendering
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
