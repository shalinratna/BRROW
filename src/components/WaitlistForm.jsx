import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export function WaitlistForm({ source = 'homepage', compact = false }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(Math.floor(Math.random() * 500) + 8500);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    localStorage.setItem('brrowWaitlistStartTime', Date.now().toString());

    // Animate counter slightly
    const interval = setInterval(() => {
      setWaitlistCount(prev => prev + Math.floor(Math.random() * 3));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Anti-spam: Honeypot check
      if (data.website) {
        throw new Error('Spam detected.');
      }

      // Anti-spam: Time delay
      const formStartTime = localStorage.getItem('brrowWaitlistStartTime');
      if (formStartTime && (Date.now() - parseInt(formStartTime)) < 2000) {
        throw new Error('Please slow down.');
      }

      const response = await fetch('https://formspree.io/f/mdknoqap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          source: source,
          type: 'waitlist_signup',
          _subject: `🚀 New Waitlist Signup: ${data.email}`,
          _replyto: data.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist. Please try again.');
      }

      setSubmitSuccess(true);
      reset();
      localStorage.setItem('brrowWaitlistStartTime', Date.now().toString());

    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess && !compact) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center"
      >
        <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">
          You're on the list! 🎉
        </h3>
        <p className="text-green-700 mb-6">
          We'll notify you as soon as the app launches. Get ready to rent anything!
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://twitter.com/intent/tweet?text=Just%20joined%20the%20waitlist%20for%20@BrrowApp%20-%20the%20peer-to-peer%20rental%20marketplace!%20🚀"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Share on Twitter
          </a>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Add Another
          </button>
        </div>
      </motion.div>
    );
  }

  if (submitSuccess && compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
      >
        <CheckCircleIcon className="w-6 h-6 text-green-600 mx-auto mb-2" />
        <p className="text-sm font-semibold text-green-800">You're on the waitlist! 🎉</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        {...register('website')}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex="-1"
        autoComplete="off"
      />

      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2"
        >
          <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
          <span className="text-sm text-red-800">{submitError}</span>
        </motion.div>
      )}

      {!compact && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="John Doe"
          />
        </div>
      )}

      <div>
        {!compact && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
        )}
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
          } ${compact ? 'text-sm' : ''}`}
          placeholder={compact ? "Enter your email" : "you@example.com"}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 ${
          compact ? 'py-3 text-sm' : 'py-4'
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Joining...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5" />
            Join the Waitlist
          </>
        )}
      </button>

      {!compact && (
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <span className="text-primary-600 font-semibold">{waitlistCount.toLocaleString()}</span>
          <span>people already on the waitlist</span>
        </div>
      )}

      <p className="text-xs text-gray-500 text-center">
        We'll only email you about the app launch. No spam, ever.
      </p>
    </form>
  );
}