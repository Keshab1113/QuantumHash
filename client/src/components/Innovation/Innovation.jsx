import Banner from "./Banner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import CardSwap, { Card } from "../../../ReactBits/CardSwap/CardSwap"

const Innovation = () => {
    return (
        <section className=" min-h-screen h-full w-full bg-[#0d0125]">
            <div className="container mx-auto px-4 py-6">
                <h1 className=" text-[38px] font-bold text-white max-w-[90%]">AI Innovation <span className="h1head1">Empowering</span> Industries, Educators, and Individuals</h1>
                <div className=" w-full flex md:flex-row flex-col-reverse">
                    <div className=" md:w-[59%] w-full text-white mt-5 pt-5 pb-20" style={{
                        backgroundImage: "url('/InnovationBG.png')",
                        backgroundSize: 'cover'
                    }}>
                        <ul className=" space-y-4 md:max-w-[90%]">
                            <li className=" flex gap-3 items-start">
                                <p>
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent h-4 max-w-4 overflow-hidden rounded-[1px]" />
                                    QuantumHash is an AI innovation company developing intelligent platforms that empower industries, educators, and individuals. As the umbrella organization behind four advanced solutions — QhashAi, ASES, QuantumEdu, and Artlabss — we bring together the power of conversational AI, predictive analytics, real-time tutoring, and multimodal technologies.
                                </p>
                            </li>
                            <li className=" flex gap-3 items-start">
                                <p>
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent h-4 max-w-4 overflow-hidden rounded-[1px]" />
                                    We exist to transform data into intelligence by solving real-world problems through responsible, scalable, and ethical AI systems.
                                </p>
                            </li>
                            <li className=" flex gap-3 items-start">
                                <p>
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent h-4 max-w-4 overflow-hidden rounded-[1px]" />
                                    With a multi-disciplinary team of technologists, educators, and domain experts, QuantumHash is building a future where artificial intelligence is intuitive, contextual, and purpose-driven.
                                </p>
                            </li>
                        </ul>

                        <Link to={"about"} >
                            <button className=" text-white border-white border-solid border cursor-pointer py-2 px-4 rounded-full mt-10">
                                Explore More
                            </button>
                        </Link>
                    </div>
                    <div className=" pb-20">
                        <img src="/image.webp" alt="" className="w-[400px] h-[400px]" loading="lazy"/>
                    </div>
                </div>
                <Banner />
                <section className=" flex flex-col lg:flex-row lg:h-screen h-full">
                    <div className=" lg:w-[40%] w-full">
                        <img src="/image2.webp" alt="" loading="lazy"/>
                    </div>
                    <div className="lg:w-[60%] w-full  h-full relative overflow-hidden md:py-20 lg:py-0">
                        <CardSwap height={450}>
                            <Card>
                                <div className="text-white text-center p-4">
                                    <div className=" md:h-[20vh] h-[20vh] lg:w-[34vw] w-full rounded-2xl bg-white mb-4 overflow-hidden">
                                        <img src="/Projects/image.webp" alt="" className=" w-full h-full" loading="lazy"/>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4">
                                        Conversational Intelligence Engine
                                    </h2>
                                    <p>
                                        A custom-built AI assistant framework designed to power domain-specific chatbots and smart agents. QuantumAI is the intelligence core behind all our platforms, capable of understanding context, voice input, and domain-specific tasks — from safety compliance to student tutoring.
                                        </p>
                                        <h1 className=" text-center h1head1 mt-2 text-xl font-bold">QuantumAI</h1>
                                </div>
                            </Card>
                            <Card>
                                <div className="text-white text-center p-4">
                                    <div className=" h-[20vh] lg:w-[34vw] w-full rounded-2xl bg-white mb-4 overflow-hidden">
                                        <img src="/Projects/image2.webp" alt="" className=" w-full h-full" loading="lazy"/>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4">
                                        Industrial AI for Predictive Safety & Operations
                                    </h2>
                                    <p>
                                        Built for high-risk sectors, ASES analyzes historical incident data to predict future risks, visualize scenarios in 3D, and guide proactive decision-making. Trusted by HSE leaders for safety awareness, audits, and operational excellence.
                                    </p>
                                    <h1 className=" text-center h1head1 mt-2 text-xl font-bold">ASES (Advanced Safety & Efficiency System)</h1>
                                </div>
                            </Card>
                            {/* <Card>
                                <div className="text-white text-center p-4">
                                    <div className=" h-[20vh] lg:w-[34vw] w-full rounded-2xl bg-white mb-4 overflow-hidden">
                                        <img src="/Projects/image3.png" alt="" className=" w-full h-full"/>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4">
                                        Voice & Multimodal AI Innovation Lab
                                    </h2>
                                    <p>
                                        The R&D engine behind QhashAi natural interaction capabilities. Artlabss develops voicebots, gesture recognition, facial expression readers, and multilingual speech tech. It powers our voice-driven interfaces and real-time facial feedback systems.
                                    </p>
                                    <h1 className=" text-center h1head1 mt-2 text-xl font-bold">Artlabss</h1>
                                </div>
                            </Card> */}
                            <Card>
                                <div className="text-white text-center p-4">
                                    <div className=" h-[20vh] lg:w-[34vw] w-full rounded-2xl bg-white mb-4 overflow-hidden">
                                        <img src="/Projects/image4.webp" alt="" className=" w-full h-full" loading="lazy"/>
                                    </div>
                                    <h2 className="text-xl font-bold mb-4">
                                        AI Tutoring Platform for Grades 4–12
                                    </h2>
                                    <p>
                                        An AI-based learning system designed for Indian school students. It offers real-time, face-to-face learning using voice, emotion, and attention analysis. The platform adapts to each student’s learning speed, focus, and subject preferences to make education deeply personal.
                                    </p>
                                    <h1 className=" text-center h1head1 mt-2 text-xl font-bold">QuantumEdu</h1>
                                </div>
                            </Card>
                            

                        </CardSwap>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default Innovation;