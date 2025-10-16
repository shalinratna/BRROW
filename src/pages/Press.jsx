import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  NewspaperIcon,
  CubeIcon,
  EnvelopeIcon,
  UserIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export function Press() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const keyFacts = [
    { label: 'Low 5% Fee', value: 'Keep 95% of every transaction' },
    { label: 'Escrow System', value: 'Secure payment protection for all transactions' },
    { label: 'Insurance Program', value: 'Optional coverage for high-value listings' },
    { label: 'Platform Types', value: 'Buy, Sell, Lend, and Giveaway marketplace' },
    { label: 'Location', value: 'Bay Area, California' },
    { label: 'Founded', value: 'June 2025 by SJSU student' },
    { label: 'Mission', value: 'Help people save money through sharing' },
    { label: 'Verification', value: 'ID and phone verification for all users' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mdknoqap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
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
              <NewspaperIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Press & Media</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Brrow Story
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Resources, assets, and information for journalists, bloggers, and media professionals
              covering the future of community-driven commerce.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom max-w-6xl">
          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <SparklesIcon className="w-8 h-8 text-primary-600" />
                  <h2 className="text-4xl font-bold text-gray-900">
                    The Founder's Story
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Brrow was founded by a student at San Jose State University who experienced firsthand
                    the financial challenges of living in the Bay Area. Like many students and young
                    professionals, the high cost of living made it difficult to afford everyday necessities,
                    let alone the tools and equipment needed for projects, hobbies, or temporary needs.
                  </p>
                  <p>
                    The idea was simple but powerful: <span className="font-bold text-primary-700">
                    Why should everyone have to buy everything when we could share resources within our communities?
                    </span> Whether it's a power drill needed for one weekend, textbooks that get used for one semester,
                    or camping gear that sits unused most of the year—there had to be a better way.
                  </p>
                  <p>
                    Founded in June 2025 and based in the Bay Area, Brrow was built with a clear mission:
                    <span className="font-bold text-primary-700"> help people save money through sharing.</span> The
                    platform enables users to buy, sell, lend, and give away items within their local communities,
                    all while being protected by a secure escrow system and optional insurance coverage.
                  </p>
                  <p>
                    What started as a college project has grown into a comprehensive marketplace that's making
                    sustainable, affordable living accessible to everyone. With a low 5% transaction fee—meaning
                    users keep 95% of what they earn—Brrow is democratizing peer-to-peer commerce and building
                    stronger, more connected communities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Key Facts About Brrow
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFacts.map((fact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary-600"
                >
                  <h3 className="font-bold text-primary-700 text-lg mb-2">{fact.label}</h3>
                  <p className="text-gray-700">{fact.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Platform Features Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What Makes Brrow Different
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <CurrencyDollarIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Just 5% Fee</h3>
                <p className="text-gray-600">
                  The most affordable platform—you keep 95% of every transaction
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <ShieldCheckIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Secure Escrow</h3>
                <p className="text-gray-600">
                  Every payment is protected until the transaction is complete
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <UserGroupIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Verified Users</h3>
                <p className="text-gray-600">
                  ID and phone verification builds trust and safety
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <CubeIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">4-in-1 Platform</h3>
                <p className="text-gray-600">
                  Buy, sell, lend, and give away all in one place
                </p>
              </div>
            </div>
          </motion.div>

          {/* Press Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12"
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <EnvelopeIcon className="w-16 h-16 text-white mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-xl text-primary-100">
                  We're happy to answer your questions, provide interviews, or supply additional materials.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <UserIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent focus:border-primary-300 focus:outline-none bg-white text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent focus:border-primary-300 focus:outline-none bg-white text-gray-900"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-white font-semibold mb-2">
                    Organization
                  </label>
                  <div className="relative">
                    <BuildingOfficeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent focus:border-primary-300 focus:outline-none bg-white text-gray-900"
                      placeholder="Your publication or company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary-300 focus:outline-none bg-white text-gray-900 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Honeypot anti-spam field - hidden from users */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-semibold"
                  >
                    Thank you for reaching out! We'll get back to you soon.
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 text-red-800 p-4 rounded-xl text-center font-semibold"
                  >
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}
              </form>

              <div className="mt-8 text-center text-primary-100">
                <p className="text-sm mb-3">You can also reach us directly:</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs text-primary-200">Media & Press Inquiries:</span>
                    <br />
                    <a href="mailto:press@brrowapp.com" className="underline font-semibold text-white hover:text-primary-200">
                      press@brrowapp.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-primary-200">Partnership Opportunities:</span>
                    <br />
                    <a href="mailto:partnerships@brrowapp.com" className="underline font-semibold text-white hover:text-primary-200">
                      partnerships@brrowapp.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
