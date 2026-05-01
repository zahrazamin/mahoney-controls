"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 0,
    image: "/images/products/Rectangle%2011.png",
    sku: "DMRBA",
    title: "AC RECEPTACLES",
    desc: (
      <>
        Altech Receptacle, Black, 15A/250VAC<br />IP54 DIN Rail
      </>
    ),
    logo: "/images/logo/partner%20logo/logo-11.png",
  },
  {
    id: 1,
    image: "/images/products/img-AMU1084CCL-300x300.jpg",
    sku: "AMU1084",
    title: "CONTROL ENCLOSURE",
    desc: (
      <>
        Polycarbonate Enclosure, NEMA 4X<br />Clear Cover, Indoor/Outdoor
      </>
    ),
    logo: "/images/logo/partner%20logo/logo-3.png",
  },
  {
    id: 2,
    image: "/images/products/img-m_22003008ul.jpg",
    sku: "22003008",
    title: "POWER RELAY",
    desc: (
      <>
        Industrial Control Relay, 24VDC<br />4PDT Contacts, Panel Mount
      </>
    ),
    logo: "/images/logo/partner%20logo/logo-8.png",
  }
];

export default function BestsellerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[26rem] flex flex-col gap-2 lg:ml-auto mt-8 lg:mt-0 scale-105 origin-center lg:origin-bottom-right">
      <span className="text-white text-[11px] font-[800] tracking-widest uppercase">BESTSELLER THIS WEEK</span>
      
      <div className="w-full bg-white rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden" style={{ height: '178px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 px-5 py-4 w-full h-full flex items-center bg-white"
          >
            <div className="flex gap-5 items-center w-full">
              {/* Product Image */}
              <div className="w-[125px] flex-shrink-0 flex items-center justify-center">
                <Image 
                  src={products[currentIndex].image} 
                  alt={products[currentIndex].title} 
                  width={125} 
                  height={125} 
                  className="object-contain"
                  unoptimized
                />
              </div>
              
              {/* Right Content */}
              <div className="flex flex-col flex-1">
                <div className="flex mb-1.5">
                  <span className="bg-[#F8EBCD] text-[#CD8F20] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    SKU: {products[currentIndex].sku}
                  </span>
                </div>
                <h4 className="text-[#0B1228] font-[900] text-[17px] leading-tight mb-0.5">
                  {products[currentIndex].title}
                </h4>
                <p className="text-[#3A4354] text-[12px] leading-relaxed">
                  {products[currentIndex].desc}
                </p>

                <hr className="border-gray-200 my-2.5" />

                {/* Bottom Row */}
                <div className="flex items-center justify-between">
                  <div className="h-[22px] w-[75px] relative flex items-center">
                    <Image 
                      src={products[currentIndex].logo} 
                      alt="Partner Logo" 
                      fill
                      className="object-contain object-left mix-blend-multiply"
                      unoptimized
                    />
                  </div>
                  <button className="bg-[#009A33] hover:bg-[#008A2D] text-white text-[14px] font-[700] px-6 py-2.5 rounded-[8px] transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-end gap-1.5 mt-0.5 pr-3">
        {products.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-3 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
