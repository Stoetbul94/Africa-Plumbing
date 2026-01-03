export default function WhyChoose() {
  const features = [
    {
      icon: "💰",
      title: "We Beat Any Written Quote",
      description: "Bring us a competitor's quote. We'll match or beat it. Guaranteed.",
    },
    {
      icon: "🧑‍🔧",
      title: "Owner-Run, Hands-On Service",
      description: "Real people, real expertise. No corporate runaround.",
    },
    {
      icon: "🚚",
      title: "Same-Day Delivery",
      description: "Need it today? We'll get it to you. Fast, reliable delivery.",
    },
    {
      icon: "🏗️",
      title: "All Under One Roof",
      description: "Plumbing, electrical, and building supplies. One stop. Done.",
    },
    {
      icon: "⭐",
      title: "4.3★ Google Rating",
      description: "Real reviews from real customers. We earn our reputation.",
    },
  ];

  return (
    <section className="py-20 bg-black border-y-2 border-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-tight">
          Why Choose <span className="text-orange">Africa Hardware</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-black border-2 border-gray-800 p-8 hover:border-orange transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,122,0,0.3)]"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
