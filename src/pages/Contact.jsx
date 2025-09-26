import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [mathCaptcha, setMathCaptcha] = useState({ question: '', answer: 0 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  // Generate random math captcha
  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setMathCaptcha({
      question: `${num1} + ${num2}`,
      answer: num1 + num2
    });
  }, []);

  // Set form start time for anti-spam timing
  useEffect(() => {
    localStorage.setItem('brrowFormStartTime', Date.now().toString());
  }, []);

  const inquiryTypes = [
    'General Inquiry',
    'Renter Support',
    'Lender Support',
    'Safety & Trust',
    'Payment Issues',
    'Technical Issues',
    'Partnership Opportunities',
    'Press & Media',
    'Feedback & Suggestions',
    'Report a Problem',
    'Other',
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Anti-spam: Honeypot check (hidden field should be empty)
      if (data.website) {
        throw new Error('Spam detected. Please try again.');
      }

      // Anti-spam: Math captcha check
      const userAnswer = parseInt(data.mathCaptcha);
      if (userAnswer !== mathCaptcha.answer) {
        throw new Error('Please solve the math problem correctly.');
      }

      // Anti-spam: Time delay check (form should take at least 5 seconds to fill)
      const formStartTime = localStorage.getItem('brrowFormStartTime');
      if (formStartTime && (Date.now() - parseInt(formStartTime)) < 5000) {
        throw new Error('Please take more time to fill out the form.');
      }

      // Send email via Formspree
      const response = await fetch('https://formspree.io/f/mdknoqap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          inquiryType: data.inquiryType,
          subject: data.subject,
          message: data.message,
          _subject: `BRROW Contact: ${data.subject || data.inquiryType}`,
          _replyto: data.email,
          _format: 'plain'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setSubmitSuccess(true);
      reset();

      // Generate new math captcha
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      setMathCaptcha({
        question: `${num1} + ${num2}`,
        answer: num1 + num2
      });

      // Reset form start time
      localStorage.setItem('brrowFormStartTime', Date.now().toString());

    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Get in Touch with </span>
            <span className="gradient-text">Brrow</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Questions about renting or lending? Need support? Want to partner with us?
            We're here to help build a better sharing economy together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@brrowapp.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Support</h3>
                    <p className="text-gray-600">Available 24/7 through the app</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">
                      San Francisco, CA<br />
                      Building the future of sharing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Response Times</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• General inquiries: Within 24 hours</li>
                <li>• Support issues: Within 4 hours</li>
                <li>• Safety concerns: Immediate response</li>
                <li>• Partnership inquiries: Within 48 hours</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">Message sent successfully!</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  We'll get back to you soon. Thanks for contacting Brrow!
                </p>
              </motion.div>
            )}

            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="flex items-center">
                  <ExclamationTriangleIcon className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-800 font-medium">{submitError}</span>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field - hidden from users, visible to bots */}
              <input
                type="text"
                {...register('website')}
                style={{ position: 'absolute', left: '-9999px' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.name.message}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.email.message}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    {...register('inquiryType', { required: 'Please select an inquiry type' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.inquiryType && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.inquiryType.message}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  {...register('subject')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Brief subject line"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <div className="flex items-center mt-2 text-red-600">
                    <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{errors.message.message}</span>
                  </div>
                )}
              </div>

              {/* Math Captcha */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Security Check: What is {mathCaptcha.question}? *
                </label>
                <input
                  type="number"
                  {...register('mathCaptcha', {
                    required: 'Please solve the math problem',
                    valueAsNumber: true
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.mathCaptcha ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter the answer"
                />
                {errors.mathCaptcha && (
                  <div className="flex items-center mt-2 text-red-600">
                    <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{errors.mathCaptcha.message}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Support</h3>
            <p className="text-gray-600">
              Get help through our in-app chat for immediate assistance with your rentals.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
            <p className="text-gray-600">
              Report safety concerns immediately for priority handling by our trust & safety team.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Join our community forums to connect with other users and share experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}