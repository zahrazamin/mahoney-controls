'use client';

import { useState, useEffect } from 'react';
import CategoryMegaMenu from './CategoryMegaMenu';

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [navHovered, setNavHovered] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const collapsed = scrolled && !navHovered;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="w-full px-[var(--space-12)] py-[var(--space-6)] flex items-center justify-between relative">

        {/* Left Navigation */}
        <div className="flex items-center gap-[var(--space-2)]">
          <CategoryMegaMenu />
          <nav
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}
            className="relative flex items-center rounded-[var(--radius-lg)] text-sm font-[var(--weight-regular)] backdrop-blur-md overflow-hidden"
            style={{
              background: scrolled ? '#ffffff' : 'rgba(15,15,15,0.4)',
              boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.08)' : 'none',
              maxWidth: collapsed ? '2.75rem' : '20rem',
              transition: 'background 200ms ease, box-shadow 200ms ease, max-width 350ms cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {/* Menu icon — fades in when collapsed */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ opacity: collapsed ? 1 : 0, transition: 'opacity 150ms ease' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </div>

            {/* Links — always in flow to maintain nav height; fades out when collapsed */}
            <div
              className="flex items-center gap-[var(--space-8)] px-7 py-3 whitespace-nowrap"
              style={{ opacity: collapsed ? 0 : 1, transition: 'opacity 200ms ease' }}
            >
              <a href="#" style={{ color: scrolled ? '#1f2937' : 'rgba(255,255,255,0.9)', transition: 'color 200ms ease' }} className="hover:opacity-70 transition-opacity">Home</a>
              <a href="#" style={{ color: scrolled ? '#1f2937' : 'rgba(255,255,255,0.9)', transition: 'color 200ms ease' }} className="hover:opacity-70 transition-opacity">About Us</a>
              <a href="#" style={{ color: scrolled ? '#1f2937' : 'rgba(255,255,255,0.9)', transition: 'color 200ms ease' }} className="hover:opacity-70 transition-opacity">Contact Us</a>
            </div>
          </nav>
        </div>

        {/* Right Actions */}
        <div
          className="flex items-center p-1 h-11 rounded-[var(--radius-lg)] backdrop-blur-md"
          style={{
            background: scrolled ? '#ffffff' : 'rgba(15,15,15,0.4)',
            boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.08)' : 'none',
            transition: 'background 200ms ease, box-shadow 200ms ease',
          }}
        >
          <button
            className="w-[3.125rem] h-full flex items-center justify-center border-transparent"
            style={{ color: scrolled ? '#1f2937' : '#ffffff', transition: 'color 200ms ease' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button
            className="w-[3.125rem] h-full flex items-center justify-center rounded-[var(--radius-md)] border-transparent transition-colors"
            style={{
              color: scrolled ? '#1f2937' : '#ffffff',
              background: scrolled ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.2)',
              transition: 'color 200ms ease, background 200ms ease',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}
