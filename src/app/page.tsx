import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";
import BestsellerCarousel from "../components/BestsellerCarousel";
import CategoryMegaMenu from "../components/CategoryMegaMenu";

export default function Home() {
  return (
    <main className="w-full flex flex-col font-[var(--font-sans)]">
      
      {/* 🔴 HERO SECTION */}
      <section className="relative h-[100dvh] min-h-[37.5rem] w-full flex flex-col overflow-hidden">
        
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
          {/* Header */}
          <header className="w-full px-[var(--space-12)] py-[var(--space-6)] flex items-center justify-between z-50 relative">
          
          {/* Left Navigation */}
          <div className="flex items-center gap-[var(--space-2)]">
            <CategoryMegaMenu />
            <nav className="flex items-center justify-center gap-[var(--space-8)] bg-[#0f0f0f]/40 px-7 py-3 rounded-[var(--radius-lg)] text-sm font-[var(--weight-regular)] text-white/90 backdrop-blur-md">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
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

          {/* Right Actions */}
          <div className="flex items-center p-1 h-11 bg-[#0f0f0f]/40 rounded-[var(--radius-lg)] backdrop-blur-md">
            <button className="w-[3.125rem] h-full flex items-center justify-center text-white border-transparent transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button className="w-[3.125rem] h-full flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-[var(--radius-md)] border-transparent transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
          </div>
        </header>

        {/* Remaining content area */}
        <div className="flex-1 w-full flex flex-col justify-end px-[var(--space-12)] lg:px-[var(--space-16)] pb-[var(--space-20)] pt-10">
          <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-10">
            {/* Left side text and buttons */}
            <div className="max-w-[43.75rem] flex flex-col gap-[var(--space-8)]">
              <div className="flex flex-col gap-[var(--space-6)] text-white">
                <h1 className="text-[3rem] font-[800] leading-[1.35]">
                  Stop Waiting on Lead Times.<br />
                  Get all In-Stock Industrial<br />
                  Components on Mahoney!
                </h1>
                <p className="text-white text-[length:var(--text-base)] font-[300] leading-[1.5] max-w-[37.5rem]">
                  As an authorized stocking wholesaler, we don't just take orders—we fulfill them. Access thousands of automation and circuit protection parts ready for immediate shipping.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 mt-2">
                <div className="flex items-center gap-[var(--space-3)]">
                  <button className="flex items-center justify-center px-7 py-3 bg-white text-[#0f0f0f] rounded-[var(--radius-lg)] text-sm font-[var(--weight-semibold)] transition-colors hover:bg-gray-100">
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
                    <span className="text-lg text-white font-[900] tracking-wide leading-tight">332-222-4532</span>
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
          <h2 className="text-[2rem] lg:text-[2.375rem] font-bold text-[#0a1128] leading-[1.2] text-center">
            <AnimatedCounter to={15000} suffix="+" duration={2} /> In-Stock Products<br />from the Brands You Trust
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 max-w-[34rem] leading-relaxed text-center mt-4">
            Authorized stocking wholesaler for 25+ leading manufacturers. Specialized components in our local warehouse, ready to ship today.
          </p>

          {/* Trust stat badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {['15,000+ SKUs', 'Same Day Shipping', '25+ Brands'].map((label) => (
              <span key={label} className="flex items-center gap-1.5 text-[#374151] text-sm font-[600]">
                <span className="text-[#2d8a3e] font-[800] text-base leading-none">✓</span>
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
                className="flex-1 min-w-0 bg-transparent border-0 px-2 py-4 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none"
              />
              <button className="flex-shrink-0 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-7 py-4 text-sm font-[var(--weight-semibold)] transition-colors">
                Search
              </button>
            </div>

            {/* Popular quick-links */}
            <div className="flex items-center gap-2 flex-wrap -mt-1">
              <span className="text-[#6b7280] font-medium flex-shrink-0" style={{ fontSize: '11px' }}>Popular:</span>
              {['Circuit Breakers', 'Fuses', 'Push Buttons', 'Power Supplies', 'Terminal Blocks'].map((term, idx, arr) => (
                <span key={term} className="flex items-center gap-2">
                  <button className="text-xs font-[600] text-[#2d8a3e] hover:text-[#1a5c2a] hover:underline underline-offset-2 transition-colors bg-transparent border-0 cursor-pointer p-0">
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
              <span className="text-gray-400 text-xs font-medium">Quick filter:</span>

              <div className="relative">
                <select className="appearance-none bg-[#f4f4f5] border border-gray-200 rounded-full pl-4 pr-7 py-1.5 text-gray-600 text-xs font-[600] focus:outline-none focus:border-[var(--color-primary)] cursor-pointer">
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
                <select className="appearance-none bg-[#f4f4f5] border border-gray-200 rounded-full pl-4 pr-7 py-1.5 text-gray-600 text-xs font-[600] focus:outline-none focus:border-[var(--color-primary)] cursor-pointer">
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
    </main>
  );
}
