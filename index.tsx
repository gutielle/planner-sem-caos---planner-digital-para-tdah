
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Members from './Members';
import './index.css';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Initialize Vercel Speed Insights
injectSpeedInsights();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);