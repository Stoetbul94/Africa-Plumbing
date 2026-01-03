import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import GoogleReviews from "@/components/GoogleReviews";
import PriceBeatingPromise from "@/components/PriceBeatingPromise";
import VisitStore from "@/components/VisitStore";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChoose />
      <FeaturedProducts />
      <ProductCategories />
      <GoogleReviews />
      <PriceBeatingPromise />
      <VisitStore />
      <Footer />
      <StickyButtons />
    </main>
  );
}
