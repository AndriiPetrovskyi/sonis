import { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import CursorGlow from './components/CursorGlow.jsx';
import Home from './pages/Home.jsx';
import Containers from './pages/Containers.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import Cement from './pages/Cement.jsx';
import Gypsum from './pages/Gypsum.jsx';

export default function App() {
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    lenisRef.current = lenis;
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{
      position: 'relative', overflowX: 'hidden', minHeight: '100vh',
      background: 'radial-gradient(120% 80% at 80% -10%, #2e2b33 0%, #17161a 55%, #131215 100%)',
    }}>
      <CursorGlow />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/containers" element={<Containers />} />
        <Route path="/gypsum" element={<Gypsum />} />
        <Route path="/cement" element={<Cement />} />
        <Route path="/concrete" element={<ComingSoon path="/concrete" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
