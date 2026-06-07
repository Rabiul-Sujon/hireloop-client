export default function Features() {
  const features = [
    {
      icon: "🔍",
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
    },
    {
      icon: "📊",
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
    },
    {
      icon: "🏢",
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
    },
    {
      icon: "🔖",
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
    },
    {
      icon: "⚡",
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
    },
    {
      icon: "📄",
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
    },
    {
      icon: "🎯",
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
    },
    {
      icon: "📈",
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
    },
  ];

  return (
    <section className="w-full bg-[#080608] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            Features Job
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center leading-tight mb-16">
          Everything you need <br /> to succeed
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800/40 border border-neutral-800/40 rounded-2xl overflow-hidden">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#0d0d0f] p-6 flex flex-col gap-3 hover:bg-[#111113] transition-all group"
            >
              {/* Icon */}
              <div className="w-9 h-9 bg-neutral-800/80 rounded-sm flex items-center justify-center text-lg group-hover:bg-indigo-600/20 transition-colors">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}