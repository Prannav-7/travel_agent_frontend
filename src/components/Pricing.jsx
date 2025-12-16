import { useState } from 'react';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: "Explorer",
            description: "Perfect for occasional travelers",
            monthlyPrice: "₹99",
            yearlyPrice: "₹999",
            features: [
                "AI-powered itinerary planning",
                "Up to 3 trips per month",
                "Email support"
            ],
            popular: false,
            gradient: "from-slate-700 to-slate-900"
        },
        {
            name: "Adventurer",
            description: "For frequent travelers",
            monthlyPrice: "₹199",
            yearlyPrice: "₹1,999",
            features: [
                "Everything in Explorer",
                "Unlimited trips",
                "Advanced AI recommendations",
                "Priority support"
            ],
            popular: true,
            gradient: "from-slate-600 to-slate-800"
        },
        {
            name: "Globetrotter",
            description: "For travel enthusiasts",
            monthlyPrice: "₹399",
            yearlyPrice: "₹3,999",
            features: [
                "Everything in Adventurer",
                "Personal AI travel assistant",
                "Concierge service",
                "Exclusive deals & upgrades",
                "24/7 VIP support"
            ],
            popular: false,
            gradient: "from-slate-700 to-slate-900"
        }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-2 rounded-full glass text-sm font-semibold text-slate-300">
                        Pricing
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Choose Your Adventure
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Flexible plans for every type of traveler
                    </p>
                    <div className="mt-6 max-w-3xl mx-auto">
                        <div className="glass rounded-xl p-4 border border-slate-600/50">
                            <p className="text-base text-gray-300">
                                💬 You can navigate the entire trip planning process directly through WhatsApp chat. Zyvox AI guides you step by step to review destinations, stays, transport, activities, and costs in a simple conversational flow.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white font-semibold' : 'text-gray-400'}`}>
                        Monthly
                    </span>
                    <button
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        className="relative w-16 h-8 bg-slate-700 rounded-full transition-colors border border-slate-600"
                    >
                        <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${billingCycle === 'yearly' ? 'translate-x-8' : ''}`}></div>
                    </button>
                    <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white font-semibold' : 'text-gray-400'}`}>
                        Yearly
                        <span className="ml-2 text-sm text-green-400">(Save 17%)</span>
                    </span>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${plan.popular ? 'ring-2 ring-slate-500 scale-105' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full text-sm font-semibold border border-slate-500">
                                    ⭐ Most Popular
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold">
                                        {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                    </span>
                                    <span className="text-gray-400">
                                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                                    </span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-100 text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${plan.popular
                                    ? 'bg-gradient-to-r from-slate-700 to-slate-900 hover:shadow-xl hover:shadow-slate-500/50 border border-slate-600'
                                    : 'bg-white/5 hover:bg-white/10 border border-slate-600'
                                }`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                {/* Enterprise Option */}
                <div className="mt-16 text-center">
                    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                        <p className="text-gray-400 mb-6">
                            Custom solutions for travel agencies and corporate clients
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full font-semibold hover:shadow-xl hover:shadow-slate-500/50 transition-all duration-300 hover:scale-105 border border-slate-600">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
