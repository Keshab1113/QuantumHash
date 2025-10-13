 
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// Carousel Component
const Carousel2 = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-enter { animation: slideIn 0.5s ease-out; }
      `}</style>

      {/* Card */}
      <div className="slide-enter bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/15 rounded-3xl p-8 md:p-12 w-full transition-all duration-500 hover:border-white/25 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.03] hover:shadow-2xl hover:shadow-purple-900/20">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {slide.title}
            </h2>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/40 to-cyan-500/30 border border-purple-400/40 rounded-full text-xs md:text-sm font-semibold text-purple-200 backdrop-blur-sm">
              {slide.type}
            </span>
          </div>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-4xl">
            {slide.overview}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
          {[
            { title: "Responsibilities", items: slide.responsibilities, icon: "→", color: "text-purple-400" },
            { title: "Eligibility", items: slide.eligibility, icon: "✓", color: "text-cyan-400" },
            { title: "Benefits", items: slide.benefits, icon: "⭐", color: "text-orange-400" },
          ].map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="text-white/75 text-sm md:text-base leading-relaxed flex items-start gap-3">
                    <span className={`${section.color} mt-1 flex-shrink-0 font-bold`}>{section.icon}</span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <button className="px-8 py-3.5 bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base">
            Apply Now
            <ExternalLink size={18} />
          </button>
          <button className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3 justify-center items-center mt-12">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current 
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-8 h-2.5" 
                  : "bg-white/20 w-2.5 h-2.5 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Carousel2;
