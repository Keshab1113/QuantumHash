import { Helmet } from "react-helmet";
import Landing from "../../components/Landing/Landing";
import Innovation from "../../components/Innovation/Innovation";
import Intro from "../../components/Intro/Intro";
import AHoleEffect from "../../components/AHoleEffect/AHoleEffect";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>QuantumHash Corporation</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {/* <Landing /> */}
            <div className=" md:h-[100vh] lg:h-[87vh] h-[100vh] relative overflow-hidden">
                <AHoleEffect />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 20,
                        textAlign: "center",
                        color: "white",
                    }}
                    className=" lg:pl-20 px-4 md:px-10 lg:px-0 w-full container mx-auto"
                >
                    <p className="lg:ml-[20%] lg:px-20 text-xl md:text-[30px] font-bold mb-8 mt-6 text-start">
                        From safety intelligence to next-gen education and voice technologies – we pioneer AI-driven transformation, turning raw data into actionable intelligence that empowers industries, educators, and innovators worldwide.
                    </p>
                    <p className="lg:ml-[20%] lg:px-20 text-lg md:text-[20px] mb-12 text-start">
                        Driving transformation across industries by empowering educators, innovators, and frontline teams with cutting-edge, applied AI solutions.
                    </p>
                    <div className="md:ml-[20%] lg:pl-20 flex flex-col sm:flex-row md:gap-4 gap-6">
                        <Link to={"platforms"}>
                            <button className="px-8 cursor-pointer py-3  rounded-full border-white border text-sm w-full">
                                Explore Our Platforms
                            </button>
                        </Link>
                        <Link to={"investor"}>
                            <button className="px-8 py-3 cursor-pointer border border-white rounded-full text-sm w-full">
                                Investor Relations
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Innovation />
            <Intro />
        </>
    )
}
export default Home;