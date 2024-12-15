import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Usar `!` para afirmar que el elemento no es null
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
