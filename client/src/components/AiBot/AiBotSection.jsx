import React from "react";
import "./AiBot.css"; // CSS will go here (see below)

const AiBotSection = ({ headText }) => {
  return (
    <section
      className="h-[60vh] w-full bg-[#d7cfe6] pt-[15vh] relative overflow-hidden"
      style={{
        backgroundImage: "url('/Images/aboutBanner.webp')",
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'fixed'
      }}
    >
      <img src="/Images/aboutBanner.webp" alt="About Banner Preload" className="hidden" loading="lazy" />
      <div className="h-full container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="mt-5 w-[80px] md:w-[100px]">
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

        <div className="mt-5 bg-black/20 p-4 w-full md:w-1/2 text-center">
          <h1 className="text-white md:text-[38px] text-[28px] font-semibold">{headText}</h1>
        </div>
      </div>
    </section>
  );
};

export default AiBotSection;
