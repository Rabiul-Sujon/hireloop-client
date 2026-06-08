"use client";
import { useState } from "react";
import Link from "next/link";

const plans = {
  monthly: [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      icon: "🌱",
      description: "Start building your insights hub:",
      features: [
        "Browse jobs (view only)",
        "Save up to 10 jobs",
        "Basic profile",
        "Email notifications",
      ],
      cta: "Get Started",
      href: "/auth/signup",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      icon: "📈",
      description: "Everything you need to apply:",
      features: [
        "Unlimited applications",
        "Unlimited saved jobs",
        "Priority applications",
        "Application tracking",
        "Salary insights",
      ],
      cta: "Choose This Plan",
      href: "/auth/signup",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      icon: "⚡",
      description: "Everything in Pro plus:",
      features: [
        "Unlimited job posts",
        "ATS integration",
        "Team collaboration",
        "Analytics dashboard",
        "Dedicated support",
        "Custom branding",
      ],
      cta: "Choose This Plan",
      href: "/auth/signup",
      highlighted: false,
    },
  ],
  yearly: [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      icon: "🌱",
      description: "Start building your insights hub:",
      features: [
        "Browse jobs (view only)",
        "Save up to 10 jobs",
        "Basic profile",
        "Email notifications",
      ],
      cta: "Get Started",
      href: "/auth/signup",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$23",
      period: "month",
      icon: "📈",
      description: "Everything you need to apply:",
      features: [
        "Unlimited applications",
        "Unlimited saved jobs",
        "Priority applications",
        "Application tracking",
        "Salary insights",
      ],
      cta: "Choose This Plan",
      href: "/auth/signup",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$79",
      period: "month",
      icon: "⚡",
      description: "Everything in Pro plus:",
      features: [
        "Unlimited job posts",
        "ATS integration",
        "Team collaboration",
        "Analytics dashboard",
        "Dedicated support",
        "Custom branding",
      ],
      cta: "Choose This Plan",
      href: "/auth/signup",
      highlighted: false,
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="w-full bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            Pricing
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center leading-tight mb-4">
          Pay for the leverage, <br /> not the listings
        </h2>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex items-center bg-[#161618] border border-neutral-800 rounded-xl p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                billing === "monthly"
                  ? "bg-[#5856d6] text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2 ${
                billing === "yearly"
                  ? "bg-[#5856d6] text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-1.5 py-0.5 rounded-md">
                20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans[billing].map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl p-6 border transition-all duration-300 cursor-pointer
                hover:-translate-y-2 hover:shadow-2xl
                ${plan.highlighted
                  ? "bg-[#0d0b1a] border-indigo-500/50 hover:border-indigo-400 hover:shadow-indigo-500/20"
                  : "bg-[#0d0d0f] border-neutral-800/60 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon + Name + Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{plan.icon}</span>
                  <span className="text-white font-bold text-lg">{plan.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-white font-extrabold text-2xl">{plan.price}</span>
                  <span className="text-neutral-500 text-xs">/{plan.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-500 mb-4">{plan.description}</p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-neutral-300">
                    <span className="text-indigo-400 text-base">+</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={plan.href}
                className={`w-full flex items-center justify-between px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group
                  ${plan.highlighted
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                    : "bg-[#161618] hover:bg-[#1e1e22] text-white border border-neutral-800 hover:border-neutral-700"
                  }`}
              >
                {plan.cta}
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}