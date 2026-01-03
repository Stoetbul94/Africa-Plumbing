export default function GoogleReviews() {
  const reviews = [
    {
      quote: "The manager is exceptional. Customer service is truly amazing.",
      author: "Satisfied Customer",
      rating: 5,
    },
    {
      quote: "Quality products. Owner is very helpful. Definitely shopping here again.",
      author: "Regular Customer",
      rating: 5,
    },
    {
      quote: "Top-notch hardware, unbeatable service.",
      author: "Contractor",
      rating: 5,
    },
    {
      quote: "Reasonable, negotiable prices all the time.",
      author: "Homeowner",
      rating: 5,
    },
    {
      quote: "They beat all my quotations.",
      author: "Builder",
      rating: 5,
    },
    {
      quote: "Best prices in Alberton. Always helpful and professional.",
      author: "Local Business",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black border-y-2 border-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">
              Real Google Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
            What Our <span className="text-orange">Customers Say</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Real reviews from real people. No fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-black border-2 border-gray-800 p-5 sm:p-6 hover:border-orange transition-all duration-300"
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-orange fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-base sm:text-lg mb-3 sm:mb-4 italic leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">— {review.author}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-gray-900 border border-gray-800">
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center">
            <strong className="text-white">Transparency Notice:</strong> Prices may vary
            depending on stock availability. We always aim to beat competitor pricing where
            possible. Our guarantee applies to written quotes from verified competitors.
          </p>
        </div>
      </div>
    </section>
  );
}
