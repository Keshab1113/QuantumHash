import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutBanner = ({ title }) => {
    const bannerRef = useRef(null);
    const contentRef = useRef(null);
    const botRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Initial setup - hide elements before animation
        gsap.set([botRef.current, textRef.current], { 
            opacity: 0,
            y: 20
        });

        // Background parallax effect
        gsap.to(bannerRef.current, {
            backgroundPosition: '50% 30%',
            scrollTrigger: {
                trigger: bannerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Content animation
        gsap.timeline()
            .from(bannerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut"
            })
            .to(botRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
                delay: 0.3
            })
            .to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4");

        // Continuous floating animation for the bot
        const floatAnimation = gsap.timeline({ repeat: -1, yoyo: true })
            .to(botRef.current, {
                y: -15,
                duration: 2,
                ease: "sine.inOut"
            })
            .to(botRef.current, {
                y: 0,
                duration: 2,
                ease: "sine.inOut"
            });

        return () => {
            floatAnimation.kill();
        };
    }, []);

    return (
        <section 
            ref={bannerRef}
            className="h-[60vh] w-full bg-[#d7cfe6] pt-[15vh] relative overflow-hidden"
            style={{
                backgroundImage: "url('/aboutBanner.png')",
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Floating particles */}
            {[...Array(10)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute rounded-full bg-white/30"
                    style={{
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}

            <div 
                ref={contentRef}
                className="container mx-auto px-4 py-6 flex justify-center items-center h-full"
            >
                <div className="flex md:flex-row flex-col justify-center items-center md:gap-6 relative z-10">
                    <img 
                        ref={botRef}
                        src="/AI-Images/bot.png" 
                        alt="" 
                        className="h-30 bot-head transform transition-transform duration-300 hover:scale-110 cursor-pointer" 
                    />
                    <h1 
                        ref={textRef}
                        className="text-center text-[34px] font-bold text-white drop-shadow-lg"
                    >
                        {title}
                    </h1>
                </div>
            </div>

            {/* Add some CSS for the floating animation */}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-20px) translateX(10px); }
                    100% { transform: translateY(0) translateX(0); }
                }
                .bot-head:hover {
                    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
                }
            `}</style>
        </section>
    );
};

export default AboutBanner;