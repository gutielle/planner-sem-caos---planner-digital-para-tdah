import React from 'react';
import ReactDOM from 'react-dom/client';
import AppVazia from './AppVazia';
import './index.css';
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppVazia />
  </React.StrictMode>
);
