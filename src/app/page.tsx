import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";
import BestsellerCarousel from "../components/BestsellerCarousel";
import StickyNav from "../components/StickyNav";
import ProductShowcase from "../components/ProductShowcase";
import CategoryCards from "../components/CategoryCards";

export default function Home() {
  return (
    <main className="w-full flex flex-col font-[var(--font-sans)]">

      <StickyNav />

      {/* 🔴 HERO SECTION */}
      <section id="hero" className="relative h-[100dvh] min-h-[37.5rem] w-full flex flex-col overflow-hidden">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/banners/video-hero.webm" type="video/webm" />
          </video>
          {/* Gradient overlay to ensure text readability (darker bottom-left, lighter top-right) */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(45deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)' }}></div>
        </div>

        {/* Foreground Content */}
        <div className="relative w-full h-full flex flex-col">

          {/* Logo — non-sticky, lives in hero only */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[var(--space-6)]">
            <Image
              src="/images/logo/hero-logo.png"
              alt="Mahoney Controls"
              width={140}
              height={62}
              className="object-contain"
              style={{ width: '7.5rem', height: 'auto' }}
              priority
            />
          </div>

        {/* Remaining content area */}
        <div className="flex-1 w-full flex flex-col justify-end px-[var(--space-12)] lg:px-[var(--space-16)] pb-[var(--space-20)] pt-10">
          <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-10">
            {/* Left side text and buttons */}
            <div className="max-w-[43.75rem] flex flex-col gap-[var(--space-8)]">
              <div className="flex flex-col gap-[var(--space-6)] text-white">
                <h1 className="text-[length:var(--text-4xl)] font-[var(--weight-extrabold)] leading-[var(--leading-snug)]">
                  Stop Waiting on Lead Times.<br />
                  Get all In-Stock Industrial<br />
                  Components on Mahoney!
                </h1>
                <p className="text-white text-[length:var(--text-base)] font-[var(--weight-regular)] leading-[var(--leading-body)] max-w-[37.5rem]">
                  As an authorized stocking wholesaler, we don't just take orders—we fulfill them. Access thousands of automation and circuit protection parts ready for immediate shipping.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 mt-2">
                <div className="flex items-center gap-[var(--space-3)]">
                  <button className="flex items-center justify-center px-7 py-3 bg-white text-[var(--color-text)] rounded-[var(--radius-lg)] text-[length:var(--text-sm)] font-[var(--weight-semibold)] transition-colors hover:bg-gray-100">
                    Shop Categories
                  </button>
                  <button className="flex items-center justify-center px-7 py-3 bg-transparent border border-white/20 text-white rounded-[var(--radius-lg)] text-sm font-[var(--weight-semibold)] transition-colors hover:bg-white/10">
                    Request a Quote
                  </button>
                </div>

                <div className="hidden sm:block h-12 w-[1px] bg-white/20"></div>

                <div className="flex items-center gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white/80 font-[var(--weight-medium)] leading-tight">Call now</span>
                    <span className="text-[length:var(--text-xl)] text-white font-[var(--weight-black)] tracking-wide leading-tight">332-222-4532</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side Container: Bestseller Card Carousel */}
            <BestsellerCarousel />
          </div>
          </div>
        </div>
      </section>

      {/* Inventory & Search Section */}
      <section className="w-full bg-[var(--color-bg-page)] py-20 px-[var(--space-12)] lg:px-[var(--space-16)] flex flex-col items-center">
        <div className="max-w-[52rem] w-full mx-auto flex flex-col items-center">

          {/* Headline */}
          <h2 className="text-[length:var(--text-3xl)] font-[var(--weight-extrabold)] text-[var(--color-text)] leading-[var(--leading-tight)] text-center">
            <AnimatedCounter to={15000} suffix="+" duration={2} /> In-Stock Products<br />from the Brands You Trust
          </h2>

          {/* Subtext */}
          <p className="text-[var(--color-text-muted)] max-w-[34rem] leading-[var(--leading-body)] text-center mt-4">
            Authorized stocking wholesaler for 25+ leading manufacturers. Specialized components in our local warehouse, ready to ship today.
          </p>

          {/* Trust stat badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {['15,000+ SKUs', 'Same Day Shipping', '25+ Brands'].map((label) => (
              <span key={label} className="flex items-center gap-1.5 text-[var(--color-text)] text-[length:var(--text-sm)] font-[var(--weight-semibold)]">
                <span className="text-[var(--color-primary)] font-[var(--weight-extrabold)] text-[length:var(--text-base)] leading-none">✓</span>
                {label}
              </span>
            ))}
          </div>

          {/* Search Card */}
          <div className="w-full bg-white rounded-[24px] px-8 py-7 flex flex-col gap-4 shadow-sm border border-gray-100 mt-8">

            {/* Search bar */}
            <div className="flex items-center bg-[#f4f4f5] border border-gray-200 rounded-[var(--radius-lg)] overflow-hidden focus-within:border-[var(--color-primary)] focus-within:bg-white transition-colors">
              <div className="pl-4 pr-2 flex-shrink-0 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by product name, SKU, or part number..."
                className="flex-1 min-w-0 bg-transparent border-0 px-2 py-4 text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] text-[length:var(--text-sm)] focus:outline-none"
              />
              <button className="flex-shrink-0 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-7 py-4 text-sm font-[var(--weight-semibold)] transition-colors">
                Search
              </button>
            </div>

            {/* Popular quick-links */}
            <div className="flex items-center gap-2 flex-wrap -mt-1">
              <span className="text-[var(--color-text-muted)] font-[var(--weight-medium)] flex-shrink-0 text-[length:var(--text-xs)]">Popular:</span>
              {['Circuit Breakers', 'Fuses', 'Push Buttons', 'Power Supplies', 'Terminal Blocks'].map((term, idx, arr) => (
                <span key={term} className="flex items-center gap-2">
                  <button className="text-[length:var(--text-xs)] font-[var(--weight-semibold)] text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] hover:underline underline-offset-2 transition-colors bg-transparent border-0 cursor-pointer p-0">
                    {term}
                  </button>
                  {idx < arr.length - 1 && (
                    <span className="text-gray-300 select-none" style={{ fontSize: '11px' }}>|</span>
                  )}
                </span>
              ))}
            </div>

            {/* Quick filters */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[var(--color-text-subtle)] text-[length:var(--text-xs)] font-[var(--weight-medium)]">Quick filter:</span>

              <div className="relative">
                <select className="appearance-none bg-[#f4f4f5] border border-gray-200 rounded-full pl-4 pr-7 py-1.5 text-[var(--color-text-muted)] text-[length:var(--text-xs)] font-[var(--weight-semibold)] focus:outline-none focus:border-[var(--color-primary)] cursor-pointer">
                  <option>Filter by Category</option>
                  <option>Automation &amp; Logic</option>
                  <option>Power &amp; Protection</option>
                  <option>Panel Infrastructure</option>
                  <option>Connectivity &amp; Climate</option>
                </select>
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>

              <div className="relative">
                <select className="appearance-none bg-[#f4f4f5] border border-gray-200 rounded-full pl-4 pr-7 py-1.5 text-[var(--color-text-muted)] text-[length:var(--text-xs)] font-[var(--weight-semibold)] focus:outline-none focus:border-[var(--color-primary)] cursor-pointer">
                  <option>Filter by Brand</option>
                  <option>Altech Corp.</option>
                  <option>Bussmann</option>
                  <option>Eaton</option>
                  <option>nVent</option>
                  <option>IDEC</option>
                  <option>Phoenix Contact</option>
                  <option>Siemens</option>
                  <option>Hoffman</option>
                  <option>Panduit</option>
                  <option>Molex</option>
                  <option>Wago</option>
                </select>
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Marquee — full color, all 11 logos, infinite scroll */}
          <div
            className="w-full mt-10 overflow-hidden relative"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
          >
            <div className="flex w-max animate-marquee items-center gap-[72px] hover:[animation-play-state:paused]">
              {[1,2,3,4,5,6,7,8,9,10,11,1,2,3,4,5,6,7,8,9,10,11].map((num, idx) => (
                <Image
                  key={idx}
                  src={`/images/logo/partner%20logo/logo-${num}.png`}
                  alt={`Partner ${num}`}
                  width={130}
                  height={50}
                  className="object-contain h-[38px] w-auto"
                  unoptimized
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Promotional Banners Section */}
      <section className="w-full bg-[var(--color-bg-page)] pt-10 pb-5 px-[var(--space-12)] lg:px-[var(--space-16)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Banner 1 — Dark */}
          <div className="relative rounded-[1.25rem] overflow-hidden bg-[#1a1a1a] flex items-stretch min-h-[22rem]">
            {/* Full-card image, anchored left so the panel product is visible */}
            <div className="absolute inset-0">
              <Image
                src="/images/banners/Rectangle 17.png"
                alt="Eaton Zero Torque"
                fill
                className="object-cover object-left"
              />
              {/* Gradient covers only the right text area */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, #1a1a1a 42%, rgba(26,26,26,0.85) 58%, transparent 100%)' }} />
            </div>
            {/* Content — right side */}
            <div className="relative z-10 ml-auto w-[55%] flex flex-col justify-center px-8 py-10 gap-4">
              <div className="inline-flex items-center bg-white rounded-md px-3 py-1.5 w-fit">
                <Image
                  src="/images/logo/partner%20logo/logo-3.png"
                  alt="Eaton"
                  width={80}
                  height={28}
                  className="object-contain h-6 w-auto"
                  unoptimized
                />
              </div>
              <h2 className="text-white text-[length:var(--text-2xl)] font-[var(--weight-extrabold)] leading-[var(--leading-snug)]">
                30% Discount of<br />Eaton's Zero Torque
              </h2>
              <p className="text-white/70 text-[length:var(--text-sm)] leading-[var(--leading-body)]">
                As an authorized stocking wholesaler, we don't just take orders—we fulfill them. Access thousands of automation and circuit protection parts ready for immediate shipping.
              </p>
              <button className="w-fit mt-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-[length:var(--text-sm)] font-[var(--weight-bold)] rounded-[var(--radius-lg)] transition-colors">
                Order Now
              </button>
            </div>
          </div>

          {/* Banner 2 — Light */}
          <div className="relative rounded-[1.25rem] overflow-hidden bg-[#f0f0ee] flex items-stretch min-h-[22rem]">
            {/* Full-card image, anchored right so the heater product is visible */}
            <div className="absolute inset-0">
              <Image
                src="/images/banners/Rectangle 18.png"
                alt="Quik-Spec Coordination Panel"
                fill
                className="object-cover object-right"
              />
              {/* Gradient covers only the left text area */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.75) 42%, rgba(255,255,255,0.5) 58%, transparent 100%)' }} />
            </div>
            {/* Content — left side */}
            <div className="relative z-10 w-[52%] flex flex-col justify-center px-8 py-10 gap-4">
              <h2 className="text-[var(--color-text)] text-[length:var(--text-2xl)] font-[var(--weight-extrabold)] leading-[var(--leading-snug)]">
                New Edition in<br />Quik-Spec Coordination<br />Panel (QSCP)
              </h2>
              <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-[var(--leading-body)]">
                As an authorized stocking wholesaler, we don't just take orders—we fulfill them. Access thousands of automation and circuit protection parts ready for immediate shipping.
              </p>
              <button className="w-fit mt-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-[length:var(--text-sm)] font-[var(--weight-bold)] rounded-[var(--radius-lg)] transition-colors">
                Order Now
              </button>
            </div>
          </div>

        </div>
      </section>

      <CategoryCards />

      <ProductShowcase />

    </main>
  );
}
