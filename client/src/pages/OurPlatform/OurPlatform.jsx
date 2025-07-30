import AboutBanner from "../../components/About/AboutBanner";
import { Timeline } from "../../components/ui/timeline"
import { Helmet } from "react-helmet";

const careerJourney = [
    {
        title: "DECEMBER 2024",
        link: "https://asesystem.com/",
        heading: "ASES – AI-Powered Industrial Health, Safety & Environment System (Industrial AI)",
        description: `ASES is a next-generation, AI-powered HSE intelligence platform developed by Quantumhash Corporation, purpose-built to revolutionize safety and environmental performance across the Oil & Gas sector. Harnessing the power of real-time data analytics, predictive modelling, and intelligent alert systems, ASES proactively identifies risks, strengthens compliance, and empowers informed decision-making at every level of industrial operations. By integrating advanced technologies such as deep learning, natural language processing, and incident trend analysis, ASES provides actionable insights that help prevent incidents before they happen. Seamlessly embedded into operational workflows, the platform not only improves on-site safety and environmental oversight but also drives a culture of continuous improvement.

Key Features:
1. HSE Monthly Quiz: Enhances workforce knowledge through engaging, systemized quizzes for continuous learning and assessment.
2. 3D Videos of Previous Accident Incidents (Accident Re-enactment): Realistic 3D recreations of past incidents for impactful lesson learning and visual safety training in multiple languages.
3. Smart MoM (Minutes of the Meeting): Live & Recorded automatically records, transcribes, and organizes meetings for easy retrieval, action tracking, and accountability.
4. Targeted Crew Training: Focused learning plans tailored to crew roles and recent incident learnings, powered by intelligent analysis.
5. Advanced Reports & Audit Compliance: Automates report generation, tracks audit requirements, and ensures timely compliance across operations.
6. Smart Letters & Memo Tracking: AI-powered system reads and understands memos/letters contents for automated tagging, routing, and action monitoring.
7. Smart Reporting: SOC, Hazardous Condition, Near Miss, Behaviour Based Safety, Site Verification Visits, Observations Voice-enabled reporting system for seamless field-level input and real-time HSE tracking.
8. Advanced Incident Investigation (Advanced than Tap-Root): AI-assisted root cause analysis tool that streamlines investigations and enhances corrective action planning.
9. Advanced Crew Competency (Voice-Based by System): Interactive voice assessments to evaluate technical and HSE knowledge of crew in real time.
10. Advanced Crew Appraisal (Voice-Based by System): Voice-interactive performance evaluations using data-driven criteria to support fair, timely appraisals.
11. Advanced Incident Prediction: Predictive analytics engine detects patterns and flags potential incidents before they occur.`,
        subDescription:
            "ASES is not just a tool—it’s a strategic shift toward intelligent, predictive, and data-driven HSE management for the future of Industrial operations. ASES stands at the forefront of industrial safety innovation, aligning cutting-edge AI capabilities with domain expertise to drive smarter decisions, safer operations, and a culture of continuous improvement.",
        backgroundImage: "",
    },
    {
        title: "MAY 2025",
        link: "https://qhashai.com/",
        heading: "QhashAi Assistance",
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
        title: "DECEMBER 2026",
        link: "/",
        heading: "QuantumHash Data Center – AI-First Infrastructure for Scalable, Secure Growth",
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
                <title>Our Platform |  QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="min-h-screen h-full w-full bg-[#0d0125] ">
                <AboutBanner title={"Our Platforms & Roadmap"} />
                <div className="container mx-auto px-4 py-6">
                    <div className=" flex gap-4 flex-col border border-solid platform-box p-4 my-10">
                        <h1 className=" text-white text-2xl font-medium">
                            We are building a unified AI ecosystem that redefines how people work, learn, and stay safe. By integrating intelligent assistance, natural voice interaction, personalized education, and industrial safety, our platform delivers real-time insights, adaptive learning, and proactive risk management. It simplifies complexity, enhances productivity, and empowers smarter decision-making across every domain.
                        </h1>
                        <h2 className=" text-white text-2xl font-semibold">
                            Below is our roadmap that outlines this transformative journey.
                        </h2>
                    </div>

                    <section className="min-h-screen h-full w-full bg-[#0d0125] ">
                        <Timeline data={careerJourney} />
                    </section>
                </div>
            </section>
        </>
    )
}
export default OurPlatform;