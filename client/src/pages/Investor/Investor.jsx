import { Helmet } from "react-helmet";
import RollingGallery from "../../../ReactBits/RollingGallery/RollingGallery";
import InvestorModal from "../../components/InvestorModal/InvestorModal";
import { Accordion, AccordionItem } from "@heroui/react";
import AiBotSection from "../../components/AiBot/AiBotSection";

const product = [
    {
        name: "QuantumAI",
        image: "/Projects/image.png",
        link: "https://qhashai.com/",
    },
    {
        name: "ASES",
        image: "/Projects/image2.png",
        link: "https://asesystem.com/",
    },
    {
        name: "QuantumEdu",
        image: "/Projects/image4.png",
        link: "https://quantumedu.in/",
    },
    {
        name: "QuantumAI",
        image: "/Projects/image.png",
        link: "https://qhashai.com/",
    },
    {
        name: "ASES",
        image: "/Projects/image2.png",
        link: "https://asesystem.com/",
    },
    {
        name: "QuantumEdu",
        image: "/Projects/image4.png",
        link: "https://quantumedu.in/",
    },
    {
        name: "QuantumAI",
        image: "/Projects/image.png",
        link: "https://qhashai.com/",
    },
    {
        name: "ASES",
        image: "/Projects/image2.png",
        link: "https://asesystem.com/",
    },
    {
        name: "QuantumEdu",
        image: "/Projects/image4.png",
        link: "https://quantumedu.in/",
    },
]

const Investor = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Investors |  QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className=" h-full w-full bg-[#0d0125] ">
                <AiBotSection headText="Investor Relations" />
                <div className="container mx-auto px-4 py-6">
                    <section className="md:h-[50vh] h-full w-full bg-[#0d0125] flex md:flex-row flex-col gap-10 justify-center items-center" style={{
                        backgroundImage: "url('/investorBG.png')",
                        backgroundPosition: " center",
                        backgroundSize: "300px 300px",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <div className=" w-[216px] h-[216px] rounded-full p-6 border border-white border-solid">
                            <img src="/investor.png" alt="" className=" h-full w-full" />
                        </div>
                        <h1 className=" text-white text-[20px] lg:max-w-[80%] md:max-w-[50%]">QuantumHash Technologies is a deep-tech startup driving innovation in voice AI, safety intelligence, and personalized learning. Our ecosystem includes four cutting-edge platforms, each targeting a vital sector with scalable AI solutions.</h1>
                    </section>
                    <section className=" h-full w-full bg-[#0d0125] mt-10 flex flex-col justify-center items-center">
                        <h1 className=" h1head1 text-4xl font-bold  text-center">Products List</h1>
                        <RollingGallery images={product} autoplay={true} pauseOnHover={true} />
                        <InvestorModal />
                        <h1 className=" h1head1 text-4xl font-bold  text-center mt-10">Why Invest in QuantumHash ?</h1>
                        <div className=" w-full text-white mt-10">
                            <Accordion selectionMode="multiple">
                                <AccordionItem
                                    key="1"
                                    aria-label="AI-First Platform Strategy"
                                    title="1. Diverse AI-Driven Product Strategy"
                                >
                                    We’ve developed 4 AI-first platforms that cater to high-demand areas: AI conversational assistance, adaptive learning in education, predictive analytics for industrial safety, and intelligent voice-based interfaces. These platforms are not just concepts — they are active, evolving, and designed to meet real-world enterprise needs.
                                </AccordionItem>

                                <AccordionItem
                                    key="2"
                                    aria-label="User Adoption and Market Traction"
                                    title="2. Strong User Base and Real-World Traction"
                                >
                                    Our products currently serve over 6,000 monthly users across industrial environments. Early adoption in critical sectors like manufacturing and logistics has validated our approach, and pilot programs are currently underway with major EdTech institutions to bring adaptive AI into classrooms.
                                </AccordionItem>

                                <AccordionItem
                                    key="3"
                                    aria-label="Scalable Architecture"
                                    title="3. Scalable Modular Architecture for B2B Growth"
                                >
                                    All platforms are built on a modular, API-first architecture, allowing seamless integration into third-party systems. This design enables rapid B2B deployment, customization, and long-term scalability — making it easier for partners to adopt and grow with our technology.
                                </AccordionItem>
                            </Accordion>

                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
export default Investor;