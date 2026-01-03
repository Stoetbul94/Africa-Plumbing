export default function PriceBeatingPromise() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Orange accent background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange/10 via-orange/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-orange p-12 bg-black text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 uppercase tracking-tight">
            <span className="text-orange">WE BEAT ANY PRICE</span>
            <br />
            <span className="text-white">— GUARANTEED —</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold mb-2 text-white uppercase">Bring a Written Quote</h3>
              <p className="text-gray-400 text-sm">From any competitor</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-white uppercase">We Match or Beat It</h3>
              <p className="text-gray-400 text-sm">No questions asked</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2 text-white uppercase">No Nonsense</h3>
              <p className="text-gray-400 text-sm">Straightforward guarantee</p>
            </div>
          </div>

          <a
            href="https://wa.me/27780816467?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote.%20I%20have%20a%20written%20quote%20from%20a%20competitor."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-orange text-black font-bold text-xl rounded-none hover:bg-orange/90 transition-all duration-200 uppercase tracking-wider border-4 border-orange hover:border-orange/70"
          >
            👉 Get a Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
