import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
