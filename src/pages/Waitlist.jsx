import { motion } from 'framer-motion';
import { WaitlistForm } from '../components/WaitlistForm';
import { LaunchStatus } from '../components/LaunchStatus';
import {
  SparklesIcon,
  BellAlertIcon,
  GiftIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export function Waitlist() {
  const benefits = [
    {
      icon: <BellAlertIcon className="w-8 h-8" />,
      title: 'Be First to Know',
      description: 'Get instant notification when the app launches',
    },
    {
      icon: <GiftIcon className="w-8 h-8" />,
      title: 'Exclusive Perks',
      description: 'Early adopters get $50 in rental credits',
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: 'Beta Access',
      description: 'Chance to test the app before public release',
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Founding Member',
      description: 'Special badge and profile recognition',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-primary-500 bg-opacity-50 rounded-full mb-6">
              <span className="text-sm font-semibold">
                🚀 App Launching Soon
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Join the Brrow Waitlist
            </h1>

            <p className="text-2xl text-primary-100 mb-8">
              Be among the first to experience the future of peer-to-peer rentals.
              Your spot is waiting.
            </p>

            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold">9,237</div>
                <div className="text-sm text-primary-200">On Waitlist</div>
              </div>
              <div className="w-px h-12 bg-primary-400"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">Q1 2026</div>
                <div className="text-sm text-primary-200">Est. Launch</div>
              </div>
              <div className="w-px h-12 bg-primary-400"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">$50</div>
                <div className="text-sm text-primary-200">Free Credits</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:sticky lg:top-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Reserve Your Spot</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of people waiting to rent anything from power tools to cameras.
            </p>

            <WaitlistForm source="waitlist-page" />

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4 font-medium">
                Share with friends and move up the list:
              </p>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/intent/tweet?text=Just%20joined%20the%20waitlist%20for%20@BrrowApp!%20Can't%20wait%20to%20rent%20anything%20from%20my%20neighbors%20🚀"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg font-semibold text-center hover:bg-blue-600 transition-colors text-sm"
                >
                  Tweet
                </a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://brrowapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-blue-700 text-white rounded-lg font-semibold text-center hover:bg-blue-800 transition-colors text-sm"
                >
                  Share
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('https://brrowapp.com/waitlist');
                    alert('Link copied! Share with friends.');
                  }}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold text-center hover:bg-gray-300 transition-colors text-sm"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </motion.div>

          {/* Benefits & Status */}
          <div className="space-y-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Join the Waitlist?
              </h3>

              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Launch Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <LaunchStatus />
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                When will the app launch?
              </h3>
              <p className="text-gray-600">
                We're targeting Q1 2026 for our public launch. Beta testing begins in late 2025,
                and waitlist members will get first access.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Will the app be free to download?
              </h3>
              <p className="text-gray-600">
                Yes! Brrow is completely free to download and browse. We only charge a minimal service
                fee (just 5%) on successful transactions to keep the platform running.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What platforms will it be available on?
              </h3>
              <p className="text-gray-600">
                Brrow will launch on both iOS (iPhone) and Android simultaneously. We're also
                working on a web version for later in 2026.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What are the $50 in rental credits?
              </h3>
              <p className="text-gray-600">
                Every waitlist member who signs up before launch gets $50 in free rental credits
                to use within the first 30 days. That's 2-3 free rentals on us!
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Can I become a beta tester?
              </h3>
              <p className="text-gray-600">
                Yes! We'll be selecting beta testers from the waitlist in late 2025. The earlier you
                join, the better your chances of being selected.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            Don't Miss the Launch
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Spots are filling up fast. Join the waitlist now and be part of the sharing economy revolution.
          </p>
          <div className="text-2xl font-bold mb-2">
            9,237 people waiting
          </div>
          <div className="text-primary-200">
            Will you be next?
          </div>
        </motion.div>
      </div>
    </div>
  );
}