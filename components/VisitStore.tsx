export default function VisitStore() {
  return (
    <section className="py-20 bg-black border-y-2 border-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-tight">
          Visit Our <span className="text-orange">Store</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="w-full h-[400px] border-2 border-orange">
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

          {/* Store Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange uppercase">Location</h3>
              <p className="text-lg text-white mb-2">
                39 Penzance St, New Redruth
              </p>
              <p className="text-lg text-white mb-2">Alberton, 1449</p>
              <p className="text-lg text-white">South Africa</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange uppercase">Opening Hours</h3>
              <div className="space-y-2 text-white">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-bold">6:30 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-bold">6:30 AM - 1:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-bold">Closed</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange uppercase">Contact</h3>
              <a
                href="tel:+27780816467"
                className="text-lg text-white hover:text-orange transition-colors block mb-2"
              >
                📞 078 081 6467
              </a>
              <a
                href="https://wa.me/27780816467"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:text-orange transition-colors block"
              >
                💬 WhatsApp Us
              </a>
            </div>

            <div className="pt-4 border-t border-gray-800">
              <p className="text-gray-400">
                <strong className="text-white">Located in Alberante Centre</strong>
                <br />
                Ample parking available. Easy access from main roads.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=39+Penzance+St,+New+Redruth,+Alberton,+1449"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-orange text-black font-bold text-lg rounded-none hover:bg-orange/90 transition-all duration-200 uppercase tracking-wider"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
