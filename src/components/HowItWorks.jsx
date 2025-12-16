const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            icon: "💭",
            title: "Share Your Vision",
            description: "Tell Zyvox AI about your dream destination, preferences, and budget."
        },
        {
            number: "02",
            icon: "🤖",
            title: "AI Creates Magic",
            description: "Our AI analyzes millions of options to craft your perfect itinerary."
        },
        {
            number: "03",
            icon: "✨",
            title: "Refine & Customize",
            description: "Review, adjust, and personalize every detail to match your style."
        },
        {
            number: "04",
            icon: "🚀",
            title: "Book & Explore",
            description: "Confirm your bookings and embark on your perfectly planned adventure."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-2 rounded-full glass text-sm font-semibold text-slate-300">
                        Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Your Journey in 4 Simple Steps
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From dream to reality in minutes
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 transform -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative group"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/20 cursor-pointer h-full">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform border border-slate-600">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="text-6xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
