import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      {/* Navbar is handled by layout.js, so we only need Hero here */}
      <Hero />
    </main>
  );
}