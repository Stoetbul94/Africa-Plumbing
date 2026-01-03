"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 122, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 122, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Animated orange accent lines with pulse */}
      <div className="absolute top-0 left-0 w-full h-1 bg-orange shadow-[0_0_20px_rgba(255,122,0,0.8)] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-orange shadow-[0_0_20px_rgba(255,122,0,0.8)] animate-pulse" />
      
      {/* Glowing orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
        {/* Logo with dramatic entrance and glow */}
        <div 
          className={`mb-8 sm:mb-12 flex justify-center transition-all duration-1000 ${
            isLoaded 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-[-50px] scale-90'
          }`}
        >
          <div className="relative group">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-orange/30 blur-3xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-500 animate-pulse" style={{ animationDuration: '3s' }} />
            
            {/* Logo with 3D transform on hover */}
            <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-2deg]">
              <Image
                src="/logos/ChatGPT Image Jan 3, 2026, 12_10_41 AM.png"
                alt="Africa Hardware Plumbing & Electrical Logo"
                width={200}
                height={200}
                className="w-auto h-28 sm:h-36 md:h-44 lg:h-52 object-contain drop-shadow-[0_0_30px_rgba(255,122,0,0.6)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main Headline with animated glow */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight transition-all duration-1000 delay-300 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="block text-orange mb-2 sm:mb-4 relative">
            <span className="relative z-10 drop-shadow-[0_0_20px_rgba(255,122,0,0.8)]">
              GUARANTEED TO BEAT
            </span>
            <span className="absolute inset-0 text-orange blur-xl opacity-50 animate-pulse">GUARANTEED TO BEAT</span>
          </span>
          <span className="block text-orange relative">
            <span className="relative z-10 drop-shadow-[0_0_20px_rgba(255,122,0,0.8)]">
              ANY PRICE
            </span>
            <span className="absolute inset-0 text-orange blur-xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}>ANY PRICE</span>
          </span>
        </h1>

        {/* Subheading with fade in */}
        <p 
          className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-5'
          }`}
        >
          Alberton&apos;s trusted hardware store for plumbing, electrical & building supplies. Quality products, unbeatable pricing, real service.
        </p>

        {/* CTA Buttons with enhanced effects */}
        <div 
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 transition-all duration-1000 delay-700 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-5'
          }`}
        >
          <a
            href="tel:+27780816467"
            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-orange text-black font-bold text-base sm:text-lg rounded-none hover:bg-orange/90 transition-all duration-200 uppercase tracking-wider text-center min-h-[48px] flex items-center justify-center overflow-hidden"
          >
            <span className="relative z-10">Call Now</span>
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            <span className="absolute inset-0 shadow-[0_0_30px_rgba(255,122,0,0.8)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="https://wa.me/27780816467?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20hardware%20supplies."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-orange text-orange font-bold text-base sm:text-lg rounded-none hover:bg-orange hover:text-black transition-all duration-200 uppercase tracking-wider text-center min-h-[48px] flex items-center justify-center overflow-hidden"
          >
            <span className="relative z-10">WhatsApp Us</span>
            <span className="absolute inset-0 bg-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            <span className="absolute inset-0 shadow-[0_0_30px_rgba(255,122,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Secondary Info with staggered animation */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-gray-400 text-sm sm:text-base transition-all duration-1000 delay-1000 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="flex items-center gap-2 group cursor-default">
            <span className="text-orange text-xl group-hover:scale-125 transition-transform">🚚</span>
            <span className="group-hover:text-orange transition-colors">Same-Day Delivery Available</span>
          </div>
          <div className="hidden sm:block text-orange animate-pulse">•</div>
          <div className="flex items-center gap-2 group cursor-default">
            <span className="text-orange text-xl group-hover:scale-125 transition-transform">🕐</span>
            <span className="group-hover:text-orange transition-colors">Open 6:30 AM</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
}
