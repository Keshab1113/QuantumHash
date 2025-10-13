// import Carousel from "../ui/carousel"

// const Openings = [
//     {
//         id: 1,
//         title: "Web-based AI Developer",
//         type: "Full-Time / Remote",
//         overview:
//             "We're looking for a creative and committed Web-based AI Developer to join our growing team. You'll work on building intuitive user interfaces, integrating AI models, and deploying scalable web applications — from prototypes to production.",
//         responsibilities: [
//             "Develop web interfaces for AI-powered applications (React/Next.js preferred)",
//             "Integrate APIs and machine learning models into web platforms",
//             "Work with RESTful services and modern web stacks",
//             "Collaborate with product and research teams to improve UX and system performance",
//             "Contribute to fast iterations, A/B testing, and product rollout",
//         ],
//         eligibility: [
//             "Strong understanding of HTML, CSS, JavaScript, and frontend frameworks",
//             "Experience with Node.js, Python (Flask/FastAPI), or serverless functions is a plus",
//             "Familiarity with AI/ML APIs or platforms like OpenAI, HuggingFace, or TensorFlow.js",
//             "Basic understanding of VPS, CPanel and deployment workflows",
//         ],
//         benefits: [
//             "Flexible part-time hours (10–25 hours/week)",
//             "Remote-first – work from home, from anywhere in the world",
//             "Opportunity to work on real-world AI products used across industries",
//             "Mentorship, learning resources, and career growth support",
//         ],
//     },
//     {
//         id: 1,
//         title: "Web-based AI Developer",
//         type: "Full-Time / Remote",
//         overview:
//             "We're looking for a creative and committed Web-based AI Developer to join our growing team. You'll work on building intuitive user interfaces, integrating AI models, and deploying scalable web applications — from prototypes to production.",
//         responsibilities: [
//             "Develop web interfaces for AI-powered applications (React/Next.js preferred)",
//             "Integrate APIs and machine learning models into web platforms",
//             "Work with RESTful services and modern web stacks",
//             "Collaborate with product and research teams to improve UX and system performance",
//             "Contribute to fast iterations, A/B testing, and product rollout",
//         ],
//         eligibility: [
//             "Strong understanding of HTML, CSS, JavaScript, and frontend frameworks",
//             "Experience with Node.js, Python (Flask/FastAPI), or serverless functions is a plus",
//             "Familiarity with AI/ML APIs or platforms like OpenAI, HuggingFace, or TensorFlow.js",
//             "Basic understanding of VPS, CPanel and deployment workflows",
//         ],
//         benefits: [
//             "Flexible part-time hours (10–25 hours/week)",
//             "Remote-first – work from home, from anywhere in the world",
//             "Opportunity to work on real-world AI products used across industries",
//             "Mentorship, learning resources, and career growth support",
//         ],
//     },
//     {
//         id: 1,
//         title: "Web-based AI Developer",
//         type: "Full-Time / Remote",
//         overview:
//             "We're looking for a creative and committed Web-based AI Developer to join our growing team. You'll work on building intuitive user interfaces, integrating AI models, and deploying scalable web applications — from prototypes to production.",
//         responsibilities: [
//             "Develop web interfaces for AI-powered applications (React/Next.js preferred)",
//             "Integrate APIs and machine learning models into web platforms",
//             "Work with RESTful services and modern web stacks",
//             "Collaborate with product and research teams to improve UX and system performance",
//             "Contribute to fast iterations, A/B testing, and product rollout",
//         ],
//         eligibility: [
//             "Strong understanding of HTML, CSS, JavaScript, and frontend frameworks",
//             "Experience with Node.js, Python (Flask/FastAPI), or serverless functions is a plus",
//             "Familiarity with AI/ML APIs or platforms like OpenAI, HuggingFace, or TensorFlow.js",
//             "Basic understanding of VPS, CPanel and deployment workflows",
//         ],
//         benefits: [
//             "Flexible part-time hours (10–25 hours/week)",
//             "Remote-first – work from home, from anywhere in the world",
//             "Opportunity to work on real-world AI products used across industries",
//             "Mentorship, learning resources, and career growth support",
//         ],
//     },
// ];


// const Opening = () => {
//     return (
//         <section className=" h-full  w-full mt-10 pb-10" style={{
//             backgroundImage: "url('/Images/careerBG.png')",
//             backgroundSize: "cover",
//         }}>
//             <h1 className=" h1head1 md:text-[38px] text-[28px] font-bold w-fit mb-10">Opening Positions</h1>
//             <Carousel slides={Openings} />
//             <h3 className=" text-white text-sm mt-20">Build the Future of AI With Us - We value creativity, ownership, and curiosity. Whether you’re a self-taught coder, a graduate with AI dreams, or someone passionate about reshaping the world with intelligent systems — if you believe in building the future, let’s do it together.</h3>
//         </section>
//     )
// }

// export default Opening;

import Carousel from "../ui/carousel";
import Carousel2 from "../ui/carousel";

const Openings = [
  {
    id: 1,
    title: "Web-based AI Developer",
    type: "Full-Time / Remote",
    overview:
      "We're looking for a creative and committed Web-based AI Developer to join our growing team. You'll build intuitive interfaces, integrate AI models, and deploy scalable web applications that shape the future.",
    responsibilities: [
      "Develop web interfaces (React/Next.js)",
      "Integrate AI APIs and ML models",
      "Collaborate with product and research teams",
      "Work on fast iterations and product rollout",
    ],
    eligibility: [
      "Strong JS, HTML, CSS fundamentals",
      "Experience with Node.js or Python",
      "Familiarity with AI APIs (OpenAI, HuggingFace)",
      "Basic deployment understanding",
    ],
    benefits: [
      "Flexible hours & remote work",
      "Work on real-world AI products",
      "Mentorship & growth support",
      "Competitive compensation",
    ],
  },
  {
    id: 2,
    title: "AI Research Intern",
    type: "Part-Time / Remote",
    overview:
      "Assist in AI research, build internal tools, and work closely with developers and researchers to solve real-world problems and contribute to cutting-edge solutions.",
    responsibilities: [
      "Support research and development of AI models",
      "Build and maintain internal tools",
      "Run experiments and analyze results",
    ],
    eligibility: [
      "Basic knowledge of Python/ML",
      "Interest in AI research",
      "Good communication skills",
    ],
    benefits: [
      "Flexible schedule",
      "Remote opportunity",
      "Real-world AI exposure",
      "Mentorship from experts",
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
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
