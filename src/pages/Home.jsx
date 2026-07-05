import Hero from "../components/home/Hero";
import CategoryGrid from "../components/home/CategoryGrid";
import FeaturedTools from "../components/home/FeaturedTools";
import Stats from "../components/home/Stats";
import WhyChoose from "../components/home/WhyChoose";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Hero */}
      <Hero />

      {/* Categories */}
      <CategoryGrid />

      {/* Featured Tools */}
      <FeaturedTools />

      {/* Statistics */}
      <Stats />

      {/* Why Choose kt.dev */}
      <WhyChoose />

      {/* Footer */}
      <Footer />

    </main>
  );
}