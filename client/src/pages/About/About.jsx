 

import AiBotSection from "../../components/AiBot/AiBotSection";
import Teams from "../../components/About/Teams";
import Vision from "../../components/About/Vision";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us | QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

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

            <section className="min-h-screen h-full w-full bg-[#0d0125] relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl pulse-glow"></div>
                    <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-orange-600/30 to-purple-600/30 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '4s' }}></div>
                    <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>

                {/* Content */}
                <div className="relative z-10">
                    <AiBotSection headText="About QuantumHash" />
                    <div className="container mx-auto px-4 py-6">
                        <Vision />
                        <Teams />
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;