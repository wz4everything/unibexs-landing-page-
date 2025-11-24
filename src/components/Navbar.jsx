import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      transition: 'all var(--transition-medium)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/Primary Logo - Blue.svg" alt="Unibexs Logo" style={{ height: '32px' }} />
        </a>

        {/* Links - Hidden on mobile */}
        <div className="nav-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#hero" style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="nav-link">Home</a>
          <a href="#about" style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="nav-link">About</a>
          <a href="#how" style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="nav-link">How It Works</a>
          <a href="#early" style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="nav-link">Join</a>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="#early" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Partner</a>
        </div>
      </div>
      <style>{`
        .nav-link:hover { color: 'var(--text-primary)' !important; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
