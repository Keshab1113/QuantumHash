import Banner from "./Banner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

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

                        <Link to={"/pages/about"} >
                            <button className=" text-white border-white border-solid border cursor-pointer py-2 px-4 rounded-full mt-10">
                                Explore More
                            </button>
                        </Link>
                    </div>
                    <div className=" pb-20">
                        <img src="/image.png" alt="" className="w-[400px] h-[400px]" />
                    </div>
                </div>
                <Banner />
                <section className=" flex flex-col md:flex-row">
                    <div className=" md:w-[40%] w-full">
                        <img src="/image2.png" alt="" />
                    </div>
                    <div className="md:w-[60%] w-full"></div>
                </section>
            </div>
        </section>
    )
}
export default Innovation;