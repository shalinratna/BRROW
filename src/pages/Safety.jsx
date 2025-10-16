import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  UserCircleIcon,
  PhoneIcon,
  MapPinIcon,
  SunIcon,
  UsersIcon,
  LightBulbIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

export function Safety() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const verificationFeatures = [
    {
      icon: UserCircleIcon,
      title: 'ID Verification',
      description: 'All users must verify their identity with a government-issued ID to join the platform.',
    },
    {
      icon: PhoneIcon,
      title: 'Phone Verification',
      description: 'Two-factor authentication and phone number verification ensure account security.',
    },
  ];

  const meetupTips = [
    {
      icon: MapPinIcon,
      title: 'Meet in Public Places',
      description: 'Choose well-lit, public locations like coffee shops, shopping centers, or bank lobbies for exchanges.',
    },
    {
      icon: SunIcon,
      title: 'Daytime Meetings',
      description: 'Schedule meetups during daylight hours when possible for added visibility and safety.',
    },
    {
      icon: UsersIcon,
      title: 'Bring a Friend',
      description: 'Consider bringing someone you trust along, especially for high-value transactions.',
    },
    {
      icon: LightBulbIcon,
      title: 'Trust Your Instincts',
      description: 'If something feels off, cancel the meeting. Your safety is more important than any transaction.',
    },
  ];

  const buyerChecklist = [
    'Verify the item matches the listing description and photos',
    'Inspect the item thoroughly before completing payment',
    'Use Brrow\'s in-app escrow payment system',
    'Meet in a public, well-lit location',
    'Keep all communication within the Brrow app',
    'Report any suspicious behavior immediately',
  ];

  const sellerChecklist = [
    'Verify buyer\'s identity through their profile',
    'Be honest and accurate in your listing descriptions',
    'Take clear, detailed photos of your item',
    'Meet in a safe, public location',
    'Wait for payment confirmation before handing over items',
    'Keep records of all transactions',
  ];

  const lenderChecklist = [
    'Document item condition with photos before lending',
    'Set clear terms for rental duration and return condition',
    'Verify renter\'s ID and contact information',
    'Use Brrow\'s insurance program for valuable items',
    'Communicate clearly about usage expectations',
    'Inspect items upon return before confirming completion',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <ShieldCheckIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Safety is Our Priority
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Brrow is built with multiple layers of security to ensure safe, trusted transactions within your community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Required Verification
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every Brrow user must complete identity and phone verification before accessing the platform.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {verificationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meetup Safety Tips */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safe Meetup Guidelines
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these essential tips when meeting to exchange items or complete transactions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {meetupTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <tip.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brrow Insurance Program */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200">
              <div className="flex items-start gap-6">
                <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheckIcon className="h-9 w-9 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Brrow Insurance Program
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Protect your valuable items with optional insurance coverage for lending transactions. Our insurance program provides peace of mind when sharing high-value items with your community.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Coverage for damage, loss, or theft during rental periods</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Flexible coverage tiers based on item value</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Simple claims process with fast resolution</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Optional add-on for lenders who want extra protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Escrow System */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-purple-200">
              <div className="flex items-start gap-6">
                <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <LockClosedIcon className="h-9 w-9 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Secure Escrow Payments
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    All transactions on Brrow use our secure escrow system to protect both buyers and sellers. Funds are held safely until both parties confirm the transaction is complete.
                  </p>
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 text-purple-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Buyer Commits Payment</h4>
                        <p className="text-gray-600 text-sm">Payment is securely held in escrow through Brrow</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 text-purple-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Item Exchange</h4>
                        <p className="text-gray-600 text-sm">Buyer receives and inspects the item</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 text-purple-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Confirmation & Release</h4>
                        <p className="text-gray-600 text-sm">Both parties confirm, and payment is released to seller</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Report Suspicious Activity */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-red-200">
              <div className="flex items-start gap-6">
                <div className="bg-red-600 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ExclamationTriangleIcon className="h-9 w-9 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Report Suspicious Activity
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our community's safety depends on everyone. If you encounter suspicious behavior, scams, or feel unsafe, report it immediately.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Report via the App</h4>
                      <p className="text-gray-600 text-sm">Use the "Report" button on any listing or user profile to flag concerns instantly.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">24/7 Support Team</h4>
                      <p className="text-gray-600 text-sm">Our trust and safety team reviews all reports promptly and takes appropriate action.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What to Report</h4>
                      <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                        <li>Fake or misleading listings</li>
                        <li>Requests to complete transactions outside the app</li>
                        <li>Harassment or threatening behavior</li>
                        <li>Stolen items being sold</li>
                        <li>Suspected fraud or scams</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Checklists */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety Checklists
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these best practices based on your role in the transaction.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Buyer Checklist */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CurrencyDollarIcon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                For Buyers
              </h3>
              <ul className="space-y-3">
                {buyerChecklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Seller Checklist */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CurrencyDollarIcon className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                For Sellers
              </h3>
              <ul className="space-y-3">
                {sellerChecklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Lender Checklist */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <UsersIcon className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                For Lenders
              </h3>
              <ul className="space-y-3">
                {lenderChecklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TestFlight CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <DevicePhoneMobileIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Experience Safe, Trusted Sharing
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our TestFlight beta and be part of building the safest peer-to-peer marketplace for your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://testflight.apple.com/join/P1akbT8z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Join TestFlight Beta
                </motion.button>
              </a>
              <a href="/help">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
                >
                  Learn More
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
