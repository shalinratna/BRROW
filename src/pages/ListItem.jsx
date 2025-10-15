import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  PhotoIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export function ListItem() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const categories = [
    'Electronics & Cameras',
    'Tools & Equipment',
    'Outdoor & Sports',
    'Party & Events',
    'Photography & Video',
    'Music & Audio',
    'Transportation',
    'Home & Garden',
    'Camping & Hiking',
    'Water Sports',
    'Winter Sports',
    'Gaming & Entertainment',
    'Baby & Kids',
    'Other',
  ];

  const conditions = [
    'Brand New',
    'Like New',
    'Excellent',
    'Good',
    'Fair',
  ];

  const pricingModels = [
    'Per Hour',
    'Per Day',
    'Per Week',
    'Per Month',
  ];

  // Set form start time for anti-spam timing
  useEffect(() => {
    localStorage.setItem('brrowListItemStartTime', Date.now().toString());
  }, []);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prev => [...prev, ...imageUrls].slice(0, 5)); // Max 5 images
  };

  const removeImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Anti-spam: Honeypot check
      if (data.website) {
        throw new Error('Spam detected. Please try again.');
      }

      // Anti-spam: Time delay check
      const formStartTime = localStorage.getItem('brrowListItemStartTime');
      if (formStartTime && (Date.now() - parseInt(formStartTime)) < 5000) {
        throw new Error('Please take more time to fill out the form.');
      }

      // Validate at least one image
      if (selectedImages.length === 0) {
        throw new Error('Please add at least one image of your item.');
      }

      // Send listing submission via Formspree
      const response = await fetch('https://formspree.io/f/mdknoqap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemName: data.itemName,
          category: data.category,
          description: data.description,
          condition: data.condition,
          price: data.price,
          pricingModel: data.pricingModel,
          location: data.location,
          availability: data.availability,
          deposit: data.deposit,
          contactName: data.contactName,
          contactEmail: data.contactEmail,
          contactPhone: data.contactPhone,
          imageCount: selectedImages.length,
          _subject: `New Item Listing: ${data.itemName}`,
          _replyto: data.contactEmail,
          _format: 'plain'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit listing. Please try again.');
      }

      setSubmitSuccess(true);
      reset();
      setSelectedImages([]);
      localStorage.setItem('brrowListItemStartTime', Date.now().toString());

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      setSubmitError(error.message);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <RocketLaunchIcon className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              List Now for Q1 2026 Launch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Be Ready When </span>
            <span className="gradient-text">Brrow</span>
            <span className="text-gray-900"> Launches</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your items now and be among the first lenders when the app goes live.
            Early listers get featured placement and verified badges!
          </p>
        </motion.div>

        {/* Success/Error Messages */}
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl"
          >
            <div className="flex items-center">
              <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3" />
              <div>
                <span className="text-green-800 font-semibold text-lg block">You're on the Launch List!</span>
                <p className="text-green-700 text-sm mt-1">
                  Your item has been submitted for our Q1 2026 launch. We'll review it and notify you when
                  your listing goes live on the app. You'll get priority placement as an early lister!
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl"
          >
            <div className="flex items-center">
              <ExclamationTriangleIcon className="w-6 h-6 text-red-600 mr-3" />
              <span className="text-red-800 font-medium">{submitError}</span>
            </div>
          </motion.div>
        )}

        {/* Information Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-xl"
        >
          <div className="flex items-start">
            <RocketLaunchIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">Get Ready for Launch (Q1 2026):</h3>
              <ul className="text-sm text-primary-800 space-y-1">
                <li>• Submit your items now for priority placement when we launch</li>
                <li>• Early listers get verified badges and featured listings</li>
                <li>• Take clear, well-lit photos from multiple angles</li>
                <li>• Set competitive prices based on similar items</li>
                <li>• You'll earn 95% of each transaction (Brrow takes only 5%)</li>
                <li>• Your listings go live on iOS & Android simultaneously</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Honeypot field */}
            <input
              type="text"
              {...register('website')}
              style={{ position: 'absolute', left: '-9999px' }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Item Basic Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <PhotoIcon className="w-7 h-7 mr-2 text-primary-600" />
                Item Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    {...register('itemName', { required: 'Item name is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      errors.itemName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Canon EOS R5 Camera, DeWalt Power Drill, Camping Tent"
                  />
                  {errors.itemName && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.itemName.message}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    {...register('category', { required: 'Category is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      errors.category ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat, index) => (
                      <option key={index} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.category.message}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    {...register('description', { required: 'Description is required' })}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Provide detailed information about your item: features, specifications, what's included, usage instructions, etc."
                  />
                  {errors.description && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.description.message}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition *
                  </label>
                  <select
                    {...register('condition', { required: 'Condition is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      errors.condition ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select condition</option>
                    {conditions.map((cond, index) => (
                      <option key={index} value={cond}>
                        {cond}
                      </option>
                    ))}
                  </select>
                  {errors.condition && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.condition.message}</span>
                    </div>
                  )}
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photos * (Up to 5 images)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                    <PhotoIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <label className="cursor-pointer">
                      <span className="text-primary-600 hover:text-primary-700 font-medium">
                        Click to upload photos
                      </span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-2">PNG, JPG, GIF up to 10MB each</p>
                  </div>

                  {/* Image Preview */}
                  {selectedImages.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {selectedImages.map((img, index) => (
                        <div key={index} className="relative">
                          <img
                            src={img}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Pricing Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CurrencyDollarIcon className="w-7 h-7 mr-2 text-primary-600" />
                Pricing & Availability
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rental Price *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      step="0.01"
                      {...register('price', {
                        required: 'Price is required',
                        min: { value: 1, message: 'Price must be at least $1' }
                      })}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.price ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="25.00"
                    />
                  </div>
                  {errors.price && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.price.message}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pricing Model *
                  </label>
                  <select
                    {...register('pricingModel', { required: 'Pricing model is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      errors.pricingModel ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select pricing model</option>
                    {pricingModels.map((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                  {errors.pricingModel && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.pricingModel.message}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Security Deposit (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500">$</span>
                    <input
                      type="number"
                      step="0.01"
                      {...register('deposit')}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Refundable deposit to protect against damage</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <input
                    type="text"
                    {...register('availability', { required: 'Availability is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      errors.availability ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Weekends only, Anytime, Mon-Fri"
                  />
                  {errors.availability && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.availability.message}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Location & Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPinIcon className="w-7 h-7 mr-2 text-primary-600" />
                Location & Contact
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location (City, State) *
                  </label>
                  <input
                    type="text"
                    {...register('location', { required: 'Location is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                      errors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., San Francisco, CA"
                  />
                  {errors.location && (
                    <div className="flex items-center mt-2 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{errors.location.message}</span>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Exact address will only be shared after booking confirmation</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      {...register('contactName', { required: 'Name is required' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.contactName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.contactName && (
                      <div className="flex items-center mt-2 text-red-600">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{errors.contactName.message}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('contactEmail', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.contactEmail ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.contactEmail && (
                      <div className="flex items-center mt-2 text-red-600">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{errors.contactEmail.message}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      {...register('contactPhone', { required: 'Phone is required' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                        errors.contactPhone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.contactPhone && (
                      <div className="flex items-center mt-2 text-red-600">
                        <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{errors.contactPhone.message}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting for Launch...
                  </>
                ) : (
                  <>
                    <RocketLaunchIcon className="w-5 h-5" />
                    List for Q1 2026 Launch
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting, you agree to our{' '}
                <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </form>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-white rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Launch Timeline</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Submit Now</h4>
              <p className="text-sm text-gray-600">
                Fill out the form and submit your item details for launch.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Review</h4>
              <p className="text-sm text-gray-600">
                We review your listing and prepare it for the app launch.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Launch Q1 2026</h4>
              <p className="text-sm text-gray-600">
                Your listing goes live when the app launches on iOS & Android.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Start Earning</h4>
              <p className="text-sm text-gray-600">
                Get rental requests and earn money as an early lister!
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl text-center">
            <p className="text-sm font-semibold text-gray-800">
              ⭐ Early Lister Bonus: Get a <span className="text-primary-600">Verified Badge</span> and <span className="text-primary-600">Featured Placement</span> when we launch!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}