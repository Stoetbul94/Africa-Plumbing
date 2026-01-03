import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const WHATSAPP_NUMBER = "27780816467";
const PHONE_NUMBER = "+27780816467";

const getWhatsAppLink = (productName: string) => {
  const message = encodeURIComponent(
    `Hi, I am interested in ${productName}. Please provide a quote.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-black border-2 border-gray-800 overflow-hidden hover:border-orange transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,122,0,0.3)]">
      {/* Product Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-900">
        <Image
          src={product.image}
          alt={`${product.name} - Africa Hardware`}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-orange transition-colors uppercase tracking-tight">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Price Note */}
        <p className="text-orange text-xs sm:text-sm font-semibold mb-4 text-center py-2 border-t border-b border-gray-800">
          Visit store for best price
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2">
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-orange hover:bg-orange/90 text-black font-bold py-2.5 px-4 rounded-none text-center text-xs sm:text-sm uppercase tracking-wide transition-colors min-h-[44px] flex items-center justify-center"
          >
            Get Quote via WhatsApp
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="w-full bg-transparent border-2 border-orange hover:bg-orange hover:text-black text-orange font-bold py-2.5 px-4 rounded-none text-center text-xs sm:text-sm uppercase tracking-wide transition-colors min-h-[44px] flex items-center justify-center"
          >
            Call Store
          </a>
        </div>
      </div>
    </div>
  );
}
