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
    <section className="w-full" style={{ backgroundColor: 'var(--color-bg-page)', padding: 'var(--space-16)' }}>

      {/* Section header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex flex-col gap-1.5">
          <h2
            className="m-0"
            style={{
              fontSize: '28px',
              fontWeight: 'var(--weight-black)',
              color: 'var(--color-text)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Bestsellers
          </h2>
          <p className="m-0" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
            Access thousands of automation and circuit protection parts ready.
          </p>
        </div>

        <button
          className="flex items-center gap-1.5"
          style={{
            backgroundColor: 'white',
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
            className="flex items-center justify-center rounded-full"
            style={{ width: '20px', height: '20px', flexShrink: 0, backgroundColor: 'var(--color-text)' }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>
      </div>

      {/* Horizontal scroll row */}
      <div
        className="flex overflow-x-auto snap-x snap-mandatory"
        style={{ gap: '20px', paddingBottom: '8px', scrollbarWidth: 'none' }}
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="product-card flex-shrink-0 snap-start flex flex-col cursor-pointer"
            style={{ width: '272px', gap: '14px' }}
          >

            {/* Image zone — position: relative, overflow: hidden */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ backgroundColor: '#eaedf3', height: '272px' }}
            >
              {/* Stock badge */}
              <div className="absolute top-3 left-3 flex items-center gap-[5px]" style={{ zIndex: 2 }}>
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

              {/* Product image */}
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
                  />
                </div>
              </div>

              {/* Cart icon — rendered after image so it sits above it; hidden until card hover */}
              <div
                className="card-hover-el absolute top-3 right-3"
                style={{ zIndex: 10 }}
              >
                <button className="btn-cart-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </button>
              </div>

              {/* Buy Now — position: absolute, bottom: 0, left: 0, right: 0; hidden until card hover */}
              <div
                className="card-hover-el absolute bottom-0 left-0 right-0 p-3"
                style={{ zIndex: 10 }}
              >
                <button className="btn-buy-now-card">Buy Now</button>
              </div>
            </div>

            {/* Info section */}
            <div className="flex flex-col" style={{ gap: '5px' }}>

              {/* Brand logo */}
              <div className="relative" style={{ height: '26px', width: '90px' }}>
                <Image
                  src={product.logo}
                  alt="Brand"
                  fill
                  unoptimized
                  style={{ objectFit: 'contain', objectPosition: 'left', mixBlendMode: 'multiply' }}
                />
              </div>

              {/* Product name */}
              <h3
                className="m-0"
                style={{
                  fontSize: '15px',
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--color-text)',
                  lineHeight: 'var(--leading-snug)',
                }}
              >
                {product.name}
              </h3>

              {/* Price */}
              <span style={{ fontSize: '15px', fontWeight: 'var(--weight-bold)', color: 'var(--color-text)' }}>
                {product.price}
              </span>

              {/* Spec */}
              <p className="m-0" style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-snug)' }}>
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
                <span style={{ fontSize: '12px', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-muted)' }}>
                  SKU: {product.sku}
                </span>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: 'var(--color-text-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>

              {/* Add to Project Quote — hidden until card hover */}
              <div className="card-hover-el">
                <button className="btn-add-quote">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Add to Project Quote
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
