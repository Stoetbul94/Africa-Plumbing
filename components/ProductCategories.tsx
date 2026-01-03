import Image from "next/image";

export default function ProductCategories() {
  const categories = [
    {
      title: "Plumbing",
      description: "Pipes, fittings, valves, traps, and everything you need",
      image: "/products/plumbing/Plumbing.png",
      fallbackImage: "/products/2022-11-10.webp",
    },
    {
      title: "Electrical",
      description: "Wires, switches, outlets, breakers, and more",
      image: "/products/electrical/Electrical.png",
      fallbackImage: "/products/2023-07-16.webp",
    },
    {
      title: "Bathroom",
      description: "Toilets, sinks, basins, taps, and bathroom fixtures",
      image: "/products/bathroom/Bathroom.png",
      fallbackImage: "/products/IMG-20220524-WA0108.webp",
    },
    {
      title: "Building",
      description: "Cement, bricks, steel, timber, and construction supplies",
      image: "/products/building/Building.png",
      fallbackImage: "/products/unnamed.webp",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 uppercase tracking-tight">
          What We <span className="text-orange">Stock</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-black border-2 border-gray-800 overflow-hidden hover:border-orange transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 bg-gray-900">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-orange transition-colors uppercase">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                  {category.description}
                </p>
                <a
                  href="/products"
                  className="text-orange font-bold text-xs sm:text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity inline-block"
                >
                  View Products →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
