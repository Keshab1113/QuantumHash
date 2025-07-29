import AboutBanner from "../../components/About/AboutBanner";
import Teams from "../../components/About/Teams";
import Vision from "../../components/About/Vision";

const About = () => {
    return (
        <section className="min-h-screen h-full w-full bg-[#0d0125] ">
            <AboutBanner title={"About QuantumHash"}/>
            <div className="container mx-auto px-4 py-6">
                <Vision/>
                <Teams/>
            </div>
        </section>
    )
}
export default About;