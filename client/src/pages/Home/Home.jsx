import { Helmet } from "react-helmet";
import Landing from "../../components/Landing/Landing";
import Innovation from "../../components/Innovation/Innovation";
import Intro from "../../components/Intro/Intro";
import Hero from "../../components/Hero/Hero"

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>QuantumHash Corporation</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Hero/>
            {/* <Landing /> */}
            <Innovation />
            <Intro />
        </>
    )
}
export default Home;