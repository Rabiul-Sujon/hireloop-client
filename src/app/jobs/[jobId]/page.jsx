"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

// Dummy job data (same as /jobs page)
const allJobs = [
  { id: 1, title: "Frontend Developer", company: "Google", companyLogo: "🔵", location: "New York, USA", type: "Remote", category: "Engineering", salary: "$80k - $120k", posted: "2 days ago", description: "We're looking for a Frontend Developer to join our team. You'll build responsive web applications using React, Next.js, and Tailwind CSS.", responsibilities: ["Build responsive web applications", "Collaborate with designers", "Write clean, maintainable code"], requirements: ["3+ years React experience", "Experience with Next.js", "Strong JavaScript skills"] },
  { id: 2, title: "Backend Engineer", company: "Meta", companyLogo: "🟣", location: "San Francisco, USA", type: "Full-time", category: "Engineering", salary: "$100k - $150k", posted: "3 days ago", description: "Join our backend team to build scalable APIs and microservices.", responsibilities: ["Design and implement APIs", "Optimize database queries", "Ensure system reliability"], requirements: ["5+ years backend experience", "Python/Node.js expertise", "Experience with PostgreSQL"] },
  { id: 3, title: "Product Designer", company: "Apple", companyLogo: "⚫", location: "Austin, USA", type: "Hybrid", category: "Design", salary: "$90k - $130k", posted: "1 day ago", description: "Create beautiful and intuitive user experiences for millions of users.", responsibilities: ["Design user flows and prototypes", "Collaborate with product managers", "Conduct user research"], requirements: ["3+ years product design", "Figma expertise", "Portfolio required"] },
  { id: 4, title: "Data Scientist", company: "Netflix", companyLogo: "🔴", location: "Remote", type: "Remote", category: "Data", salary: "$110k - $160k", posted: "5 days ago", description: "Use data to drive business decisions and improve recommendations.", responsibilities: ["Build ML models", "Analyze user behavior", "Create dashboards"], requirements: ["MS in Data Science", "Python/R expertise", "Experience with TensorFlow"] },
  { id: 5, title: "DevOps Engineer", company: "Amazon", companyLogo: "🟠", location: "Seattle, USA", type: "Full-time", category: "Engineering", salary: "$120k - $170k", posted: "1 week ago", description: "Manage cloud infrastructure and CI/CD pipelines.", responsibilities: ["Maintain AWS infrastructure", "Automate deployments", "Monitor system health"], requirements: ["AWS certification", "Kubernetes experience", "Terraform knowledge"] },
  { id: 6, title: "UI/UX Designer", company: "Figma", companyLogo: "🟡", location: "Remote", type: "Remote", category: "Design", salary: "$85k - $115k", posted: "4 days ago", description: "Design intuitive interfaces for design tools.", responsibilities: ["Create design systems", "Prototype interactions", "Gather user feedback"], requirements: ["2+ years UI/UX", "Figma mastery", "User testing experience"] },
];

// Similar jobs (excluding current job)
const getSimilarJobs = (currentJobId, currentCategory) => {
  return allJobs.filter(job => job.id !== currentJobId && job.category === currentCategory).slice(0, 3);
};

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = parseInt(params.jobId);
  
  // Find job directly - no effect needed!
  const job = allJobs.find(j => j.id === jobId);
  const similarJobs = job ? getSimilarJobs(jobId, job.category) : [];

  const handleApply = () => {
    toast.success("Application submitted! (Demo)");
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-xl font-semibold mb-2">Job not found</p>
          <Link href="/jobs" className="text-indigo-400 hover:underline">
            ← Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 md:px-8">
      <Toaster position="bottom-center" />
      <div className="max-w-5xl mx-auto">

        {/* Back button */}
        <Link href="/jobs" className="text-neutral-400 hover:text-white text-sm mb-6 inline-block">
          ← Back to Jobs
        </Link>

        {/* Main Job Card */}
        <div className="bg-[#0d0d0f] border border-neutral-800/60 rounded-2xl p-6 md:p-8 mb-8">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-neutral-800 rounded-xl flex items-center justify-center text-3xl">
                {job.companyLogo}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white">{job.title}</h1>
                <p className="text-neutral-400 mt-1">{job.company}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-xs bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full">
                {job.type}
              </span>
              <span className="text-xs bg-neutral-800/60 text-neutral-400 px-3 py-1 rounded-full">
                {job.category}
              </span>
            </div>
          </div>

          {/* Details Row */}
          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-neutral-800/60">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span>📍</span>
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span>💰</span>
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span>📅</span>
              <span>Posted {job.posted}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-white mb-3">Description</h2>
            <p className="text-neutral-400 leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-white mb-3">Responsibilities</h2>
            <ul className="space-y-2">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-400">
                  <span className="text-indigo-400 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-white mb-3">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-400">
                  <span className="text-indigo-400 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <button
            onClick={handleApply}
            className="w-full md:w-auto bg-[#5856d6] hover:bg-[#4745c4] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 active:scale-95"
          >
            Apply Now
          </button>
        </div>

        {/* Similar Jobs Section */}
        {similarJobs.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Similar Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {similarJobs.map((similarJob) => (
                <Link
                  key={similarJob.id}
                  href={`/jobs/${similarJob.id}`}
                  className="bg-[#0d0d0f] border border-neutral-800/60 rounded-xl p-4 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center text-sm">
                      {similarJob.companyLogo}
                    </div>
                    <span className="text-xs text-neutral-500">{similarJob.company}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{similarJob.title}</h3>
                  <p className="text-xs text-neutral-500">{similarJob.location}</p>
                  <p className="text-xs text-indigo-400 mt-2">{similarJob.salary}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}