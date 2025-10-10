// import React from "react";
// import "./AiBot.css"; // CSS will go here (see below)

// const AiBotSection = ({ headText }) => {
//   return (
//     <section
//       className="h-[60vh] w-full bg-[#d7cfe6] pt-[15vh] relative overflow-hidden"
//       style={{
//         backgroundImage: "url('/Images/aboutBanner.webp')",
//         backgroundSize: 'cover',
//         backgroundPosition: '50% 50%',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       <img src="/Images/aboutBanner.webp" alt="About Banner Preload" className="hidden" loading="lazy" />
//       <div className="h-full container mx-auto flex flex-col md:flex-row justify-center items-center">
//         <div className="mt-5 w-[80px] md:w-[100px]">
//           <div className="robot-body">
//             <div className="ai-bot">
//               <div className="head">
//                 <div className="face">
//                   <div className="eyes"></div>
//                   <div className="mouth"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-5 bg-black/20 p-4 w-full md:w-1/2 text-center">
//           <h1 className="text-white md:text-[38px] text-[28px] font-semibold">{headText}</h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AiBotSection;

import React from "react";

const AiBotSection = ({ headText }) => {
  return (
    <section className="h-[55vh] md:h-[40vh] w-full bg-slate-900 relative overflow-hidden flex items-center">
      
      {/* Highly animated flowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-violet-900/20 animate-gradient-shift" 
           style={{ backgroundSize: '400% 400%' }} />
      
      {/* Multiple flowing orbs with strong animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-flow-orbit-1" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-violet-500/25 rounded-full blur-3xl animate-flow-orbit-2" />
        <div className="absolute bottom-0 left-1/2 w-56 h-56 bg-indigo-500/25 rounded-full blur-3xl animate-flow-orbit-3" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-3xl animate-flow-orbit-4" />
      </div>
      
      {/* Animated wave overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-wave-scan" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent animate-wave-scan-vertical" />
      </div>
      
      {/* Particle dots effect */}
      <div className="absolute inset-0 opacity-30" 
           style={{
             backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.4) 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
             animation: 'particle-drift 20s linear infinite'
           }} />

      <div className="relative container mx-auto flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        
        {/* CSS Robot from original code */}
        <div className="relative group">
          {/* Outer glow ring */}
          <div className="absolute -inset-2 rounded-2xl border-2 border-purple-500/30 animate-pulse-ring" />
          
          {/* Robot container */}
          <div className="relative w-20 md:w-24 transition-transform duration-300 hover:scale-110">
            <div className="robot-body">
              <div className="ai-bot">
                <div className="head">
                  <div className="face">
                    <div className="eyes"></div>
                    <div className="mouth"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-xl bg-purple-500/0 group-hover:bg-purple-400/30 blur-xl transition-all duration-500" />
        </div>

        {/* Text Content - compact */}
        <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl px-6 py-4 md:px-10 md:py-6 shadow-2xl hover:bg-white/10 transition-all duration-300">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center tracking-tight">
            {headText}
          </h1>
          
          {/* Animated underline */}
          <div className="mt-3 relative h-1 w-12 mx-auto overflow-hidden rounded-full bg-purple-900/50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 animate-slide" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes flow-orbit-1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(80px, -60px) scale(1.2) rotate(120deg); }
          66% { transform: translate(-50px, 70px) scale(0.85) rotate(240deg); }
          100% { transform: translate(0, 0) scale(1) rotate(360deg); }
        }

        @keyframes flow-orbit-2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-70px, 80px) scale(1.15) rotate(120deg); }
          66% { transform: translate(60px, -50px) scale(0.9) rotate(240deg); }
          100% { transform: translate(0, 0) scale(1) rotate(360deg); }
        }

        @keyframes flow-orbit-3 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(50px, 60px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-80px, -40px) scale(0.9) rotate(240deg); }
          100% { transform: translate(0, 0) scale(1) rotate(360deg); }
        }

        @keyframes flow-orbit-4 {
          0% { transform: translate(0, 0) scale(1) rotate(360deg); }
          33% { transform: translate(-60px, -50px) scale(1.2) rotate(240deg); }
          66% { transform: translate(70px, 60px) scale(0.85) rotate(120deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }

        @keyframes wave-scan {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }

        @keyframes wave-scan-vertical {
          0% { transform: translateY(-100%) skewY(-15deg); }
          100% { transform: translateY(200%) skewY(-15deg); }
        }

        @keyframes particle-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes pulse-ring {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes ping-corner {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 0.3; }
        }

        /* Original CSS Robot Styles */
        .robot-body {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ai-bot {
          position: relative;
          animation: float 3s ease-in-out infinite;
        }

        .head {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
          border-radius: 15px;
          position: relative;
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
        }

        .head::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background: #8B5CF6;
          border-radius: 2px;
        }

        .head::after {
          content: '';
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: #A78BFA;
          border-radius: 50%;
          animation: antenna-pulse 1.5s ease-in-out infinite;
        }

        .face {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .eyes {
          display: flex;
          gap: 12px;
          margin-bottom: 8px;
        }

        .eyes::before,
        .eyes::after {
          content: '';
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          animation: blink 3s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .mouth {
          width: 20px;
          height: 10px;
          border: 2px solid white;
          border-top: none;
          border-radius: 0 0 10px 10px;
          margin: 0 auto;
          animation: talk 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0; }
        }

        @keyframes talk {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }

        @keyframes antenna-pulse {
          0%, 100% { 
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 0 0 rgba(167, 139, 250, 0.7);
          }
          50% { 
            transform: translateX(-50%) scale(1.2);
            box-shadow: 0 0 0 6px rgba(167, 139, 250, 0);
          }
        }

        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .animate-gradient-shift {
          animation: gradient-shift 12s ease infinite;
        }

        .animate-flow-orbit-1 {
          animation: flow-orbit-1 15s ease-in-out infinite;
        }

        .animate-flow-orbit-2 {
          animation: flow-orbit-2 13s ease-in-out infinite;
        }

        .animate-flow-orbit-3 {
          animation: flow-orbit-3 17s ease-in-out infinite;
        }

        .animate-flow-orbit-4 {
          animation: flow-orbit-4 14s ease-in-out infinite;
        }

        .animate-wave-scan {
          animation: wave-scan 5s linear infinite;
        }

        .animate-wave-scan-vertical {
          animation: wave-scan-vertical 7s linear infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }

        .animate-antenna-blink {
          animation: antenna-blink 3s ease-in-out infinite;
        }

        .animate-eye-blink {
          animation: eye-blink 4s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }

        .animate-process-dot {
          animation: process-dot 1.5s ease-in-out infinite;
        }

        .animate-ping-corner {
          animation: ping-corner 2s ease-in-out infinite;
        }

        .animate-slide {
          animation: slide 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AiBotSection;