import { motion } from 'framer-motion';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

export function LaunchStatus() {
  const progress = 78; // Percentage ready for launch

  const milestones = [
    { label: 'Platform Design', completed: true },
    { label: 'Core Features', completed: true },
    { label: 'Payment Integration', completed: true },
    { label: 'Beta Testing', completed: false, current: true },
    { label: 'App Store Review', completed: false },
    { label: 'Public Launch', completed: false },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Launch Progress</h3>
          <p className="text-gray-600">We're almost ready to launch!</p>
        </div>
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <RocketLaunchIcon className="w-12 h-12 text-primary-600" />
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">Overall Progress</span>
          <span className="text-2xl font-bold text-primary-600">{progress}%</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
          />
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              milestone.completed
                ? 'bg-green-100 text-green-600'
                : milestone.current
                ? 'bg-primary-100 text-primary-600 ring-2 ring-primary-300'
                : 'bg-gray-100 text-gray-400'
            }`}>
              {milestone.completed ? (
                <span className="text-lg">✓</span>
              ) : milestone.current ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-3 h-3 bg-primary-600 rounded-full"
                />
              ) : (
                <span className="text-lg">○</span>
              )}
            </div>
            <div className="flex-1">
              <span className={`font-medium ${
                milestone.completed
                  ? 'text-green-900'
                  : milestone.current
                  ? 'text-primary-900'
                  : 'text-gray-500'
              }`}>
                {milestone.label}
              </span>
              {milestone.current && (
                <span className="ml-2 text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                  In Progress
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Estimated Launch */}
      <div className="mt-8 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl text-center">
        <p className="text-sm text-primary-700 font-medium mb-1">Estimated Launch</p>
        <p className="text-2xl font-bold text-primary-900">Q1 2026</p>
      </div>
    </div>
  );
}