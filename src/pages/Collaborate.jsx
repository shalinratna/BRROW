import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  BuildingStorefrontIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  SparklesIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export function Collaborate() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    partnershipType: '',
    message: '',
    honeypot: '', // Anti-spam field
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const partnershipTypes = [
    {
      icon: BuildingStorefrontIcon,
      title: 'Business Partnerships',
      description: 'Partner with Brrow to offer exclusive deals to our growing community of users.',
      benefits: [
        'Access to thousands of verified local users',
        'Co-marketing opportunities',
        'Custom integration options',
        'Dedicated partnership support',
      ],
    },
    {
      icon: AcademicCapIcon,
      title: 'Campus Ambassador Program',
      description: 'Join our ambassador program and help build the sharing economy at SJSU and across the Bay Area.',
      benefits: [
        'Earn commission on referrals',
        'Exclusive ambassador perks and swag',
        'Leadership experience and networking',
        'Flexible schedule around classes',
      ],
    },
    {
      icon: MegaphoneIcon,
      title: 'Influencer & Affiliate Program',
      description: 'Promote Brrow to your audience and earn rewards for every user you bring to the platform.',
      benefits: [
        'Competitive commission structure',
        'Custom referral codes and tracking',
        'Early access to new features',
        'Monthly performance bonuses',
      ],
    },
  ];

  const collaborationBenefits = [
    {
      icon: UserGroupIcon,
      title: 'Growing Community',
      stat: '10+',
      description: 'Active users in the Bay Area',
    },
    {
      icon: ChartBarIcon,
      title: 'High Engagement',
      stat: '92%',
      description: 'Monthly active user rate',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Transaction Volume',
      stat: '$250K+',
      description: 'In applied Brrow technology through Shaiitech',
    },
    {
      icon: CheckCircleIcon,
      title: 'User Satisfaction',
      stat: '4.8/5',
      description: 'Average user rating on TestFlight',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot field
    if (formState.honeypot) {
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mdknoqap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          organization: formState.organization,
          partnershipType: formState.partnershipType,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          organization: '',
          partnershipType: '',
          message: '',
          honeypot: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

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
              <span className="text-sm font-semibold">Partner With Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Build the Future of Sharing Together
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Join Brrow's mission to make peer-to-peer transactions accessible, safe, and affordable
              for communities across the Bay Area and beyond.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Partnership Types Section */}
      <div className="section-padding">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Whether you're a business, student, or content creator, there's a way to collaborate with Brrow.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <type.icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Partner Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-12 mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Partner With Brrow?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collaborationBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <benefit.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary-600 mb-2">{benefit.stat}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Start a Partnership
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                Fill out the form below and we'll get back to you within 24-48 hours.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center"
                >
                  <CheckCircleIcon className="w-6 h-6 inline-block mr-2" />
                  Thank you! We'll be in touch soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formState.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization/Company
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formState.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="Your company or school"
                  />
                </div>

                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Partnership Type *
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    required
                    value={formState.partnershipType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a partnership type</option>
                    <option value="business">Business Partnership</option>
                    <option value="campus">Campus Ambassador</option>
                    <option value="influencer">Influencer/Affiliate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Interest *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your organization, audience, or how you'd like to collaborate with Brrow..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Submit Partnership Inquiry'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Powered by Shaiitech Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 mb-20"
          >
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>

              <div className="relative z-10 text-center">
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-6">
                  <span className="text-sm font-semibold">Enterprise Technology</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Built with Confidence</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Brrow is proudly powered by <span className="font-bold text-white">Shaiitech</span>, leveraging
                  cutting-edge systems to deliver a seamless, secure, and lightning-fast experience.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl mb-3">⚡</div>
                    <h3 className="font-bold mb-2">Warrior Technology</h3>
                    <p className="text-sm text-blue-100">Advanced infrastructure for real-time transactions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl mb-3">🛡️</div>
                    <h3 className="font-bold mb-2">BlackboxZ1 Security</h3>
                    <p className="text-sm text-blue-100">Military-grade encryption and fraud prevention</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl mb-3">🚀</div>
                    <h3 className="font-bold mb-2">Warthog R4 Engine</h3>
                    <p className="text-sm text-blue-100">High-performance backend built to scale</p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <p className="text-blue-100 mb-4">
                    Interested in getting your own app built with the same enterprise-grade technology?
                  </p>
                  <a
                    href="https://shaiitech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
                  >
                    Explore Shaiitech Solutions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Reach out to our partnerships team at{' '}
              <a href="mailto:partnerships@brrowapp.com" className="underline font-semibold">
                partnerships@brrowapp.com
              </a>
            </p>
            <p className="text-primary-200">
              We typically respond within 24-48 hours
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
