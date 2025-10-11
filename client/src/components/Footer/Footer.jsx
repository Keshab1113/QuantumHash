 

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
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
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(5deg); }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 8s ease infinite;
                }
                .fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                }
                .pulse-glow {
                    animation: pulse-glow 4s ease-in-out infinite;
                }
                .float {
                    animation: float 6s ease-in-out infinite;
                }
                    @keyframes slideLine {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
}
.moving-line {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(168, 85, 247, 0.8),
    rgba(249, 115, 22, 0.8),
    transparent
  );
  background-size: 200% 100%;
  animation: slideLine 4s linear infinite;
}

            `}</style>

      <footer className="w-full bg-[#0d0125] relative overflow-hidden min-h-[600px]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl pulse-glow"></div>
          <div
            className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-orange-600/30 to-purple-600/30 rounded-full blur-3xl pulse-glow"
            style={{ animationDelay: "2s" }}></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pulse-glow"
            style={{ animationDelay: "4s" }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-8 relative z-10">
          {/* Top Decorative Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-16 fade-in-up moving-line"></div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            {/* Logo & Contact Section */}
            <div
              className="lg:col-span-4 fade-in-up"
              style={{ animationDelay: "0.1s" }}>
              <div className="relative inline-block mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <img
                  src="/Images/logo.webp"
                  alt="QuantumHash Logo"
                  className="w-44 relative z-10 brightness-110 group-hover:brightness-125 transition-all duration-500 transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6 mt-8">
                <a
                  href="https://www.google.com/maps?q=800+N+King+Street,+Suite+304,+Wilmington,+DE+19801,+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-orange-600/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                    <i
                      className="fa fa-map-marker text-purple-400 text-lg group-hover:text-orange-400 transition-colors"
                      aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      800 N King Street, Suite 304,
                      <br />
                      Wilmington, DE 19801, USA
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:admin@quantumhash.me?subject=Inquiry&body=Hello Quantumhash team,"
                  className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-orange-600/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                    <i
                      className="fa fa-envelope text-purple-400 text-lg group-hover:text-orange-400 transition-colors"
                      aria-hidden="true"></i>
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                    admin@quantumhash.me
                  </p>
                </a>
              </div>
            </div>

            {/* Invite Visitors Section */}
            <div
              className="lg:col-span-4 fade-in-up"
              style={{ animationDelay: "0.2s" }}>
              <div className="relative mb-8">
                <h3 className="text-white text-xl font-bold tracking-wide relative inline-block">
                  Invite visitors to
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></div>
                </h3>
              </div>

              <div className="space-y-4 mt-8">
                {[
                  {
                    to: "connect#contact",
                    text: "Partner with us",
                    id: "contact",
                  },
                  { to: "connect#meeting", text: "Book a demo", id: "meeting" },
                  {
                    to: "connect#contact",
                    text: "Join as beta testers",
                    id: "contact",
                  },
                  {
                    to: "connect#meeting",
                    text: "Explore custom AI solutions",
                    id: "meeting",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="flex items-center gap-3 group cursor-pointer py-2"
                    onClick={(e) => {
                      if (window.location.pathname === "/connect") {
                        e.preventDefault();
                        const section = document.getElementById(item.id);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                          window.history.pushState(null, "", `#${item.id}`);
                        }
                      }
                    }}>
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center group-hover:rotate-180 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                      <FontAwesomeIcon
                        icon={faSquare}
                        className="w-2 h-2 text-white rotate-45"
                      />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-2 text-sm">
                      {item.text}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Organization Section */}
            <div
              className="lg:col-span-4 fade-in-up"
              style={{ animationDelay: "0.3s" }}>
              <div className="relative mb-8">
                <h3 className="text-white text-xl font-bold tracking-wide relative inline-block">
                  Organization
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></div>
                </h3>
              </div>

              <div className="space-y-4 mt-8">
                {[
                  { to: "https://qhashai.com/", text: "QhashAi" },
                  { to: "https://quantumedu.in/", text: "QuantumEdu" },
                  { to: "https://asesystem.com/", text: "ASESystem" },
                   { to: "https://officemom.me/", text: "OfficeMom" },
                  { to: "https://asesystem.hsequiz.quantumhash.me/", text: "Assessment System" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group cursor-pointer py-2">
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center group-hover:rotate-180 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                      <FontAwesomeIcon
                        icon={faSquare}
                        className="w-2 h-2 text-white rotate-45"
                      />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-2 text-sm">
                      {item.text}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Decorative Line */}
        <div
  className="w-full h-px mb-8 fade-in-up moving-line"
  style={{ animationDelay: "0.4s" }}></div>


          {/* Copyright */}
          <div className="fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-center text-gray-500 text-sm">
              Copyright © 2025 QuantumHash. All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom decorative image */}
        <img
          src="/Images/footer.png"
          alt=""
          className="absolute bottom-0 left-10 opacity-30 rotate-180 float hidden md:block"
        />
      </footer>
    </>
  );
};

export default Footer;
