import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  MapPinIcon,
  StarIcon,
  HeartIcon,
  RocketLaunchIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

export function Browse() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const categories = [
    'All Categories',
    'Photography',
    'Tools',
    'Outdoor',
    'Electronics',
    'Sports',
    'Events',
    'Music',
    'Gaming',
    'Transportation',
  ];

  const mockItems = [
    {
      id: 1,
      name: 'Canon EOS R5 Camera',
      category: 'Photography',
      price: 45,
      period: 'day',
      image: '📷',
      rating: 4.9,
      reviews: 127,
      location: 'San Francisco, CA',
      available: true,
      owner: 'Alex Photography',
    },
    {
      id: 2,
      name: 'DJ Speaker System',
      category: 'Events',
      price: 85,
      period: 'day',
      image: '🔊',
      rating: 5.0,
      reviews: 84,
      location: 'Oakland, CA',
      available: true,
      owner: 'Party Rentals Pro',
    },
    {
      id: 3,
      name: 'Mountain Bike',
      category: 'Sports',
      price: 30,
      period: 'day',
      image: '🚴',
      rating: 4.8,
      reviews: 56,
      location: 'Berkeley, CA',
      available: true,
      owner: 'BikeShare SF',
    },
    {
      id: 4,
      name: 'Power Drill Set',
      category: 'Tools',
      price: 15,
      period: 'day',
      image: '🔧',
      rating: 4.7,
      reviews: 92,
      location: 'San Jose, CA',
      available: true,
      owner: 'Tool Library',
    },
    {
      id: 5,
      name: 'PlayStation 5',
      category: 'Gaming',
      price: 25,
      period: 'day',
      image: '🎮',
      rating: 4.9,
      reviews: 145,
      location: 'Palo Alto, CA',
      available: false,
      owner: 'GameHub Rentals',
    },
    {
      id: 6,
      name: 'Camping Tent (6-Person)',
      category: 'Outdoor',
      price: 40,
      period: 'day',
      image: '⛺',
      rating: 4.6,
      reviews: 38,
      location: 'Santa Cruz, CA',
      available: true,
      owner: 'Outdoor Adventures',
    },
    {
      id: 7,
      name: 'Drone with 4K Camera',
      category: 'Photography',
      price: 60,
      period: 'day',
      image: '🚁',
      rating: 4.8,
      reviews: 73,
      location: 'San Francisco, CA',
      available: true,
      owner: 'Aerial Views Inc',
    },
    {
      id: 8,
      name: 'Electric Scooter',
      category: 'Transportation',
      price: 20,
      period: 'day',
      image: '🛴',
      rating: 4.5,
      reviews: 210,
      location: 'San Francisco, CA',
      available: true,
      owner: 'City Scooters',
    },
    {
      id: 9,
      name: 'Professional Mixer',
      category: 'Music',
      price: 50,
      period: 'day',
      image: '🎛️',
      rating: 4.9,
      reviews: 67,
      location: 'Oakland, CA',
      available: true,
      owner: 'Sound Studio Pro',
    },
    {
      id: 10,
      name: 'Kayak with Paddle',
      category: 'Outdoor',
      price: 35,
      period: 'day',
      image: '🛶',
      rating: 4.7,
      reviews: 45,
      location: 'Sausalito, CA',
      available: true,
      owner: 'Bay Adventures',
    },
    {
      id: 11,
      name: 'MacBook Pro M3',
      category: 'Electronics',
      price: 55,
      period: 'day',
      image: '💻',
      rating: 5.0,
      reviews: 89,
      location: 'Cupertino, CA',
      available: true,
      owner: 'Tech Rentals Plus',
    },
    {
      id: 12,
      name: 'Snowboard & Boots',
      category: 'Sports',
      price: 45,
      period: 'day',
      image: '🏂',
      rating: 4.8,
      reviews: 62,
      location: 'Tahoe City, CA',
      available: true,
      owner: 'Mountain Gear',
    },
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter items based on search and filters
  const filteredItems = mockItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' ||
                           item.category.toLowerCase() === selectedCategory.toLowerCase();

    let matchesPrice = true;
    if (priceRange === 'under25') matchesPrice = item.price < 25;
    if (priceRange === '25to50') matchesPrice = item.price >= 25 && item.price <= 50;
    if (priceRange === 'over50') matchesPrice = item.price > 50;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Items</h1>
            <p className="text-xl text-primary-100">
              Discover thousands of items ready to rent in your area
            </p>
          </motion.div>
        </div>
      </div>

      {/* App Launch Banner */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <RocketLaunchIcon className="w-6 h-6" />
              <div>
                <span className="font-bold text-lg">App Preview - Launching Q1 2026</span>
                <p className="text-sm text-white/90">
                  This is a preview catalog. Full inventory available in the mobile app at launch.
                </p>
              </div>
            </div>
            <Link to="/waitlist">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg whitespace-nowrap">
                <BellAlertIcon className="w-5 h-5" />
                Join Waitlist
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search items, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat === 'All Categories' ? 'all' : cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition-colors"
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Prices</option>
                    <option value="under25">Under $25/day</option>
                    <option value="25to50">$25 - $50/day</option>
                    <option value="over50">Over $50/day</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredItems.length}</span> items found
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Sort by: Popular
            </button>
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    {item.image}

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(item.id);
                      }}
                      className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    >
                      {favorites.includes(item.id) ? (
                        <HeartIconSolid className="w-5 h-5 text-red-500" />
                      ) : (
                        <HeartIcon className="w-5 h-5 text-gray-600" />
                      )}
                    </button>

                    {/* Availability Badge */}
                    {!item.available && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full">
                        Unavailable
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                        <span className="text-xs text-gray-500">({item.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                      <MapPinIcon className="w-4 h-4" />
                      <span className="text-xs">{item.location}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary-600">
                          ${item.price}
                        </span>
                        <span className="text-sm text-gray-500">/{item.period}</span>
                      </div>
                      <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors">
                        View
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">By {item.owner}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action - App Launch Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white"
        >
          <RocketLaunchIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h2 className="text-3xl font-bold mb-4">Ready to Rent or Earn?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join the waitlist now and get <span className="font-bold text-white">$50 in free rental credits</span> when our mobile app launches in Q1 2026!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/waitlist" className="flex-1 sm:flex-initial">
              <button className="w-full px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2">
                <BellAlertIcon className="w-6 h-6" />
                Join Waitlist
              </button>
            </Link>
            <Link to="/list-item" className="flex-1 sm:flex-initial">
              <button className="w-full px-10 py-4 bg-primary-800 text-white rounded-xl font-bold text-lg border-2 border-primary-600 hover:bg-primary-900 transform hover:scale-105 transition-all">
                List for Launch
              </button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-primary-200">
            9,237 people already on the waitlist • iOS & Android
          </p>
        </motion.div>
      </div>
    </div>
  );
}