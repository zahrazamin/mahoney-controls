'use client';

import Image from 'next/image';

type StockStatus = 'in-stock' | 'lead-time';

const PRODUCTS = [
  {
    id: 1,
    image: '/images/products/img-AMU1084CCL-300x300.jpg',
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
    image: '/images/products/img-AMU1084CCL-300x300.jpg',
    sku: '11BG0910A110',
    name: 'Illuminated Push Buttons',
    spec: '22mm | 10A | Green LED | Momentary',
    logo: '/images/logo/partner%20logo/logo-3.png',
    price: '$23.00',
    stock: 'in-stock' as StockStatus,
    stockQty: 40,
  },
];

export default function ProductShowcase() {
  return (
    <section className="w-full bg-[var(--color-bg-page)]" style={{ padding: 'var(--space-16)' }}>

      {/* ── Section header ── */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex flex-col gap-1.5">
          <h2
            className="m-0 text-[var(--color-text)] leading-[var(--leading-tight)]"
            style={{ fontSize: '28px', fontWeight: 'var(--weight-black)' }}
          >
            Bestsellers
          </h2>
          <p className="m-0 text-[var(--color-text-muted)]" style={{ fontSize: '13px' }}>
            Access thousands of automation and circuit protection parts ready.
          </p>
        </div>

        <button
          className="flex items-center gap-1.5 bg-white hover:bg-gray-50 transition-colors"
          style={{
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-full)',
            padding: '7px 14px 7px 16px',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-medium)',
            color: 'var(--color-text)',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          View All
          <span
            className="flex items-center justify-center rounded-full bg-[var(--color-text)]"
            style={{ width: '20px', height: '20px', flexShrink: 0 }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>
      </div>

      {/* ── Horizontal scroll row ── */}
      <div
        className="flex overflow-x-auto snap-x snap-mandatory"
        style={{ gap: '20px', paddingBottom: '8px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="group flex-shrink-0 snap-start flex flex-col cursor-pointer"
            style={{ width: '272px', gap: '14px' }}
          >

            {/* ── Gray image card ── */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#eaedf3', height: '272px' }}
            >
              {/* Stock badge — dot + colored text, no pill */}
              <div className="absolute top-3 left-3 flex items-center gap-[5px]">
                <span
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: '7px',
                    height: '7px',
                    backgroundColor: product.stock === 'in-stock' ? '#16a34a' : '#ef4444',
                  }}
                />
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 'var(--weight-medium)',
                    color: product.stock === 'in-stock' ? '#16a34a' : '#ef4444',
                    lineHeight: 1,
                  }}
                >
                  {product.stock === 'in-stock'
                    ? `${product.stockQty} in Stock – Ready to ship`
                    : 'Lead Time: 10 Days'}
                </span>
              </div>

              {/* Product image — centered */}
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain', width: '100%', height: '100%', mixBlendMode: 'multiply' }}
                  unoptimized
                />
              </div>
            </div>

            {/* ── Info below card (bare on page bg) ── */}
            <div className="flex flex-col" style={{ gap: '5px' }}>

              {/* Brand logo */}
              <div className="relative" style={{ height: '26px', width: '90px' }}>
                <Image
                  src={product.logo}
                  alt="Brand"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left', mixBlendMode: 'multiply' }}
                  unoptimized
                />
              </div>

              {/* Product name */}
              <h3
                className="m-0 text-[var(--color-text)] leading-[var(--leading-snug)]"
                style={{ fontSize: '15px', fontWeight: 'var(--weight-bold)' }}
              >
                {product.name}
              </h3>

              {/* Price */}
              <span
                className="text-[var(--color-text)]"
                style={{ fontSize: '15px', fontWeight: 'var(--weight-bold)' }}
              >
                {product.price}
              </span>

              {/* Spec */}
              <p
                className="m-0 text-[var(--color-text-muted)]"
                style={{ fontSize: '13px', lineHeight: 'var(--leading-snug)' }}
              >
                {product.spec}
              </p>

              {/* SKU pill */}
              <div
                className="inline-flex items-center gap-[6px] mt-1"
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-full)',
                  padding: '5px 12px',
                }}
              >
                <span
                  className="text-[var(--color-text-muted)]"
                  style={{ fontSize: '12px', fontWeight: 'var(--weight-medium)' }}
                >
                  SKU: {product.sku}
                </span>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center text-[var(--color-text-subtle)] hover:text-[var(--color-text-muted)] transition-colors"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
