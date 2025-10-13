 


import InvestorModal from "../../components/InvestorModal/InvestorModal";
import { Accordion, AccordionItem } from "@heroui/react";
import AiBotSection from "../../components/AiBot/AiBotSection";
import { FaUsers, FaChartLine, FaCogs, FaRocket, FaLightbulb, FaShieldAlt, FaGlobe, FaTrophy, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const product = [
  { name: "Office MOM", image: "/Projects/officemom.PNG", link: "https://officemom.me/", description: "AI-powered meeting management platform that records, transcribes, summarizes, and organizes every meeting.", impact: "30% time saved in meetings" },
  { name: "Assessment System", image: "/Projects/assesment.PNG", link: "https://asesystem.hsequiz.quantumhash.me/", description: "Adaptive testing platform providing AI-driven insights and personalized learning recommendations.", impact: "45% improvement in learning outcomes" },
  { name: "ASES", image: "/Projects/image2.webp", link: "https://asesystem.com/", description: "Advanced enterprise system for workflow optimization.", impact: "40% operational efficiency gain" },
  { name: "QuantumAI", image: "/Projects/image.PNG", link: "https://qhashai.com/", description: "Next-gen AI solutions for predictive analytics and automation.", impact: "60% faster decision-making" },
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