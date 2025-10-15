import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export function About() {
  const values = [
    {
      icon: CurrencyDollarIcon,
      title: 'Save Money',
      description: 'Our mission is simple: help people save money by sharing resources instead of buying everything new.',
    },
    {
      icon: UserGroupIcon,
      title: 'Build Community',
      description: 'Connect with neighbors and build trust through verified, secure local transactions.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Stay Protected',
      description: 'Every transaction is backed by our escrow system and optional Brrow Insurance Program.',
    },
    {
      icon: HeartIcon,
      title: 'Reduce Waste',
      description: 'Give items a second life through lending, selling, or giving away instead of throwing them out.',
    },
  ];

  const features = [
    { emoji: '💸', label: 'Only 5% Fee', desc: 'Keep 95% of every transaction' },
    { emoji: '🔒', label: 'Escrow System', desc: 'Secure payment protection' },
    { emoji: '🛡️', label: 'Insurance Program', desc: 'Optional coverage for listings' },
    { emoji: '✅', label: 'Verified Users', desc: 'ID + phone verification' },
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
              <span className="text-sm font-semibold">Born in the Bay Area</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Helping Communities Save Money
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Brrow was started by a student at San Jose State University who saw friends struggling
              with the high cost of living. Why buy when you can borrow? Why throw away when you can share?
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="section-padding">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We believe the high cost of living shouldn't hold people back. Students, young
                professionals, and families in the Bay Area face skyrocketing expenses—so we built
                a platform to help everyone save money through sharing.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Whether you need a power drill for one project, want to sell textbooks, lend out
                camping gear, or give away furniture—Brrow makes it safe, simple, and affordable.
              </p>
              <p className="text-lg font-semibold text-primary-600">
                At just 5% per transaction, we're the most affordable platform for peer-to-peer
                transactions. You keep 95% of what you earn.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="text-4xl mb-3">{feature.emoji}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.label}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <value.icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-12 mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              How Brrow Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Buy</h3>
                <p className="text-gray-600 text-sm">Find great deals on items you need from verified sellers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Sell</h3>
                <p className="text-gray-600 text-sm">List items you no longer need and earn money instantly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Lend</h3>
                <p className="text-gray-600 text-sm">Rent out items you own and earn passive income</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Giveaway</h3>
                <p className="text-gray-600 text-sm">Give items a second life by helping others in your community</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white"
          >
            <RocketLaunchIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="text-4xl font-bold mb-4">Join the Beta on iOS</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Be among the first to experience Brrow. Download our iOS beta on TestFlight today
              and start saving money in your community.
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
