export default function ProductCategories() {
  const categories = [
    {
      title: "Plumbing Supplies",
      description: "Pipes, fittings, valves, traps, and everything you need",
      image: "🔧",
    },
    {
      title: "Electrical Supplies",
      description: "Wires, switches, outlets, breakers, and more",
      image: "⚡",
    },
    {
      title: "Bathroom Ware & Sanitary",
      description: "Toilets, sinks, basins, taps, and bathroom fixtures",
      image: "🚿",
    },
    {
      title: "Building Materials",
      description: "Cement, bricks, steel, timber, and construction supplies",
      image: "🧱",
    },
    {
      title: "Sinks, Basins, Toilets",
      description: "Complete bathroom and kitchen solutions",
      image: "🚽",
    },
    {
      title: "Pipes, Traps, Valves, Fittings",
      description: "All your plumbing connection needs",
      image: "🔩",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-tight">
          What We <span className="text-orange">Stock</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-black border-2 border-gray-800 p-10 hover:border-orange transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] cursor-pointer min-h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="text-6xl mb-6">{category.image}</div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange transition-colors uppercase">
                  {category.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{category.description}</p>
              </div>
              <div className="mt-6 text-orange font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                View Products →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
