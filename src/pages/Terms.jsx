import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export function Terms() {
  const lastUpdated = 'October 15, 2025';

  const sections = [
    {
      id: 'acceptance',
      icon: DocumentTextIcon,
      title: '1. Acceptance of Terms',
      content: [
        'By accessing or using the Brrow platform (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.',
        'You must be at least 18 years of age to use Brrow. By creating an account, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into this agreement.',
        'These Terms constitute a legally binding agreement between you and Brrow, Inc. ("Brrow," "we," "us," or "our").',
      ],
    },
    {
      id: 'registration',
      icon: UserGroupIcon,
      title: '2. Account Registration and Verification',
      content: [
        'To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during the registration process.',
        'All users must complete identity verification, including government-issued photo ID and phone number verification, before conducting transactions on the platform.',
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        'You must notify us immediately of any unauthorized use of your account or any other breach of security.',
        'We reserve the right to refuse registration or cancel accounts at our sole discretion.',
      ],
    },
    {
      id: 'fees',
      icon: CurrencyDollarIcon,
      title: '3. Platform Fees and Payments',
      content: [
        'Brrow charges a 5% service fee on all transactions conducted through the platform. This fee applies to buying, selling, and lending transactions.',
        'The 5% fee is automatically calculated and deducted from the total transaction amount at the time of payment.',
        'Sellers and lenders will receive 95% of the transaction price, with Brrow retaining 5% as the platform fee.',
        'All payments are processed through our secure payment system. We do not store your complete credit card information.',
        'Transaction fees are non-refundable except in cases where we determine, in our sole discretion, that a refund is warranted.',
        'Additional fees may apply for optional services such as the Brrow Insurance Program.',
      ],
    },
    {
      id: 'escrow',
      icon: ShieldCheckIcon,
      title: '4. Escrow System',
      content: [
        'All monetary transactions on Brrow are processed through our secure escrow system to protect both buyers and sellers.',
        'When a buyer initiates a purchase or rental, payment is held in escrow until the transaction is successfully completed.',
        'For purchases: funds are released to the seller once the buyer confirms receipt of the item in satisfactory condition.',
        'For rentals: a security deposit may be held in escrow and released back to the renter upon successful return of the item.',
        'If a dispute arises, funds will remain in escrow until the dispute is resolved through our dispute resolution process.',
        'The escrow system does not apply to giveaway transactions, which involve no monetary exchange.',
      ],
    },
    {
      id: 'responsibilities',
      icon: ExclamationTriangleIcon,
      title: '5. User Responsibilities',
      content: [
        'Accurate Listings: You must provide truthful, accurate, and complete descriptions of all items listed on the platform, including clear photographs, condition details, and any defects or limitations.',
        'Safe Meetups: You are responsible for arranging safe, public meeting locations for in-person exchanges. We recommend meeting in well-lit, public areas with security cameras.',
        'Honest Transactions: You must conduct all transactions honestly and in good faith. Misrepresentation of items, their condition, or availability is strictly prohibited.',
        'Item Condition: Sellers must ensure items are in the condition described. Lenders must ensure items are safe and functional for their intended use.',
        'Timely Communication: You must respond to messages and transaction requests in a timely manner.',
        'Compliance with Laws: You are responsible for complying with all applicable local, state, and federal laws in connection with your use of the Service.',
      ],
    },
    {
      id: 'prohibited',
      icon: ExclamationTriangleIcon,
      title: '6. Prohibited Activities',
      content: [
        'You may not use the Service to:',
        '• Engage in fraud, misrepresentation, or deceptive practices',
        '• Harass, threaten, or abuse other users',
        '• List or sell illegal items, stolen goods, or items that violate intellectual property rights',
        '• List weapons, explosives, drugs, or other controlled substances',
        '• List counterfeit or unauthorized replica items',
        '• Engage in price manipulation or unfair business practices',
        '• Circumvent or manipulate our fee structure or escrow system',
        '• Create multiple accounts to evade account restrictions or suspensions',
        '• Use automated systems or bots to interact with the Service',
        '• Collect user information without consent',
        '• Interfere with or disrupt the Service or servers',
        '• Violate any applicable laws or regulations',
        'Violation of these prohibitions may result in immediate account suspension or termination and possible legal action.',
      ],
    },
    {
      id: 'liability',
      icon: ScaleIcon,
      title: '7. Limitation of Liability',
      content: [
        'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.',
        'Brrow acts solely as a platform connecting users. We are not a party to any transaction between users and assume no liability for the quality, safety, legality, or accuracy of items listed.',
        'We do not guarantee the accuracy of user-provided information, including item descriptions, user profiles, or reviews.',
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, BRROW SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICE.',
        'Our total liability to you for any claims arising from your use of the Service shall not exceed the amount of fees you paid to Brrow in the twelve (12) months preceding the claim.',
        'We are not liable for any loss, damage, or injury resulting from in-person meetups or exchanges between users.',
        'Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.',
      ],
    },
    {
      id: 'disputes',
      icon: ScaleIcon,
      title: '8. Dispute Resolution',
      content: [
        'If a dispute arises between users regarding a transaction, we encourage users to first attempt to resolve the matter directly with each other.',
        'Users may submit disputes to Brrow for mediation. We will review evidence provided by both parties and make a determination in good faith.',
        'Our dispute resolution process may include reviewing messages, transaction history, photographs, and other relevant evidence.',
        'Decisions made by Brrow in dispute resolution are final and binding. Funds held in escrow will be distributed according to our determination.',
        'We reserve the right to refuse to mediate disputes or to require users to pursue resolution through other means.',
        'For legal disputes with Brrow, you agree to first attempt informal resolution by contacting legal@brrowapp.com.',
        'Any legal claims against Brrow must be brought within one (1) year of the event giving rise to the claim.',
      ],
    },
    {
      id: 'insurance',
      icon: ShieldCheckIcon,
      title: '9. Brrow Insurance Program',
      content: [
        'Brrow offers an optional Insurance Program for eligible listings, providing coverage against damage, theft, or loss.',
        'Insurance Program terms, coverage limits, premiums, and eligibility requirements are detailed in a separate Insurance Program Agreement.',
        'Participation in the Insurance Program is voluntary and subject to additional fees.',
        'Insurance coverage does not apply to items that are misrepresented, prohibited, or excluded under the Insurance Program terms.',
        'Claims must be filed within the timeframe specified in the Insurance Program Agreement and must include required documentation.',
        'We reserve the right to modify, suspend, or terminate the Insurance Program at any time with notice to participants.',
      ],
    },
    {
      id: 'suspension',
      icon: ExclamationTriangleIcon,
      title: '10. Account Suspension and Termination',
      content: [
        'We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to:',
        '• Violation of these Terms of Service',
        '• Fraudulent or illegal activity',
        '• Multiple user complaints or negative feedback',
        '• Failure to complete identity verification',
        '• Suspicious or unusual account activity',
        '• Non-payment of fees owed to Brrow',
        'Upon termination, you will lose access to your account and any pending transactions may be canceled.',
        'You may terminate your account at any time by contacting support. You remain liable for any fees or obligations incurred prior to termination.',
        'Funds held in escrow at the time of account termination will be processed according to transaction status and our dispute resolution procedures.',
      ],
    },
    {
      id: 'intellectual-property',
      icon: DocumentTextIcon,
      title: '11. Intellectual Property',
      content: [
        'The Brrow platform, including its design, features, functionality, and content (excluding user-generated content), is owned by Brrow, Inc. and is protected by copyright, trademark, and other intellectual property laws.',
        'You retain ownership of content you post on Brrow, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content for the purpose of operating and promoting the Service.',
        'You represent and warrant that you have all necessary rights to any content you post and that such content does not infringe on any third-party rights.',
        'You may not use the Brrow name, logo, or trademarks without our prior written permission.',
        'You may not copy, modify, distribute, or create derivative works based on the Service without our authorization.',
      ],
    },
    {
      id: 'indemnification',
      icon: ScaleIcon,
      title: '12. Indemnification',
      content: [
        'You agree to indemnify, defend, and hold harmless Brrow, Inc., its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys\' fees) arising out of or relating to:',
        '• Your use of the Service',
        '• Your violation of these Terms',
        '• Your violation of any rights of another person or entity',
        '• Any content you post on the platform',
        '• Any transaction or interaction with other users',
        'This indemnification obligation will survive termination of your account and these Terms.',
      ],
    },
    {
      id: 'governing-law',
      icon: ScaleIcon,
      title: '13. Governing Law and Jurisdiction',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles.',
        'Any legal action or proceeding arising out of or relating to these Terms or the Service shall be brought exclusively in the federal or state courts located in Santa Clara County, California.',
        'You consent to the personal jurisdiction of such courts and waive any objection to venue in such courts.',
      ],
    },
    {
      id: 'modifications',
      icon: DocumentTextIcon,
      title: '14. Modifications to Terms',
      content: [
        'We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on the platform and updating the "Last Updated" date.',
        'Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.',
        'If you do not agree to the modified Terms, you must stop using the Service and may terminate your account.',
      ],
    },
    {
      id: 'general',
      icon: DocumentTextIcon,
      title: '15. General Provisions',
      content: [
        'Entire Agreement: These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Brrow regarding the Service.',
        'Severability: If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.',
        'Waiver: No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision.',
        'Assignment: You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms without restriction.',
        'No Agency: Nothing in these Terms creates any agency, partnership, joint venture, or employment relationship between you and Brrow.',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <ScaleIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-100">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-12"
          >
            <p className="text-gray-700 leading-relaxed">
              Welcome to Brrow. Please read these Terms of Service carefully before using our platform.
              By creating an account or using our services, you acknowledge that you have read, understood,
              and agree to be bound by these terms. If you have any questions, please contact us at{' '}
              <a
                href="mailto:legal@brrowapp.com"
                className="text-primary-600 hover:text-primary-700 font-semibold underline"
              >
                legal@brrowapp.com
              </a>.
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 flex-1">
                    {section.title}
                  </h2>
                </div>
                <div className="ml-16 space-y-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className={`text-gray-700 leading-relaxed ${
                        paragraph.startsWith('•')
                          ? 'ml-4'
                          : paragraph.startsWith('THE SERVICE') || paragraph.startsWith('TO THE MAXIMUM')
                          ? 'font-semibold text-gray-900'
                          : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              If you have any questions, concerns, or need clarification about these Terms of Service,
              our legal team is here to help.
            </p>
            <div className="space-y-3">
              <p className="text-lg">
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:legal@brrowapp.com"
                  className="underline hover:text-primary-200 transition-colors"
                >
                  legal@brrowapp.com
                </a>
              </p>
              <p className="text-sm text-primary-200">
                We typically respond to legal inquiries within 2-3 business days
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-4">Looking for more information?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about"
                className="text-primary-600 hover:text-primary-700 font-semibold hover:underline"
              >
                About Brrow
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/contact"
                className="text-primary-600 hover:text-primary-700 font-semibold hover:underline"
              >
                Contact Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/how-it-works"
                className="text-primary-600 hover:text-primary-700 font-semibold hover:underline"
              >
                How It Works
              </Link>
            </div>
          </motion.div>

          {/* Acknowledgment Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
          >
            <div className="flex items-start gap-3">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  By using Brrow, you acknowledge that you are at least 18 years of age and agree to
                  comply with all terms outlined above. You understand that Brrow charges a 5% fee on
                  all transactions and that all monetary exchanges are processed through our secure
                  escrow system. You accept responsibility for the accuracy of your listings and the
                  safety of your in-person transactions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
