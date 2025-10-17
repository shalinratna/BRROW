import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BellAlertIcon,
  SparklesIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  StarIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const BACKEND_URL = 'https://brrow-backend-production.up.railway.app';

export function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(8754);

  // Fetch current waitlist count on load
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/waitlist/count`)
      .then(res => res.json())
      .then(data => {
        if (data.count) {
          setWaitlistCount(data.count);
        }
      })
      .catch(err => console.error('Failed to fetch count:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Redirect to TestFlight instead of collecting signups
    window.location.href = 'https://testflight.apple.com/join/P1akbT8z';
  };

  const shareUrl = 'https://brrowapp.com/waitlist';
  const shareText = 'Check out Brrow - rent anything from neighbors! Join the waitlist now.';

  const handleShare = (platform) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    // Could add a toast notification here
  };

  const benefits = [
    {
      icon: BellAlertIcon,
      title: 'Be First to Know',
      description: 'Get instant notification when the app launches',
    },
    {
      icon: SparklesIcon,
      title: 'Exclusive Perks',
      description: 'Early adopters get special benefits and recognition',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Beta Access',
      description: 'Chance to test the app before public release',
    },
    {
      icon: StarIcon,
      title: 'Founding Member',
      description: 'Special founding member badge in the app',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Reserve Your Spot
            </h1>
            <p className="text-2xl text-primary-100 leading-relaxed max-w-2xl mx-auto">
              Join thousands of people waiting to rent anything from power tools to cameras.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          {/* Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 mb-12 text-center"
            >
              <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                You're In! 🎉
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to the Brrow waitlist! We'll email you as soon as the app launches.
              </p>
              <p className="text-sm text-gray-500">
                Share with friends to move up the list!
              </p>
            </motion.div>
          )}

          {/* Waitlist Form */}
          {!success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-lg"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-lg"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full px-8 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-xl hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? 'Joining...' : 'Join the Waitlist'}
                </button>
              </form>

              {/* Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-50 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-2xl font-bold text-primary-600">
                    {waitlistCount.toLocaleString()}
                  </span>
                  <span className="text-gray-600 font-medium">
                    people already on the waitlist
                  </span>
                </div>
              </motion.div>

              {/* Privacy Message */}
              <p className="mt-6 text-center text-sm text-gray-500">
                <ShieldCheckIcon className="w-4 h-4 inline mr-1" />
                We'll only email you about the app launch. No spam, ever.
              </p>
            </motion.div>
          )}

          {/* Social Sharing */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Share with friends and move up the list:
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleShare('twitter')}
                  className="px-6 py-3 bg-blue-400 text-white rounded-xl font-semibold hover:bg-blue-500 transition-all transform hover:scale-105"
                >
                  Tweet
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  Share
                </button>
                <button
                  onClick={copyLink}
                  className="px-6 py-3 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-all transform hover:scale-105"
                >
                  Copy Link
                </button>
              </div>
            </motion.div>
          )}

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Join the Waitlist?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <benefit.icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
