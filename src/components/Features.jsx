const Features = () => {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L25 15L35 16.5L27.5 24L29.5 35L20 29.5L10.5 35L12.5 24L5 16.5L15 15L20 5Z"
                        stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="gradient1" x1="5" y1="5" x2="35" y2="35">
                            <stop offset="0%" stopColor="#667eea" />
                            <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "Personalized Itineraries",
            description: "AI analyzes your preferences, budget, and travel style to create perfectly tailored journeys."
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                    <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                        stroke="url(#gradient2)" strokeWidth="2" />
                    <path d="M20 12V20L26 23" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="gradient2" x1="5" y1="5" x2="35" y2="35">
                            <stop offset="0%" stopColor="#f093fb" />
                            <stop offset="100%" stopColor="#f5576c" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "Real-Time Optimization",
            description: "Dynamic adjustments to your plans based on weather, events, and availability."
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                    <path d="M8 15L20 5L32 15V32C32 33.1046 31.1046 34 30 34H10C8.89543 34 8 33.1046 8 32V15Z"
                        stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 34V20H25V34" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="gradient3" x1="8" y1="5" x2="32" y2="34">
                            <stop offset="0%" stopColor="#4facfe" />
                            <stop offset="100%" stopColor="#00f2fe" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "Smart Booking",
            description: "Automated booking across flights, hotels, and activities with best price guarantees."
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                    <path d="M35 25C35 29.4183 31.4183 33 27 33H13C8.58172 33 5 29.4183 5 25C5 20.5817 8.58172 17 13 17H27C31.4183 17 35 20.5817 35 25Z"
                        stroke="url(#gradient4)" strokeWidth="2" />
                    <path d="M15 7L20 17L25 7" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="gradient4" x1="5" y1="7" x2="35" y2="33">
                            <stop offset="0%" stopColor="#fa709a" />
                            <stop offset="100%" stopColor="#fee140" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "24/7 AI Assistant",
            description: "Your intelligent companion available anytime to help with changes, questions, or emergencies."
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5V20M20 20L30 15M20 20L10 15" stroke="url(#gradient5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 20L30 25L20 35L10 25L20 20Z" stroke="url(#gradient5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="gradient5" x1="10" y1="5" x2="30" y2="35">
                            <stop offset="0%" stopColor="#a8edea" />
                            <stop offset="100%" stopColor="#fed6e3" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "Budget Intelligence",
            description: "Smart spending insights and recommendations to maximize value on every trip."
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                    <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                        stroke="url(#gradient6)" strokeWidth="2" />
                    <path d="M12 20L18 26L28 14" stroke="url(#gradient6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="gradient6" x1="5" y1="5" x2="35" y2="35">
                            <stop offset="0%" stopColor="#ff9a9e" />
                            <stop offset="100%" stopColor="#fecfef" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "Seamless Experience",
            description: "All your travel documents, bookings, and plans in one beautiful interface."
        }
    ];

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-2 rounded-full glass text-sm font-semibold text-slate-300">
                        Features
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        AI-Powered Travel Excellence
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover how Zyvox AI transforms your travel experience
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/20 cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-slate-200 transition-all">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover indicator */}
                            <div className="mt-6 h-1 w-0 bg-gradient-to-r from-slate-500 to-slate-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
