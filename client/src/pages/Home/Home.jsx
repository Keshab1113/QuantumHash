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
            <Landing />
            {/* <div className="App" style={{ height: "100vh", position: "relative", overflow: "hidden" }}> */}
                {/* Background Effect */}
                {/* <AHoleEffect /> */}

                {/* Foreground Content */}
                {/* <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 20, // Ensure this is above canvas
                        textAlign: "center",
                        color: "white",
                    }}
                    className=" pl-20 w-full container mx-auto"
                >
                    <p className="ml-[20%] pl-20 text-xl md:text-2xl 2xl:text-4xl font-bold mb-8 mt-6 text-start">
                        From safety intelligence to next-gen education and voice technologies – we pioneer AI-driven transformation, turning raw data into actionable intelligence that empowers industries, educators, and innovators worldwide.
                    </p>
                    <p className="ml-[20%] pl-20 text-lg md:text-2xl mb-12 text-start">
                        Driving transformation across industries by empowering educators, innovators, and frontline teams with cutting-edge, applied AI solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={"platforms"}>
                            <button className="px-8 cursor-pointer py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                                Explore Our Platforms
                            </button>
                        </Link>
                        <Link to={"investor"}>
                            <button className="px-8 py-3 cursor-pointer border-2 border-white hover:bg-white hover:text-purple-900 rounded-lg font-semibold transition-colors">
                                Investor Relations
                            </button>
                        </Link>
                    </div>
                </div> */}
            {/* </div> */}

            <Innovation />
            <Intro />
        </>
    )
}
export default Home;