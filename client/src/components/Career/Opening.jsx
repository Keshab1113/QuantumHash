 

import Carousel from "../ui/carousel";
import Carousel2 from "../ui/carousel";

const Openings = [
  {
    id: 1,
    title: "Sales and Marketing Specialist",
    type: "Part-Time / Remote",
    
    overview:
      "This is a part-time remote role (Monday to Saturday, 4-5 hours daily) for a Sales and Marketing Specialist. The role involves developing and executing sales strategies, managing customer relationships, and overseeing sales tasks. You will communicate with clients, deliver exceptional customer service, and drive sales performance.",
    responsibilities: [
      "Develop and execute sales and marketing strategies",
      "Manage and maintain customer/client relationships",
      "Oversee sales operations and performance",
      "Communicate with clients and deliver excellent customer service",
      "Work towards driving sales performance and growth",
    ],
    eligibility: [
      "Strong communication & customer service skills",
      "Proven experience in Sales and Sales Management",
      "Excellent interpersonal and networking skills",
      "Self-motivated and able to work independently in a remote setting",
      "Bachelor's degree in Marketing, Business, or related field preferred",
      "Experience in AI technology or related industry is a plus",
    ],
    benefits: [
      "Part-time remote work",
      "Performance-based growth opportunities",
      "Work with a fast-growing team",
      "Real industry exposure",
      "Full-time opportunity based on performance after 1 month",
      "Stipend: ₹4,000 - ₹5,000 per month (Part-Time)",
    ],
  },
  {
    id: 2,
    title: "Video & Photo Editing Intern",
    type: "Unpaid Internship / Remote",
    duration: "1 Month",
    overview:
      "We are seeking a creative Video & Photo Editing Intern to join our team. This is a 1-month unpaid internship with the opportunity for a full-time role based on performance. You will work on video and photo editing tasks for branding, marketing, and social media content.",
    responsibilities: [
      "Edit engaging video and photo content for branding and marketing",
      "Assist in creating content for social media platforms",
      "Collaborate with the marketing team for content planning",
      "Ensure timely delivery of edited content",
    ],
    eligibility: [
      "Basic experience in video and photo editing",
      "Familiarity with editing tools (e.g., Premiere Pro, Final Cut, Photoshop, Canva)",
      "Creative mindset with attention to detail",
      "Good communication skills",
    ],
    benefits: [
      "Remote internship",
      "Full-time opportunity based on performance after 1 month",
      "Hands-on industry experience",
      "Work on real brand content",
    ],
  },
];

const Opening = () => {
  return (
    <section className="relative w-full py-20 md:py-32 flex flex-col justify-center items-center overflow-hidden">
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.25;
            transform: scale(1);
          }
          50% { 
            opacity: 0.45;
            transform: scale(1.15);
          }
        }
        @keyframes slideLine {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(4deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        .pulse-glow {
          animation: pulse-glow 5s ease-in-out infinite;
        }
        .moving-line {
          background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), rgba(34, 211, 238, 0.5), transparent);
          background-size: 200% 100%;
          animation: slideLine 4s linear infinite;
        }
        .float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/15 to-black" />

        {/* Animated Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-pink-600/20 rounded-full blur-3xl pulse-glow"></div>
        <div
          className="absolute -bottom-32 -right-48 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-600/20 to-purple-600/20 rounded-full blur-3xl pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-full blur-3xl pulse-glow"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Moving Line */}
        <div className="absolute top-1/3 left-0 right-0 h-px moving-line"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-6 flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
            Opening Positions
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Join our team and help shape the future of AI. We're looking for talented individuals who are passionate about innovation and building next-generation solutions.
          </p>
        </div>

        {/* Carousel Container - Centered */}
        <div className="w-full flex justify-center max-w-6xl">
          <Carousel2 slides={Openings} />
        </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 md:mt-24 max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-950/40 to-cyan-950/40 border border-purple-500/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                Build the Future of AI With Us — we value{" "}
                <span className="text-purple-300 font-semibold">creativity</span>,{" "}
                <span className="text-cyan-300 font-semibold">ownership</span>, and{" "}
                <span className="text-purple-300 font-semibold">curiosity</span>.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                Whether you're a self-taught coder, an AI enthusiast, or someone passionate about reshaping the world — if you believe in building the future, let's do it together.
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Opening;
