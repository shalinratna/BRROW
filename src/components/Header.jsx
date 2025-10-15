import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, BellAlertIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { Button } from './Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Browse Items', href: '/browse' },
    { name: 'Safety', href: '/safety' },
    { name: 'Help', href: '/help' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg relative z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/brrow-logo.png"
              alt="Brrow Logo"
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-gray-900">Brrow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/list-item">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <RocketLaunchIcon className="w-4 h-4" />
                List for Launch
              </Button>
            </Link>
            <Link to="/waitlist">
              <Button
                variant="primary"
                size="sm"
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 flex items-center gap-2 shadow-lg"
              >
                <BellAlertIcon className="w-4 h-4" />
                Join Waitlist
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50 rounded-lg'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Link to="/waitlist" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center gap-2"
                  >
                    <BellAlertIcon className="w-5 h-5" />
                    Join Waitlist
                  </Button>
                </Link>
                <Link to="/list-item" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                    <RocketLaunchIcon className="w-5 h-5" />
                    List for Launch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}