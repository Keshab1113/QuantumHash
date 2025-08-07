import { Helmet } from "react-helmet";
import AiBotSection from "../../components/AiBot/AiBotSection";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Meeting = () => {
    const [accessGranted, setAccessGranted] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const [isAllowed, setIsAllowed] = useState(null);

    useEffect(() => {
        const requestMediaAccess = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                // Optional: stop the tracks after permission is granted
                stream.getTracks().forEach(track => track.stop());
                setAccessGranted(true);
            } catch (err) {
                console.error("Media access error:", err);
                setError("Permission denied or device not available.");
            } finally {
                setLoading(false);
            }
        };

        requestMediaAccess();
    }, []);

    useEffect(() => {
        const validateAccess = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/meeting/validate/${id}`);
                if (res.data.allowed) {
                    setIsAllowed(true);
                } else {
                    navigate("/noschedule");
                }
            } catch (err) {
                console.error("Validation error:", err);
                navigate("/nopage");
            }
        };

        validateAccess();
    }, [id, navigate]);

    if (isAllowed === null) return <p>Checking access...</p>;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Conference | QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <section className="h-full w-full bg-[#0d0125]">
                <AiBotSection headText="Digital conference" />

                <div className="container mx-auto px-4 py-6 h-full flex flex-col">
                    <h1 className="text-white text-[34px] font-bold mt-20 text-center">
                        WelCome to QuantumHash Corporation
                    </h1>
                    <h1 className="text-white text-[28px] font-bold mt-2 text-center">
                        If you think this is incorrect, please contact with the organizer.
                    </h1>
                    <Link to={"/connect#meeting"} className="text-sm mt-10 text-blue-500 text-center capitalize w-fit mx-auto">
                        go to schedule a meeting
                    </Link>

                    <div className="mt-10 flex-grow relative">
                        {loading && (
                            <p className="text-white text-center">Requesting camera and microphone access...</p>
                        )}

                        {accessGranted && (
                            <iframe
                                src={`${import.meta.env.VITE_MEETING_URL}/${id}`}
                                className="w-full h-[80vh] rounded-lg border border-white"
                                title="Embedded Conference"
                                allow="camera; microphone; fullscreen"
                                allowFullScreen
                            />
                        )}
                        {accessGranted && (
                            <div className="text-2xl font-bold text-white flex flex-col justify-center md:pl-10 md:items-start items-center absolute top-0 left-0 bg-[#171212] md:w-[17rem] w-full h-[5rem] rounded-tl-md rounded-tr-md md:rounded-tr-none border-t border-l md:border-r-0 border-r border-white border-solid">
                                <img src="/Images/logo.webp" alt="logo" width="150px" loading="lazy" />
                                <span className="text-base font-normal tracking-[.18rem]">CORPORATION</span>
                            </div>)}
                        {error && (
                            <p className="text-red-500 text-center mt-4">{error}</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Meeting;
