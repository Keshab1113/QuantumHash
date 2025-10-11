import AiBotSection from "../../components/AiBot/AiBotSection";
import { Timeline } from "../../components/ui/timeline";
import { Helmet } from "react-helmet";

const careerJourney = [
  {
    title: "MAY 2025",
    link: "https://qhashai.com/",
    heading: "QhashAi Assistance",
    logo: "/Images/q.png",
    description: `QhashAi is an advanced autonomous digital intelligence system designed to act as a personal digital twin. It learns from user behaviour, automates tasks, and adapts dynamically to emotions and needs. With features like real-time emotion detection, AI-powered memory recall, and multimodal input/output processing, it revolutionizes human-AI interaction. Its neural mind map and autonomous thinking capabilities enable continuous learning and proactive insights, making it a powerful tool for productivity and decision-making.

Key Features of QhashAi (Developed & Under Progress):
• Autonomous Personal Digital Twin: Learns and mimics user behaviours, tone, and habits. Automates tasks like email replies, content creation, and decision-making. Supports custom personalities for different contexts (work, personal, social media).

Key Features:
1. Real-time Emotion Mirror: Detects user emotions via webcam, microphone, and typing patterns. Adapts responses based on mood (calming, motivational, etc.).
2. AI Life Archive: Logs all digital activities (chats, files, meetings, notes). Provides an interactive timeline for easy recall. Enables instant search across digital history.
3. "Any-to-Any" Input/Output Engine: Converts between different formats (e.g., image → code, video → quiz, spreadsheet → Python model). Supports multimodal interactions (sketch → React code, math formula → animation).
4. Autonomous Thinking Threads: Continuously processes information in the background. Refines ideas over time and delivers proactive insights.
5. Neural Mind Map UI: Visualizes knowledge as an interactive graph. Connects ideas, files, and conversations for associative learning.`,
    subDescription:
      "QhashAi is not just an assistant—it’s a thinking, feeling, evolving companion engineered to amplify human potential through seamless, intelligent augmentation.",
    backgroundImage: "",
  },
  {
    title: "AUGUST 2025",
    link: "https://quantumedu.in/",
    heading: "QuantumEdu – AI-Powered Learning Platform for Class 4 to 12",
    logo: "/Images/qedu-logo.png",
    description: `QuantumEdu is an innovative, AI-powered educational platform designed to provide high-quality learning to students globally, with a primary focus on Indian students from Class 4 to Class 12. By leveraging cutting-edge technology, QuantumEdu aims to bridge the education gap and democratize access to world-class tutoring.

Key Features:
1. AI-Powered Education: Eliminates financial barriers, offering personalized tutoring across all subjects at no cost. AI Tutors Modelled on Historical Geniuses – learn physics from Einstein, mathematics from Euler, English from Chaucer, and chemistry from Lavoisier, with AI replicating their teaching styles.
2. Advanced Technology Stack: Combines LLMs, NLP, voice cloning, and multi-language support for realistic, adaptive, and engaging learning experiences.
3. Accessibility & Scalability: Works on low-bandwidth and low-end devices, with offline access to ensure reach in underserved areas.
4. Interactive & Gamified Learning: Features chat/voice interactions, step-by-step guidance, visual aids, quizzes, and leaderboards to motivate students.
5. Global Vision: Aims to expand to 100+ countries in 5 years, creating a connected, feedback-driven learning ecosystem.`,
    subDescription:
      "QuantumEdu is more than a platform—it’s a movement to make education equitable and transformative for every child, everywhere.",
    backgroundImage: "",
  },
  {
    title: "SEPTEMBER 2025",
    link: "https://asesystem.hsequiz.quantumhash.me/",
    heading: "Assessment System – Employee Evaluation & Skill Tracking",
    logo: "/Images/ases-logo.png",
    description: `A smart AI-powered assessment system that allows organizations to test, evaluate, and track employee skills in real time. Managers can create customized assessments, get actionable insights on performance, and foster continuous learning to improve team productivity and engagement.

Key Features:
1. Custom Assessments: Build tests tailored to employee roles and skills.
2. Real-Time Analytics: Track performance trends and skill gaps instantly.
3. AI Recommendations: Suggest personalized learning paths and training modules.
4. Employee Progress Tracking: Monitor improvement over time for better HR planning.
5. Secure & Scalable: Supports large teams with privacy and reliability.`,
    subDescription:
      "The Assessment System helps organizations enhance workforce capability, optimize training efforts, and ensure skill readiness for the future.",
    backgroundImage: "",
  },
  {
    title: "OCTOBER 2025",
    link: "https://officemom.me/",
    heading: "Office MOM – Smart Moments of the Meeting System",
    logo: "/Images/officemom-logo.png",
    description: `Office MOM is a next-gen meeting management platform that automatically captures, transcribes, and organizes every meeting. It empowers teams to focus on collaboration while ensuring that discussions, decisions, and action items are easily trackable and actionable.

Key Features:
1. Automated Minutes: Live & recorded meetings are transcribed and summarized.
2. Action Tracking: Assign tasks directly from meeting notes.
3. Searchable History: Quickly find past discussions and decisions.
4. Voice & Video Integration: Works with calls and video conferences.
5. Notifications & Reminders: Keep teams aligned with follow-ups and deadlines.`,
    subDescription:
      "Office MOM streamlines meeting productivity, reduces manual note-taking, and ensures accountability across teams.",
    backgroundImage: "",
  },
  {
    title: "DECEMBER 2026",
    link: "/",
    heading:
      "QuantumHash Data Center – AI-First Infrastructure for Scalable, Secure Growth",
      logo: "/Images/logo.webp",
    description:
      "As Quantumhash Corporation expands its AI-driven platforms—including ASES (industrial safety), QhashAi (conversational AI), QuantumEdu (adaptive education), and ArtLabss (voice tech)—the demand for secure, real-time, and high-performance infrastructure has become critical. Building a dedicated data centre gives Quantumhash full control over its AI ecosystem, ensuring performance, privacy, and profitability.\n\n" +
      "Strategic Benefits:\n" +
      "1. Total Data Sovereignty & Security: Ensures sensitive data remains under Quantumhash’s control and supports GDPR, HIPAA compliance.\n" +
      "2. Real-Time AI Performance: Ultra-low latency boosts voice tech, AI tutors, and safety alerts.\n" +
      "3. Long-Term Cost Optimization: Cuts cloud dependency for GPU-intensive workloads.\n" +
      "4. Control Over Proprietary Models: Safeguards Quantumhash's IP from third-party access.\n" +
      "5. Cross-Division Synergy: Unified infrastructure boosts integration and real-time data sharing.\n" +
      "6. Hybrid & Edge Ready: Supports deployment in remote areas with edge infrastructure.\n" +
      "7. Sustainability: Enables green energy usage and efficient cooling.\n\n" +
      "Shareholder Benefits:\n" +
      "- Improved Profit Margins: Reduced costs mean higher EBITDA.\n" +
      "- Risk Mitigation: Avoids outages and price hikes from cloud providers.\n" +
      "- Growth Foundation: Scales faster and enters new markets seamlessly.\n" +
      "- Asset Ownership: Boosts company valuation and IPO/funding leverage.\n" +
      "- Competitive Advantage: Delivers privacy-first AI services with unmatched performance.",
    subDescription:
      "A dedicated data centre positions Quantumhash Corporation as an AI powerhouse with unmatched control, scalability, and resilience—laying the foundation for long-term shareholder value and industry leadership.",
    backgroundImage: "",
  },
];

const OurPlatform = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Platform | QuantumHash</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="min-h-screen h-full w-full bg-[#0d0125] ">
        <AiBotSection headText="Our Platforms & Roadmap" />
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6 my-12 max-w-4xl mx-auto text-center">
            <h1 className="text-white text-[18px] md:text-[22px] font-medium leading-relaxed">
              We are building a{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                unified AI ecosystem
              </span>{" "}
              that redefines how people work, learn, and stay safe. By
              integrating intelligent assistance, natural voice interaction,
              personalized education, and industrial safety, our platform
              delivers real-time insights, adaptive learning, and proactive risk
              management.
            </h1>

            <h2 className="text-gray-300 text-[16px] md:text-[18px] font-medium">
              Below is our roadmap that outlines this transformative journey.
            </h2>

            {/* Optional subtle accent line */}
            <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>

          <section className="min-h-screen h-full w-full bg-[#0d0125] ">
            <Timeline data={careerJourney} />
          </section>
        </div>
      </section>
    </>
  );
};
export default OurPlatform;
