import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  HeartIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
  ShareIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export function Community() {
  const guidelines = [
    {
      icon: HeartIcon,
      title: 'Be Respectful',
      description: 'Treat everyone with kindness and courtesy. We\'re all here to help each other save money.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Be Honest',
      description: 'Accurately describe your items and their condition. Honesty builds trust in our community.',
    },
    {
      icon: UserGroupIcon,
      title: 'Safe Meetups',
      description: 'Meet in public places during daylight hours. Always prioritize your personal safety.',
    },
    {
      icon: CheckBadgeIcon,
      title: 'Verified Users Only',
      description: 'All members must complete ID and phone verification to keep our community secure.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'San Jose, CA',
      quote: 'I saved $200 renting a power washer for a weekend instead of buying one. Brrow is a game-changer for homeowners!',
      emoji: '💸',
      savings: '$200 saved',
    },
    {
      name: 'James T.',
      location: 'Palo Alto, CA',
      quote: 'As a college student, I can\'t afford to buy everything. Renting camera gear for my projects has been amazing.',
      emoji: '📸',
      savings: '$350 saved',
    },
    {
      name: 'Maria L.',
      location: 'Santa Clara, CA',
      quote: 'I\'ve made over $500 lending out my camping gear. It just sits in my garage most of the year anyway!',
      emoji: '⛺',
      savings: '$500 earned',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <SparklesIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Growing Every Day</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join the Brrow Community
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Thousands of neighbors helping each other save money through sharing.
              Be part of something bigger than just buying and selling.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-primary-600 mb-2">9,200+</div>
              <div className="text-lg text-gray-600">Community Members</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-green-600 mb-2">$180k+</div>
              <div className="text-lg text-gray-600">Money Saved Together</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-purple-600 mb-2">100k+</div>
              <div className="text-lg text-gray-600">Items Shared</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-12 text-white text-center"
          >
            <div className="text-6xl mb-6">📱</div>
            <h2 className="text-4xl font-bold mb-4">Follow Us on Instagram</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get daily tips, success stories, and be the first to know about new features.
              Join our growing community on social media!
            </p>
            <a
              href="https://instagram.com/brrowapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @brrowapp
            </a>
            <p className="mt-6 text-sm text-purple-200">
              Join 2,400+ followers sharing their Brrow stories
            </p>
          </motion.div>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Community Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple rules that keep our community safe, friendly, and trustworthy for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {guidelines.map((guideline, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100"
              >
                <guideline.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{guideline.title}</h3>
                <p className="text-gray-600 text-lg">{guideline.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories / Testimonials */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Stories, Real Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from community members who are saving money and earning income through Brrow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-5xl mb-4">{testimonial.emoji}</div>
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                    {testimonial.savings}
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 italic">
              * Success stories from early beta testers
            </p>
          </motion.div>
        </div>
      </div>

      {/* Forum Coming Soon */}
      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-12 text-center"
          >
            <ChatBubbleLeftRightIcon className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Community Forum Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              We're building a dedicated space where you can share tips, ask questions,
              and connect with other community members. Stay tuned!
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-semibold">
              <SparklesIcon className="w-5 h-5" />
              Launching Q2 2026
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Sharing Section */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <ShareIcon className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Spread the Word
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Help us grow the community! Share Brrow with friends, family, and neighbors.
              The more people who join, the more items available to share.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://twitter.com/intent/tweet?text=Check%20out%20Brrow%20-%20the%20app%20that%20helps%20you%20save%20money%20by%20renting%20from%20neighbors!&url=https://brrow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-400 text-white rounded-xl font-bold text-lg hover:bg-blue-500 transform hover:scale-105 transition-all shadow-lg"
              >
                Share on Twitter
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://brrow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Share on Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TestFlight CTA */}
      <div className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <RocketLaunchIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the Community Today
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Download the iOS beta on TestFlight and start connecting with your neighbors.
              Be part of the sharing economy revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://testflight.apple.com/join/P1akbT8z"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
              >
                Download iOS Beta
              </a>
              <Link to="/waitlist">
                <button className="px-8 py-4 bg-primary-800 text-white rounded-xl font-bold text-lg border-2 border-primary-600 hover:bg-primary-900 transform hover:scale-105 transition-all">
                  Join Waitlist
                </button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-primary-200">
              Android version coming Q2 2026
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
