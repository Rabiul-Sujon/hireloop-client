import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 3,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 4,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 6,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            Smart Job Discovery
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center leading-tight mb-12">
          The roles you'd never <br /> find by searching
        </h2>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#0d0d0f] border border-neutral-800/60 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group"
            >
              {/* Top */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{job.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Badges */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <span>📍</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <span>🌐</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                  <span>💰</span>
                  <span>{job.salary}</span>
                </div>
              </div>

              {/* Apply Now */}
              <Link
                href={`/jobs/${job.id}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-indigo-400 transition-colors group-hover:gap-2.5"
              >
                Apply Now
                <span className="text-base">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/jobs"
            className="border border-neutral-700 hover:border-neutral-500 text-white text-sm font-semibold px-8 py-3 rounded-xl transition-all hover:bg-neutral-900"
          >
            View all job open
          </Link>
        </div>

      </div>
    </section>
  );
}