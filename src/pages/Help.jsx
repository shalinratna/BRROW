import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <motion.div
      initial={false}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

function AccordionSection({ title, faqs, icon: Icon }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="w-7 h-7 text-primary-600" />}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Help() {
  const gettingStartedFaqs = [
    {
      question: 'How does Brrow work?',
      answer: (
        <div className="space-y-3">
          <p>
            Brrow is a peer-to-peer platform that lets you <strong>buy</strong>, <strong>sell</strong>,
            <strong> lend</strong>, and <strong>give away</strong> items in your local community.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Buy:</strong> Find great deals on items you need from verified sellers nearby</li>
            <li><strong>Sell:</strong> List items you no longer need and earn money instantly</li>
            <li><strong>Lend:</strong> Rent out items you own and earn passive income</li>
            <li><strong>Giveaway:</strong> Give items a second life by helping others in your community</li>
          </ul>
          <p className="mt-3">
            All transactions are protected by our secure escrow system and optional insurance program.
          </p>
        </div>
      ),
    },
    {
      question: 'Is Brrow free to use?',
      answer: 'Creating an account and browsing items is completely free. We only charge a 5% platform fee on successful transactions, meaning you keep 95% of what you earn. There are no monthly subscriptions, listing fees, or hidden charges.',
    },
    {
      question: 'How do I download the app?',
      answer: (
        <div className="space-y-3">
          <p>
            Brrow is currently available on iOS via TestFlight (beta program). You can download it here:
          </p>
          <a
            href="https://testflight.apple.com/join/P1akbT8z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Download iOS Beta on TestFlight
          </a>
          <p className="text-sm text-gray-500">
            Android version coming Q2 2026
          </p>
        </div>
      ),
    },
    {
      question: 'Who can use Brrow?',
      answer: 'Anyone 18 years or older can use Brrow. You\'ll need to verify your identity with a government-issued ID and phone number to create an account. This helps us maintain a safe and trusted community for all users.',
    },
  ];

  const buyingFaqs = [
    {
      question: 'How do I find items to buy or borrow?',
      answer: 'Browse available listings in your area using our search and filter features. You can search by category, price range, location, and availability. All items show photos, descriptions, pricing, and seller ratings to help you make informed decisions.',
    },
    {
      question: 'How do payments work?',
      answer: 'All payments are processed securely through our platform. When you purchase or rent an item, the payment is held in escrow until the transaction is complete. This protects both buyers and sellers. You can pay using credit/debit cards or other supported payment methods.',
    },
    {
      question: 'What if an item is damaged or not as described?',
      answer: 'If an item isn\'t as described or arrives damaged, contact our support team immediately at support@brrowapp.com. Our escrow system holds the payment until both parties confirm the transaction is complete, giving you protection. For rentals, our optional insurance program can provide additional coverage.',
    },
    {
      question: 'Can I cancel a purchase or rental?',
      answer: 'Cancellation policies vary by listing. Contact the seller directly through our messaging system to discuss cancellations. If you cancel before pickup/delivery, you may be eligible for a refund minus a small processing fee. Review the seller\'s cancellation policy before confirming your transaction.',
    },
  ];

  const sellingFaqs = [
    {
      question: 'How do I list an item?',
      answer: 'Listing an item is simple: Take clear photos, write a detailed description, set your price or rental rate, choose your availability, and publish. You can list items for sale, rent, or giveaway. There are no upfront fees to create a listing.',
    },
    {
      question: 'What are the fees for selling?',
      answer: 'Brrow charges only 5% per transaction, meaning you keep 95% of what you earn. This is one of the lowest fees in the industry. There are no monthly fees, listing fees, or hidden charges. You only pay when you successfully complete a transaction.',
    },
    {
      question: 'How do I receive payments?',
      answer: 'Payments are automatically transferred to your connected bank account or payment method after the transaction is completed and confirmed. For sales, this typically happens within 24-48 hours after delivery. For rentals, payment is released after the item is returned.',
    },
    {
      question: 'Can I edit or delete my listing?',
      answer: 'Yes, you can edit or delete your listings at any time from your profile. Update photos, prices, descriptions, and availability as needed. If you have pending transactions, you\'ll need to complete or cancel them before deleting the listing.',
    },
  ];

  const lendingFaqs = [
    {
      question: 'How does lending work on Brrow?',
      answer: 'Lending lets you rent out items you own to earn passive income. Set your daily, weekly, or monthly rental rates, choose your availability, and wait for renters to book your item. The renter pays upfront, and you receive payment once the item is returned in good condition.',
    },
    {
      question: 'What items can I lend?',
      answer: 'You can lend almost anything: tools, camping gear, cameras, sports equipment, party supplies, electronics, and more. Items should be in good working condition and safe to use. Prohibited items include weapons, illegal items, and anything hazardous.',
    },
    {
      question: 'What if my item gets damaged during a rental?',
      answer: 'Our optional Brrow Insurance Program provides coverage for items during rentals. If damage occurs, document it with photos and file a claim. The renter\'s security deposit may also cover minor damages. Always inspect items before and after rentals.',
    },
    {
      question: 'How do I set rental pricing?',
      answer: 'Research similar items on Brrow to see competitive rates. Consider the item\'s value, demand, and your desired return on investment. You can set daily, weekly, and monthly rates. Many lenders offer discounts for longer rental periods to encourage extended bookings.',
    },
  ];

  const giveawayFaqs = [
    {
      question: 'How do giveaways work?',
      answer: 'Giveaways let you donate items for free to people in your community. Simply list the item as a "giveaway," and interested users can request it. You choose who receives the item based on their profile, ratings, and message. There are no fees for giveaways.',
    },
    {
      question: 'Why would I give items away?',
      answer: 'Giveaways help reduce waste, support your community, and give items a second life instead of throwing them away. Many users give away furniture before moving, children\'s items they\'ve outgrown, or household items they no longer need. It\'s a great way to help others!',
    },
    {
      question: 'Can I choose who gets my giveaway item?',
      answer: 'Yes! You have full control over who receives your giveaway. Review requesters\' profiles, ratings, and messages before deciding. You can arrange pickup times and locations that work best for you.',
    },
  ];

  const safetyFaqs = [
    {
      question: 'How does Brrow keep me safe?',
      answer: (
        <div className="space-y-2">
          <p>Brrow has multiple safety features:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>ID Verification:</strong> All users verify their identity with government-issued ID</li>
            <li><strong>Phone Verification:</strong> Verified phone numbers for all accounts</li>
            <li><strong>Escrow System:</strong> Payments held securely until transactions complete</li>
            <li><strong>Insurance Program:</strong> Optional coverage for high-value items</li>
            <li><strong>Rating System:</strong> Review and rate other users after each transaction</li>
            <li><strong>In-App Messaging:</strong> Communicate safely without sharing personal contact info</li>
          </ul>
        </div>
      ),
    },
    {
      question: 'How do I get verified?',
      answer: 'Verification is required for all users and takes just a few minutes. You\'ll need to provide a government-issued ID (driver\'s license, passport, or state ID) and verify your phone number. This helps us maintain a trusted community and prevents fraud.',
    },
    {
      question: 'What is the insurance program?',
      answer: 'The Brrow Insurance Program is optional coverage you can add to your rentals for extra protection. It covers damage, theft, or loss during the rental period. Insurance costs vary based on the item\'s value and rental duration. This gives both lenders and renters peace of mind.',
    },
    {
      question: 'What should I do if I feel unsafe during a transaction?',
      answer: 'Your safety is our top priority. Always meet in public places, bring a friend if possible, and trust your instincts. If something feels wrong, cancel the transaction and report the issue to our support team at support@brrowapp.com. We take all safety concerns seriously.',
    },
  ];

  const feesFaqs = [
    {
      question: 'What are Brrow\'s fees?',
      answer: (
        <div className="space-y-2">
          <p>
            Brrow charges <strong>only 5% per transaction</strong>. This means you keep <strong>95% of what you earn</strong> –
            one of the lowest fees in the industry.
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>No monthly subscription fees</li>
            <li>No listing fees</li>
            <li>No hidden charges</li>
            <li>No fees for giveaways</li>
          </ul>
          <p className="mt-2 text-sm text-gray-500">
            Payment processing fees may apply depending on your payment method.
          </p>
        </div>
      ),
    },
    {
      question: 'How does the escrow system work?',
      answer: 'When a buyer purchases or rents an item, their payment is held securely in escrow. The seller doesn\'t receive the funds until the buyer confirms they\'ve received the item (for sales) or the item is returned in good condition (for rentals). This protects both parties and ensures fair transactions.',
    },
    {
      question: 'Are there any additional fees?',
      answer: 'The 5% platform fee is our only standard charge. Optional add-ons like the Brrow Insurance Program have separate costs based on the item value and rental duration. Payment processing fees may vary depending on your chosen payment method.',
    },
    {
      question: 'When do I receive my payment?',
      answer: 'For sales: Payments are typically transferred to your account within 24-48 hours after the buyer confirms delivery. For rentals: Payments are released after the item is returned and confirmed in good condition. All payments are subject to our escrow completion process.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <QuestionMarkCircleIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Find answers to common questions about buying, selling, lending, and giving away
              on Brrow. We're here to help you get the most out of our platform.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <CurrencyDollarIcon className="w-10 h-10 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">5%</div>
              <div className="text-sm text-gray-600">Platform Fee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <ShieldCheckIcon className="w-10 h-10 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Verified Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <CheckBadgeIcon className="w-10 h-10 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">24-48hr</div>
              <div className="text-sm text-gray-600">Support Response</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <DevicePhoneMobileIcon className="w-10 h-10 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">iOS</div>
              <div className="text-sm text-gray-600">Beta Available</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <AccordionSection
            title="Getting Started"
            faqs={gettingStartedFaqs}
            icon={QuestionMarkCircleIcon}
          />

          <AccordionSection
            title="Buying & Borrowing"
            faqs={buyingFaqs}
            icon={ShieldCheckIcon}
          />

          <AccordionSection
            title="Selling"
            faqs={sellingFaqs}
            icon={CurrencyDollarIcon}
          />

          <AccordionSection
            title="Lending & Renting"
            faqs={lendingFaqs}
            icon={DevicePhoneMobileIcon}
          />

          <AccordionSection
            title="Giving Away"
            faqs={giveawayFaqs}
            icon={CheckBadgeIcon}
          />

          <AccordionSection
            title="Safety & Security"
            faqs={safetyFaqs}
            icon={ShieldCheckIcon}
          />

          <AccordionSection
            title="Fees & Payments"
            faqs={feesFaqs}
            icon={CurrencyDollarIcon}
          />
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white"
          >
            <EnvelopeIcon className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="bg-white/10 rounded-xl p-6 mb-6 inline-block">
              <p className="text-sm text-primary-200 mb-2">Email us at</p>
              <a
                href="mailto:support@brrowapp.com"
                className="text-2xl font-bold text-white hover:text-primary-200 transition-colors"
              >
                support@brrowapp.com
              </a>
              <p className="text-sm text-primary-200 mt-3">
                We typically respond within 24-48 hours
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="https://testflight.apple.com/join/P1akbT8z"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
              >
                Download iOS Beta
              </a>
              <a
                href="mailto:support@brrowapp.com"
                className="px-8 py-4 bg-primary-800 text-white rounded-xl font-bold text-lg border-2 border-primary-600 hover:bg-primary-900 transform hover:scale-105 transition-all"
              >
                Contact Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
