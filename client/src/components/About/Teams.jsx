 

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const teamData = [
  {
    name: "Dr. Noorjahan - CEO",
    description:
      "A doctor with 10+ years of experience in healthcare and safety. Actively developing AI-powered safety systems, focusing on contextual design, risk reduction, and enhancing workplace health through intelligent technologies.",
    imageURL: "/Teams/image.webp",
  },
  {
    name: "Bapan",
    description:
      "Expert in NLP and model fine-tuning, leads AI training and ensures accurate language understanding for personalized education and safety interactions.",
    imageURL: "/Teams/bapan.webp",
  },
  {
    name: "Akash",
    description:
      "Voice tech specialist and full stack developer, responsible for speech recognition, voice interface development, and end-to-end system implementation to enable natural, real-time human-AI communication.",
    imageURL: "/Teams/aakash.webp",
  },
  {
    name: "Keshab",
    description:
      "MERN Stack Developer, skilled in building responsive websites, user-friendly interfaces, and real-time applications. Leads development of intuitive web experiences for education, analytics, and tracking systems, ensuring speed, accessibility, and performance.",
    imageURL: "/Teams/mypicture.jpg",
  },
];

const Teams = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index) => {
    if (isMobile) {
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  return (
    <section className="py-16 bg-[#0d0125]">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-5xl font-bold mb-2"
        >
          Meet Our Team
        </motion.h1>

        {/* Animated Divider */}
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="border-t-2 border-purple-500 w-24 mx-auto mb-6 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10"
        >
          Our team combines expertise in AI engineering, industrial safety,
          voice technology, and education. With deep domain knowledge, we’re
          building adaptive AI systems to transform high-risk industries and
          learning environments.
        </motion.p>

       {/* Team Cards */}
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {teamData.map((member, index) => {
    const isFlipped = flippedIndex === index;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative w-full h-96 cursor-pointer [perspective:1000px]"
        onClick={() => handleCardClick(index)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          } group hover:[transform:rotateY(180deg)]`}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-[#1b1b2f] rounded-xl shadow-lg overflow-hidden backface-hidden flex flex-col items-center justify-start border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <img
              src={member.imageURL}
              alt={member.name}
              className="w-full h-4/5 object-cover rounded-t-xl"
              loading="lazy"
            />
            <h3 className="text-white font-bold text-lg md:text-xl mt-2 text-center">
              {member.name}
            </h3>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0f0f1f] via-[#1a1a2e] to-[#111126] text-white rounded-xl p-6 backface-hidden flex items-center justify-center text-center text-sm md:text-base [transform:rotateY(180deg)] shadow-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <p>{member.description}</p>
          </div>
        </div>
      </motion.div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default Teams;
