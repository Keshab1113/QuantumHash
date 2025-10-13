 


import React, { useState, useEffect } from "react";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "/AI-Images/image.png",
      title: "Applied AI Solutions",
      description: "Real-world AI systems that solve actual business problems.",
      color: "from-blue-500 to-cyan-400",
      tag: "PRACTICAL",
    },
    {
      icon: "/AI-Images/image2.png",
      title: "Multimodal Intelligence",
      description: "Voice, video, text, and 3D visual learning integrated.",
      color: "from-purple-500 to-pink-400",
      tag: "ADAPTIVE",
    },
    {
      icon: "/AI-Images/image3.png",
      title: "Cloud-Native Architecture",
      description: "Scalable infrastructure built on modern technologies.",
      color: "from-orange-500 to-amber-400",
      tag: "SCALABLE",
    },
    {
      icon: "/AI-Images/image4.png",
      title: "Ethical AI Design",
      description: "Privacy-first, inclusive, and transparent AI systems.",
      color: "from-green-500 to-emerald-400",
      tag: "TRUSTED",
    },
    {
      icon: "/AI-Images/image.png",
      title: "Intelligent Automation",
      description: "Automate complex workflows with adaptive AI.",
      color: "from-indigo-500 to-blue-400",
      tag: "EFFICIENT",
    },
    {
      icon: "/AI-Images/image2.png",
      title: "Predictive Analytics",
      description: "Data-driven insights for smarter decisions.",
      color: "from-rose-500 to-pink-400",
      tag: "INSIGHTFUL",
    },
    {
      icon: "/AI-Images/image3.png",
      title: "Natural Language AI",
      description: "Conversational AI with human-like interactions.",
      color: "from-teal-500 to-cyan-400",
      tag: "INTUITIVE",
    },
    {
      icon: "/AI-Images/image4.png",
      title: "Custom AI Models",
      description: "Tailored machine learning for your industry.",
      color: "from-violet-500 to-purple-400",
      tag: "CUSTOMIZED",
    },
  ];

  const marqueeItems = [...features, ...features, ...features];

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* === Animated Gradient Background === */}
      <div className="absolute inset-0 animate-gradient bg-[radial-gradient(circle_at_top_left,_#0f172a,_#1e293b,_#0f172a)] bg-[length:200%_200%]"></div>

      {/* === Floating Orbs === */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px] animate-float-fast"></div>

      {/* === Particles Overlay (Soft Dots) === */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10 px-4">
          <div
            className={`inline-block mb-3 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              AI-Powered Innovation
            </span>
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-3 transition-all duration-1000 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Why{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              QuantumHash
            </span>
            ?
          </h1>
          <p
            className={`text-slate-400 text-base max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Transforming industries with cutting-edge AI solutions
          </p>
        </div>

        {/* === Infinite Scrolling Cards === */}
        <div className="relative">
          <div className="overflow-hidden mb-4">
            <div className="flex animate-marquee-left hover:pause-animation">
              {marqueeItems.map((feature, i) => (
                <FeatureCard key={`top-${i}`} feature={feature} highlight="cyan" />
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-marquee-right hover:pause-animation">
              {marqueeItems.map((feature, i) => (
                <FeatureCard key={`bottom-${i}`} feature={feature} highlight="purple" />
              ))}
            </div>
          </div>
        </div>
      </div>

 <style jsx>{`
  /* === Marquee Animations === */
  @keyframes marquee-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.333%);
    }
  }
  @keyframes marquee-right {
    0% {
      transform: translateX(-33.333%);
    }
    100% {
      transform: translateX(0);
    }
  }

  /* === Default (Desktop) Speed === */
  .animate-marquee-left {
    animation: marquee-left 35s linear infinite;
  }
  .animate-marquee-right {
    animation: marquee-right 35s linear infinite;
  }

  /* === Faster Marquee on Mobile === */
  @media (max-width: 768px) {
    .animate-marquee-left {
      animation: marquee-left 15s linear infinite; /* Faster */
    }
    .animate-marquee-right {
      animation: marquee-right 15s linear infinite; /* Faster */
    }
    .flex {
      gap: 0.5rem; /* Slightly tighter spacing */
    }
  }

  /* === Background Gradient Animation === */
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* === Floating Background Particles === */
  @keyframes floatSlow {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(40px, -30px);
    }
  }
  @keyframes floatMedium {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-30px, 20px);
    }
  }
  @keyframes floatFast {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(25px, -40px);
    }
  }

  .animate-gradient {
    animation: gradientShift 15s ease infinite;
  }
  .animate-float-slow {
    animation: floatSlow 14s ease-in-out infinite;
  }
  .animate-float-medium {
    animation: floatMedium 10s ease-in-out infinite;
  }
  .animate-float-fast {
    animation: floatFast 8s ease-in-out infinite;
  }

  /* === Hover Pause === */
  .hover\\:pause-animation:hover {
    animation-play-state: paused;
  }
`}</style>


    </section>
  );
};

const FeatureCard = ({ feature, highlight }) => (
  <div
    className={`group flex-shrink-0 w-72 sm:w-80 md:w-96 mx-2 sm:mx-3 bg-slate-800/40 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl hover:shadow-${highlight}-500/20 transition-all duration-500 hover:-translate-y-2 border border-slate-700/40 hover:border-${highlight}-400/40 relative overflow-hidden`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    <div className="absolute top-3 right-3">
      <span
        className={`text-[10px] font-bold text-${highlight}-400 tracking-wider bg-${highlight}-400/10 px-2 py-1 rounded border border-${highlight}-400/30`}
      >
        {feature.tag}
      </span>
    </div>
    <div className="flex items-start gap-4 relative">
      <div
        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
      >
        <img src={feature.icon} alt="" className="w-7 h-7 object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <h3
          className={`text-lg font-bold text-white mb-2 mt-5 group-hover:text-${highlight}-400 transition-colors duration-300`}
        >
          {feature.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  </div>
);

export default Intro;
