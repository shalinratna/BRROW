import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export function Home() {
  const categories = [
    { name: 'Photography', image: '📷', count: '2.5k+ items' },
    { name: 'Tools', image: '🔨', count: '3.8k+ items' },
    { name: 'Outdoor', image: '⛺', count: '1.9k+ items' },
    { name: 'Electronics', image: '💻', count: '4.2k+ items' },
    { name: 'Sports', image: '⚽', count: '2.1k+ items' },
    { name: 'Events', image: '🎉', count: '1.5k+ items' },
  ];

  const trendingItems = [
    {
      name: 'Canon EOS R5',
      price: '$45/day',
      image: '📷',
      category: 'Photography',
      rating: '4.9',
    },
    {
      name: 'DJ Speaker Set',
      price: '$85/day',
      image: '🔊',
      category: 'Events',
      rating: '5.0',
    },
    {
      name: 'Mountain Bike',
      price: '$30/day',
      image: '🚴',
      category: 'Sports',
      rating: '4.8',
    },
    {
      name: 'Power Drill Kit',
      price: '$15/day',
      image: '🔧',
      category: 'Tools',
      rating: '4.7',
    },
  ];

  return (
    <div className="bg-white">
      {/* Unique Hero Section - Asymmetric Split */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
        {/* Large decorative element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-primary-100 to-primary-200 opacity-20 transform skew-x-12 translate-x-1/4"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh] py-16">
            {/* Left - Bold Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="inline-block px-4 py-2 bg-primary-100 rounded-full">
                  <span className="text-sm font-semibold text-primary-700">
                    🎉 Join 50,000+ renters & lenders
                  </span>
                </div>

                <h1 className="text-6xl md:text-7xl font-black leading-tight">
                  <span className="block text-gray-900">Skip the</span>
                  <span className="block text-gray-900">buy.</span>
                  <span className="block gradient-text">Just Brrow it.</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-lg">
                  Rent anything from your neighbors. Earn from items collecting dust.
                  The smarter way to access what you need.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/browse">
                    <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center group">
                      Browse Items
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link to="/list-item">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-300">
                      List Your Items
                    </button>
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">50k+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">100k+</div>
                    <div className="text-sm text-gray-600">Items Listed</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">4.9⭐</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Visual Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating cards */}
              <div className="relative h-[600px]">
                {/* Card 1 - Top Right */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-0 right-0 w-64 bg-white rounded-2xl shadow-2xl p-6 transform rotate-3"
                >
                  <div className="text-6xl mb-4">📷</div>
                  <h3 className="font-bold text-lg mb-2">Pro Camera Gear</h3>
                  <p className="text-gray-600 text-sm mb-4">From $25/day</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">San Francisco</span>
                    <span className="text-xs font-semibold text-primary-600">Available</span>
                  </div>
                </motion.div>

                {/* Card 2 - Middle Left */}
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute top-32 left-0 w-72 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-2xl p-6 text-white transform -rotate-2"
                >
                  <div className="text-6xl mb-4">💰</div>
                  <h3 className="font-bold text-xl mb-2">Earn up to $500/mo</h3>
                  <p className="text-primary-100 text-sm mb-4">
                    Turn your unused items into steady income
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary-300 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-primary-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-primary-200 border-2 border-white"></div>
                    </div>
                    <span className="text-xs">2,500+ earning monthly</span>
                  </div>
                </motion.div>

                {/* Card 3 - Bottom Right */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute bottom-0 right-12 w-64 bg-white rounded-2xl shadow-2xl p-6 transform rotate-2"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                      🔨
                    </div>
                    <div>
                      <h3 className="font-bold">Power Tools</h3>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
                        <span className="text-xs text-gray-500">(48)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">$15/day</span>
                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
                      Rent Now
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories - Horizontal Scroll */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Browse Categories</h2>
              <Link to="/browse" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2">
                View All
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/browse?category=${cat.name.toLowerCase()}`}>
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200 group-hover:border-primary-500">
                      <div className="text-5xl mb-3">{cat.image}</div>
                      <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
                      <p className="text-sm text-gray-600">{cat.count}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trending Items - Unique Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-4">
                🔥 Hot Right Now
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Trending Near You</h2>
              <p className="text-xl text-gray-600">Most rented items this week</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                      {item.image}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">⭐ {item.rating}</span>
                      </div>

                      <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary-600">{item.price}</span>
                        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors">
                          Rent
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/browse">
                <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-primary-600 transform hover:scale-105 transition-all duration-300">
                  Explore All Items
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* How It Works - Split Layout */}
      <div className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Simple. Smart. Secure.</h2>
            <p className="text-xl text-gray-600">Renting made ridiculously easy</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - For Renters */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-10 text-white"
            >
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-6">For Renters</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Find What You Need</h4>
                    <p className="text-primary-100">Search thousands of items in your area</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Book Instantly</h4>
                    <p className="text-primary-100">Secure payment & instant confirmation</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pick Up & Enjoy</h4>
                    <p className="text-primary-100">Meet, grab, and get going</p>
                  </div>
                </div>
              </div>

              <Link to="/browse">
                <button className="mt-8 w-full px-8 py-4 bg-white text-primary-600 rounded-xl font-bold hover:bg-gray-100 transition-all">
                  Start Renting
                </button>
              </Link>
            </motion.div>

            {/* Right Side - For Lenders */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white"
            >
              <div className="text-5xl mb-6">💰</div>
              <h3 className="text-3xl font-bold mb-6">For Lenders</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">List Your Items</h4>
                    <p className="text-gray-400">Upload photos & set your price</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Accept Requests</h4>
                    <p className="text-gray-400">Choose who rents your items</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Earn Money</h4>
                    <p className="text-gray-400">Get paid instantly after each rental</p>
                  </div>
                </div>
              </div>

              <Link to="/list-item">
                <button className="mt-8 w-full px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all">
                  Start Earning
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust & Safety - Centered */}
      <div className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
              <ShieldCheckIcon className="w-10 h-10 text-primary-600" />
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Rent with Confidence
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Every rental is protected by our $1M insurance policy, verified user reviews,
              and 24/7 customer support. Your peace of mind is our priority.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold text-lg mb-2">$1M Protection</h3>
                <p className="text-gray-600 text-sm">Every rental fully insured</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-bold text-lg mb-2">Verified Users</h3>
                <p className="text-gray-600 text-sm">ID & background checks</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Always here to help</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section - Bold & Direct */}
      <div className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-6xl font-black mb-6">
              Ready to Brrow?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of people sharing, saving, and earning in your community.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <button className="px-12 py-5 bg-primary-600 text-white rounded-xl font-bold text-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Get Started Free
                </button>
              </Link>
              <Link to="/how-it-works">
                <button className="px-12 py-5 bg-white text-gray-900 rounded-xl font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}