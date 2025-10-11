// import { Helmet } from "react-helmet";
// import RollingGallery from "../../../ReactBits/RollingGallery/RollingGallery";
// import InvestorModal from "../../components/InvestorModal/InvestorModal";
// import { Accordion, AccordionItem } from "@heroui/react";
// import AiBotSection from "../../components/AiBot/AiBotSection";

// const product = [
   
//            {
//     name: "Office MOM",
//     image: "/Projects/officemom.PNG",
//     link: "#",
//     description:
//       "Office MOM (Moments of the Meeting) is an AI-powered meeting management platform that automatically records, transcribes, summarizes, and organizes every meeting. It transforms team collaboration by turning conversations into actionable insights.",
//   },
//   {
//     name: "Assessment System",
//     image: "/Projects/assesment.PNG",
//     link: "#",
//     description:
//       "The Assessment System helps organizations evaluate employee performance through smart, adaptive testing. It offers AI-driven insights, skill tracking, and personalized learning recommendations to foster continuous workforce development.",
//   },
  
    
//     {
//         name: "ASES",
//         image: "/Projects/image2.webp",
//         link: "https://asesystem.com/",
//     },
  
//     {
//         name: "QuantumAI",
//         image: "/Projects/image.webp",
//         link: "https://qhashai.com/",
//     },
    
//      {
//         name: "QuantumEdu",
//         image: "/Projects/image4.webp",
//         link: "https://quantumedu.in/",
//     },

// ]

// const Investor = () => {
//     return (
//         <>
//             <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>Our Investors |  QuantumHash</title>
//                 <link rel="canonical" href="http://mysite.com/example" />
//             </Helmet>
//             <section className=" h-full w-full bg-[#0d0125] ">
//                 <AiBotSection headText="Investor Relations" />
//                 <div className="container mx-auto px-4 py-6">
//                     <section className="md:h-[50vh] h-full w-full bg-[#0d0125] flex md:flex-row flex-col gap-10 justify-center items-center" style={{
//                         backgroundImage: "url('/Images/investorBG.png')",
//                         backgroundPosition: " center",
//                         backgroundSize: "300px 300px",
//                         backgroundRepeat: "no-repeat",
//                     }}>
//                         <div className=" w-[216px] h-[216px] rounded-full p-6 border border-white border-solid">
//                             <img src="/Images/investor.webp" alt="" className=" h-full w-full" loading="lazy"/>
//                         </div>
//                         <h1 className=" text-white text-[20px] lg:max-w-[80%] md:max-w-[50%]">QuantumHash Technologies is a deep-tech startup driving innovation in voice AI, safety intelligence, and personalized learning. Our ecosystem includes four cutting-edge platforms, each targeting a vital sector with scalable AI solutions.</h1>
//                     </section>
//                     <section className=" h-full w-full bg-[#0d0125] mt-10 flex flex-col justify-center items-center">
//                         <h1 className=" h1head1 md:text-[38px] text-[28px] font-bold  text-center">Products List</h1>
//                         <RollingGallery images={product} autoplay={true} pauseOnHover={true} />
//                         <InvestorModal />
//                         <h1 className=" h1head1 md:text-[38px] text-[28px] font-bold  text-center mt-10">Why Invest in QuantumHash ?</h1>
//                         <div className=" w-full text-white mt-10">
//                             <Accordion selectionMode="multiple">
//                                 <AccordionItem
//                                     key="1"
//                                     aria-label="AI-First Platform Strategy"
//                                     title="1. Diverse AI-Driven Product Strategy"
//                                     // className=" text-blue-500"
//                                 >
//                                     We’ve developed 4 AI-first platforms that cater to high-demand areas: AI conversational assistance, adaptive learning in education, predictive analytics for industrial safety, and intelligent voice-based interfaces. These platforms are not just concepts — they are active, evolving, and designed to meet real-world enterprise needs.
//                                 </AccordionItem>

//                                 <AccordionItem
//                                     key="2"
//                                     aria-label="User Adoption and Market Traction"
//                                     title="2. Strong User Base and Real-World Traction"
//                                 >
//                                     Our products currently serve over 6,000 monthly users across industrial environments. Early adoption in critical sectors like manufacturing and logistics has validated our approach, and pilot programs are currently underway with major EdTech institutions to bring adaptive AI into classrooms.
//                                 </AccordionItem>

