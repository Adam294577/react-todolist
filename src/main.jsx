import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
