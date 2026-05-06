'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

type StockStatus = 'in-stock' | 'lead-time';

const PRODUCTS = [
  {
    id: 1,
    image: '/images/products/img-AMU1084CCL-300x300.jpg',
    hoverImage: '/images/products/hover-1.jpeg',
    sku: '11BG0910A110',
    name: 'Illuminated Push Buttons',
    spec: '22mm | 10A | Green LED | Momentary',
    logo: '/images/logo/partner%20logo/logo-3.png',
    price: '$23.00',
    stock: 'in-stock' as StockStatus,
    stockQty: 40,
  },
  {
    id: 2,
    image: '/images/products/Rectangle%2011.png',
    hoverImage: '/images/products/hover-2.jpeg',
    sku: '11BG0910A110',
    name: 'Illuminated Push Buttons',
    spec: '22mm | 10A | Green LED | Momentary',
    logo: '/images/logo/partner%20logo/logo-11.png',
    price: '$23.00',
    stock: 'lead-time' as StockStatus,
    stockQty: null,
  },
  {
    id: 3,
    image: '/images/products/img-m_22003008ul.jpg',
    hoverImage: '/images/products/hover-1.jpeg',
    sku: '11BG0910A110',
    name: 'Illuminated Push Buttons',
    spec: '22mm | 10A | Green LED | Momentary',
    logo: '/images/logo/partner%20logo/logo-3.png',
    price: '$23.00',
    stock: 'in-stock' as StockStatus,
    stockQty: 40,
  },
  {
    id: 4,
    image: '/images/products/img-AMU1084CCL-300x300.jpg',
    hoverImage: '/images/products/hover-2.jpeg',
    sku: '11BG0910A110',
    name: 'Illuminated Push Buttons',
    spec: '22mm | 10A | Green LED | Momentary',
    logo: '/images/logo/partner%20logo/logo-3.png',
    price: '$23.00',
    stock: 'in-stock' as StockStatus,
    stockQty: 40,
  },
  {
    id: 5,
    image: '/images/products/Rectangle%2011.png',
    hoverImage: '/images/products/hover-1.jpeg',
    sku: '11BG0910A110',
    name: 'Illuminated Push Buttons',
    spec: '22mm | 10A | Green LED | Momentary',
    logo: '/images/logo/partner%20logo/logo-8.png',
    price: '$23.00',
    stock: 'in-stock' as StockStatus,
    stockQty: 40,
  },
];

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    dragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollStart.current - (x - startX.current) * 1.5;
  };

  const stopDrag = () => {
    dragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  return (
    <section style={{ backgroundColor: '#f3f4f6', padding: '60px 0 60px 80px' }}>
      <style>{`
        .bs-cart-btn:hover { background-color: rgba(0,0,0,0.42) !important; }
        .bs-buy-btn:hover { background-color: #15803d !important; }
        .bs-quote-btn:hover { background-color: #2874D0 !important; color: white !important; border-color: #2874D0 !important; }
        .bs-quote-btn:hover svg { stroke: white !important; }
      `}</style>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px', paddingRight: '80px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '32px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
            Bestsellers
          </h2>
          <p style={{ margin: '6px 0 0', fontSize: '14px', color: '#6b7280', lineHeight: 1.5 }}>
            Access thousands of automation and circuit protection parts ready.
          </p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '14px', fontWeight: 600, color: '#1f2937', marginTop: '44px' }}>
          View All
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e5e7eb', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="[&::-webkit-scrollbar]:hidden"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        style={{ display: 'flex', gap: '24px', overflowX: 'auto', scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ width: 'calc((100vw - 216px) / 4 * 0.95)', minWidth: 'calc((100vw - 216px) / 4 * 0.95)', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            {/* Image rectangle */}
            <div style={{ background: '#E3E6ED', borderRadius: '16px', height: '475px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: hoveredId === product.id ? '0' : '24px', overflow: 'hidden' }}>
              {hoveredId === product.id ? (
                <Image src={product.hoverImage} alt={product.name} fill style={{ objectFit: 'cover' }} unoptimized />
              ) : (
                <Image src={product.image} alt={product.name} width={200} height={200} style={{ objectFit: 'contain', width: '65%', height: '65%', mixBlendMode: 'multiply' }} unoptimized />
              )}

              {/* SKU pill — top left */}
              <div
                style={{ position: 'absolute', top: '20px', left: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: hoveredId === product.id ? 'white' : '#CFD2DA', borderRadius: '12px', padding: '4px 10px', zIndex: 1, transition: 'background 0.2s ease' }}
              >
                <span style={{ fontSize: '13.2px', fontFamily: 'ui-monospace, monospace', color: hoveredId === product.id ? '#0f172a' : '#808193', transition: 'color 0.2s ease' }}>
                  {copiedId === product.id ? 'Copied!' : `SKU: ${product.sku}`}
                </span>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(product.sku);
                    setCopiedId(product.id);
                    setTimeout(() => setCopiedId(null), 2000);
                  }}
                  style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: hoveredId === product.id ? '#0f172a' : '#808193', transition: 'color 0.2s ease' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>

              {/* Cart button — bottom right, visible on hover */}
              {hoveredId === product.id && (
                <button style={{ position: 'absolute', bottom: '16px', right: '16px', width: '50px', height: '50px', borderRadius: '10px', backgroundColor: 'rgba(0,0,0,0.25)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 1, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Info — bare, on section background */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ position: 'relative', height: '28px', width: '90px', marginBottom: '4px' }}>
                <Image src={product.logo} alt="Brand" fill style={{ objectFit: 'contain', objectPosition: 'left', mixBlendMode: 'multiply' }} unoptimized />
              </div>
              <p style={{ margin: 0, fontSize: '17px', fontWeight: 600, color: '#0f172a', lineHeight: 1.4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                {product.name}
              </p>

              {/* Fixed-height swap zone — both states always rendered, opacity cross-fades */}
              <div style={{ position: 'relative', height: '116px', marginTop: '8px' }}>

                {/* Default: price + spec + stock */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: '4px', opacity: hoveredId === product.id ? 0 : 1, transition: 'opacity 0.2s ease', pointerEvents: hoveredId === product.id ? 'none' : 'auto' }}>
                  <p style={{ margin: 0, fontSize: '17px', fontWeight: 500, color: '#0f172a' }}>
                    {product.price}
                  </p>
                  <p style={{ margin: 0, fontSize: '15.4px', color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {product.spec}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '4px' }}>
                    {product.stock === 'in-stock' ? (
                      <span style={{ position: 'relative', display: 'inline-flex', flexShrink: 0 }}>
                        <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: '#16a34a', opacity: 0.6 }} />
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#16a34a', position: 'relative' }} />
                      </span>
                    ) : (
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0, backgroundColor: '#dc2626' }} />
                    )}
                    <span style={{ fontSize: '15.4px', fontWeight: 500, lineHeight: 1, color: product.stock === 'in-stock' ? '#16a34a' : '#dc2626' }}>
                      {product.stock === 'in-stock' ? `${product.stockQty} in Stock - Ready to ship` : 'Lead Time: 10 Days'}
                    </span>
                  </div>
                </div>

                {/* Hover: Buy Now + Add to Project Quote */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: '8px', opacity: hoveredId === product.id ? 1 : 0, transition: 'opacity 0.2s ease', pointerEvents: hoveredId === product.id ? 'auto' : 'none' }}>
                  <button style={{ width: '100%', height: '50px', boxSizing: 'border-box', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '12px', fontSize: '15.4px', fontWeight: 600, cursor: 'pointer' }}>
                    Buy Now
                  </button>
                  <button style={{ width: '100%', height: '50px', boxSizing: 'border-box', backgroundColor: '#E6EAF0', color: '#2874D0', border: '1.5px solid #CDD1DA', borderRadius: '12px', fontSize: '15.4px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2874D0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                    Add to Project Quote
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
