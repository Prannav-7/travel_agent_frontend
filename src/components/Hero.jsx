import { useState, useEffect } from 'react';
import TravelPlanForm from './TravelPlanForm';
import LoadingMessage from './LoadingMessage';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleStartPlanning = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    const handleFormSubmit = (formData) => {
        console.log('Form submitted:', formData);
        // Form will handle its own display of results
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Light-Based Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Soft gradient orbs */}
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-float"
                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl animate-float-delayed"
                    style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-500/15 rounded-full blur-3xl animate-float-slow"
                    style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
                ></div>
                
                {/* Floating Light Particles */}
                <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-slate-300 rounded-full animate-particle-float" style={{animationDelay: '0s', opacity: 0.6}}></div>
                <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-slate-400 rounded-full animate-particle-float" style={{animationDelay: '2s', opacity: 0.5}}></div>
                <div className="absolute top-[40%] left-[20%] w-2 h-2 bg-slate-200 rounded-full animate-particle-float" style={{animationDelay: '4s', opacity: 0.7}}></div>
                <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-slate-300 rounded-full animate-particle-float" style={{animationDelay: '6s', opacity: 0.4}}></div>
                <div className="absolute bottom-[20%] left-[30%] w-2 h-2 bg-slate-400 rounded-full animate-particle-float" style={{animationDelay: '8s', opacity: 0.6}}></div>
                <div className="absolute bottom-[40%] right-[10%] w-2 h-2 bg-slate-200 rounded-full animate-particle-float" style={{animationDelay: '10s', opacity: 0.5}}></div>
                <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-slate-300 rounded-full animate-particle-float" style={{animationDelay: '3s', opacity: 0.4}}></div>
                <div className="absolute top-[70%] right-[40%] w-2 h-2 bg-slate-400 rounded-full animate-particle-float" style={{animationDelay: '7s', opacity: 0.6}}></div>
                <div className="absolute bottom-[30%] left-[15%] w-3 h-3 bg-slate-200 rounded-full animate-particle-float" style={{animationDelay: '5s', opacity: 0.5}}></div>
                <div className="absolute top-[50%] right-[30%] w-2 h-2 bg-slate-300 rounded-full animate-particle-float" style={{animationDelay: '9s', opacity: 0.7}}></div>
                
                {/* Light Beams */}
                <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-slate-400/20 to-transparent animate-beam-down" style={{animationDelay: '0s'}}></div>
                <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-slate-300/15 to-transparent animate-beam-down" style={{animationDelay: '3s'}}></div>
                <div className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-slate-400/20 to-transparent animate-beam-down" style={{animationDelay: '6s'}}></div>
                <div className="absolute top-0 right-[45%] w-px h-full bg-gradient-to-b from-transparent via-slate-300/15 to-transparent animate-beam-down" style={{animationDelay: '9s'}}></div>
                
                {/* Horizontal Light Rays */}
                <div className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/10 to-transparent animate-ray-across" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-[55%] left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/10 to-transparent animate-ray-across" style={{animationDelay: '5s'}}></div>
                <div className="absolute bottom-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/10 to-transparent animate-ray-across" style={{animationDelay: '8s'}}></div>
                
                {/* Pulsing Light Spots */}
                <div className="absolute top-[15%] right-[20%] w-32 h-32 bg-slate-300/10 rounded-full blur-2xl animate-pulse-glow" style={{animationDelay: '0s'}}></div>
                <div className="absolute bottom-[25%] left-[15%] w-40 h-40 bg-slate-400/10 rounded-full blur-2xl animate-pulse-glow" style={{animationDelay: '4s'}}></div>
                <div className="absolute top-[45%] left-[35%] w-28 h-28 bg-slate-200/10 rounded-full blur-2xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8 animate-slide-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-500/30 backdrop-blur-xl">
                            <span className="text-2xl">✨</span>
                            <span className="text-sm font-medium">Powered by Advanced AI</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                            Your Journey Begins with{' '}
                            <span className="text-gradient from-slate-300 via-slate-100 to-slate-400 bg-[length:200%_auto] animate-gradient-shift">
                                Intelligence
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                            Experience travel planning reimagined. Zyvox AI crafts personalized itineraries,
                            finds the best deals, and manages every detail of your perfect journey.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button 
                                onClick={handleStartPlanning}
                                className="group px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-slate-600"
                            >
                                <span>Start Planning Free</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 20 20">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {/* <button className="group px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.66667 5L13.3333 10L6.66667 15V5Z" />
                                </svg>
                                <span>Watch Demo</span>
                            </button> */}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-slate-200">50K+</div>
                                <div className="text-sm text-gray-400">Happy Travelers</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-slate-200">150+</div>
                                <div className="text-sm text-gray-400">Countries</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-slate-200">4.9/5</div>
                                <div className="text-sm text-gray-400">Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Globe Animation */}
                    <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Rotating globe rings */}
                            <div className="absolute inset-0 border-2 lg:border-4 border-slate-500/30 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-4 lg:inset-8 border-2 lg:border-4 border-slate-400/20 rounded-full animate-spin-reverse" style={{animationDuration: '15s'}}></div>
                            <div className="absolute inset-8 lg:inset-16 border-2 lg:border-4 border-slate-600/25 rounded-full animate-spin-slow" style={{animationDuration: '25s'}}></div>
                            
                            {/* Center globe */}
                            <div className="absolute inset-12 lg:inset-24 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-full shadow-2xl flex items-center justify-center animate-float">
                                <div className="text-5xl sm:text-6xl lg:text-8xl animate-pulse">🌍</div>
                            </div>
                            
                            {/* Floating travel icons */}
                            <div className="absolute top-0 left-1/2 text-2xl sm:text-3xl lg:text-4xl animate-float-around" style={{animationDelay: '0s'}}>✈️</div>
                            <div className="absolute top-1/4 right-0 text-xl sm:text-2xl lg:text-3xl animate-float-around" style={{animationDelay: '2s'}}>🏖️</div>
                            <div className="absolute bottom-1/4 right-0 text-xl sm:text-2xl lg:text-3xl animate-float-around" style={{animationDelay: '4s'}}>🗼</div>
                            <div className="absolute bottom-0 left-1/2 text-2xl sm:text-3xl lg:text-4xl animate-float-around" style={{animationDelay: '6s'}}>🏔️</div>
                            <div className="absolute top-1/4 left-0 text-xl sm:text-2xl lg:text-3xl animate-float-around" style={{animationDelay: '8s'}}>🎒</div>
                            <div className="absolute bottom-1/4 left-0 text-xl sm:text-2xl lg:text-3xl animate-float-around" style={{animationDelay: '10s'}}>📸</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            {/* Travel Plan Form Modal */}
            {showForm && (
                <TravelPlanForm 
                    onClose={handleFormClose}
                    onSubmit={handleFormSubmit}
                />
            )}

            {/* Loading Message */}
            {isLoading && <LoadingMessage />}
        </section>
    );
};

export default Hero;
