import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  columns?: {
    mobile?: number;
    desktop?: number;
  };
}

export default function ProductGrid({
  products,
  columns = { mobile: 2, desktop: 4 },
}: ProductGridProps) {
  const mobileCols = columns.mobile === 1 ? "grid-cols-1" : "grid-cols-2";
  const desktopCols =
    columns.desktop === 2
      ? "lg:grid-cols-2"
      : columns.desktop === 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-4";

  return (
    <div className={`grid ${mobileCols} md:grid-cols-3 ${desktopCols} gap-4 sm:gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
