 
import Banner from "./Banner";
import { Link } from "react-router-dom";
import FloatingCards, { Card } from "../../../ReactBits/CardSwap/CardSwap";

const Innovation = () => {
  return (
    <>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .slide-in-left {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        .pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(255,255,255,0.3);
        }
      `}</style>

      <section className="min-h-screen h-full w-full bg-[#0d0125] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl pulse-glow"></div>
          <div
            className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pulse-glow"
            style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}></div>

        <div className="container mx-auto px-4 pt-16 pb-6 relative z-10">
          <h1 className="md:text-[38px] text-[28px] font-bold text-white max-w-[90%] mb-10 fade-in-up">
            AI Innovation <span className="h1head1">Empowering</span> Industries,
            Educators, and Individuals
          </h1>
          
          <div className="w-full flex md:flex-row flex-col-reverse">
            {/* Left Content Section */}
            <div className="md:w-[60%] w-full text-white mt-5 pt-5 pb-20 font-sans relative">
              <div className="relative z-10 p-8">
                <ul className="space-y-8">
                  {[
                    "QuantumHash is an AI innovation company developing intelligent platforms that empower industries, educators, and individuals. As the umbrella organization behind four advanced solutions — QhashAi, ASES, QuantumEdu, OfficeMom, Assessment system — we bring together the power of conversational AI, predictive analytics, real-time tutoring, and multimodal technologies.",
                    "We exist to transform data into intelligence by solving real-world problems through responsible, scalable, and ethical AI systems.",
                    "With a multi-disciplinary team of technologists, educators, and domain experts, QuantumHash is building a future where artificial intelligence is intuitive, contextual, and purpose-driven.",
                  ].map((text, index) => (
                    <li key={index} className="fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                      <p className="text-lg md:text-base leading-relaxed font-light text-gray-200">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>

                <Link to={"about"} className="fade-in-up" style={{animationDelay: '0.6s'}}>
                  <button className="text-white border border-white/30 cursor-pointer py-3 px-8 rounded-full mt-10 font-medium hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Video Section */}
            <div className="pb-20 w-full md:w-[40%] flex justify-center items-center">
              <div className="w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm card-hover">
                <video
                  src="/Videos/ai-animation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <Banner />
 
         
          
          <section className="flex flex-col lg:flex-row lg:min-h-screen mt-5 h-full gap-12">
            {/* Left Minimal Section */}
            <div className="lg:w-[40%] w-full flex flex-col justify-center">
              {/* Our Products Section */}
              <div className="text-white slide-in-left mb-16">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our Products
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                  Discover our suite of AI-powered solutions designed to drive meaningful change across industries and education.
                </p>
             
              </div>

              {/* Our Approach Section */}
              <div className="text-white fade-in-up">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our Approach
                </h2>
                <p className="text-gray-300 mb-12 leading-relaxed text-lg font-light">
                  We combine cutting-edge AI research with practical applications 
                  to deliver solutions that are both innovative and impactful.
                </p>
                
                {/* Minimal Stats */}
              <div className="flex flex-wrap gap-8 justify-start">
  {[
    { number: "4", label: "AI Platforms" },
    { number: "5+", label: "Projects Completed" },
    { number: "100%", label: "Ethical Focus" },
    { number: "10K+", label: "Data Points Processed" },
    { number: "3", label: "Industries Served" },
    { number: "99%", label: "Model Accuracy" },
    { number: "24/7", label: "AI Monitoring" },
    { number: "100+", label: "Active Users" },
  ].map((stat, index) => (
    <div
      key={index}
      className="fade-in-up flex flex-col items-start border-l-2 border-purple-500/50 pl-6"
      style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
    >
      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
    </div>
  ))}
</div>

              </div>
            </div>

            {/* CardSwap Section */}
            <div className="lg:w-[60%] w-full h-full relative">
              <div className="fade-in-up h-full">
                <FloatingCards height={500}>
                  <Card>
                    <div className="text-white p-6 h-full w-full card-hover bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                      <div className="h-[200px] w-full rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 mb-6 overflow-hidden border border-white/10">
                        <img
                          src="/Projects/image.webp"
                          alt="QuantumAI"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-xl font-bold mb-4">
                        Conversational Intelligence Engine
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        A custom-built AI assistant framework designed to power
                        domain-specific chatbots and smart agents. QuantumAI is the
                        intelligence core behind all our platforms.
                      </p>
                      <div className="text-purple-400 text-lg font-bold">
                        QuantumAI
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="text-white p-6 h-full w-full card-hover bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                      <div className="h-[200px] w-full rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mb-6 overflow-hidden border border-white/10">
                        <img
                          src="/Projects/image2.webp"
                          alt="ASES"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-xl font-bold mb-4">
                        Industrial AI for Predictive Safety & Operations
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Built for high-risk sectors, ASES analyzes historical
                        incident data to predict future risks, visualize scenarios
                        in 3D, and guide proactive decision-making.
                      </p>
                      <div className="text-blue-400 text-lg font-bold">
                        ASES
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="text-white p-6 h-full w-full card-hover bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                      <div className="h-[200px] w-full rounded-xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 mb-6 overflow-hidden border border-white/10">
                        <img
                          src="/Projects/image4.webp"
                          alt="QuantumEdu"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-xl font-bold mb-4">
                        AI Tutoring Platform for Grades 4–12
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        An AI-based learning system designed for Indian school
                        students. It offers real-time, face-to-face learning using
                        voice, emotion, and attention analysis.
                      </p>
                      <div className="text-green-400 text-lg font-bold">
                        QuantumEdu
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="text-white p-6 h-full w-full card-hover bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                      <div className="h-[200px] w-full rounded-xl bg-gradient-to-br from-orange-600/20 to-red-600/20 mb-6 overflow-hidden border border-white/10">
                        <img
                          src="/Projects/assesment.PNG"
                          alt="Office MOM"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-xl font-bold mb-4">
                        Office MOM – Moments of the Meeting
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        A smart meeting management tool that captures, organizes,
                        and summarizes key discussion points, decisions, and action
                        items for productive collaboration.
                      </p>
                      <div className="text-orange-400 text-lg font-bold">
                        Office MOM
                      </div>
                    </div>
                  </Card>
                </FloatingCards>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Innovation;