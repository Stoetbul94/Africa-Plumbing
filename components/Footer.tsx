import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-orange py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logos/ChatGPT Image Jan 3, 2026, 12_10_41 AM.png"
                alt="Africa Hardware Plumbing & Electrical Logo"
                width={250}
                height={250}
                className="w-auto h-24 sm:h-32 md:h-40 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange uppercase">
              Africa Hardware
            </h3>
            <p className="text-white mb-2">Plumbing & Electrical</p>
            <p className="text-gray-400 text-sm mb-4">
              39 Penzance St, New Redruth
              <br />
              Alberton, 1449
              <br />
              South Africa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+27780816467"
                  className="text-gray-400 hover:text-orange transition-colors"
                >
                  📞 Call: 078 081 6467
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27780816467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange transition-colors"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=39+Penzance+St,+New+Redruth,+Alberton,+1449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange transition-colors"
                >
                  🗺️ Get Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Guarantee */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white uppercase">Our Promise</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We guarantee to beat any written quote. Quality products, unbeatable prices,
              real service. That&apos;s our commitment.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Africa Hardware Plumbing & Electrical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
