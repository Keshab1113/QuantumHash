import { Helmet } from "react-helmet";
import AboutBanner from "../../components/About/AboutBanner";

const Investor = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Investors |  QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="min-h-screen h-full w-full bg-[#0d0125] ">
                <AboutBanner title={"Investor Relations"} />
                <div className="container mx-auto px-4 py-6">
                    <section className="h-[50vh] w-full bg-[#0d0125] flex gap-10 justify-center items-center" style={{
                        backgroundImage: "url('/investorBG.png')",
                        backgroundPosition: " center",
                        backgroundSize: "300px 300px",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <div className=" w-[216px] h-[216px] rounded-full p-6 border border-white border-solid">
                            <img src="/investor.png" alt="" className=" h-full w-full" />
                        </div>
                        <h1 className=" text-white text-[20px] max-w-[80%]">QuantumHash Technologies is a deep-tech startup driving innovation in voice AI, safety intelligence, and personalized learning. Our ecosystem includes four cutting-edge platforms, each targeting a vital sector with scalable AI solutions.</h1>
                    </section>
                    <section className="min-h-screen h-full w-full bg-[#0d0125] mt-10">
                        <h1 className=" text-4xl font-bold text-white text-center">Products List</h1>
                    </section>
                </div>
            </section>
        </>
    )
}
export default Investor;