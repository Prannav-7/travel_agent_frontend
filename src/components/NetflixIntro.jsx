import { useEffect, useState } from 'react';
import './NetflixIntro.css';

const NetflixIntro = ({ onComplete }) => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Create particles for powder effect
        const particleArray = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            delay: Math.random() * 0.5,
            duration: Math.random() * 1 + 1
        }));
        setParticles(particleArray);

        const timer = setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => {
                onComplete();
            }, 500);
        }, 4500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${!isAnimating ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'}}>
            <div className="intro-content">
                {/* 3D Logo with Image */}
                <div className="logo-3d-container">
                    <div className="intro-logo-wrapper">
                        <img 
                            src="/logo.png" 
                            alt="Travel Logo" 
                            className="intro-logo-image"
                        />
                        {/* Particle overlay for powder effect */}
                        {particles.map(particle => (
                            <div
                                key={particle.id}
                                className="particle"
                                style={{
                                    left: `${particle.x}%`,
                                    top: `${particle.y}%`,
                                    width: `${particle.size}px`,
                                    height: `${particle.size}px`,
                                    animationDelay: `${3.5 + particle.delay}s`,
                                    animationDuration: `${particle.duration}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* 3D Text */}
                <div className="text-3d-container">
                    <h1 className="zyvox-text">
                        {'ZYVOX'.split('').map((letter, index) => (
                            <span
                                key={index}
                                className="letter"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {letter}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Tagline */}
                <div className="intro-tagline">
                    Intelligent Travel Awaits
                </div>
            </div>

            {/* Overlay effects */}
            <div className="intro-overlay"></div>
            <div className="intro-rays"></div>
        </div>
    );
};

export default NetflixIntro;
