import { useEffect, useState } from 'react';

const LoadingMessage = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="glass rounded-3xl p-12 max-w-md w-full text-center space-y-6 animate-slide-up shadow-2xl">
                {/* Animated Icon */}
                <div className="relative w-32 h-32 mx-auto">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 border-4 border-slate-500/30 border-t-slate-400 rounded-full animate-spin"></div>
                    
                    {/* Middle rotating ring */}
                    <div className="absolute inset-4 border-4 border-slate-600/30 border-t-slate-300 rounded-full animate-spin-reverse" style={{animationDuration: '1.5s'}}></div>
                    
                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl animate-pulse">🌍</div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Creating Your Perfect Plan{dots}</h3>
                    <p className="text-gray-400">Our AI is crafting a personalized itinerary just for you</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 animate-progress"></div>
                </div>

                {/* Fun Facts */}
                <div className="text-sm text-gray-500 italic">
                    <p>✨ Analyzing destinations and deals...</p>
                </div>
            </div>
        </div>
    );
};

export default LoadingMessage;
