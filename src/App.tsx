/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sitemap } from './components/Sitemap';
import { LandingPage } from './components/LandingPage';

const checkPreviewEnvironment = () => {
  if (typeof window === 'undefined') return false;
  const href = window.location.href;
  const hostname = window.location.hostname;
  
  // Lista de indicadores de proxy, incluindo o run.app usado pelo AI Studio Preview
  const proxyIndicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox',
    'run.app'
  ];
  
  return proxyIndicators.some(indicator => 
    hostname.includes(indicator) || href.includes(indicator)
  );
};

// Seleciona o Router apropriado baseado no ambiente
const isPreview = checkPreviewEnvironment();
const Router = isPreview ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to={isPreview ? "/sitemap" : "/lp-video"} replace />} 
        />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/lp-video" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
