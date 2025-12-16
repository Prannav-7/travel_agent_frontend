const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-slate-600/20 via-slate-700/20 to-slate-800/20 blur-3xl animate-gradient-shift"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto glow-effect">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Ready to Transform Your{' '}
                        <span className="text-gradient from-slate-300 via-slate-100 to-slate-400 bg-[length:200%_auto] animate-gradient-shift">
                            Travel Experience?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join thousands of travelers who trust Zyvox AI for their perfect journeys
                    </p>

                    <button className="group px-10 py-5 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full font-semibold text-xl hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-slate-600">
                        <span>Start Your Journey Today</span>
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 20 20">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Trust indicators */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Free 14-day trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
