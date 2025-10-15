import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { CheckCircleIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export function HowItWorks() {
  const steps = [
    {
      title: 'Create Your Profile',
      description: 'Sign up with your email or phone number and verify your identity for a safe community experience.',
      details: ['Quick 2-minute setup', 'ID verification', 'Add profile photo'],
    },
    {
      title: 'List or Browse',
      description: 'Share items you own to earn money, or find what you need from neighbors nearby.',
      details: ['Upload photos', 'Set your price', 'Choose availability'],
    },
    {
      title: 'Connect Safely',
      description: 'Message through our secure platform and arrange pickup or delivery.',
      details: ['Built-in messaging', 'Verified profiles', 'Clear communication'],
    },
    {
      title: 'Exchange & Enjoy',
      description: 'Meet up safely, exchange items, and enjoy your rental with peace of mind.',
      details: ['Flexible pickup times', 'Secure payments', 'Rate your experience'],
    },
  ];

  const safety = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Verified Profiles',
      description: 'All users verify their identity with ID and phone number for community safety.',
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: 'Secure Payments',
      description: 'Payments are processed securely with buyer and seller protection.',
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: 'Item Protection',
      description: 'Comprehensive coverage protects both renters and item owners.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              How <span className="gradient-text">Brrow</span> Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing is simple, safe, and rewarding. Here's how you can start saving money
              and earning from your unused items.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {index + 1}
                    </div>
                    <h2 className="text-3xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-3" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center p-8">
                    {index === 0 && (
                      // Step 1: Create Profile - Person with checkmark
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="70" r="30" fill="#2563eb" opacity="0.2"/>
                        <circle cx="100" cy="70" r="22" fill="#2563eb"/>
                        <path d="M100 92 Q70 92 60 110 L60 140 Q60 150 70 150 L130 150 Q140 150 140 140 L140 110 Q130 92 100 92Z" fill="#2563eb" opacity="0.2"/>
                        <path d="M100 95 Q75 95 67 110 L67 135 Q67 142 73 142 L127 142 Q133 142 133 135 L133 110 Q125 95 100 95Z" fill="#2563eb"/>
                        <circle cx="140" cy="140" r="25" fill="#10b981" opacity="0.9"/>
                        <path d="M130 140 L137 147 L152 132" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {index === 1 && (
                      // Step 2: List or Browse - Phone with items
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect x="60" y="20" width="80" height="160" rx="10" fill="#2563eb" opacity="0.2"/>
                        <rect x="65" y="25" width="70" height="150" rx="8" fill="white"/>
                        <rect x="65" y="30" width="70" height="8" rx="4" fill="#2563eb" opacity="0.3"/>
                        <rect x="75" y="50" width="25" height="25" rx="4" fill="#10b981" opacity="0.3"/>
                        <rect x="105" y="50" width="25" height="25" rx="4" fill="#2563eb" opacity="0.3"/>
                        <rect x="75" y="80" width="25" height="25" rx="4" fill="#2563eb" opacity="0.5"/>
                        <rect x="105" y="80" width="25" height="25" rx="4" fill="#10b981" opacity="0.5"/>
                        <rect x="75" y="110" width="50" height="4" rx="2" fill="#2563eb" opacity="0.3"/>
                        <rect x="75" y="118" width="50" height="4" rx="2" fill="#2563eb" opacity="0.3"/>
                        <circle cx="100" cy="160" r="8" fill="#2563eb" opacity="0.3"/>
                        <circle cx="155" cy="60" r="20" fill="#10b981"/>
                        <text x="155" y="70" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">+</text>
                      </svg>
                    )}
                    {index === 2 && (
                      // Step 3: Connect Safely - Two people with messages
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="60" cy="70" r="20" fill="#2563eb" opacity="0.3"/>
                        <circle cx="60" cy="70" r="15" fill="#2563eb"/>
                        <path d="M60 85 Q45 85 40 95 L40 115 Q40 120 45 120 L75 120 Q80 120 80 115 L80 95 Q75 85 60 85Z" fill="#2563eb" opacity="0.3"/>
                        <circle cx="140" cy="70" r="20" fill="#10b981" opacity="0.3"/>
                        <circle cx="140" cy="70" r="15" fill="#10b981"/>
                        <path d="M140 85 Q125 85 120 95 L120 115 Q120 120 125 120 L155 120 Q160 120 160 115 L160 95 Q155 85 140 85Z" fill="#10b981" opacity="0.3"/>
                        <rect x="30" y="135" width="50" height="35" rx="8" fill="#2563eb" opacity="0.2"/>
                        <circle cx="38" cy="143" r="3" fill="#2563eb"/>
                        <circle cx="45" cy="143" r="3" fill="#2563eb"/>
                        <circle cx="52" cy="143" r="3" fill="#2563eb"/>
                        <rect x="120" y="145" width="50" height="35" rx="8" fill="#10b981" opacity="0.2"/>
                        <rect x="128" y="153" width="34" height="3" rx="1.5" fill="#10b981" opacity="0.6"/>
                        <rect x="128" y="160" width="28" height="3" rx="1.5" fill="#10b981" opacity="0.6"/>
                        <rect x="128" y="167" width="30" height="3" rx="1.5" fill="#10b981" opacity="0.6"/>
                      </svg>
                    )}
                    {index === 3 && (
                      // Step 4: Exchange & Enjoy - Handshake with star
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path d="M50 100 L70 100 L80 90 L90 100 L100 90 L110 100 L120 90 L130 100 L150 100" stroke="#2563eb" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
                        <path d="M55 100 L75 100 L85 92 L95 100 L100 95 L105 100 L115 92 L125 100 L145 100" stroke="#2563eb" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="40" y="100" width="20" height="40" rx="4" fill="#2563eb" opacity="0.3"/>
                        <rect x="140" y="100" width="20" height="40" rx="4" fill="#10b981" opacity="0.3"/>
                        <circle cx="100" cy="60" r="30" fill="#fbbf24" opacity="0.2"/>
                        <path d="M100 35 L105 50 L120 52 L110 62 L113 77 L100 69 L87 77 L90 62 L80 52 L95 50 Z" fill="#fbbf24"/>
                        <circle cx="145" cy="145" r="15" fill="#10b981" opacity="0.2"/>
                        <path d="M140 145 L145 150 L152 143" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Safety <span className="gradient-text">First</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built comprehensive safety features so you can share with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safety.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="text-primary-500 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}