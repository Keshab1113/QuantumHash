import React from "react";

const teamData = [
  {
    name: "Dr. Noorjahan - CEO",
    description: "A doctor with 10+ years of experience in healthcare and safety. Actively developing AI-powered safety systems, focusing on contextual design, risk reduction, and enhancing workplace health through intelligent technologies.",
    imageURL: "/Teams/image.png"
  },
  {
    name: "Bapan",
    description: "Expert in NLP and model fine-tuning, leads AI training and ensures accurate language understanding for personalized education and safety interactions.",
    imageURL: "/Teams/bapan.png"
  },
  {
    name: "Akash",
    description: "Voice tech specialist and full stack developer, responsible for speech recognition, voice interface development, and end-to-end system implementation to enable natural, real-time human-AI communication.",
    imageURL: "/Teams/aakash.png"
  },
  {
    name: "Keshab",
    description: "Full Stack Developer.",
    imageURL: "/Teams/mypicture.jpg"
  },
];

const Teams = () => {
  return (
    <section className="h-full w-full">
      <div className="container mx-auto px-4 pt-16 pb-6">
        <h1 className="text-center text-[34px] font-bold h1head1 w-fit mb-2">
          Meet Our Team
        </h1>
        <p className="text-white md:max-w-[60%]">
          Our team combines expertise in AI engineering, industrial safety,
          voice technology, and education. With deep domain knowledge, we’re
          building adaptive AI systems to transform high-risk industries and
          learning environments.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="group [perspective:1000px] h-[40vh] w-full bg-transparent cursor-pointer"
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-center backface-hidden">
                  <img
                    src={member.imageURL}
                    alt={member.name}
                    className="w-full h-[85%] object-cover"
                  />
                  <p className="h1head1 text-center font-bold h-[15%] flex justify-center items-center">
                    {member.name}
                  </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,_#000,_#6700ff_80%,_#000)] text-white rounded-xl p-4 text-center [transform:rotateY(180deg)] backface-hidden flex items-center justify-center">
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
