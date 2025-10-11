 
const Banner = () => {
  return (
    <section className="w-full py-12 relative rounded-4xl overflow-hidden">
      {/* Inline Animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-bg {
          background: linear-gradient(270deg, #8b5cf6, #ec4899, #f97316, #8b5cf6);
          background-size: 600% 600%;
          animation: gradientShift 15s ease infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl animated-bg opacity-30"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl animated-bg opacity-30" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animated-bg opacity-20" style={{ animationDelay: "6s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="inline-block text-sm md:text-base font-semibold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-500 mb-2 fade-in-up">
          Our Platform
        </h2>

        <h1 className="text-white text-2xl md:text-[30px] font-medium leading-snug max-w-3xl mx-auto fade-in-up" style={{ animationDelay: "0.3s" }}>
          Connecting People Through Innovative Digital Experiences and Solutions
        </h1>
      </div>
    </section>
  );
};

export default Banner;

