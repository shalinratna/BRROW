import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WaitlistForm } from '../components/WaitlistForm';
import { PhoneMockup } from '../components/PhoneMockup';
import {
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  BellAlertIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

export function Home() {
  const appFeatures = [
    {
      title: 'Browse Locally',
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
      description: 'Find items near you with GPS-powered search',
    },
    {
      title: 'Book Instantly',
      icon: <span className="text-3xl">⚡</span>,
      description: 'Secure payments & instant booking confirmation',
    },
    {
      title: 'Message Owners',
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      description: 'Chat directly with lenders in-app',
    },
    {
      title: 'Earn Money',
      icon: <span className="text-3xl">💰</span>,
      description: 'List your items and start earning today',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - App Launch Focus */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-primary-500 to-primary-900 opacity-30 transform skew-x-12 translate-x-1/4"></div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Launch Announcement */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 bg-opacity-50 rounded-full">
                <RocketLaunchIcon className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  App Launching Q1 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                <span className="block">The Rental</span>
                <span className="block">Marketplace</span>
                <span className="block text-primary-200">In Your Pocket</span>
              </h1>

              <p className="text-xl text-primary-100 max-w-lg">
                Rent anything from power tools to cameras. Earn money from items collecting dust.
                All from your phone. Coming soon to iOS & Android.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/waitlist" className="flex-1 sm:flex-initial">
                  <button className="w-full px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                    <BellAlertIcon className="w-5 h-5" />
                    Join Waitlist
                  </button>
                </Link>
                <a
                  href="https://testflight.apple.com/join/P1akbT8z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial"
                >
                  <button className="w-full px-8 py-4 bg-primary-800 text-white rounded-xl font-bold text-lg border-2 border-primary-600 hover:bg-primary-900 transform hover:scale-105 transition-all duration-300">
                    Download iOS Beta
                  </button>
                </a>
              </div>

              {/* Waitlist Stats */}
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm text-primary-200">On Waitlist</div>
                </div>
                <div className="w-px h-12 bg-primary-400"></div>
                <div>
                  <div className="text-3xl font-bold">Bay Area</div>
                  <div className="text-sm text-primary-200">Launching First</div>
                </div>
              </div>
            </motion.div>

            {/* Right - TestFlight in iPhone */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <PhoneMockup>
                  <div className="h-full w-full bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-6">
                    {/* TestFlight Icon */}
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl mb-4 relative overflow-hidden">
                      {/* TestFlight Plane Icon */}
                      <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.56 3.44c-.59-.59-1.54-.59-2.12 0L15 6.89 8.85 5.27l-1.42 1.42 4.24 2.83-4.24 4.24-2.83-.71-1.06 1.06 2.83 2.12 2.12 2.83 1.06-1.06-.71-2.83 4.24-4.24 2.83 4.24 1.42-1.42-1.62-6.15 3.44-3.44c.59-.59.59-1.54 0-2.12z"/>
                      </svg>
                      {/* Orange accent dot */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-orange-400 rounded-full"></div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">TestFlight Beta</h3>
                    <p className="text-sm text-gray-600 mb-6 text-center">Join the beta program</p>

                    <a
                      href="https://testflight.apple.com/join/P1akbT8z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-sm hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg text-center"
                    >
                      Download Beta
                    </a>

                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-4">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <span>iOS Only</span>
                    </div>
                  </div>
                </PhoneMockup>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* App Features - Everything You Need */}
      <div className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
              <DevicePhoneMobileIcon className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Mobile-First Experience
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed for mobile. Built for convenience. Coming to your phone soon.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sneak Peek at the App */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Sneak Peek at the App
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what you'll experience when we launch
            </p>
          </motion.div>

          {/* 3 Phone Mockups Side by Side */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Search Locally */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <PhoneMockup>
                <div className="h-full w-full bg-white flex flex-col">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 py-2 text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex gap-1 items-center">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6">
                    <div className="text-6xl mb-4">📍</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Search Locally</h3>
                    <p className="text-xs text-gray-600 text-center">GPS-powered search finds items near you</p>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex items-center justify-around px-4 py-3 border-t border-gray-200">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-base">🏠</span>
                      <span className="text-[10px] text-primary-600 font-semibold">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <span className="text-base">🔍</span>
                      <span className="text-[10px] text-gray-500">Browse</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <span className="text-base">💬</span>
                      <span className="text-[10px] text-gray-500">Messages</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <span className="text-base">👤</span>
                      <span className="text-[10px] text-gray-500">Profile</span>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </motion.div>

            {/* Book Instantly */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <PhoneMockup>
                <div className="h-full w-full bg-white flex flex-col">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 py-2 text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex gap-1 items-center">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6">
                    <div className="text-6xl mb-4">⚡</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Instantly</h3>
                    <p className="text-xs text-gray-600 text-center">Secure checkout in seconds</p>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex items-center justify-around px-4 py-3 border-t border-gray-200">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-base">🏠</span>
                      <span className="text-[10px] text-primary-600 font-semibold">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <span className="text-base">🔍</span>
                      <span className="text-[10px] text-gray-500">Browse</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <span className="text-base">💬</span>
                      <span className="text-[10px] text-gray-500">Messages</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <span className="text-base">👤</span>
                      <span className="text-[10px] text-gray-500">Profile</span>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </motion.div>

            {/* Chat In-App */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <PhoneMockup>
                <div className="h-full w-full bg-white flex flex-col">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 py-2 text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex gap-1 items-center">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6">
                    <div className="text-6xl mb-4">💬</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Chat In-App</h3>
                    <p className="text-xs text-gray-600 text-center">Message lenders directly</p>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex items-center justify-around px-4 py-3 border-t border-gray-200">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-base">🏠</span>
                      <span className="text-[10px] text-primary-600 font-semibold">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <span className="text-base">🔍</span>
                      <span className="text-[10px] text-gray-500">Browse</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <span className="text-base">💬</span>
                      <span className="text-[10px] text-gray-500">Messages</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <span className="text-base">👤</span>
                      <span className="text-[10px] text-gray-500">Profile</span>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Preview Browse */}
      <div className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See What You Can Rent
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Browse our preview catalog of items that will be available at launch.
              From cameras to power tools, we've got you covered.
            </p>

            <Link to="/browse">
              <button className="px-12 py-5 bg-primary-600 text-white rounded-xl font-bold text-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Preview Items
              </button>
            </Link>

            <p className="text-sm text-gray-500 mt-4">
              * Actual inventory available at launch
            </p>
          </motion.div>
        </div>
      </div>

      {/* Be the First to Know - Waitlist Section */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Be the First to Know
              </h2>
              <p className="text-xl text-gray-600">
                Join the waitlist and be among the first to access Brrow when we launch.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <WaitlistForm source="homepage" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Launch Timeline */}
      <div className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Road to Launch
            </h2>

            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-200"></div>

              {/* Milestones */}
              <div className="space-y-12">
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold z-10">
                    ✓
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-bold text-gray-900">Platform Design - Complete</h3>
                    <p className="text-gray-600">Beautiful, intuitive interface designed</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold z-10">
                    ✓
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-bold text-gray-900">Core Features - Complete</h3>
                    <p className="text-gray-600">Browse, book, message, and payments ready</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold z-10 ring-4 ring-primary-200">
                    📱
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-bold text-gray-900">Beta Testing - In Progress</h3>
                    <p className="text-gray-600">Waitlist members will get early access</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                      78% Complete
                    </span>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center text-2xl font-bold z-10">
                    4
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-bold text-gray-500">App Store Review</h3>
                    <p className="text-gray-500">Submitting to Apple & Google</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center text-2xl font-bold z-10">
                    🚀
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-bold text-gray-500">Public Launch - Q1 2026</h3>
                    <p className="text-gray-500">Available to everyone on iOS & Android</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <RocketLaunchIcon className="w-16 h-16 mx-auto mb-6 text-primary-400" />
            <h2 className="text-5xl font-black mb-6">
              Don't Miss the Launch
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the waitlist today and be among the first to experience Brrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/waitlist">
                <button className="px-12 py-5 bg-primary-600 text-white rounded-xl font-bold text-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Join the Waitlist
                </button>
              </Link>
              <a
                href="https://testflight.apple.com/join/P1akbT8z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-12 py-5 bg-white text-gray-900 rounded-xl font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Download iOS Beta
                </button>
              </a>
            </div>

            <div className="mt-8 text-primary-300">
              20+ people already waiting • Q1 2026 Launch
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
