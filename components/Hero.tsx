export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />
      
      {/* Orange accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-orange" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-orange" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">PLUMBING.</span>
          <span className="block text-white">ELECTRICAL.</span>
          <span className="block text-white">BUILDING SUPPLIES.</span>
          <span className="block text-orange mt-4">GUARANTEED TO BEAT ANY PRICE.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Alberton's go-to hardware store for quality products, unbeatable pricing, and real service.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="tel:+27780816467"
            className="group relative px-8 py-4 bg-orange text-black font-bold text-lg rounded-none hover:bg-orange/90 transition-all duration-200 uppercase tracking-wider min-w-[200px] text-center"
          >
            📞 Call Now
            <span className="absolute inset-0 border-2 border-orange group-hover:border-orange/70 transition-colors" />
          </a>
          
          <a
            href="https://wa.me/27780816467?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20hardware%20supplies."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-transparent border-2 border-orange text-orange font-bold text-lg rounded-none hover:bg-orange hover:text-black transition-all duration-200 uppercase tracking-wider min-w-[200px] text-center"
          >
            💬 WhatsApp Us
          </a>
        </div>

        {/* Secondary Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="text-orange">🚚</span>
            <span>Same-Day Delivery Available</span>
          </div>
          <div className="hidden sm:block text-orange">•</div>
          <div className="flex items-center gap-2">
            <span className="text-orange">🕐</span>
            <span>Open 6:30 AM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
