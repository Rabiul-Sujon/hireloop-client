"use client";
import { useState } from "react";
import Link from "next/link";

const allJobs = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "New York, USA", type: "Remote", category: "Engineering", salary: "$80k - $120k", posted: "2 days ago", logo: "🔵" },
  { id: 2, title: "Backend Engineer", company: "Meta", location: "San Francisco, USA", type: "Full-time", category: "Engineering", salary: "$100k - $150k", posted: "3 days ago", logo: "🟣" },
  { id: 3, title: "Product Designer", company: "Apple", location: "Austin, USA", type: "Hybrid", category: "Design", salary: "$90k - $130k", posted: "1 day ago", logo: "⚫" },
  { id: 4, title: "Data Scientist", company: "Netflix", location: "Remote", type: "Remote", category: "Data", salary: "$110k - $160k", posted: "5 days ago", logo: "🔴" },
  { id: 5, title: "DevOps Engineer", company: "Amazon", location: "Seattle, USA", type: "Full-time", category: "Engineering", salary: "$120k - $170k", posted: "1 week ago", logo: "🟠" },
  { id: 6, title: "UI/UX Designer", company: "Figma", location: "Remote", type: "Remote", category: "Design", salary: "$85k - $115k", posted: "4 days ago", logo: "🟡" },
  { id: 7, title: "Mobile Developer", company: "Spotify", location: "London, UK", type: "Hybrid", category: "Engineering", salary: "$95k - $140k", posted: "2 days ago", logo: "🟢" },
  { id: 8, title: "AI Engineer", company: "OpenAI", location: "San Francisco, USA", type: "Full-time", category: "AI/ML", salary: "$150k - $200k", posted: "3 days ago", logo: "🔵" },
  { id: 9, title: "Marketing Manager", company: "HubSpot", location: "Boston, USA", type: "Full-time", category: "Marketing", salary: "$70k - $100k", posted: "6 days ago", logo: "🟠" },
  { id: 10, title: "Full Stack Developer", company: "Stripe", location: "Remote", type: "Remote", category: "Engineering", salary: "$100k - $140k", posted: "1 day ago", logo: "🟣" },
  { id: 11, title: "Content Writer", company: "Medium", location: "Remote", type: "Part-time", category: "Marketing", salary: "$40k - $60k", posted: "1 week ago", logo: "⚫" },
  { id: 12, title: "ML Engineer", company: "Tesla", location: "Palo Alto, USA", type: "Full-time", category: "AI/ML", salary: "$130k - $180k", posted: "4 days ago", logo: "🔴" },
];

const jobTypes = ["All", "Full-time", "Part-time", "Remote", "Hybrid", "Contract"];
const categories = ["All", "Engineering", "Design", "Data", "AI/ML", "Marketing"];
const salaryRanges = ["All", "$0 - $50k", "$50k - $100k", "$100k - $150k", "$150k+"];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSalary, setSelectedSalary] = useState("All");

  const filtered = allJobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchType = selectedType === "All" || job.type === selectedType;
    const matchCategory = selectedCategory === "All" || job.category === selectedCategory;
    return matchSearch && matchType && matchCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Browse Jobs</h1>
          <p className="text-neutral-400 text-sm">Find your next opportunity from {allJobs.length}+ listings</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#0d0d0f] border border-neutral-800/60 rounded-2xl p-5 sticky top-24">

              <h2 className="text-sm font-bold text-white mb-5">Filters</h2>

              {/* Job Type */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Job Type</h3>
                <div className="flex flex-col gap-2">
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${
                        selectedType === type
                          ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                          : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Category</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${
                        selectedCategory === cat
                          ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                          : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Salary Range</h3>
                <div className="flex flex-col gap-2">
                  {salaryRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setSelectedSalary(range)}
                      className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${
                        selectedSalary === range
                          ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                          : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setSelectedType("All");
                  setSelectedCategory("All");
                  setSelectedSalary("All");
                  setSearch("");
                }}
                className="w-full text-sm text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 py-2 rounded-xl transition-all"
              >
                Reset Filters
              </button>

            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">

            {/* Search Bar */}
            <div className="bg-[#0d0d0f] border border-neutral-800/60 rounded-2xl px-4 py-3 flex items-center gap-3 mb-6">
              <span className="text-neutral-500">🔍</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search job title or company..."
                className="w-full bg-transparent outline-none text-sm text-white placeholder-neutral-600"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-neutral-500 hover:text-white text-xs">
                  ✕
                </button>
              )}
            </div>

            {/* Results Count */}
            <p className="text-xs text-neutral-500 mb-4">
              Showing <span className="text-white font-semibold">{filtered.length}</span> jobs
            </p>

            {/* Job Cards */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-neutral-500">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-lg font-semibold text-white mb-2">No jobs found</p>
                <p className="text-sm">Try adjusting your filters or search term</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map((job) => (
                  <div
                    key={job.id}
                    className="bg-[#0d0d0f] border border-neutral-800/60 rounded-2xl p-5 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 group"
                  >
                    {/* Top Row */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center text-xl">
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">{job.title}</h3>
                          <p className="text-xs text-neutral-500">{job.company}</p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-600">{job.posted}</span>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-neutral-800/60 text-neutral-400 px-2.5 py-1 rounded-lg">
                        📍 {job.location}
                      </span>
                      <span className="text-xs bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-lg">
                        {job.type}
                      </span>
                      <span className="text-xs bg-neutral-800/60 text-neutral-400 px-2.5 py-1 rounded-lg">
                        {job.category}
                      </span>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">{job.salary}</span>
                      <Link
                        href={`/jobs/${job.id}`}
                        className="flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group-hover:gap-2"
                      >
                        Apply Now →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}