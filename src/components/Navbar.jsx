import { useState, useEffect } from 'react';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
    const { isSignedIn } = useUser();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <svg className="w-10 h-10 group-hover:scale-110 transition-transform" viewBox="0 0 100 100" fill="none">
                            {/* Globe - sphere with horizontal lines */}
                            <g transform="translate(50, 65)">
                                {/* Main sphere outline */}
                                <ellipse cx="0" cy="0" rx="30" ry="28" stroke="#3b5998" strokeWidth="1.5" fill="none"/>
                                
                                {/* Horizontal latitude lines */}
                                <path d="M -25 -18 Q -12 -16 0 -16 Q 12 -16 25 -18" stroke="#3b5998" strokeWidth="1" fill="none"/>
                                <path d="M -28 -8 Q -14 -6 0 -6 Q 14 -6 28 -8" stroke="#3b5998" strokeWidth="1.2" fill="none"/>
                                <path d="M -30 0 L 30 0" stroke="#3b5998" strokeWidth="1.3" fill="none"/>
                                <path d="M -28 8 Q -14 10 0 10 Q 14 10 28 8" stroke="#3b5998" strokeWidth="1.2" fill="none"/>
                                <path d="M -23 16 Q -11 18 0 18 Q 11 18 23 16" stroke="#3b5998" strokeWidth="1" fill="none"/>
                                
                                {/* Vertical longitude lines */}
                                <path d="M 0 -28 Q 0 -12 0 0 Q 0 12 0 28" stroke="#3b5998" strokeWidth="1.3" fill="none"/>
                                <path d="M -15 -25 Q -16 -12 -17 0 Q -16 12 -15 25" stroke="#3b5998" strokeWidth="1" fill="none"/>
                                <path d="M 15 -25 Q 16 -12 17 0 Q 16 12 15 25" stroke="#3b5998" strokeWidth="1" fill="none"/>
                            </g>
                            
                            {/* Red trail curves - left side */}
                            <path d="M 10 55 Q 22 52 35 48" stroke="#dc143c" strokeWidth="2" fill="none" strokeLinecap="round"/>
                            <path d="M 10 58 Q 21 55 33 50" stroke="#dc143c" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"/>
                            
                            {/* Airplane - top */}
                            <g transform="translate(55, 25) rotate(35) scale(1.5)">
                                {/* Main fuselage */}
                                <path d="M 0 0 L 6 1 L 6 2 L 0 1 Z" fill="#dc143c"/>
                                <path d="M 0 0.5 L 8 0.6 L 9 1 L 8 1.4 L 0 1 Z" fill="#dc143c"/>
                                <ellipse cx="1.5" cy="1" rx="1.2" ry="0.8" fill="#dc143c"/>
                                
                                {/* Top wing */}
                                <path d="M 5 0.2 L 8 -2.5 L 9 -2 L 9 -1 L 6 0.6 Z" fill="#3b5998"/>
                                
                                {/* Bottom wing */}
                                <path d="M 5 1.8 L 8 4.5 L 9 4 L 9 3 L 6 1.4 Z" fill="#3b5998"/>
                                
                                {/* Tail fin */}
                                <path d="M 0 0.3 L -1.2 -1.2 L -0.5 -1.3 L 0.5 0.5 Z" fill="#3b5998" opacity="0.9"/>
                            </g>
                        </svg>
                        <span className="text-2xl font-display font-bold tracking-wider">ZYVOX</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-gray-300 hover:text-white transition-colors relative group">
                            Features
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-500 to-slate-700 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors relative group">
                            How It Works
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-500 to-slate-700 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#destinations" className="text-gray-300 hover:text-white transition-colors relative group">
                            Destinations
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-500 to-slate-700 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#pricing" className="text-gray-300 hover:text-white transition-colors relative group">
                            Pricing
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-500 to-slate-700 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {!isSignedIn ? (
                            <>
                                <SignInButton mode="modal">
                                    <button className="px-6 py-2 text-gray-300 hover:text-white transition-colors">
                                        Sign In
                                    </button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <button className="px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full font-semibold hover:shadow-lg hover:shadow-slate-500/50 transition-all duration-300 hover:scale-105 border border-slate-600">
                                        Get Started
                                    </button>
                                </SignUpButton>
                            </>
                        ) : (
                            <UserButton afterSignOutUrl="/" />
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 glass rounded-2xl p-6 space-y-4 animate-slide-up">
                        <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors py-2">
                            Features
                        </a>
                        <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors py-2">
                            How It Works
                        </a>
                        <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors py-2">
                            Destinations
                        </a>
                        <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors py-2">
                            Pricing
                        </a>
                        <div className="pt-4 space-y-2">
                            {!isSignedIn ? (
                                <>
                                    <SignInButton mode="modal">
                                        <button className="w-full px-6 py-2 text-gray-300 hover:text-white transition-colors border border-white/20 rounded-full">
                                            Sign In
                                        </button>
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                        <button className="w-full px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full font-semibold border border-slate-600">
                                            Get Started
                                        </button>
                                    </SignUpButton>
                                </>
                            ) : (
                                <div className="flex justify-center">
                                    <UserButton afterSignOutUrl="/" />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
