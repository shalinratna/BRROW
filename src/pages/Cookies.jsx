import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export function Cookies() {
  const cookieTypes = [
    {
      icon: ShieldCheckIcon,
      title: 'Essential Cookies',
      description: 'Required for basic site functionality, authentication, and security features.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our platform to improve user experience.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Cog6ToothIcon,
      title: 'Preference Cookies',
      description: 'Remember your settings and preferences for a personalized experience.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: GlobeAltIcon,
      title: 'Third-Party Cookies',
      description: 'Set by our trusted partners for payment processing and analytics services.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const cookieTable = [
    {
      category: 'Essential Cookies',
      purpose: 'Authentication & Security',
      examples: 'Session tokens, CSRF protection, secure login',
      retention: 'Session or up to 1 year',
    },
    {
      category: 'Analytics Cookies',
      purpose: 'Usage Tracking & Performance',
      examples: 'Google Analytics, page views, user behavior',
      retention: 'Up to 2 years',
    },
    {
      category: 'Preference Cookies',
      purpose: 'User Settings & Customization',
      examples: 'Language, theme, location preferences',
      retention: 'Up to 1 year',
    },
    {
      category: 'Third-Party Cookies',
      purpose: 'Payment & External Services',
      examples: 'Stripe (payments), analytics providers',
      retention: 'Varies by provider',
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
            className="max-w-4xl mx-auto text-center"
          >
            <ShieldCheckIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Understanding how Brrow uses cookies to enhance your experience
            </p>
            <p className="text-sm text-primary-200 mt-4">
              Last Updated: October 15, 2025
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container-custom max-w-5xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website.
              They are widely used to make websites work more efficiently and provide a better user
              experience. Cookies help us remember your preferences, understand how you use our platform,
              and keep your account secure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Brrow, we are committed to transparency about the data we collect and how we use it.
              This Cookie Policy explains what cookies we use, why we use them, and how you can control them.
            </p>
          </motion.div>

          {/* Cookie Types Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Types of Cookies We Use
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cookieTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 ${
                    type.color === 'text-green-600' ? 'border-green-600' :
                    type.color === 'text-blue-600' ? 'border-blue-600' :
                    type.color === 'text-purple-600' ? 'border-purple-600' : 'border-orange-600'
                  }`}
                >
                  <div className={`w-14 h-14 ${type.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <type.icon className={`w-8 h-8 ${type.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detailed Cookie Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Cookie Information</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b-2 border-gray-300">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b-2 border-gray-300">
                      Purpose
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b-2 border-gray-300">
                      Examples
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b-2 border-gray-300">
                      Retention Period
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                        {row.purpose}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-200">
                        {row.examples}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-200">
                        {row.retention}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Essential Cookies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <ShieldCheckIcon className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Cookies</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  These cookies are strictly necessary for the operation of our platform. They enable
                  core functionality such as security, authentication, and access to secure areas of the website.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>User authentication and account security</li>
                  <li>Session management and login persistence</li>
                  <li>CSRF (Cross-Site Request Forgery) protection</li>
                  <li>Secure payment processing</li>
                  <li>Load balancing and performance optimization</li>
                </ul>
                <p className="text-gray-600 mt-4 text-sm italic">
                  Note: Essential cookies cannot be disabled as they are required for the platform to function properly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Analytics Cookies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <ChartBarIcon className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics Cookies</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We use analytics cookies to understand how visitors interact with our platform. This
                  helps us improve user experience, identify issues, and develop new features.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Track page views and navigation patterns</li>
                  <li>Measure feature usage and engagement</li>
                  <li>Monitor platform performance and load times</li>
                  <li>Identify technical errors and bugs</li>
                  <li>Understand user demographics and preferences</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Third-party analytics services we use:</strong> Google Analytics, Mixpanel,
                  and similar tools that help us understand aggregate user behavior.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Preference Cookies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <Cog6ToothIcon className="w-10 h-10 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Preference Cookies</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  These cookies remember your choices and preferences to provide a more personalized
                  experience on our platform.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Language and regional preferences</li>
                  <li>Display settings and theme choices</li>
                  <li>Location and search filters</li>
                  <li>Communication preferences</li>
                  <li>Cookie consent preferences</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Cookies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <GlobeAltIcon className="w-10 h-10 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We work with trusted third-party partners who may set cookies on our platform to
                  provide essential services.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Payment Processors</h3>
                    <p className="text-gray-700">
                      <strong>Stripe:</strong> Our payment processor uses cookies to securely handle
                      transactions, prevent fraud, and comply with financial regulations. These cookies
                      are essential for processing payments and protecting your financial information.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Analytics Services</h3>
                    <p className="text-gray-700">
                      <strong>Google Analytics:</strong> Helps us understand how users interact with
                      our platform through anonymized data collection. You can opt out of Google Analytics
                      by installing the Google Analytics Opt-out Browser Add-on.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Social Media</h3>
                    <p className="text-gray-700">
                      If you share content from Brrow on social media platforms, those platforms may
                      set their own cookies. We do not control these third-party cookies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Managing Cookies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Manage and Disable Cookies</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              You have control over the cookies we use. Here are several ways to manage your cookie preferences:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Browser Settings</h3>
                <p className="text-gray-700 mb-3">
                  Most web browsers allow you to control cookies through their settings. You can typically:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>View and delete existing cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Block all cookies</li>
                  <li>Delete cookies when you close your browser</li>
                  <li>Set exceptions for specific websites</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Popular Browser Instructions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Opt-Out Tools</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Google Analytics Opt-out Browser Add-on</li>
                  <li>Network Advertising Initiative (NAI) opt-out tool</li>
                  <li>Digital Advertising Alliance (DAA) opt-out tool</li>
                  <li>European Interactive Digital Advertising Alliance (EDAA) opt-out tool</li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <p className="text-gray-800 font-semibold mb-2">Important Note:</p>
                <p className="text-gray-700">
                  Disabling certain cookies may limit your ability to use some features of our platform.
                  Essential cookies cannot be disabled as they are required for core functionality such
                  as authentication and security.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cookie Consent Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Consent</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              When you first visit Brrow, we will ask for your consent to use non-essential cookies.
              You can choose to accept or decline different categories of cookies based on your preferences.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your consent preferences are stored in a cookie (ironically) so that we remember your
              choices on future visits. You can change your cookie preferences at any time by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Accessing the cookie settings in your account preferences</li>
              <li>Clearing your browser cookies and revisiting our site</li>
              <li>Contacting us at privacy@brrowapp.com to request changes</li>
            </ul>
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">Your Rights:</p>
              <p className="text-gray-700">
                You have the right to withdraw your consent at any time. Withdrawing consent will not
                affect the lawfulness of processing based on consent before withdrawal. For users in
                the EU and other regions with data protection laws, additional rights may apply.
              </p>
            </div>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology,
              legislation, our operations, or for other operational, legal, or regulatory reasons.
              When we make changes, we will update the "Last Updated" date at the top of this policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to review this Cookie Policy periodically to stay informed about how
              we use cookies. Significant changes will be communicated through our platform or via
              email to registered users.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <ShieldCheckIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto leading-relaxed">
              If you have any questions or concerns about our use of cookies or this Cookie Policy,
              we're here to help.
            </p>
            <div className="space-y-3 text-lg">
              <p className="text-primary-100">
                <strong className="text-white">Email:</strong>{' '}
                <a
                  href="mailto:privacy@brrowapp.com"
                  className="underline hover:text-white transition-colors"
                >
                  privacy@brrowapp.com
                </a>
              </p>
              <p className="text-primary-100">
                <strong className="text-white">Privacy Policy:</strong>{' '}
                <Link
                  to="/privacy"
                  className="underline hover:text-white transition-colors"
                >
                  View our complete Privacy Policy
                </Link>
              </p>
              <p className="text-primary-100">
                <strong className="text-white">Terms of Service:</strong>{' '}
                <Link
                  to="/terms"
                  className="underline hover:text-white transition-colors"
                >
                  Read our Terms of Service
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
