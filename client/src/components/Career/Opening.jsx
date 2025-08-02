import Carousel from "../ui/carousel"

const Openings = [
    {
        id: 1,
        title: "Web-based AI Developer",
        type: "Full-Time / Remote",
        overview:
            "We're looking for a creative and committed Web-based AI Developer to join our growing team. You'll work on building intuitive user interfaces, integrating AI models, and deploying scalable web applications — from prototypes to production.",
        responsibilities: [
            "Develop web interfaces for AI-powered applications (React/Next.js preferred)",
            "Integrate APIs and machine learning models into web platforms",
            "Work with RESTful services and modern web stacks",
            "Collaborate with product and research teams to improve UX and system performance",
            "Contribute to fast iterations, A/B testing, and product rollout",
        ],
        eligibility: [
            "Strong understanding of HTML, CSS, JavaScript, and frontend frameworks",
            "Experience with Node.js, Python (Flask/FastAPI), or serverless functions is a plus",
            "Familiarity with AI/ML APIs or platforms like OpenAI, HuggingFace, or TensorFlow.js",
            "Basic understanding of VPS, CPanel and deployment workflows",
        ],
        benefits: [
            "Flexible part-time hours (10–25 hours/week)",
            "Remote-first – work from home, from anywhere in the world",
            "Opportunity to work on real-world AI products used across industries",
            "Mentorship, learning resources, and career growth support",
        ],
    },
    {
        id: 1,
        title: "Web-based AI Developer",
        type: "Full-Time / Remote",
        overview:
            "We're looking for a creative and committed Web-based AI Developer to join our growing team. You'll work on building intuitive user interfaces, integrating AI models, and deploying scalable web applications — from prototypes to production.",
        responsibilities: [
            "Develop web interfaces for AI-powered applications (React/Next.js preferred)",
            "Integrate APIs and machine learning models into web platforms",
            "Work with RESTful services and modern web stacks",
            "Collaborate with product and research teams to improve UX and system performance",
            "Contribute to fast iterations, A/B testing, and product rollout",
        ],
        eligibility: [
            "Strong understanding of HTML, CSS, JavaScript, and frontend frameworks",
            "Experience with Node.js, Python (Flask/FastAPI), or serverless functions is a plus",
            "Familiarity with AI/ML APIs or platforms like OpenAI, HuggingFace, or TensorFlow.js",
            "Basic understanding of VPS, CPanel and deployment workflows",
        ],
        benefits: [
            "Flexible part-time hours (10–25 hours/week)",
            "Remote-first – work from home, from anywhere in the world",
            "Opportunity to work on real-world AI products used across industries",
            "Mentorship, learning resources, and career growth support",
        ],
    },
    {
        id: 1,
        title: "Web-based AI Developer",
        type: "Full-Time / Remote",
        overview:
            "We're looking for a creative and committed Web-based AI Developer to join our growing team. You'll work on building intuitive user interfaces, integrating AI models, and deploying scalable web applications — from prototypes to production.",
        responsibilities: [
            "Develop web interfaces for AI-powered applications (React/Next.js preferred)",
            "Integrate APIs and machine learning models into web platforms",
            "Work with RESTful services and modern web stacks",
            "Collaborate with product and research teams to improve UX and system performance",
            "Contribute to fast iterations, A/B testing, and product rollout",
        ],
        eligibility: [
            "Strong understanding of HTML, CSS, JavaScript, and frontend frameworks",
            "Experience with Node.js, Python (Flask/FastAPI), or serverless functions is a plus",
            "Familiarity with AI/ML APIs or platforms like OpenAI, HuggingFace, or TensorFlow.js",
            "Basic understanding of VPS, CPanel and deployment workflows",
        ],
        benefits: [
            "Flexible part-time hours (10–25 hours/week)",
            "Remote-first – work from home, from anywhere in the world",
            "Opportunity to work on real-world AI products used across industries",
            "Mentorship, learning resources, and career growth support",
        ],
    },
];


const Opening = () => {
    return (
        <section className=" h-full  w-full mt-10 pb-10" style={{
            backgroundImage: "url('/careerBG.png')",
            backgroundSize: "cover",
        }}>
            <h1 className=" h1head1 md:text-[38px] text-[28px] font-bold w-fit mb-10">Opening Positions</h1>
            <Carousel slides={Openings} />
            <h3 className=" text-white text-sm mt-20">Build the Future of AI With Us - We value creativity, ownership, and curiosity. Whether you’re a self-taught coder, a graduate with AI dreams, or someone passionate about reshaping the world with intelligent systems — if you believe in building the future, let’s do it together.</h3>
        </section>
    )
}

export default Opening;