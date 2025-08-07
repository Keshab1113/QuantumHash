import OrbitingCircles from "../magicui/orbiting-circles"
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";

const Intro = () => {
    return (
        <section className=" h-full w-full bg-[#000000e6]" style={{
            backgroundImage: "url('/Images/IntroBG.png')",
            backgroundSize: 'cover'
        }}>
            <div className="container mx-auto px-4 py-8">
                <h1 className=" text-center font-bold md:text-[38px] text-[28px] text-white h1head1 w-fit mx-auto">Why QuantumHash <span className="h1head1 text-[40px]">?</span></h1>
                <div className=" my-20 flex lg:flex-row flex-col md:gap-0 gap-10">
                    <div className=" w-full space-y-15 md:pl-10 md:pr-10 lg:pr-0">
                        <div className=" border border-amber-400 border-solid flex justify-center items-center gap-3 p-4 text-white border-r-0"
                            style={{
                                borderImage: "linear-gradient(90deg, orange, blue) 30 stretch",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderRight: "0"
                            }}
                        >
                            <img src="/AI-Images/image.png" alt="" className="h-18 w-18" />
                            <h1>Applied, not abstract: AI systems built to solve real-world problems.</h1>
                        </div>
                        <div className=" border border-amber-400 border-solid flex justify-center items-center gap-3 p-4 text-white border-r-0"
                            style={{
                                borderImage: "linear-gradient(90deg, orange, blue) 30 stretch",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderRight: "0"
                            }}
                        >
                            <img src="/AI-Images/image2.png" alt="" className="h-18 w-18" />
                            <h1>Multimodal approach: From voice to video to 3D visual learning.</h1>
                        </div>
                    </div>
                    <div className=" h-[40vh] w-full">
                        <div className=" relative h-full w-full flex justify-center items-center">
                            <OrbitingCircles radius={150} iconSize={60} speed={1.5}>
                                <img src="/AI-Images/image.png" alt="" className="h-18 w-18" />
                                <img src="/AI-Images/image2.png" alt="" className="h-18 w-18" />
                                <img src="/AI-Images/image3.png" alt="" className="h-18 w-18" />
                                <img src="/AI-Images/image4.png" alt="" className="h-18 w-18" />
                                <img src="/AI-Images/image2.png" alt="" className="h-18 w-18" />
                                <img src="/AI-Images/image3.png" alt="" className="h-18 w-18" />
                            </OrbitingCircles>
                            <OrbitingCircles radius={80} iconSize={30} reverse>
                                <img src="/AI-Images/image.png" alt="" className="h-18 w-18" />
                                <img src="/AI-Images/image2.png" alt="" className="h-18 w-18" />
                                <img src="/AI-Images/image3.png" alt="" className="h-18 w-18" />
                                <img src="/AI-Images/image4.png" alt="" className="h-18 w-18" />
                                <img src="/AI-Images/image2.png" alt="" className="h-18 w-18" />
                            </OrbitingCircles>
                        </div>
                    </div>
                    <div className=" w-full space-y-15 md:pr-10 md:pl-10 lg:pl-0">
                        <div className=" border border-amber-400 border-solid flex justify-center items-center gap-3 p-4 text-white border-l-0"
                            style={{
                                borderImage: "linear-gradient(90deg, orange, blue) 30 stretch",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderLeft: "0"
                            }}
                        >
                            <h1 className=" text-right">Scalable & cloud-native: Built on open-source and modern architecture.</h1>
                            <img src="/AI-Images/image3.png" alt="" className="h-18 w-18" />
                        </div>
                        <div className=" border border-amber-400 border-solid flex justify-center items-center gap-3 p-4 text-white border-l-0"
                            style={{
                                borderImage: "linear-gradient(90deg, orange, blue) 30 stretch",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderLeft: "0"
                            }}
                        >
                            <h1 className=" text-right">Ethically grounded: Privacy-aware, inclusive, and user-centric design.</h1>
                            <img src="/AI-Images/image4.png" alt="" className="h-18 w-18" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intro;