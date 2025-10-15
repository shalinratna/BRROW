import { motion } from 'framer-motion';

export function PhoneMockup({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative mx-auto" style={{ width: '300px', height: '600px' }}>
        {/* Phone Body */}
        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-3 bg-black rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-20"></div>

            {/* Content */}
            <div className="h-full w-full relative">
              {children}
            </div>

            {/* Screen Overlay - Subtle Glare Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10"></div>

            {/* Screen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/3 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Volume Buttons */}
          <div className="absolute -left-1 top-32 w-1 h-8 bg-gray-800 rounded-l"></div>
          <div className="absolute -left-1 top-44 w-1 h-8 bg-gray-800 rounded-l"></div>

          {/* Power Button */}
          <div className="absolute -right-1 top-36 w-1 h-12 bg-gray-800 rounded-r"></div>
        </div>
      </div>
    </div>
  );
}

export function AppScreenshot({ title, image, description }) {
  return (
    <PhoneMockup>
      <div className="h-full flex flex-col bg-gray-50 overflow-hidden">
        {/* Status Bar */}
        <div className="flex items-center justify-between px-6 py-2 bg-white">
          <span className="text-xs font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <span className="text-xs">⚡</span>
            <span className="text-xs">📶</span>
            <span className="text-xs">🔋</span>
          </div>
        </div>

        {/* App Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="text-6xl mb-4">{image}</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Bottom Nav */}
        <div className="flex items-center justify-around px-6 py-4 bg-white border-t border-gray-200">
          <div className="text-center">
            <div className="text-xl mb-1">🏠</div>
            <span className="text-xs text-primary-600 font-semibold">Home</span>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1 opacity-40">🔍</div>
            <span className="text-xs text-gray-400">Browse</span>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1 opacity-40">💬</div>
            <span className="text-xs text-gray-400">Messages</span>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1 opacity-40">👤</div>
            <span className="text-xs text-gray-400">Profile</span>
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
}