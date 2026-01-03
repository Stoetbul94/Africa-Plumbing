export default function Contact() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black border-y-2 border-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 uppercase tracking-tight">
          Visit Us or <span className="text-orange">Get in Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange uppercase flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Address
              </h3>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                39 Penzance St, New Redruth
                <br />
                Alberton, 1449
                <br />
                South Africa
              </p>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange uppercase flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Opening Hours
              </h3>
              <div className="space-y-2 text-white">
                <p className="flex justify-between items-center text-base sm:text-lg">
                  <span>Monday - Friday:</span>
                  <span className="font-bold text-orange">6:30 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between items-center text-base sm:text-lg">
                  <span>Saturday:</span>
                  <span className="font-bold text-orange">6:30 AM - 1:00 PM</span>
                </p>
                <p className="flex justify-between items-center text-base sm:text-lg">
                  <span>Sunday:</span>
                  <span className="font-bold text-gray-500">Closed</span>
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-orange uppercase flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+27780816467"
                  className="block px-4 sm:px-6 py-3 sm:py-4 bg-orange text-black font-bold text-base sm:text-lg rounded-none hover:bg-orange/90 transition-all duration-200 uppercase tracking-wider text-center"
                >
                  📞 Call: 078 081 6467
                </a>
                <a
                  href="https://wa.me/27780816467?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20hardware%20supplies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-orange text-orange font-bold text-base sm:text-lg rounded-none hover:bg-orange hover:text-black transition-all duration-200 uppercase tracking-wider text-center"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>

            {/* Directions CTA */}
            <div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-26.2519,28.1225"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-4 sm:px-6 py-3 sm:py-4 bg-black border-2 border-orange text-orange font-bold text-base sm:text-lg rounded-none hover:bg-orange hover:text-black transition-all duration-200 uppercase tracking-wider text-center"
              >
                🗺️ Get Directions
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] sm:h-[500px] border-2 border-orange bg-gray-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d28.1225!3d-26.2519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDE1JzA2LjgiUyAyOMKwMDcjMjEuMCJF!5e0!3m2!1sen!2sza!4v1234567890!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Africa Hardware Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
