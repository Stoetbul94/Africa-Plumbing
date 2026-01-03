import ProductGrid from "@/components/ProductGrid";
import { featuredProducts } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-tight">
          Popular Products <span className="text-orange">In-Store</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Visit our store at 39 Penzance St, New Redruth, Alberton for the best prices and availability.
        </p>
        <ProductGrid products={featuredProducts} columns={{ mobile: 2, desktop: 4 }} />
        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-block bg-orange hover:bg-orange/90 text-black font-bold py-3 px-8 rounded-none uppercase tracking-wide transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
