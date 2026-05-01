'use client';

import { useState, useEffect } from 'react';
import CategoryMegaMenu from './CategoryMegaMenu';

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="w-full px-[var(--space-12)] py-[var(--space-6)] flex items-center justify-between relative">

        {/* Left Navigation */}
        <div className="flex items-center gap-[var(--space-2)]">
          <CategoryMegaMenu />
          <nav
            className="flex items-center justify-center gap-[var(--space-8)] px-7 py-3 rounded-[var(--radius-lg)] text-sm font-[var(--weight-regular)] backdrop-blur-md"
            style={{
              background: scrolled ? '#ffffff' : 'rgba(15,15,15,0.4)',
              transition: 'background 200ms ease',
            }}
          >
            <a href="#" style={{ color: scrolled ? '#1f2937' : 'rgba(255,255,255,0.9)', transition: 'color 200ms ease' }} className="hover:opacity-70 transition-opacity">Home</a>
            <a href="#" style={{ color: scrolled ? '#1f2937' : 'rgba(255,255,255,0.9)', transition: 'color 200ms ease' }} className="hover:opacity-70 transition-opacity">About Us</a>
            <a href="#" style={{ color: scrolled ? '#1f2937' : 'rgba(255,255,255,0.9)', transition: 'color 200ms ease' }} className="hover:opacity-70 transition-opacity">Contact Us</a>
          </nav>
        </div>

        {/* Right Actions */}
        <div
          className="flex items-center p-1 h-11 rounded-[var(--radius-lg)] backdrop-blur-md"
          style={{
            background: scrolled ? '#ffffff' : 'rgba(15,15,15,0.4)',
            transition: 'background 200ms ease',
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
