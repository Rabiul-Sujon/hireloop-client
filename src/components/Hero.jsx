import { Magnifier, Pin } from '@gravity-ui/icons';

export default function Hero() {
  const trendingPositions = ['Product Designer', 'AI Engineering', 'Dev-ops Engineer'];

  const stats = [
    { value: '50K', label: 'Active Jobs', icon: '💼' },
    { value: '12K', label: 'Companies', icon: '🏢' },
    { value: '2M', label: 'Job Seekers', icon: '🔍' },
    { value: '97%', label: 'Satisfaction Rate', icon: '⭐' },
  ];

  return (
    <section className="relative w-full flex flex-col items-center px-4 md:px-8 overflow-hidden">


      {/* Hero Top Content */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10 pt-36 mb-12">

        {/* Job Counter Badge */}
        <div className="flex items-center gap-2 bg-[#161618]/60 border border-neutral-800/40 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="text-base">💼</span>
          <p className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            <span className="text-white font-bold">50,000+</span> New Jobs This Month
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Find Your Dream Job Today
        </h1>

        {/* Tagline */}
        <p className="text-sm md:text-base text-neutral-400 max-w-2xl leading-relaxed mb-10 opacity-80">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-3xl bg-[#111112]/90 border border-neutral-800/80 rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 shadow-2xl backdrop-blur-md">
          <div className="w-full flex items-center gap-2.5 px-3 py-2 border-b border-neutral-800/50 sm:border-b-0 sm:border-r sm:border-neutral-800/80">
            <Magnifier className="text-neutral-500 flex-shrink-0" width="18" height="18" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-neutral-600 focus:ring-0"
            />
          </div>
          <div className="w-full flex items-center gap-2.5 px-3 py-2">
            <Pin className="text-neutral-500 flex-shrink-0" width="18" height="18" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-neutral-600 focus:ring-0"
            />
          </div>
          <button
            type="button"
            className="w-full sm:w-auto bg-[#5856d6] hover:bg-[#4745c4] text-white p-3 rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center group"
          >
            <Magnifier className="text-white group-hover:scale-105 transition-transform" width="20" height="20" />
          </button>
        </div>

        {/* Trending */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-xs md:text-sm">
          <span className="text-neutral-500 font-medium">Trending Position</span>
          {trendingPositions.map((position) => (
            <button
              key={position}
              type="button"
              className="bg-[#161618]/80 border border-neutral-800/60 hover:border-neutral-700 text-neutral-400 hover:text-white px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              {position}
            </button>
          ))}
        </div>
      </div>

      {/* Globe + Stats Section */}
      <div className="relative w-full flex flex-col items-center">

        {/* Globe Image */}
        <div
          className="w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/globe.png')" }}
        />

        {/* Text over globe */}
        <div className="absolute top-90 left-0 right-0 text-center z-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl mx-auto leading-snug">
            Assisting over{' '}
            <span className="text-indigo-400 font-extrabold">15,000 job seekers</span>{' '}
            find their dream positions.
          </h2>
        </div>

        {/* Stats Cards overlapping bottom of globe */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 md:px-8 translate-y-1/2">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#0b0b0c]/90 border border-neutral-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start h-40 md:h-44 shadow-xl hover:border-neutral-800/80 transition-all group"
              >
                <div className="text-lg md:text-xl opacity-80 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="flex flex-col mt-auto">
                  <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-neutral-500 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for overlapping stats cards */}
      <div className="h-24 md:h-32 lg:h-44 w-full" />

    </section>
  );
}