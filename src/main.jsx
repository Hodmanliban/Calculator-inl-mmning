import React from 'react';
import { createRoot } from 'react-dom/client';
import Calculator from './components/calculator';

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
