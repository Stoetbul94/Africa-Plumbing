import ProductGrid from "@/components/ProductGrid";
import {
  getProductsByCategory,
  Product,
} from "@/data/products";

const categories: Product["category"][] = [
  "Plumbing",
  "Electrical",
  "Bathroom",
  "Building",
];

const categoryDescriptions: Record<Product["category"], string> = {
  Plumbing: "Quality plumbing supplies including pipes, fittings, valves, and traps.",
  Electrical: "Complete electrical solutions from cables to circuit breakers and lighting.",
  Bathroom: "Bathroom ware, toilets, basins, vanities, and sanitary fixtures.",
  Building: "Building materials, cement, tools, and construction accessories.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
            Our <span className="text-orange">Products</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visit our store at 39 Penzance St, New Redruth, Alberton for the best prices.
            Stock and pricing subject to availability.
          </p>
        </div>

        {/* Product Categories */}
        {categories.map((category) => {
          const categoryProducts = getProductsByCategory(category);
          return (
            <section key={category} className="mb-20">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 uppercase tracking-tight">
                  {category}
                </h2>
                <p className="text-gray-400">{categoryDescriptions[category]}</p>
              </div>
              <ProductGrid
                products={categoryProducts}
                columns={{ mobile: 2, desktop: 4 }}
              />
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  <span className="text-orange font-semibold">Visit store for best price</span> • Stock subject to availability
                </p>
              </div>
            </section>
          );
        })}

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-900 border-2 border-gray-800 p-12">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">
            Need Something <span className="text-orange">Specific?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us via WhatsApp or call our store. We&apos;re here to help you find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27780816467?text=Hi%20I%20am%20interested%20in%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange hover:bg-orange/90 text-black font-bold py-3 px-8 rounded-none uppercase tracking-wide transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+27780816467"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-none uppercase tracking-wide transition-colors"
            >
              Call Store
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
