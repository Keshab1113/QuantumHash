import { Helmet } from "react-helmet";
import Landing from "../../components/Landing/Landing";
import Innovation from "../../components/Innovation/Innovation";
import Intro from "../../components/Intro/Intro";
import AHoleEffect from "../../components/AHoleEffect/AHoleEffect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>QuantumHash Corporation</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {/* <Landing /> */}
            {/* <div className=" md:h-[100vh] lg:h-[87vh] h-[100vh] relative overflow-hidden">
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
                    <p className="lg:ml-[20%] lg:px-20 text-sm md:text-[30px] font-bold mb-8 mt-6 text-start">
                         
                        From safety intelligence to next-gen education and voice tech, we drive AI-powered transformation—turning data into actionable insights that empower industries, educators, and innovators globally.
                    </p>
                    <p className="lg:ml-[20%] lg:px-20 text-sm md:text-[20px] mb-12 text-start">
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
            </div> */}
<div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background Effect */}
  <div className="absolute inset-0 -z-10">
    <AHoleEffect />
  </div>

  {/* Hero Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
    {/* Welcome Line */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-sm uppercase tracking-[4px] opacity-80 mb-3"
    >
      Welcome to
    </motion.p>

    {/* Company Name */}
    <motion.h1
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
    >
      QuantumHash
    </motion.h1>

    {/* Short Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="max-w-xl text-sm md:text-lg leading-relaxed opacity-90 mb-10"
    >
      Redefining the future through human-centered AI — transforming
      innovation, education, and industry with intelligence that listens,
      learns, and evolves.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="flex flex-col sm:flex-row justify-center items-center gap-4"
    >
      <Link to="platforms">
        <button className="px-8 cursor-pointer py-3 rounded-full border border-white text-sm bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300">
          Explore Platforms
        </button>
      </Link>
      <Link to="investor">
        <button className="px-8 cursor-pointer py-3 rounded-full border border-white text-sm bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300">
          Investor Relations
        </button>
      </Link>
    </motion.div>
  </div>
</div>

            <Innovation />
            <Intro />
        </>
    )
}
export default Home;


 