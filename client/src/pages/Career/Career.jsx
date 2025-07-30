import { Helmet } from "react-helmet";
import AboutBanner from "../../components/About/AboutBanner";
import Opening from "../../components/Career/Opening";

const Career = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Career | QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className=" h-full w-full bg-[#0d0125] ">
                <AboutBanner title={"Career"} />
                <div className="container mx-auto px-4 py-10 flex flex-col justify-center items-center h-full">
                    <h1 className=" w-fit h1head1 text-4xl text-center font-bold">Join Our Team at QuantumHash</h1>
                    <p className=" w-fit text-white text-lg text-center font-medium mt-6">Transform the future of applied intelligence — one line of code at a time. At QuantumHash AI, we’re building intelligent systems that understand, predict, and empower human potential — from education and energy to automation and voice technologies. If you're passionate about AI, driven by curiosity, and love building web-based solutions, we'd love to work with you.</p>
                    <Opening />
                </div>

            </section>
        </>
    )
}

export default Career;