import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";
import AnimatedCounter from "../components/AnimatedCounter";
import BestsellerCarousel from "../components/BestsellerCarousel";

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
        <div className="relative z-10 w-full h-full flex flex-col">
          {/* Header */}
          <header className="w-full px-[var(--space-12)] py-[var(--space-6)] flex items-center justify-between z-50 relative">
          
          {/* Left Navigation */}
          <div className="flex items-center gap-[var(--space-2)]">
            <button className="flex items-center justify-center gap-[var(--space-2)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-5 py-3 rounded-[var(--radius-lg)] text-sm font-[var(--weight-medium)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              Shop
            </button>
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
              style={{ width: '8.75rem', height: 'auto' }}
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
        <div className="max-w-[70rem] w-full mx-auto flex flex-col gap-8">
          
          {/* Top part: Heading and text */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <h2 className="text-[2rem] lg:text-[2.25rem] font-bold text-[#0a1128] leading-[1.2]">
              <AnimatedCounter to={15000} suffix="+" duration={2} /> In-Stock Products<br />from the Brands You Trust!
            </h2>
            <p className="text-gray-700 max-w-[24rem] leading-relaxed text-left">
              Authorized stocking wholesaler for 25+ leading manufacturers. We eliminate lead-time headaches with <AnimatedCounter to={15000} suffix="+" duration={2} /> specialized components in our local warehouse.
            </p>
          </div>

          {/* Bottom part: Search Panel and Video */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Search Panel */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="w-full bg-white rounded-[24px] px-8 py-8 flex flex-col gap-5 shadow-sm border border-gray-100">
                <div>
                  <h3 className="text-[#0a1128] text-xl font-bold">Search for Products</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Search for you desired automation product</p>
                </div>
                
                <div className="flex flex-col gap-4 mt-2">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#0a1128] text-[0.8125rem] font-[var(--weight-semibold)]">Name</label>
                    <input 
                      type="text" 
                      placeholder="Search by Name" 
                      className="w-full bg-[#f4f4f5] border border-gray-200 rounded-[var(--radius-lg)] px-4 py-3 text-gray-900 placeholder:text-gray-500 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* SKU */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#0a1128] text-[0.8125rem] font-[var(--weight-semibold)]">SKU</label>
                    <input 
                      type="text" 
                      placeholder="Type SKU" 
                      className="w-full bg-[#f4f4f5] border border-gray-200 rounded-[var(--radius-lg)] px-4 py-3 text-gray-900 placeholder:text-gray-500 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Category */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#0a1128] text-[0.8125rem] font-[var(--weight-semibold)]">Category</label>
                    <div className="relative">
                      <select className="w-full bg-[#f4f4f5] border border-gray-200 rounded-[var(--radius-lg)] px-4 py-3 text-gray-500 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors appearance-none">
                        <option value="">Select Category</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 15l5 5 5-5"/><path d="M7 9l5-5 5 5"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-[var(--radius-lg)] py-3 mt-2 text-[16px] font-[var(--weight-semibold)] transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Video */}
            <div className="lg:col-span-8 flex flex-col">
              <VideoPlayer videoId="oTLYmQQibO0" />
            </div>
          </div>
          
          {/* Bottom Logo Carousel */}
          <div className="w-full -mt-2 overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex w-max animate-marquee items-center gap-[60px] lg:gap-[100px] hover:[animation-play-state:paused]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
                <Image 
                  key={idx}
                  src={`/images/logo/partner%20logo/logo-${num}.png`}
                  alt={`Partner ${num}`}
                  width={160}
                  height={60}
                  className="object-contain h-[30px] lg:h-[40px] w-auto mix-blend-multiply transition-transform hover:scale-105"
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
