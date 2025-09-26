import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  TruckIcon,
  DevicePhoneMobileIcon,
  StarIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Community-Driven',
      description: 'Connect with trusted neighbors and build lasting relationships through sharing.',
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Safe & Secure',
      description: 'Verified profiles, secure payments, and comprehensive protection for every rental.',
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: 'Save Money',
      description: 'Get what you need without the full purchase price. Earn money from items you own.',
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: 'Easy Delivery',
      description: 'Convenient pickup and delivery options that work with your schedule.',
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      title: 'Built-in Messaging',
      description: 'Communicate safely with renters and lenders through our secure messaging system.',
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: 'Mobile App',
      description: 'Manage your rentals on-the-go with our intuitive iOS and Android apps.',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Browse & Search',
      description: 'Find exactly what you need from trusted community members near you.',
    },
    {
      step: '2',
      title: 'Message & Book',
      description: 'Connect with the owner, ask questions, and book your rental securely.',
    },
    {
      step: '3',
      title: 'Pick Up & Enjoy',
      description: 'Meet up or arrange delivery, then enjoy your rental with peace of mind.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'San Francisco, CA',
      content: 'I saved $200 by borrowing a pressure washer instead of buying one. The owner was super helpful!',
      rating: 5,
    },
    {
      name: 'Mike T.',
      location: 'Austin, TX',
      content: 'Been renting out my tools and camera equipment. Great way to earn extra income from things I rarely use.',
      rating: 5,
    },
    {
      name: 'Jessica L.',
      location: 'Denver, CO',
      content: 'Perfect for one-time projects. Borrowed a tent for camping and it was in perfect condition.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '50K+', label: 'Items Shared' },
    { number: '$2M+', label: 'Money Saved' },
    { number: '99%', label: 'Happy Customers' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative container-custom section-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
            >
              <span className="text-gray-900">Skip the Buy,</span><br />
              <span className="gradient-text">Just Brrow It</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Share and borrow from your community. Get what you need without the full price,
              and earn money from items you already own.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link to="/browse">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Browsing
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              How <span className="gradient-text">Brrow</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting what you need is simple, safe, and social.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              Why Choose <span className="gradient-text">Brrow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of community sharing with features designed for safety,
              convenience, and trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              What Our <span className="gradient-text">Community</span> Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who are saving money and building community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Ready to Start Sharing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of community members who are saving money and building connections
              through the power of sharing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-500 hover:bg-gray-100 w-full sm:w-auto border-white"
                >
                  Join the Community
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/browse">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-500 w-full sm:w-auto"
                >
                  Browse Items
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}