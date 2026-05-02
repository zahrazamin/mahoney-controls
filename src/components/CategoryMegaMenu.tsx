'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

// ── Brand palette ───────────────────────────────────────────
const NAVY     = '#0D1B2A';
const GREEN    = '#2d8a3e';
const DK_GREEN = '#1a5c2a';
const LT_GREEN = '#e8f5eb';

// ── Data ────────────────────────────────────────────────────

type Manufacturer = { logo?: string; name: string };

const clusters = [
  {
    id: 'automation',
    label: 'Automation & Control',
    subtitle: 'Control & Logic',
    groups: [
      {
        heading: null,
        products: [
          'Cable Assemblies',
          'Electrical Enclosures',
          'Fans - AC & DC',
          'Heaters',
          'Power Cords',
          'Power Dist. Blocks',
          'Push Buttons',
          'Sensors',
          'Strobe & Rotary Lights',
          'Terminal Blocks',
          'Tower Lights',
        ],
      },
    ],
    manufacturers: [
      { logo: '/images/logo/partner logo/logo-11.png', name: 'Altech Corp.' },
      { name: 'IDEC' },
      { name: 'Phoenix Contact' },
    ] as Manufacturer[],
  },
  {
    id: 'circuit',
    label: 'Circuit Protection',
    subtitle: 'Power & Safety',
    groups: [
      {
        heading: null,
        products: [
          'AC Receptacles',
          'Battery Chargers & UPS',
          'Circuit Breakers',
          'Disconnect Switches',
          'EMI/RFI Filters/Resistors',
          'Fuse Blocks & Holders',
          'Fuses',
          'Metallic Braids',
          'Motor Disconnects',
          'Power Supplies',
          'Relays & I/O Modules',
          'Relay Sockets',
          'Surge Protection',
        ],
      },
    ],
    manufacturers: [
      { logo: '/images/logo/partner logo/logo-3.png', name: 'Bussmann' },
      { logo: '/images/logo/partner logo/logo-1.png', name: 'Eaton' },
      { name: 'Siemens' },
    ] as Manufacturer[],
  },
  {
    id: 'panel',
    label: 'Panel Accessories',
    subtitle: 'Hardware & Finishing',
    groups: [
      {
        heading: null,
        products: [
          'Accessories',
          'Busbar & Supports',
          'DIN & Mounting Rails',
          'Fan Guards & Accy',
          'Ferrules',
          'Heat Shrink Tubing',
          'Marking & Engraving',
          'Switches',
          'Thermostats',
          'Tools',
        ],
      },
    ],
    manufacturers: [
      { logo: '/images/logo/partner logo/logo-9.png', name: 'nVent' },
      { name: 'Panduit' },
      { name: 'Wago' },
    ] as Manufacturer[],
  },
];

// ── All brands for brand grid ──────────────────────────────

const allBrands: Manufacturer[] = [
  { logo: '/images/logo/partner logo/logo-11.png', name: 'Altech Corp.' },
  { logo: '/images/logo/partner logo/logo-3.png', name: 'Bussmann' },
  { logo: '/images/logo/partner logo/logo-1.png', name: 'Eaton' },
  { logo: '/images/logo/partner logo/logo-9.png', name: 'nVent' },
  { logo: '/images/logo/partner logo/logo-2.png', name: 'Qualtek' },
  { logo: '/images/logo/partner logo/logo-4.png', name: 'AC/DC Equipment' },
  { logo: '/images/logo/partner logo/logo-5.png', name: 'NK Technologies' },
  { logo: '/images/logo/partner logo/logo-6.png', name: 'Genesis Automation' },
  { logo: '/images/logo/partner logo/logo-7.png', name: 'Macromatic' },
  { logo: '/images/logo/partner logo/logo-8.png', name: 'Allied Moulded' },
  { logo: '/images/logo/partner logo/logo-10.png', name: 'Signaworks' },
  { name: 'IDEC' },
  { name: 'Phoenix Contact' },
  { name: 'Siemens' },
  { name: 'Hoffman' },
  { name: 'Panduit' },
  { name: 'Molex' },
  { name: 'Wago' },
  { name: 'ABB' },
  { name: 'Schneider Electric' },
];

