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
  ];

  return (
    <section className="py-20 bg-black border-y-2 border-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-tight">
          What Our <span className="text-orange">Customers Say</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Real reviews from real people. No fluff.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-black border-2 border-gray-800 p-6 hover:border-orange transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-orange text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-white text-lg mb-4 italic leading-relaxed">
                "{review.quote}"
              </p>
              <p className="text-gray-400 text-sm">— {review.author}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-900 border border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed text-center">
            <strong className="text-white">Transparency Notice:</strong> Prices may vary
            depending on stock availability. We always aim to beat competitor pricing where
            possible. Our guarantee applies to written quotes from verified competitors.
          </p>
        </div>
      </div>
    </section>
  );
}
