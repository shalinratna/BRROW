import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Collaborate', href: '/collaborate' },
        { name: 'Press', href: '/press' },
        { name: 'Community', href: '/community' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Safety', href: '/safety' },
        { name: 'Contact', href: '/contact' },
        { name: 'Trust & Safety', href: '/trust' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/brrow-logo.png"
                  alt="Brrow Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold">Brrow</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Share and borrow in your community. Skip the buy, just Brrow it.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://instagram.com/brrowapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Brrow. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                Made with ❤️ for the community
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}