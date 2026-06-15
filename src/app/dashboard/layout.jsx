"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("/api/auth/get-session")
      .then((res) => res.json())
      .then((data) => {
        if (data?.user) setSession(data);
        else router.push("/auth/signin");
      })
      .catch(() => router.push("/auth/signin"));
  }, [router]);

  const handleSignOut = async () => {
    await fetch("/api/auth/sign-out", {
      method: "POST",
      credentials: "include",
    });
    setSession(null);
    toast.success("Signed out successfully!");
    router.push("/");
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-neutral-400">Loading...</p>
        </div>
      </div>
    );
  }

  const userRole = session.user.role || "seeker";

  // Navigation based on role
  const navItems = {
    seeker: [
      { name: "Home", href: "/dashboard", icon: "🏠" },
      { name: "Browse Jobs", href: "/dashboard/jobs", icon: "🔍" },
      { name: "Saved Jobs", href: "/dashboard/saved", icon: "🔖" },
      { name: "My Applications", href: "/dashboard/applications", icon: "📋" },
      { name: "Billing", href: "/dashboard/billing", icon: "💳" },
      { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
    ],
    recruiter: [
      { name: "Home", href: "/dashboard", icon: "🏠" },
      { name: "My Company", href: "/dashboard/company", icon: "🏢" },
      { name: "Manage Jobs", href: "/dashboard/manage-jobs", icon: "📋" },
      { name: "Post a Job", href: "/dashboard/post-job", icon: "➕" },
      { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
    ],
    admin: [
      { name: "Home", href: "/admin", icon: "🏠" },
      { name: "Manage Users", href: "/admin/users", icon: "👥" },
      { name: "Manage Companies", href: "/admin/companies", icon: "🏢" },
      { name: "Manage Jobs", href: "/admin/jobs", icon: "📋" },
      { name: "Payments", href: "/admin/payments", icon: "💰" },
      { name: "Settings", href: "/admin/settings", icon: "⚙️" },
    ],
  };

  const publicLinks = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Browse Jobs", href: "/jobs", icon: "🔍" },
    { name: "Companies", href: "/companies", icon: "🏢" },
    { name: "Pricing", href: "/pricing", icon: "💰" },
  ];

  const currentNav = navItems[userRole] || navItems.seeker;

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="bottom-center" />

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-[#0d0d0f] border border-neutral-800 rounded-lg p-2"
      >
        {sidebarOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#0d0b1a] border-r border-neutral-800/60 z-40 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:translate-x-0 overflow-y-auto`}
      >
        <div className="p-6">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2 mb-8">
            <div className="bg-gradient-to-tr from-purple-600 to-indigo-500 text-white p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-bold text-lg text-white">HireLoop</span>
          </Link>

          {/* User Info */}
          <div className="bg-[#0d0d0f] rounded-xl p-4 mb-6 border border-neutral-800/60">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center text-xl mb-3">
              👤
            </div>
            <p className="font-semibold text-white text-sm">{session.user.name}</p>
            <p className="text-xs text-neutral-500">{session.user.email}</p>
            <p className="text-xs text-indigo-400 mt-1 capitalize">{userRole}</p>
          </div>

          {/* Dashboard Navigation */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
              Dashboard
            </p>
            <div className="space-y-1">
              {currentNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Public Pages Navigation */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
              Public
            </p>
            <div className="space-y-1">
              {publicLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        <div className="p-6 md:p-8 pt-24 lg:pt-8">
          {children}
        </div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}