"use client";
import { useState } from "react";
import Link from "next/link";

const allCompanies = [
  { id: 1, name: "Google", logo: "🔵", industry: "Tech", location: "Mountain View, CA", employees: "100k+", jobs: 45, verified: true },
  { id: 2, name: "Meta", logo: "🟣", industry: "Tech", location: "Menlo Park, CA", employees: "70k+", jobs: 32, verified: true },
  { id: 3, name: "Stripe", logo: "⚫", industry: "Fintech", location: "San Francisco, CA", employees: "8k+", jobs: 18, verified: true },
  { id: 4, name: "OpenAI", logo: "🔵", industry: "AI", location: "San Francisco, CA", employees: "2k+", jobs: 12, verified: true },
  { id: 5, name: "Netflix", logo: "🔴", industry: "Tech", location: "Los Gatos, CA", employees: "13k+", jobs: 24, verified: true },
  { id: 6, name: "Figma", logo: "🟡", industry: "Developer Tools", location: "San Francisco, CA", employees: "1k+", jobs: 8, verified: true },
  { id: 7, name: "Spotify", logo: "🟢", industry: "Tech", location: "Stockholm, Sweden", employees: "9k+", jobs: 15, verified: true },
  { id: 8, name: "Airbnb", logo: "🔴", industry: "Tech", location: "San Francisco, CA", employees: "7k+", jobs: 22, verified: true },
  { id: 9, name: "Shopify", logo: "🟢", industry: "E-Commerce", location: "Ottawa, Canada", employees: "10k+", jobs: 28, verified: true },
  { id: 10, name: "Notion", logo: "⚫", industry: "Developer Tools", location: "San Francisco, CA", employees: "800+", jobs: 6, verified: true },
  { id: 11, name: "Vercel", logo: "⚫", industry: "Developer Tools", location: "San Francisco, CA", employees: "400+", jobs: 5, verified: true },
  { id: 12, name: "Anthropic", logo: "🟣", industry: "AI", location: "San Francisco, CA", employees: "600+", jobs: 9, verified: true },
];

const industries = ["All", "Tech", "Fintech", "AI", "Developer Tools", "E-Commerce"];

export default function CompaniesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredCompanies = allCompanies.filter((company) =>
    selectedIndustry === "All" ? true : company.industry === selectedIndustry
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Top Companies
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Join thousands of companies hiring top talent on HireLoop
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                selectedIndustry === industry
                  ? "bg-[#5856d6] text-white"
                  : "bg-[#161618] text-neutral-400 hover:text-white hover:bg-[#1e1e22]"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-neutral-500 mb-6">
          Showing <span className="text-white font-semibold">{filteredCompanies.length}</span> companies
        </p>

        {/* Company Cards Grid */}
        {filteredCompanies.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🏢</p>
            <p className="text-lg font-semibold text-white mb-2">No companies found</p>
            <p className="text-sm text-neutral-500">Try changing your industry filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCompanies.map((company) => (
              <Link
                key={company.id}
                href={`/companies/${company.id}`}
                className="bg-[#0d0d0f] border border-neutral-800/60 rounded-2xl p-6 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 group block"
              >
                {/* Logo & Name */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-2xl">
                      {company.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{company.name}</h3>
                      <p className="text-xs text-neutral-500">{company.industry}</p>
                    </div>
                  </div>
                  {company.verified && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                      ✓ Verified
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <span>📍</span>
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <span>👥</span>
                    <span>{company.employees} employees</span>
                  </div>
                </div>

                {/* Open Jobs */}
                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/60">
                  <span className="text-sm text-indigo-400 font-semibold">
                    {company.jobs} open positions
                  </span>
                  <span className="text-neutral-500 text-sm group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}