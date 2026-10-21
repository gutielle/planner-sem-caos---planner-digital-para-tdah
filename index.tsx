
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppAntigo from './AppAntigo';
import AppVazia from './AppVazia';
import AppES from './AppES';
import AppRemarketing from './AppRemarketing';
import Members from './Members';
import PixelManager from './PixelManager';
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
      <PixelManager />
      <Routes>
        <Route path="/" element={<AppAntigo />} />
        <Route path="/vazia" element={<AppVazia />} />
        <Route path="/es" element={<AppES />} />
        <Route path="/remarketing" element={<AppRemarketing />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
