import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full bg-black overflow-hidden">

      {/* Background Grid Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/cta-bg.png')" }}
      />

      {/* Blue dome glow — matches arc shape */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(79,70,229,0.8) 0%, rgba(79,70,229,0.2) 40%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center justify-center py-32 px-4">

        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          Your next role is <br /> already looking for you
        </h2>

        <p className="text-sm md:text-base text-neutral-400 max-w-md leading-relaxed mb-10">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link
            href="/auth/signup"
            className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-xl hover:bg-neutral-200 transition-all active:scale-95"
          >
            Create a free account
          </Link>
          <Link
            href="/pricing"
            className="border border-neutral-700 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:border-neutral-500 hover:bg-neutral-900 transition-all active:scale-95"
          >
            View pricing
          </Link>
        </div>

      </div>
    </section>
  );
}