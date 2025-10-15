export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-600 mb-8">
            Last Updated: October 15, 2025
          </p>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to BRROW ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using BRROW, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
            </p>
          </section>

          {/* Data We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect several types of information to provide and improve our services to you:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Personal Identification Information
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Government-issued identification documents for verification purposes</li>
                  <li>Profile information including name, photo, and bio</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Location Information
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Real-time location data to facilitate item borrowing and lending in your area</li>
                  <li>Approximate location based on IP address</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Transaction Information
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Transaction history including items borrowed, lent, and payment details</li>
                  <li>Ratings and reviews</li>
                  <li>Communication between users related to transactions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Device Information
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Device type, operating system, and version</li>
                  <li>Unique device identifiers</li>
                  <li>Mobile network information</li>
                  <li>App usage data and performance metrics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
              <li>
                <strong>User Matching:</strong> To connect borrowers with lenders based on location, item availability, and preferences
              </li>
              <li>
                <strong>Safety and Verification:</strong> To verify user identities, prevent fraud, ensure platform safety, and comply with legal requirements
              </li>
              <li>
                <strong>Communication:</strong> To facilitate communication between users, send transaction notifications, updates, and important service announcements
              </li>
              <li>
                <strong>Service Improvement:</strong> To analyze usage patterns, improve app functionality, develop new features, and enhance user experience
              </li>
              <li>
                <strong>Customer Support:</strong> To respond to inquiries, resolve disputes, and provide technical assistance
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes
              </li>
            </ul>
          </section>

          {/* Third Parties */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Service Providers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with trusted third-party service providers who assist us in operating our platform:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Payment Processors
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  We work with secure payment processing partners to handle transactions. These providers have access to your payment information only to perform these services on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Verification Services
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  We use third-party identity verification services to authenticate users and ensure platform safety. These services may access your identification documents and personal information solely for verification purposes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Analytics Providers
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  We use analytics services to understand how users interact with our app, identify bugs, and improve performance. These services may collect device information, usage patterns, and other analytical data.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              All third-party service providers are contractually required to maintain the confidentiality and security of your personal information and may only use it for the specific purposes outlined in their agreements with us.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encryption of data in transit and at rest using SSL/TLS protocols</li>
              <li>Secure authentication mechanisms and password protection</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls limiting employee access to personal information</li>
              <li>Secure data centers with physical and digital safeguards</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but will notify you promptly in the event of any data breach affecting your personal information.
            </p>
          </section>

          {/* User Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Access
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  You have the right to request copies of your personal information. You can view and download most of your data directly from your account settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Correction
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  You have the right to request correction of any inaccurate or incomplete personal information. You can update most information directly in your account settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Deletion
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  You have the right to request deletion of your personal information, subject to certain legal obligations and legitimate business purposes. You can delete your account through the app settings or by contacting us.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Opt-Out
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  You may opt out of receiving promotional communications by following the unsubscribe instructions in those messages or adjusting your notification settings. Note that you cannot opt out of essential service-related communications.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Data Portability
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  You have the right to request a copy of your data in a structured, commonly used, and machine-readable format.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at privacy@brrowapp.com. We will respond to your request within 30 days.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies, pixels, and similar tracking technologies to enhance your experience and collect information about how you use our services:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>Essential Cookies:</strong> Required for basic app functionality, authentication, and security
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand usage patterns and improve our services
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookie preferences through your device settings, though disabling certain cookies may limit app functionality.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              BRROW is intended for users who are 18 years of age or older. We do not knowingly collect personal information from individuals under 18. If you are under 18, please do not use our services or provide any personal information. If we become aware that we have collected personal information from someone under 18, we will take steps to delete that information promptly. If you believe we may have collected information from a minor, please contact us immediately at privacy@brrowapp.com.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated Privacy Policy on our app and updating the "Last Updated" date. Your continued use of BRROW after such modifications constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:privacy@brrowapp.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  privacy@brrowapp.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 30 days.
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-600 text-center">
              This Privacy Policy is effective as of the date stated above and applies to all users of the BRROW platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