//                                 <AccordionItem
//                                     key="3"
//                                     aria-label="Scalable Architecture"
//                                     title="3. Scalable Modular Architecture for B2B Growth"
//                                 >
//                                     All platforms are built on a modular, API-first architecture, allowing seamless integration into third-party systems. This design enables rapid B2B deployment, customization, and long-term scalability — making it easier for partners to adopt and grow with our technology.
//                                 </AccordionItem>
//                             </Accordion>

//                         </div>
//                     </section>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default Investor;

// import { Helmet } from "react-helmet";
// import InvestorModal from "../../components/InvestorModal/InvestorModal";
// import { Accordion, AccordionItem } from "@heroui/react";
// import AiBotSection from "../../components/AiBot/AiBotSection";
// import { FaUsers, FaChartLine, FaCogs, FaClock } from "react-icons/fa";

// const product = [
//   { name: "Office MOM", image: "/Projects/officemom.PNG", link: "#", description: "AI-powered meeting management platform that records, transcribes, summarizes, and organizes every meeting." },
//   { name: "Assessment System", image: "/Projects/assesment.PNG", link: "#", description: "Adaptive testing platform providing AI-driven insights and personalized learning recommendations." },
//   { name: "ASES", image: "/Projects/image2.webp", link: "https://asesystem.com/", description: "Advanced enterprise system for workflow optimization." },
//   { name: "QuantumAI", image: "/Projects/image.webp", link: "https://qhashai.com/", description: "Next-gen AI solutions for predictive analytics and automation." },
//   { name: "QuantumEdu", image: "/Projects/image4.webp", link: "https://quantumedu.in/", description: "Personalized AI-driven learning platform for education." },
// ];

// const metrics = [
//   { icon: <FaUsers size={30} />, label: "Active Users", value: "6,000+" },
//   { icon: <FaChartLine size={30} />, label: "Growth Rate", value: "120% YoY" },
//   { icon: <FaCogs size={30} />, label: "Products", value: "4 AI Platforms" },
// ];

// const faqs = [
//   { question: "How can I invest in QuantumHash?", answer: "You can connect via our Investor Modal on this page, or reach out via email for more information." },
//   { question: "What sectors does QuantumHash operate in?", answer: "Voice AI, Safety Intelligence, Adaptive Learning, Enterprise Automation." },
//   { question: "Are there any current funding rounds?", answer: "Yes, we are actively seeking strategic investors to join our growth journey." },
//   { question: "What is the expected ROI?", answer: "While projections vary, our past growth and active platforms suggest strong potential returns for early investors." },
// ];

// const Investor = () => {
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Our Investors | QuantumHash</title>
//       </Helmet>

//       <style>{`
//         @keyframes pulse-glow {0%,100%{opacity:0.3;transform:scale(1);}50%{opacity:0.6;transform:scale(1.1);}}
//         @keyframes float {0%,100%{transform:translateY(0px) rotate(0deg);}50%{transform:translateY(-15px) rotate(5deg);}}
//         .pulse-glow {animation:pulse-glow 4s ease-in-out infinite;}
//         .float {animation:float 6s ease-in-out infinite;}
//         .fade-in-up {opacity:0;transform:translateY(20px);animation:fadeInUp 1s ease-out forwards;}
//         @keyframes fadeInUp {to{opacity:1;transform:translateY(0);}}
//         .moving-line {background: linear-gradient(90deg, transparent, rgba(168,85,247,0.8), rgba(249,115,22,0.8), transparent); background-size:200% 100%; animation:slideLine 4s linear infinite;}
//         @keyframes slideLine {0% {background-position:0% 0%;} 100%{background-position:200% 0%;}}
//       `}</style>

//       <section className="w-full relative overflow-hidden min-h-screen text-white bg-[#0d0125]">

//         {/* Gradient Background */}
//         <div className="absolute inset-0 overflow-hidden -z-10">
//           <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl pulse-glow"></div>
//           <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-orange-600/30 to-purple-600/30 rounded-full blur-3xl pulse-glow" style={{ animationDelay: "2s" }}></div>
//           <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pulse-glow" style={{ animationDelay: "4s" }}></div>
//           <div className="absolute inset-0 opacity-5" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)", backgroundSize:"50px 50px"}}></div>
//         </div>

//         <AiBotSection headText="Investor Relations" />

