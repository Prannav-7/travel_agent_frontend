const Destinations = () => {
    const destinations = [
        {
            name: "Bali, Indonesia",
            description: "Tropical paradise with stunning beaches",
            price: "₹74,999",
            badge: "🔥 Trending",
            gradient: "from-slate-700/80 to-slate-900/80",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop"
        },
        {
            name: "Tokyo, Japan",
            description: "Modern metropolis meets ancient tradition",
            price: "₹1,08,499",
            badge: "⭐ Popular",
            gradient: "from-slate-600/80 to-slate-800/80",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop"
        },
        {
            name: "Santorini, Greece",
            description: "Iconic white buildings and blue domes",
            price: "₹1,33,499",
            badge: "💎 Premium",
            gradient: "from-slate-700/80 to-slate-900/80",
            image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&auto=format&fit=crop"
        },
        {
            name: "Dubai, UAE",
            description: "Luxury and innovation in the desert",
            price: "₹99,999",
            badge: "🌟 New",
            gradient: "from-slate-800/80 to-slate-900/80",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section id="destinations" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-2 rounded-full glass text-sm font-semibold text-slate-300">
                        Popular
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Trending Destinations
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore the world's most sought-after locations
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-container">
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className="group card-3d relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-125 transition-all duration-1000"
                                style={{ backgroundImage: `url(${dest.image})` }}
                            ></div>

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient} opacity-60 group-hover:opacity-90 transition-all duration-500`}></div>

                            {/* Holographic overlay on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 holographic"></div>

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 animate-shimmer"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between relative z-10">
                                {/* Badge */}
                                <div className="self-start animate-float-3d">
                                    <span className="px-3 py-1 rounded-full glass-layered text-sm font-semibold backdrop-blur-xl neon-border">
                                        {dest.badge}
                                    </span>
                                </div>

                                {/* Bottom Content */}
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 depth-layer-2">
                                    <h3 className="text-2xl font-bold mb-2 neon-glow">{dest.name}</h3>
                                    <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        {dest.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gradient from-white to-gray-300 depth-layer-3">
                                            From {dest.price}
                                        </span>
                                        <button className="btn-magnetic px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full text-sm font-semibold hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 duration-500 neon-border">
                                            Explore →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Border Effect with neon glow */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-2xl transition-all duration-500 neon-border"></div>

                            {/* Corner highlights */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
