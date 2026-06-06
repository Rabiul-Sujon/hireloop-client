import Hero from '@/components/Hero';
import FeaturedJobs from '@/components/FeaturedJobs';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Hero />
      <FeaturedJobs />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}