//         {/* Hero */}
//         <div className="container mx-auto px-6 md:flex items-center justify-between gap-10 py-16 relative z-10">
//           <div className="md:w-1/2 space-y-6">
//             <h1 className="text-3xl md:text-5xl font-bold fade-in-up">QuantumHash Technologies: Innovating with AI for a Smarter Tomorrow</h1>
//             <p className="text-lg md:text-xl fade-in-up delay-200">Driving deep-tech solutions across voice AI, safety intelligence, and adaptive learning. Join us in transforming industries with scalable AI platforms.</p>
//             <div className="fade-in-up delay-400"><InvestorModal /></div>
//           </div>
//           <div className="md:w-1/2 flex justify-center fade-in-up delay-600">
//             <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-white p-4 overflow-hidden">
//               <img src="/Images/investor.webp" alt="Investor" className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </div>

//         {/* Metrics */}
//         <div className="container mx-auto px-6 mt-16 grid md:grid-cols-3 gap-8 relative z-10">
//           {metrics.map((metric, idx) => (
//             <div key={idx} className="bg-white/10 p-6 rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform fade-in-up" style={{ animationDelay: `${idx*200}ms` }}>
//               {metric.icon}<h2 className="mt-4 text-2xl font-bold">{metric.value}</h2><p className="mt-2">{metric.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Products */}
//         <section className="container mx-auto px-6 mt-16 relative z-10">
//           <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Our Products</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {product.map((prod, idx) => (
//               <a key={idx} href={prod.link} target="_blank" rel="noopener noreferrer"
//                  className="relative group bg-white/10 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform fade-in-up"
//                  style={{ animationDelay: `${idx*200}ms` }}>
//                 <img src={prod.image} alt={prod.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
//                   <h3 className="text-xl font-bold">{prod.name}</h3>
//                   <p className="mt-2">{prod.description}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* Why Invest */}
//         <section className="container mx-auto px-6 mt-20 relative z-10">
//           <h2 className="text-4xl font-bold text-center mb-10 fade-in-up">Why Invest in QuantumHash?</h2>
//           <Accordion selectionMode="multiple">
//             <AccordionItem key="1" title="Diverse AI-Driven Product Strategy">
//               4 AI-first platforms catering to high-demand areas: conversational AI, adaptive learning, predictive analytics, and intelligent voice-based interfaces — all live and growing.
//             </AccordionItem>
//             <AccordionItem key="2" title="Strong User Base & Real-World Traction">
//               Serving over 6,000 monthly users with early adoption in manufacturing, logistics, and EdTech, validating our scalable solutions.
//             </AccordionItem>
//             <AccordionItem key="3" title="Scalable Modular Architecture">
//               API-first, modular design allows rapid B2B deployment, seamless integration, and long-term growth potential.
//             </AccordionItem>
//           </Accordion>
//         </section>

       

//         {/* CTA */}
//         <section className="container mx-auto px-6 mt-16 text-center relative z-10">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in-up">Ready to Partner with Us?</h2>
//           <p className="mb-6 text-lg md:text-xl fade-in-up delay-200">Connect with QuantumHash today and explore the opportunities to invest in cutting-edge AI technology transforming multiple sectors.</p>
//           <div className="fade-in-up delay-400"><InvestorModal /></div>
//         </section>

//         {/* Footer HR Fix
//         <div className="absolute bottom-0 left-0 w-full z-20">
//           <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-4 moving-line"></div>
//         </div> */}

//       </section>
//     </>
//   );
// };

// export default Investor;