const TOTAL_LINES = clusters.reduce(
  (a, c) => a + c.groups.reduce((b, g) => b + g.products.length, 0),
  0
);

// ── Component ───────────────────────────────────────────────

export default function CategoryMegaMenu() {
  const [isOpen, setIsOpen]             = useState(false);
  const [mounted, setMounted]           = useState(false);
  const [menuTop, setMenuTop]           = useState(0);
  const [isMobile, setIsMobile]         = useState(false);
  const [view, setView]                 = useState<'categories' | 'brands'>('categories');
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const [brandIndex, setBrandIndex]     = useState(0);
  const [brandFade, setBrandFade]       = useState(true);

  const buttonRef  = useRef<HTMLButtonElement>(null);
  const menuRef    = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const logoBrands = allBrands.filter(b => b.logo);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBrandFade(false);
      setTimeout(() => {
        setBrandIndex(i => (i + 1) % logoBrands.length);
        setBrandFade(true);
      }, 250);
    }, 2200);
    return () => clearInterval(id);
  }, [logoBrands.length]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const calcTop = useCallback(() => {
    if (buttonRef.current) {
      setMenuTop(buttonRef.current.getBoundingClientRect().bottom);
    }
  }, []);

  // Hover open/close with 160 ms grace period
  const hoverOpen = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    calcTop();
    setIsOpen(true);
  }, [calcTop]);

  const hoverClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 160);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setView('categories');
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    const onOutside = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) closeMenu();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onOutside);
    };
  }, [isOpen, closeMenu]);


  // ── Shared: Numbered column content ──────────────────────

  const renderColumnItems = (cluster: typeof clusters[0]) => {
    let n = 0;
    return cluster.groups.map((group, groupIdx) => (
      <div key={group.heading ?? 'root'}>
        {group.heading && (
          <p style={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.13em',
            color: '#B8C0CC',
            padding: groupIdx === 0 ? '0 0 4px' : '14px 0 4px',
            fontFamily: 'var(--font-sans)',
            userSelect: 'none',
          }}>
            {group.heading}
          </p>
        )}
        {group.products.map((product) => {
          n++;
          const num = String(n).padStart(2, '0');
          return (
            <button
              key={product}
              onClick={closeMenu}
              className="group flex items-center w-full bg-transparent border-0 cursor-pointer text-left"
              style={{
                padding: '10px 20px 10px 24px',
                margin: '0 -20px 0 -24px',
                borderBottom: '1px solid #F3F4F6',
                transition: 'background 0.12s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#F3F4F6';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              <span style={{
                width: '26px',
                flexShrink: 0,
                fontSize: '10px',
                fontWeight: 800,
                color: '#D1D5DB',
                fontVariantNumeric: 'tabular-nums',
                fontFamily: 'var(--font-sans)',
              }}>
                {num}
              </span>
              <span
                className="group-hover:text-[var(--color-primary)] transition-colors duration-100 flex-1"
                style={{ fontSize: '15px', fontWeight: 500, color: '#1C2537', lineHeight: 1.35, fontFamily: 'var(--font-sans)' }}
              >
                {product}
              </span>
              <span
                className="group-hover:text-[var(--color-primary)] transition-colors duration-100"
                style={{ fontSize: '15px', color: '#D1D5DB', marginLeft: '6px', lineHeight: 1 }}
              >
                ›
              </span>
            </button>
          );
        })}
      </div>
    ));
  };

  // ── Manufacturer logos row ────────────────────────────────

  const renderManufacturers = (mfrs: Manufacturer[]) => (
    <div style={{
      borderTop: '1px solid #F3F4F6',
      padding: '14px 0 20px',
      marginTop: 'auto',
    }}>
      <p style={{
        fontSize: '8.5px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        color: '#C4CAD4',
        marginBottom: '8px',
        fontFamily: 'var(--font-sans)',
      }}>
        Top Manufacturers
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        {mfrs.map((m) =>
          m.logo ? (
            <Image
              key={m.name}
              src={m.logo}
              alt={m.name}
              width={100}
              height={30}
              style={{
                objectFit: 'contain',
                objectPosition: 'left center',
                height: '28px',
                width: 'auto',
                maxWidth: '100px',
              }}
            />
          ) : (
            <span
              key={m.name}
              style={{
                fontSize: '10px',
                fontWeight: 600,
                color: '#9CA3AF',
                fontFamily: 'var(--font-sans)',
                whiteSpace: 'nowrap',
              }}
            >
              {m.name}
            </span>
          )
        )}
      </div>
    </div>
  );

  // ── Brand grid view ───────────────────────────────────────

  const brandGrid = (
    <div style={{ padding: '24px 24px 28px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '12px',
      }}>
        {allBrands.map((brand) => (
          <button
            key={brand.name}
            onClick={closeMenu}
            className="group"
            style={{
              background: '#F9FAFB',
              border: '1px solid #F3F4F6',
              borderRadius: '10px',
              padding: '16px 12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              minHeight: '80px',
              transition: 'background 0.15s, border-color 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#fff';
              el.style.borderColor = '#d1fae5';
              el.style.boxShadow = '0 4px 16px rgba(45,138,62,0.08)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#F9FAFB';
              el.style.borderColor = '#F3F4F6';
              el.style.boxShadow = 'none';
            }}
          >
            {brand.logo ? (
              <div style={{ position: 'relative', width: '100%', height: '32px' }}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  sizes="120px"
                />
              </div>
            ) : null}
            <span style={{
              fontSize: '10.5px',
              fontWeight: 700,
              color: '#374151',
              fontFamily: 'var(--font-sans)',
              textAlign: 'center',
              lineHeight: 1.3,
            }}>
              {brand.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  // ── Desktop dropdown ───────────────────────────────────────

  const desktopMenu = isOpen ? (
    <div
      ref={menuRef}
      className="mega-menu-panel"
      style={{ position: 'fixed', top: menuTop + 28, left: '48px', right: '48px', zIndex: 9999 }}
      onMouseEnter={cancelClose}
      onMouseLeave={hoverClose}
    >
      <div style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.13), 0 4px 20px rgba(0,0,0,0.06)',
      }}>

        {/* ── Panel header bar ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #F3F4F6',
          padding: '10px 20px 10px 24px',
          background: '#FAFBFC',
        }}>
          {view === 'brands' ? (
            <button
              onClick={() => setView('categories')}
              className="flex items-center gap-[6px] hover:opacity-70 transition-opacity bg-transparent border-0 cursor-pointer"
              style={{ color: NAVY, fontSize: '12.5px', fontWeight: 700, fontFamily: 'var(--font-sans)' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to Categories
            </button>
          ) : (
            <span style={{ color: '#B4BBC6', fontSize: '12px', fontFamily: 'var(--font-sans)' }}>
              {TOTAL_LINES} product lines &middot; All items in stock
            </span>
          )}
        </div>

        {view === 'brands' ? brandGrid : (
          <>
            {/* ── Column grid ── */}
            <div style={{ display: 'flex', alignItems: 'stretch' }}>

              {clusters.map((cluster) => (
                <div
                  key={cluster.id}
                  style={{
                    flex: 1,
                    background: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '24px 20px 0 24px',
                  }}
                >
                  {/* Column header */}
                  <div style={{ marginBottom: '16px' }}>
                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: NAVY,
                      margin: 0,
                      lineHeight: 1.2,
                      fontFamily: 'var(--font-sans)',
                    }}>
                      {cluster.label}
                    </h3>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: GREEN,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginTop: '3px',
                      fontFamily: 'var(--font-sans)',
                    }}>
                      {cluster.subtitle}
                    </p>
                  </div>

                  {/* Items */}
                  <div>
                    {renderColumnItems(cluster)}
                  </div>

                  {/* Top Manufacturers */}
                  {renderManufacturers(cluster.manufacturers)}
                </div>
              ))}

              {/* ── Column 4: RFQ + Brand CTA ── */}
              <div style={{
                width: '300px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderLeft: '1px solid #E5E7EB',
                alignSelf: 'flex-start',
              }}>
                {/* Product image */}
                <div style={{ position: 'relative', height: '220px', flexShrink: 0 }}>
                  <Image
                    src="/images/banners/Rectangle 18.png"
                    alt="Bulk RFQ"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>

                {/* RFQ card — grey bg */}
                <div style={{
                  background: '#F3F4F6',
                  padding: '22px 20px 22px',
                  flexShrink: 0,
                }}>
                  <h4 style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: NAVY,
                    lineHeight: 1.2,
                    margin: '0 0 10px',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    Bulk RFQ &amp; Project Quotes
                  </h4>
                  <p style={{
                    fontSize: '13px',
                    color: '#6B7280',
                    lineHeight: 1.55,
                    fontFamily: 'var(--font-sans)',
                    margin: '0 0 18px',
                  }}>
                    Get priority pricing on large orders. Team responds in&nbsp;24&nbsp;hrs.
                  </p>
                  <button
                    onClick={closeMenu}
                    className="transition-opacity hover:opacity-85"
                    style={{
                      background: GREEN,
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '14px',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      width: '100%',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Upload your BOM
                  </button>
                </div>

                {/* Separator */}
                <div style={{ height: '1px', background: '#E5E7EB', flexShrink: 0 }} />

                {/* Brand trust section — grey bg */}
                <div style={{
                  background: '#F3F4F6',
                  padding: '20px 20px 22px',
                  flexShrink: 0,
                }}>
                  <p style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#9CA3AF',
                    margin: '0 0 14px',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    25+ Brand You Trust
                  </p>
                  {/* Rotating brand logo card */}
                  <div style={{
                    background: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                    height: '108px',
                    overflow: 'hidden',
                  }}>
                    <Image
                      src={logoBrands[brandIndex].logo!}
                      alt={logoBrands[brandIndex].name}
                      width={150}
                      height={50}
                      style={{
                        objectFit: 'contain',
                        maxHeight: '50px',
                        width: 'auto',
                        opacity: brandFade ? 1 : 0,
                        transition: 'opacity 250ms ease',
                      }}
                    />
                  </div>
                  <button
                    onClick={() => setView('brands')}
                    className="transition-opacity hover:opacity-85"
                    style={{
                      background: '#DC9209',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '14px',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      width: '100%',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Shop by Brand
                  </button>
                </div>
              </div>
            </div>

            {/* ── Footer bar ── */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              borderTop: '1px solid #F3F4F6',
              padding: '10px 24px',
              background: '#FAFBFC',
            }}>
              <button
                onClick={closeMenu}
                className="flex items-center gap-[5px] hover:opacity-70 transition-opacity bg-transparent border-0 cursor-pointer"
                style={{ color: GREEN, fontSize: '12.5px', fontWeight: 700, fontFamily: 'var(--font-sans)' }}
              >
                View all products
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  ) : null;

  // ── Mobile accordion ────────────────────────────────────────

  const mobileMenu = isOpen ? (
    <div
      ref={menuRef}
      className="mega-menu-panel"
      style={{
        position: 'fixed',
        top: menuTop,
        left: 0,
        right: 0,
        zIndex: 9999,
        maxHeight: `calc(100dvh - ${menuTop}px)`,
        overflowY: 'auto',
      }}
    >
      <div style={{
        background: '#fff',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '0 0 16px 16px',
        boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
      }}>
        {clusters.map((cluster) => (
          <div key={cluster.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
            {/* Accordion trigger */}
            <button
              onClick={() => setMobileOpenId(mobileOpenId === cluster.id ? null : cluster.id)}
              className="flex items-center justify-between w-full bg-transparent border-0 cursor-pointer text-left"
              style={{ padding: '16px 20px', fontFamily: 'var(--font-sans)' }}
            >
              <div>
                <span style={{ fontSize: '15px', fontWeight: 700, color: NAVY, display: 'block' }}>
                  {cluster.label}
                </span>
                <span style={{ fontSize: '11px', fontWeight: 600, color: GREEN }}>
                  {cluster.subtitle}
                </span>
              </div>
              <span style={{ fontSize: '20px', color: '#B4BBC6', lineHeight: 1, flexShrink: 0 }}>
                {mobileOpenId === cluster.id ? '−' : '+'}
              </span>
            </button>

            {/* Accordion body */}
            {mobileOpenId === cluster.id && (
              <div
                className="accordion-body"
                style={{ background: '#fff', padding: '0 20px 16px' }}
              >
                {cluster.groups.map((group) => (
                  <div key={group.heading ?? 'root'}>
                    {group.heading && (
                      <p style={{
                        fontSize: '9.5px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.13em',
                        color: '#B8C0CC',
                        padding: '10px 0 4px',
                        fontFamily: 'var(--font-sans)',
                      }}>
                        {group.heading}
                      </p>
                    )}
                    {group.products.map((product) => (
                      <button
                        key={product}
                        onClick={closeMenu}
                        className="flex items-center justify-between w-full bg-transparent border-0 cursor-pointer text-left group"
                        style={{
                          padding: '10px 0',
                          borderBottom: '1px solid #F3F4F6',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        <span
                          className="group-hover:text-[var(--color-primary)] transition-colors"
                          style={{ fontSize: '14.5px', fontWeight: 500, color: '#1C2537' }}
                        >
                          {product}
                        </span>
                        <span style={{ color: '#D1D5DB', fontSize: '16px' }}>›</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Mobile CTA */}
        <div style={{ background: LT_GREEN, padding: '20px' }}>
          <p style={{ fontSize: '15px', fontWeight: 800, color: NAVY, margin: '0 0 6px', fontFamily: 'var(--font-sans)' }}>
            Bulk RFQ & Project Quotes
          </p>
          <p style={{ fontSize: '12.5px', color: '#3A4A38', margin: '0 0 14px', fontFamily: 'var(--font-sans)', lineHeight: 1.5 }}>
            Get priority pricing on large orders. Team responds in 24 hrs.
          </p>
          <button
            onClick={closeMenu}
            style={{
              background: DK_GREEN, color: '#fff', border: 'none', borderRadius: '8px',
              padding: '10px 20px', fontSize: '13px', fontWeight: 800, cursor: 'pointer',
              fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'center', gap: '7px',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload My BOM
          </button>
        </div>

        {/* Mobile footer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: '1px solid #F3F4F6', padding: '12px 20px', background: '#FAFBFC',
        }}>
          <span style={{ color: '#B4BBC6', fontSize: '12px', fontFamily: 'var(--font-sans)' }}>
            {TOTAL_LINES} product lines
          </span>
          <button
            onClick={closeMenu}
            style={{ color: GREEN, fontSize: '12.5px', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
          >
            View all →
          </button>
        </div>
      </div>
    </div>
  ) : null;

  // ── Trigger button ─────────────────────────────────────────

  return (
    <>
      <button
        ref={buttonRef}
        onMouseEnter={!isMobile ? hoverOpen : undefined}
        onMouseLeave={!isMobile ? hoverClose : undefined}
        onClick={isMobile ? () => { calcTop(); setIsOpen(v => !v); } : undefined}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center justify-center gap-[var(--space-2)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-5 py-3 rounded-[var(--radius-lg)] text-sm font-[var(--weight-medium)] transition-colors"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        Categories
        <svg
          width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {mounted && createPortal(
        <>
          {!isMobile && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 49,
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none',
                transition: 'opacity 150ms ease',
              }}
              onClick={closeMenu}
            />
          )}
          {isMobile ? mobileMenu : desktopMenu}
        </>,
        document.body
      )}
    </>
  );
}
