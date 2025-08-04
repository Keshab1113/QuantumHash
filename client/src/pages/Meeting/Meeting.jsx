import { Helmet } from "react-helmet";
import AiBotSection from "../../components/AiBot/AiBotSection";
import { Link } from "react-router-dom";

const Meeting = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Conference |  QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className=" h-full w-full bg-[#0d0125] ">
                <AiBotSection headText="Digital conference" />
                <div className="container mx-auto px-4 py-6 h-screen flex flex-col">
                    <h1 className=" text-white text-[34px] font-bold mt-20 text-center">
                        This meeting will be ended on Monday, 04 Aug 2025 at 04:30 PM.
                    </h1>
                    <h1 className=" text-white text-[28px] font-bold mt-2 text-center">
                        If you think this is incorrect, please contact with the organizer.
                    </h1>
                    <Link to={"/connect#meeting"} className="text-sm mt-10 text-blue-500 text-center capitalize w-fit mx-auto">go to schedule a meeting</Link>
                    {/* <div className="mt-10 flex-grow">
                        <iframe
                            src="http://31.97.154.157:4443/dashboard/#/"
                            className="w-full h-[600px] rounded-lg border border-white"
                            title="Embedded Dashboard"
                            allowFullScreen
                        />
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Meeting;