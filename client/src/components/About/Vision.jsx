 

import { useState, useEffect } from 'react';

const Vision = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen w-full bg-[#0d0125] relative overflow-hidden">
            <style>{`
                @keyframes pulse-glow {
                    0%, 100% { 
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.6;
                        transform: scale(1.1);
                    }
                }
                .pulse-glow {
                    animation: pulse-glow 4s ease-in-out infinite;
                }
            `}</style>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl pulse-glow"></div>
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-orange-600/30 to-purple-600/30 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }}></div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Vision Card */}
                <div className={`mb-24 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-white/20">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="md:w-2/5 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                                    <img 
                                        src="/Images/vision1.webp" 
                                        alt="Vision illustration" 
                                        className="relative h-64 w-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500" 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="md:w-3/5 space-y-4">
                                <div className="inline-block">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                        Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Vision</span>
                                    </h2>
                                    <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                                </div>
                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                                    To revolutionize human potential by building intelligent systems that understand, predict, and empower — advancing education, enhancing industrial safety, and transforming operations across classrooms, oil & gas fields, construction sites, and voice-enabled technologies — for a smarter, safer, and more connected world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Card */}
                <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:border-white/20">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                            <div className="md:w-2/5 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                                    <img 
                                        src="/Images/vision2.webp" 
                                        alt="Mission illustration" 
                                        className="relative h-64 w-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500" 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="md:w-3/5 space-y-4">
                                <div className="inline-block">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                        Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Mission</span>
                                    </h2>
                                    <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                </div>
                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                                    To pioneer agentic AI systems that collaborate, adapt, and learn — safeguarding lives in high-risk industries, revolutionizing education through intelligent tools, and redefining human-machine interaction with voice-first, context-aware solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;

