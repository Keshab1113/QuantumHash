import { Helmet } from "react-helmet";
import Landing from "../../components/Landing/Landing";
import Innovation from "../../components/Innovation/Innovation";
import Intro from "../../components/Intro/Intro";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page |  All Your systems |</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Landing />
            <Innovation />
            <Intro />
        </>
    )
}
export default Home;