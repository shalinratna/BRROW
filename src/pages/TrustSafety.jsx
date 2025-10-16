import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  IdentificationIcon,
  PhoneIcon,
  DocumentMagnifyingGlassIcon,
  ExclamationTriangleIcon,
  ScaleIcon,
  BanknotesIcon,
  StarIcon,
  NoSymbolIcon,
  PhoneArrowUpRightIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

export function TrustSafety() {
  const verificationSteps = [
    {
      icon: IdentificationIcon,
      title: 'ID Verification',
      description: 'Upload a government-issued photo ID (driver\'s license, passport, or state ID) for identity confirmation.',
      details: [
        'Secure document upload',
        'AI-powered verification',
        'Data encrypted and protected',
        'Completed in 2-5 minutes',
      ],
    },
    {
      icon: PhoneIcon,
      title: 'Phone Verification',
      description: 'Verify your mobile phone number with a one-time code sent via SMS.',
      details: [
        'Instant verification code',
        'Prevents duplicate accounts',
        'Enhanced account security',
        'Required for all users',
      ],
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: 'Background Checks',
      description: 'For transactions over $500, we may require additional background screening to protect our community.',
      details: [
        'Credit history review',
        'Criminal record check',
        'Identity fraud prevention',
        'Automatic for high-value items',
      ],
    },
  ];

  const prohibitedItems = [
    {
      icon: ExclamationTriangleIcon,
      category: 'Weapons & Dangerous Items',
      items: [
        'Firearms, ammunition, or explosives',
        'Knives with blades over 3 inches',
        'Brass knuckles or martial arts weapons',
        'Tasers, stun guns, or pepper spray',
      ],
    },
    {
      icon: NoSymbolIcon,
      category: 'Illegal & Controlled Substances',
      items: [
        'Illegal drugs or drug paraphernalia',
        'Prescription medications',
        'Marijuana (even in legal states)',
        'Counterfeit or pirated goods',
      ],
    },
    {
      icon: ExclamationTriangleIcon,
      category: 'Hazardous Materials',
      items: [
        'Flammable liquids or gases',
        'Toxic chemicals or pesticides',
        'Radioactive materials',
        'Asbestos or lead-based products',
      ],
    },
    {
      icon: NoSymbolIcon,
      category: 'Age-Restricted & Stolen Goods',
      items: [
        'Alcohol or tobacco products',
        'Adult content or services',
        'Stolen property or counterfeit items',
        'Items with removed serial numbers',
      ],
    },
  ];

  const disputeProcess = [
    {
      step: 1,
      title: 'Contact Support',
      description: 'Report the issue through our in-app support or email within 48 hours of the transaction.',
      timeline: 'Response in 24 hours',
    },
    {
      step: 2,
      title: 'Investigation',
      description: 'Our team reviews evidence from both parties including photos, messages, and transaction history.',
      timeline: '3-5 business days',
    },
    {
      step: 3,
      title: 'Mediation',
      description: 'We facilitate communication between parties to reach a fair resolution before escalating.',
      timeline: '2-3 business days',
    },
    {
      step: 4,
      title: 'Resolution',
      description: 'If mediation fails, we make a final decision and process refunds or compensation through escrow.',
      timeline: '1-2 business days',
    },
  ];

  const insuranceClaims = [
    {
      title: 'File a Claim',
      description: 'Submit a claim within 48 hours with photos of damage, police report (if applicable), and transaction details.',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: 'Claim Review',
      description: 'Our insurance partner reviews your claim and may request additional documentation or photos.',
      icon: DocumentMagnifyingGlassIcon,
    },
    {
      title: 'Approval & Payment',
      description: 'Once approved, receive compensation within 7-10 business days via direct deposit or check.',
      icon: BanknotesIcon,
    },
  ];

  const ratingSystem = [
    {
      icon: StarIcon,
      title: 'Two-Way Reviews',
      description: 'Both buyers and sellers rate each other after every transaction, ensuring accountability on both sides.',
    },
    {
      icon: CheckBadgeIcon,
      title: 'Verified Reviews',
      description: 'Only users who completed a transaction can leave reviews, preventing fake or malicious ratings.',
    },
    {
      icon: UserGroupIcon,
      title: 'Community Trust Score',
      description: 'Your overall rating, response time, and transaction history combine into a visible trust score.',
    },
  ];

  const banPolicy = [
    {
      violation: 'Minor Violations',
      examples: ['Late responses', 'Cancelled transactions', 'Minor listing errors'],
      consequence: 'Warning issued, account flagged for review',
    },
    {
      violation: 'Moderate Violations',
      examples: ['Repeated cancellations', 'Misleading descriptions', 'Poor communication'],
      consequence: '7-30 day suspension, restricted listing privileges',
    },
    {
      violation: 'Severe Violations',
      examples: ['Fraud or scams', 'Harassment', 'Prohibited item listings', 'Identity theft'],
      consequence: 'Permanent ban, legal action, law enforcement referral',
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
            <ShieldCheckIcon className="w-20 h-20 mx-auto mb-6 text-primary-200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Trust & Safety
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Your safety is our top priority. We've built comprehensive systems to protect
              every transaction, verify every user, and ensure a trustworthy community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Verification Process */}
      <div className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Verification Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every user goes through our multi-step verification to build a trusted community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {verificationSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-500 hover:shadow-xl transition-all"
              >
                <step.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start">
                      <CheckBadgeIcon className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Prohibited Items */}
      <div className="section-padding bg-gray-100">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prohibited Items
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To maintain a safe community, the following items are strictly prohibited on Brrow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {prohibitedItems.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center"
          >
            <p className="text-red-800 font-semibold">
              Violating these policies will result in immediate account suspension and potential legal action.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Dispute Resolution */}
      <div className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <ScaleIcon className="w-16 h-16 mx-auto text-primary-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dispute Resolution Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If something goes wrong, we're here to help with our fair and transparent dispute resolution
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" />

            <div className="space-y-12">
              {disputeProcess.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-primary-600 font-semibold">{step.timeline}</p>
                  </div>

                  <div className="relative z-10 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-primary-50 rounded-2xl p-8 text-center"
          >
            <BanknotesIcon className="w-12 h-12 mx-auto text-primary-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Escrow Protection</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              All payments are held in escrow until both parties confirm successful transaction completion.
              This ensures you're protected if items aren't as described or never arrive.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Insurance Claims */}
      <div className="section-padding bg-gray-100">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Insurance Claims Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optional Brrow Insurance Program covers damage, theft, or loss during transactions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {insuranceClaims.map((claim, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <claim.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{claim.title}</h3>
                <p className="text-gray-600">{claim.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white rounded-2xl p-8 border-2 border-primary-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Coverage Details</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary-600 mb-2">Up to $2,500</p>
                <p className="text-gray-600">Per transaction coverage</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600 mb-2">$50</p>
                <p className="text-gray-600">Deductible per claim</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600 mb-2">3-5%</p>
                <p className="text-gray-600">Of transaction value</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rating System */}
      <div className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              User Rating & Review System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our transparent rating system builds trust and accountability in the community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ratingSystem.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border-2 border-primary-200"
              >
                <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Rating Criteria</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⭐</div>
                <p className="font-semibold text-gray-900">Communication</p>
                <p className="text-sm text-gray-600">Responsiveness & clarity</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📦</div>
                <p className="font-semibold text-gray-900">Item Condition</p>
                <p className="text-sm text-gray-600">Accuracy of description</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⏰</div>
                <p className="font-semibold text-gray-900">Timeliness</p>
                <p className="text-sm text-gray-600">On-time pickup/return</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🤝</div>
                <p className="font-semibold text-gray-900">Experience</p>
                <p className="text-sm text-gray-600">Overall transaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Suspension & Ban Policy */}
      <div className="section-padding bg-gray-100">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <NoSymbolIcon className="w-16 h-16 mx-auto text-gray-700 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Account Suspension & Ban Policy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We enforce strict policies to maintain community standards and protect all users
            </p>
          </motion.div>

          <div className="space-y-6">
            {banPolicy.map((policy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{policy.violation}</h3>
                    <p className="text-sm font-semibold text-primary-600">Examples:</p>
                  </div>
                  <div className="md:w-1/3">
                    <ul className="space-y-2">
                      {policy.examples.map((example, exampleIdx) => (
                        <li key={exampleIdx} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/3">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Consequence:</p>
                    <p className="text-gray-700">{policy.consequence}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Appeal Process</h3>
            <p className="text-gray-700">
              If you believe your account was suspended or banned in error, you may appeal by contacting
              support@brrowapp.com within 14 days with relevant evidence. Appeals are reviewed within 5-7
              business days.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-center text-white"
          >
            <PhoneArrowUpRightIcon className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Emergency Contact Information</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              If you experience an emergency, feel unsafe, or witness illegal activity, contact authorities immediately
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Emergency Services</h3>
                <p className="text-3xl font-bold mb-1">911</p>
                <p className="text-sm text-red-100">Police, Fire, Ambulance</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Brrow Safety Team</h3>
                <p className="text-xl font-bold mb-1">1-800-BRROW-911</p>
                <p className="text-sm text-red-100">24/7 Support Line</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Report via Email</h3>
                <p className="text-xl font-bold mb-1">support@brrowapp.com</p>
                <p className="text-sm text-red-100">Response within 1 hour</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-left">
              <h3 className="font-bold text-lg mb-4">Safety Tips for Meetups:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Meet in public, well-lit locations during daytime hours</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Tell a friend or family member about the meetup location and time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Check the user's profile, ratings, and verification status before meeting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Trust your instincts - if something feels wrong, cancel the meetup</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Never share personal financial information outside the Brrow platform</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Support CTA */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions About Trust & Safety?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our dedicated support team is here to help you feel safe and protected on Brrow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@brrowapp.com"
                className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Contact Support
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-bold text-lg hover:bg-primary-50 transform hover:scale-105 transition-all"
              >
                Report an Issue
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