import InvestorModal from "../../components/InvestorModal/InvestorModal";
import { Accordion, AccordionItem } from "@heroui/react";
import AiBotSection from "../../components/AiBot/AiBotSection";
import { FaUsers, FaChartLine, FaCogs, FaRocket, FaLightbulb, FaShieldAlt, FaGlobe, FaTrophy, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const product = [
  { name: "Office MOM", image: "/Projects/officemom.PNG", link: "https://officemom.me/", description: "AI-powered meeting management platform that records, transcribes, summarizes, and organizes every meeting.", impact: "30% time saved in meetings" },
  { name: "Assessment System", image: "/Projects/assesment.PNG", link: "https://asesystem.hsequiz.quantumhash.me/", description: "Adaptive testing platform providing AI-driven insights and personalized learning recommendations.", impact: "45% improvement in learning outcomes" },
  { name: "ASES", image: "/Projects/image2.webp", link: "https://asesystem.com/", description: "Advanced enterprise system for workflow optimization.", impact: "40% operational efficiency gain" },
  { name: "QuantumAI", image: "/Projects/image.webp", link: "https://qhashai.com/", description: "Next-gen AI solutions for predictive analytics and automation.", impact: "60% faster decision-making" },
  { name: "QuantumEdu", image: "/Projects/image4.webp", link: "https://quantumedu.in/", description: "Personalized AI-driven learning platform for education.", impact: "2x engagement rate" },
];

const metrics = [
  { icon: <FaUsers size={30} />, label: "Active Users", value: "6,000+", trend: "+120% YoY" },
  { icon: <FaChartLine size={30} />, label: "Revenue Growth", value: "120%", trend: "Year over Year" },
  { icon: <FaCogs size={30} />, label: "AI Products", value: "5", trend: "Live & Scaling" },
  { icon: <FaGlobe size={30} />, label: "Market Reach", value: "12+", trend: "Industries Served" },
];

const competitiveAdvantages = [
  { icon: <FaLightbulb size={24} />, title: "Deep Tech Innovation", description: "Proprietary AI models built on cutting-edge research, delivering measurable ROI across industries." },
  { icon: <FaRocket size={24} />, title: "Rapid Deployment", description: "API-first architecture enables enterprise integration in weeks, not months." },
  { icon: <FaShieldAlt size={24} />, title: "Enterprise-Grade Security", description: "SOC 2 compliant infrastructure with end-to-end encryption and data sovereignty." },
  { icon: <FaTrophy size={24} />, title: "Proven Market Fit", description: "6,000+ active users with 85% retention rate across manufacturing, EdTech, and logistics sectors." },
];

const milestones = [
  { year: "2024", title: "Foundation", description: "QuantumHash established with vision to democratize AI for enterprises" },
  { year: "2025", title: "Product Launch", description: "First 3 AI platforms deployed, securing initial enterprise customers" },
  { year: "2025", title: "Scale & Growth", description: "Reached 6,000+ users, 120% YoY growth, expanded to 5 products" },
  { year: "2025", title: "Market Expansion", description: "Strategic partnerships, international markets, Series A readiness" },
];

const investmentHighlights = [
  { title: "Addressable Market", value: "$150B+", description: "Global AI enterprise software market by 2027" },
  { title: "Customer Acquisition Cost", value: "$800", description: "Industry-leading efficiency with 18-month payback period" },
  { title: "Gross Margin", value: "78%", description: "SaaS-based model with high scalability potential" },
  { title: "Churn Rate", value: "<5%", description: "Industry-leading retention through continuous value delivery" },
];

const faqs = [
  { question: "How can I invest in QuantumHash?", answer: "Connect via our Investor Modal on this page for detailed investment opportunities, or reach out directly at investors@quantumhash.com for institutional inquiries." },
  { question: "What sectors does QuantumHash operate in?", answer: "We operate across Voice AI, Safety Intelligence, Adaptive Learning, Enterprise Automation, Predictive Analytics, and Workflow Optimization — serving manufacturing, logistics, education, and corporate sectors." },
  { question: "What is your go-to-market strategy?", answer: "Our multi-channel approach includes direct enterprise sales, strategic partnerships, and a growing self-serve platform for mid-market companies. We focus on high-value sectors with clear AI adoption roadmaps." },
  { question: "What is the expected ROI for investors?", answer: "While projections vary, our current 120% YoY growth, strong unit economics, and expanding product portfolio position us for significant value creation. Historical enterprise software exits in our category have averaged 8-12x returns." },
  { question: "How do you differentiate from competitors?", answer: "Unlike single-product AI companies, we offer an integrated ecosystem of AI solutions with shared infrastructure, allowing cross-selling and higher customer lifetime value. Our modular architecture enables rapid customization without custom development costs." },
  { question: "What are your funding plans?", answer: "We're currently raising our Series A to accelerate product development, expand our sales team, and enter international markets. Funds will also support strategic acquisitions and R&D in emerging AI technologies." },
];

const Investor = () => {
  return (
    <>
      <style>{`
        @keyframes pulse-glow {0%,100%{opacity:0.2;transform:scale(1);}50%{opacity:0.4;transform:scale(1.05);}}
        @keyframes float {0%,100%{transform:translateY(0px);}50%{transform:translateY(-10px);}}
        @keyframes slideIn {from{opacity:0;transform:translateX(-30px);}to{opacity:1;transform:translateX(0);}}
        @keyframes fadeInUp {from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
        @keyframes shimmer {0%{background-position:-200% center;}100%{background-position:200% center;}}
        
        .pulse-glow {animation:pulse-glow 6s ease-in-out infinite;}
        .float {animation:float 4s ease-in-out infinite;}
        .slide-in {animation:slideIn 0.8s ease-out forwards;}
        .fade-in-up {opacity:0;animation:fadeInUp 0.8s ease-out forwards;}
        .shimmer {background:linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent);background-size:200% 100%;animation:shimmer 3s infinite;}
        .card-hover {transition:all 0.3s cubic-bezier(0.4,0,0.2,1);}
        .card-hover:hover {transform:translateY(-8px);box-shadow:0 20px 40px rgba(168,85,247,0.3);}
        .gradient-text {background:linear-gradient(135deg,#a855f7,#f97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .timeline-line {position:relative;}
        .timeline-line::before {content:'';position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(180deg,transparent,rgba(168,85,247,0.5),transparent);}
        @media (max-width:768px){.timeline-line::before{left:20px;}}
      `}</style>

      <section className="w-full relative overflow-hidden min-h-screen text-white" style={{background: '#0d0125'}}>

        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl pulse-glow"></div>
          <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-full blur-3xl pulse-glow" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-full blur-3xl pulse-glow" style={{ animationDelay: "4s" }}></div>
          <div className="absolute inset-0 opacity-5" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)", backgroundSize:"40px 40px"}}></div>
        </div>

        <AiBotSection headText="Investor Relations" />

        {/* Hero Section */}
        <div className="container mx-auto px-6 md:flex items-center justify-between gap-12 py-20 relative z-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight fade-in-up">
              Building the <span className="gradient-text">Future of AI</span> for Enterprise
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed fade-in-up" style={{animationDelay:"0.2s"}}>
              QuantumHash delivers production-ready AI solutions solving real-world problems across industries. Join us in our mission to make advanced AI accessible, practical, and impactful.
            </p>
            <div className="flex flex-wrap gap-4 fade-in-up" style={{animationDelay:"0.4s"}}>
              <InvestorModal />
             
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 fade-in-up" style={{animationDelay:"0.6s"}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-orange-600/30 rounded-full blur-2xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/20 p-2 overflow-hidden float">
                <img src="/Images/investor.jpg" alt="Innovation" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 card-hover fade-in-up" style={{animationDelay:`${idx*0.1}s`}}>
                <div className="text-purple-400 mb-4">{metric.icon}</div>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
                <div className="text-green-400 text-xs font-semibold">{metric.trend}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Highlights */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">Investment Highlights</h2>
          <p className="text-center text-gray-400 mb-12 fade-in-up" style={{animationDelay:"0.1s"}}>Key metrics demonstrating our market position and growth potential</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {investmentHighlights.map((highlight, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 card-hover fade-in-up" style={{animationDelay:`${idx*0.1}s`}}>
                <div className="text-3xl font-bold gradient-text mb-2">{highlight.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{highlight.title}</div>
                <div className="text-sm text-gray-400">{highlight.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Products Showcase */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">Our Product Portfolio</h2>
          <p className="text-center text-gray-400 mb-12 fade-in-up" style={{animationDelay:"0.1s"}}>Five production-ready AI platforms serving thousands of users daily</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {product.map((prod, idx) => (
              <a key={idx} href={prod.link} target="_blank" rel="noopener noreferrer"
                 className="relative group bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 card-hover fade-in-up"
                 style={{animationDelay:`${idx*0.1}s`}}>
                <div className="relative h-64 overflow-hidden">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0125] via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{prod.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{prod.description}</p>
                  <div className="flex items-center text-green-400 text-sm font-semibold">
                    <FaChartLine className="mr-2" /> {prod.impact}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">Why QuantumHash Wins</h2>
          <p className="text-center text-gray-400 mb-12 fade-in-up" style={{animationDelay:"0.1s"}}>Our unique positioning in the enterprise AI landscape</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {competitiveAdvantages.map((advantage, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 card-hover fade-in-up" style={{animationDelay:`${idx*0.1}s`}}>
                <div className="text-purple-400 mb-4">{advantage.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Journey Timeline */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">Our Journey</h2>
          <p className="text-center text-gray-400 mb-16 fade-in-up" style={{animationDelay:"0.1s"}}>From vision to market leadership</p>
          
          <div className="relative timeline-line max-w-4xl mx-auto">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="mb-8 md:mb-12 fade-in-up" style={{animationDelay:`${idx*0.2}s`}}>
                {/* Desktop Layout */}
                <div className={`hidden md:flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  <div className="w-5/12"></div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 mx-4 bg-purple-600 rounded-full border-4 border-[#0d0125] flex-shrink-0">
                    <span className="text-sm font-bold">{milestone.year}</span>
                  </div>
                  <div className="w-5/12 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 card-hover">
                    <h3 className="text-xl font-bold mb-2 gradient-text">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="flex md:hidden items-start gap-4">
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full border-4 border-[#0d0125] flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">{milestone.year}</span>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10">
                    <h3 className="text-lg font-bold mb-2 gradient-text">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Invest Accordion */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">Investment Thesis</h2>
          <p className="text-center text-gray-400 mb-12 fade-in-up" style={{animationDelay:"0.1s"}}>Strategic advantages that make QuantumHash a compelling opportunity</p>
          
          <div className="max-w-4xl mx-auto">
            <Accordion selectionMode="multiple" className="fade-in-up" style={{animationDelay:"0.2s"}}>
              <AccordionItem key="1" title="Multi-Product AI Ecosystem" className="text-white">
                <p className="text-gray-400 pb-4">Unlike single-product competitors, we've built an integrated ecosystem of 5 AI platforms addressing complementary market needs. This enables cross-selling, higher customer lifetime value, and shared infrastructure reducing operational costs by 40%. Our modular architecture allows us to rapidly deploy customized solutions while maintaining core platform efficiency.</p>
              </AccordionItem>
              <AccordionItem key="2" title="Proven Market Traction & Unit Economics" className="text-white">
                <p className="text-gray-400 pb-4">With 6,000+ active users and 120% YoY growth, we've demonstrated product-market fit across multiple verticals. Our customer acquisition cost of $800 with an 18-month payback period and less than 5% churn rate significantly outperforms industry benchmarks. Enterprise customers average $24K annual contract value with 78% gross margins, creating a highly scalable SaaS business model.</p>
              </AccordionItem>
              <AccordionItem key="3" title="Technical Moat & IP Portfolio" className="text-white">
                <p className="text-gray-400 pb-4">Our proprietary AI models and modular API-first architecture create significant barriers to entry. We've developed specialized algorithms for voice recognition, adaptive learning, and predictive analytics that deliver 30-60% performance improvements over generic solutions. This technical differentiation, combined with our growing patent portfolio, provides sustainable competitive advantages.</p>
              </AccordionItem>
              <AccordionItem key="4" title="Massive Market Opportunity" className="text-white">
                <p className="text-gray-400 pb-4">The global enterprise AI software market is projected to reach $150B+ by 2027, growing at 38% CAGR. We're positioned at the intersection of three high-growth segments: conversational AI ($18B), adaptive learning ($15B), and enterprise automation ($12B). Our early mover advantage in these converging markets positions us to capture significant market share.</p>
              </AccordionItem>
              <AccordionItem key="5" title="Experienced Team & Strategic Vision" className="text-white">
                <p className="text-gray-400 pb-4">Our founding team brings deep expertise in AI research, enterprise software, and scaling technology companies. With advisors from leading AI companies and strategic partnerships with industry leaders, we have the network and knowledge to execute our vision of becoming the leading enterprise AI platform provider.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">Investor FAQ</h2>
          <p className="text-center text-gray-400 mb-12 fade-in-up" style={{animationDelay:"0.1s"}}>Common questions from potential investors</p>
          
          <div className="max-w-4xl mx-auto">
            <Accordion selectionMode="multiple" className="fade-in-up" style={{animationDelay:"0.2s"}}>
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} title={faq.question} className="text-white">
                  <p className="text-gray-400 pb-4">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-600/20 to-orange-600/20 backdrop-blur-sm p-12 rounded-3xl border border-white/20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Growth Story</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of the AI revolution. Connect with QuantumHash to explore investment opportunities in enterprise AI solutions that are already transforming industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <InvestorModal />
              <a href="mailto:investors@quantumhash.com" className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all flex items-center gap-2">
                investors@quantumhash.com
              </a>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-6 py-12 relative z-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"></div>
         
        </section>

      </section>
    </>
  );
};

export default Investor;