import Link from 'next/link';
import { 
  LogoFacebook, 
  LogoLinkedin 
} from '@gravity-ui/icons'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // 1. Navigation Links Array
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Job discovery', href: '/job-discovery' },
        { label: 'Worker AI', href: '/worker-ai' },
        { label: 'Companies', href: '/companies' },
        { label: 'Salary data', href: '/salary-data' },
      ],
    },
    {
      title: 'Navigations',
      links: [
        { label: 'Help center', href: '/help-center' },
        { label: 'Career library', href: '/career-library' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Brand Guideline', href: '/brand-guideline' },
        { label: 'Newsroom', href: '/newsroom' },
      ],
    },
  ];

  // 2. Corrected Social Links Array with custom backgrounds and the exact Pinterest SVG style
  const socialLinks = [
    { 
      icon: <LogoFacebook width="18" height="18" />, 
      href: 'https://facebook.com', 
      label: 'Facebook',
      bgColor: 'bg-[#121212]' // Dark background
    },
    { 
      // Inline Pinterest SVG matching the exact style of image
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.289 2C6.617 2 2 6.617 2 12.289c0 4.305 2.648 7.977 6.422 9.516-.094-.805-.18-2.039.039-2.922.195-.844 1.258-5.352 1.258-5.352s-.32-.641-.32-1.586c0-1.484.859-2.594 1.93-2.594.914 0 1.359.688 1.359 1.516 0 .922-.586 2.3-.883 3.578-.25 1.07.539 1.938 1.594 1.938 1.914 0 3.391-2.023 3.391-4.938 0-2.578-1.852-4.383-4.5-4.383-3.07 0-4.867 2.305-4.867 4.68 0 .93.359 1.93.805 2.477.094.109.109.203.078.328l-.305 1.25c-.047.203-.172.25-.359.164-1.25-.578-2.031-2.422-2.031-3.891 0-3.172 2.305-6.086 6.648-6.086 3.492 0 6.211 2.492 6.211 5.82 0 3.469-2.188 6.266-5.227 6.266-1.023 0-1.984-.531-2.313-1.148l-.633 2.406c-.227.883-.844 2.008-1.258 2.688A10.27 10.27 0 0012.29 22.58C17.96 22.58 22.58 17.96 22.58 12.29 22.58 6.617 17.96 2 12.289 2z"/>
        </svg>
      ), 
      href: 'https://pinterest.com', 
      label: 'Pinterest',
      bgColor: 'bg-[#5856d6]' // Beautiful structural purple background block
    },
    { 
      icon: <LogoLinkedin width="18" height="18" />, 
      href: 'https://linkedin.com', 
      label: 'LinkedIn',
      bgColor: 'bg-[#121212]' // Dark background
    },
  ];

  return (
    <footer className="bg-black text-neutral-400 px-6 py-12 md:px-16 lg:px-24 border-t border-neutral-900 font-sans">
      
      {/* Top Section: Brand Info & Navigation Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-12">
        
        {/* Brand/Logo Column */}
        <div className="md:col-span-5 flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span className="text-white font-bold text-xl tracking-tight leading-tight">
              Programming <br />
              <span className="text-sm font-medium block text-neutral-400">Hero</span>
            </span>
          </div>
          <p className="text-sm max-w-sm leading-relaxed text-neutral-500">
            The AI-native career platform. Built for people who take their work seriously.
          </p>
        </div>

        {/* Dynamic Mapping for Grid Columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footerSections.map((section) => (
            <nav key={section.title} className="flex flex-col space-y-3">
              <h3 className="text-indigo-500 font-semibold text-sm tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm hover:text-white transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Horizontal Separator Bar */}
      <div className="max-w-7xl mx-auto border-t border-neutral-900 my-2" />

      {/* Bottom Section: Corrected Social Buttons & Legal Disclaimers */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between pt-8 gap-6">
        
        {/* Social Icons Layout Section */}
        <div className="flex items-center space-x-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`w-11 h-11 rounded-xl ${social.bgColor} text-white flex items-center justify-center transition-transform duration-200 hover:scale-105`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Legal Text Layout Row */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-xs text-neutral-500 text-center sm:text-right gap-2 sm:gap-0">
          <span>Copyright {currentYear} — Programming Hero</span>
          <span className="hidden sm:inline text-neutral-800">|</span>
          <div className="space-x-3">
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">Terms & Policy</Link>
            <span>-</span>
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Guideline</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}