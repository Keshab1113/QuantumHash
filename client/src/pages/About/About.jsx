import AiBotSection from "../../components/AiBot/AiBotSection";
import Teams from "../../components/About/Teams";
import Vision from "../../components/About/Vision";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us |  QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <section className="min-h-screen h-full w-full bg-[#0d0125] ">
                <AiBotSection headText="About QuantumHash" />
                <div className="container mx-auto px-4 py-6">
                    <Vision />
                    <Teams />
                </div>
            </section>
        </>
    )
}
export default About;