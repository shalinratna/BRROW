import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  ArrowPathIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const RAILWAY_HEALTH_URL = 'https://brrow-backend-nodejs-production.up.railway.app/health';
const REFRESH_INTERVAL = 30000; // 30 seconds

export function Status() {
  const [services, setServices] = useState([
    {
      name: 'Backend API',
      status: 'checking',
      responseTime: null,
      lastChecked: null,
    },
  ]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const checkHealth = async () => {
    setIsRefreshing(true);
    const startTime = Date.now();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const response = await fetch(RAILWAY_HEALTH_URL, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      if (response.ok) {
        const data = await response.json();

        // Determine status based on response time
        let status = 'operational';
        if (responseTime > 2000) {
          status = 'degraded';
        }

        setServices([
          {
            name: 'Backend API',
            status: status,
            responseTime: responseTime,
            lastChecked: new Date(),
            details: data,
          },
        ]);
      } else {
        setServices([
          {
            name: 'Backend API',
            status: 'down',
            responseTime: responseTime,
            lastChecked: new Date(),
          },
        ]);
      }
    } catch (error) {
      // Timeout or network error
      const responseTime = Date.now() - startTime;
      setServices([
        {
          name: 'Backend API',
          status: 'down',
          responseTime: responseTime,
          lastChecked: new Date(),
          error: error.name === 'AbortError' ? 'Request timeout' : 'Network error',
        },
      ]);
    } finally {
      setIsRefreshing(false);
      setLastUpdate(new Date());
    }
  };

  useEffect(() => {
    // Initial check
    checkHealth();

    // Set up auto-refresh
    const interval = setInterval(checkHealth, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircleIcon className="w-8 h-8 text-green-500" />;
      case 'degraded':
        return <ExclamationTriangleIcon className="w-8 h-8 text-yellow-500" />;
      case 'down':
        return <XCircleIcon className="w-8 h-8 text-red-500" />;
      default:
        return <ArrowPathIcon className="w-8 h-8 text-gray-400 animate-spin" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500';
      case 'degraded':
        return 'bg-yellow-500';
      case 'down':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'operational':
        return 'All Systems Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'down':
        return 'Service Disruption';
      default:
        return 'Checking Status...';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'down':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const overallStatus = services[0]?.status || 'checking';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">System Status</h1>
            <p className="text-2xl text-primary-100">
              Real-time status of Brrow services
            </p>
          </motion.div>
        </div>
      </div>

      {/* Status Content */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Overall Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-12 mb-12 text-center"
          >
            <div className="flex justify-center mb-6">
              {getStatusIcon(overallStatus)}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {getStatusText(overallStatus)}
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
              <ClockIcon className="w-5 h-5" />
              <span>
                Last updated: {lastUpdate.toLocaleTimeString()} PST
              </span>
            </div>
            <button
              onClick={checkHealth}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowPathIcon className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Checking...' : 'Refresh Now'}
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Auto-refreshes every 30 seconds
            </p>
          </motion.div>

          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Services</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{service.name}</h4>
                        {service.lastChecked && (
                          <p className="text-sm text-gray-500">
                            Last checked: {service.lastChecked.toLocaleTimeString()}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border-2 ${getStatusBadgeColor(service.status)}`}>
                        {service.status === 'operational' && 'Operational'}
                        {service.status === 'degraded' && 'Degraded'}
                        {service.status === 'down' && 'Down'}
                        {service.status === 'checking' && 'Checking...'}
                      </span>
                      {service.responseTime !== null && (
                        <p className="text-sm text-gray-500 mt-2">
                          {service.responseTime}ms response time
                        </p>
                      )}
                    </div>
                  </div>

                  {service.error && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>Error:</strong> {service.error}
                      </p>
                    </div>
                  )}

                  {service.details && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-600 font-mono">
                        Uptime: {Math.floor(service.details.uptime / 3600)}h {Math.floor((service.details.uptime % 3600) / 60)}m
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Experiencing Issues?
            </h3>
            <p className="text-gray-600 mb-6">
              If you're having trouble with the Brrow app, check this page first to see if we're experiencing any service disruptions.
            </p>
            <a
              href="/help"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
            >
              Visit Help Center
            </a>
          </motion.div>

          {/* Status Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Status Indicators
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3"></div>
                <h4 className="font-bold text-gray-900 mb-2">Operational</h4>
                <p className="text-sm text-gray-600">
                  All systems functioning normally
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-3"></div>
                <h4 className="font-bold text-gray-900 mb-2">Degraded</h4>
                <p className="text-sm text-gray-600">
                  Service slower than usual but functional
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-3"></div>
                <h4 className="font-bold text-gray-900 mb-2">Down</h4>
                <p className="text-sm text-gray-600">
                  Service unavailable or not responding
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
