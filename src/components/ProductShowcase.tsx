'use client';

import { useState } from 'react';
import Image from 'next/image';

const CATEGORIES = [
  'All Products',
  'Automation & Logic',
  'Power & Protection',
  'Panel Infrastructure',
  'Connectivity & Climate',
];

type StockStatus = 'in-stock' | 'low-stock';

const PRODUCTS = [
  {
    id: 1,
    image: '/images/products/img-m_22003008ul.jpg',
    sku: '22003008',
    name: 'Industrial Control Relay',
    spec: '24VDC, 4PDT Contacts, Panel Mount',
    logo: '/images/logo/partner%20logo/logo-8.png',
    price: '$42.00',
    category: 'Automation & Logic',
    stock: 'in-stock' as StockStatus,
    shipsToday: true,
  },
  {
    id: 2,
    image: '/images/products/Rectangle%2011.png',
    sku: 'YZCO-B6E',
    name: 'Illuminated Push Button',
    spec: '22mm, Green LED, Momentary, 10A',
    logo: '/images/logo/partner%20logo/logo-1.png',
    price: '$28.50',
    category: 'Automation & Logic',
    stock: 'low-stock' as StockStatus,
    shipsToday: false,
  },
  {
    id: 3,
    image: '/images/products/img-AMU1084CCL-300x300.jpg',
    sku: 'SB3-B020',
    name: 'Miniature Circuit Breaker',
    spec: '20A, 3-Pole, 480VAC, UL Listed',
    logo: '/images/logo/partner%20logo/logo-5.png',
    price: '$89.00',
    category: 'Power & Protection',
    stock: 'low-stock' as StockStatus,
    shipsToday: true,
  },
  {
    id: 4,
    image: '/images/products/img-m_22003008ul.jpg',
    sku: 'QUINT-PS/10A',
    name: 'DIN Rail Power Supply',
    spec: '24VDC, 10A, 240W, Single Phase',
    logo: '/images/logo/partner%20logo/logo-2.png',
    price: '$165.00',
    category: 'Power & Protection',
    stock: 'in-stock' as StockStatus,
    shipsToday: true,
  },
  {
    id: 5,
    image: '/images/products/Rectangle%2011.png',
    sku: 'DMRBA',
    name: 'AC DIN Rail Receptacle',
    spec: 'Black, 15A/250VAC, IP54 DIN Rail',
    logo: '/images/logo/partner%20logo/logo-11.png',
    price: '$18.50',
    category: 'Panel Infrastructure',
    stock: 'in-stock' as StockStatus,
    shipsToday: true,
  },
  {
    id: 6,
    image: '/images/products/img-AMU1084CCL-300x300.jpg',
    sku: 'AMU1084CCL',
    name: 'Polycarbonate Enclosure',
    spec: 'NEMA 4X, Clear Cover, Indoor/Outdoor',
    logo: '/images/logo/partner%20logo/logo-3.png',
    price: '$124.95',
    category: 'Panel Infrastructure',
    stock: 'in-stock' as StockStatus,
    shipsToday: true,
  },
  {
    id: 7,
    image: '/images/products/img-m_22003008ul.jpg',
    sku: 'PT-1.5/S/10',
    name: 'Spring Clamp Terminal Block',
    spec: '1.5mm², 32A, 800V, 10-Pack',
    logo: '/images/logo/partner%20logo/logo-7.png',
    price: '$3.25',
    category: 'Panel Infrastructure',
    stock: 'in-stock' as StockStatus,
    shipsToday: true,
  },
  {
    id: 8,
    image: '/images/products/Rectangle%2011.png',
    sku: 'FL-SW-8TX',
    name: 'Industrial Ethernet Switch',
    spec: '8-Port, 10/100Mbps, DIN Rail, 24VDC',
    logo: '/images/logo/partner%20logo/logo-4.png',
    price: '$245.00',
    category: 'Connectivity & Climate',
    stock: 'in-stock' as StockStatus,
    shipsToday: true,
  },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('All Products');

  const filtered =
    activeTab === 'All Products'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section className="w-full bg-[var(--color-bg-page)] py-20 px-[var(--space-12)] lg:px-[var(--space-16)]">

      {/* Header row */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
        <div className="flex flex-col gap-2">
          <span className="text-[var(--color-primary)] text-[length:var(--text-xs)] font-[var(--weight-extrabold)] tracking-widest uppercase">
            Featured Products
          </span>
          <h2 className="text-[var(--color-text)] text-[length:var(--text-3xl)] font-[var(--weight-extrabold)] leading-[var(--leading-tight)]">
            Shop Our Most Popular<br />Components
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:items-end max-w-[22rem]">
          <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-[var(--leading-body)] lg:text-right">
            Authorized stock from 25+ manufacturers. Every item ships from our US warehouse.
          </p>
          <button className="self-start lg:self-end bg-transparent border border-[#d1d5db] hover:border-[#9ca3af] text-[var(--color-text)] px-6 py-3 rounded-[var(--radius-lg)] text-[length:var(--text-sm)] font-[var(--weight-bold)] transition-colors">
            View All Products →
          </button>
        </div>
      </div>

      {/* Category filter tabs */}
      <div className="flex items-center gap-2 flex-wrap mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-full text-[length:var(--text-sm)] font-[var(--weight-semibold)] border transition-colors ${
              activeTab === cat
                ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                : 'bg-transparent border-[#d1d5db] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div
        key={activeTab}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 products-grid-enter"
      >
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-[14px] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col min-h-[380px]"
          >
            {/* Image — sits directly on sage background, mix-blend removes white JPG bg */}
            <div className="h-[210px] flex-shrink-0 flex items-center justify-center px-10 pt-8 pb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={180}
                className="object-contain w-full h-full mix-blend-multiply"
                unoptimized
              />
            </div>

            {/* Product info */}
            <div className="px-6 pb-6 flex flex-col gap-1.5 flex-1">

              {/* Category label */}
              <span className="text-[var(--color-text-subtle)] text-[length:var(--text-xs)] font-[var(--weight-bold)] uppercase tracking-widest">
                {product.category}
              </span>

              {/* Name */}
              <h3 className="text-[var(--color-text)] font-[var(--weight-bold)] text-[length:var(--text-xl)] leading-[var(--leading-snug)]">
                {product.name}
              </h3>

              {/* SKU */}
              <span className="text-[var(--color-text-subtle)] text-[length:var(--text-xs)] font-[var(--weight-semibold)]">
                {product.sku}
              </span>

              {/* Spec — single line, truncated */}
              <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-[var(--leading-snug)] truncate">{product.spec}</p>

              {/* Divider */}
              <div className="border-t border-black/[0.07] mt-2 mb-2" />

              {/* Brand logo + Price */}
              <div className="flex items-center justify-between">
                <div className="h-[28px] w-[80px] relative flex-shrink-0">
                  <Image
                    src={product.logo}
                    alt="Brand logo"
                    fill
                    className="object-contain object-left mix-blend-multiply"
                    unoptimized
                  />
                </div>
                <span className="text-[var(--color-text)] font-[var(--weight-extrabold)] text-[length:var(--text-xl)]">{product.price}</span>
              </div>

              {/* Stock badge pill */}
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    product.stock === 'in-stock'
                      ? 'bg-[var(--color-primary)] animate-pulse'
                      : 'bg-red-500'
                  }`}
                />
                <span
                  className={`text-[length:var(--text-xs)] font-[var(--weight-bold)] uppercase tracking-wide ${
                    product.stock === 'in-stock' ? 'text-[var(--color-primary)]' : 'text-red-500'
                  }`}
                >
                  {product.stock === 'in-stock' ? 'In Stock' : 'Low Stock'}
                </span>
              </div>

              {/* Hover action row — fades in on hover */}
              <div className="flex items-center justify-between gap-2 mt-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-[length:var(--text-xs)] font-[var(--weight-bold)] px-4 py-2 rounded-[8px] transition-colors whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                  <a
                    href="#"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[length:var(--text-xs)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors whitespace-nowrap"
                  >
                    Quick View
                  </a>
                </div>
                {product.shipsToday && (
                  <span className="text-[length:var(--text-xs)] text-[var(--color-primary)] font-[var(--weight-bold)] whitespace-nowrap flex-shrink-0">
                    ⚡ Ships Today
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bulk order banner strip */}
      <div className="mt-10 rounded-[14px] bg-[var(--color-primary-dark)] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white font-[var(--weight-semibold)] text-[length:var(--text-base)]">
          Need 50+ units? Get priority pricing.
        </p>
        <button className="flex-shrink-0 border border-white text-white hover:bg-white hover:text-[var(--color-primary-dark)] px-6 py-2.5 rounded-[var(--radius-lg)] text-[length:var(--text-sm)] font-[var(--weight-bold)] transition-colors">
          Upload Your BOM →
        </button>
      </div>

    </section>
  );
}
