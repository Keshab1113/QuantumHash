import { Helmet } from "react-helmet";
import Opening from "../../components/Career/Opening";
import AiBotSection from "../../components/AiBot/AiBotSection";

const Career = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Career | QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="w-full min-h-screen bg-[#0d0125]">
                <AiBotSection headText="Career" />
                
                {/* Header Section */}
                <div className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-400">
                            Join Our Team at QuantumHash
                        </h1>
                        <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
                            Transform the future of applied intelligence — one line of code at a time. At QuantumHash AI, we're building intelligent systems that understand, predict, and empower human potential — from education and energy to automation and voice technologies. If you're passionate about AI, driven by curiosity, and love building web-based solutions, we'd love to work with you.
                        </p>
                    </div>
                </div>

                {/* Opening Component */}
                <Opening />
            </section>
        </>
    )
}

export default Career;