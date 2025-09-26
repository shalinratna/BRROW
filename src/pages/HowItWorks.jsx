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
                  <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">Step {index + 1} Illustration</span>
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