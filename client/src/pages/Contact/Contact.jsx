import { Helmet } from "react-helmet";
import AboutBanner from "../../components/About/AboutBanner";
import React, { useRef } from "react";
import Meeting from "../../components/Contact/Meeting";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { useToast } from "../../components/ToastContext";
import axios from "axios";

const Contact = () => {
    const form = useRef(null);
    const { addToast } = useToast();

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, data);
            addToast("success", "We Will Contact You soon.");
            form.current.reset();
        } catch (err) {
            addToast("error", "Failed to send Contact Form.");
            console.error(err);
        }
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Connect | QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <section className=" h-full w-full bg-[#0d0125] ">
                <AboutBanner title={"Connect"} />
                <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center">
                    <h1 className=" text-4xl font-bold h1head1 w-fit mt-10">Contact Form</h1>
                    <div className=" flex md:flex-row flex-col w-full gap-12 mt-10">
                        <div className=" flex w-full gap-10 flex-col md:w-[20%]">
                            <div className="rounded-lg flex flex-col justify-center items-center text-white w-full border-solid border border-white p-6">
                                <h1 className=" mb-4 font-bold">Address</h1>
                                <p>800 N King Street ,Suite 304, Wilmington, DE 19801, USA</p>
                            </div>
                            <div className="rounded-lg flex flex-col justify-center items-center text-white w-full border-solid border border-white p-6">
                                <h1 className="mb-4 font-bold">Follow Us</h1>
                                <div className="flex justify-center items-start flex-col w-full overflow-hidden">
                                    <p className="mt-2 flex gap-2 justify-start items-center w-full">
                                        <FaXTwitter />
                                        <a
                                            href="https://twitter.com/QuantumhashCrp"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-400 truncate overflow-hidden whitespace-nowrap w-full"
                                        >
                                            @QuantumhashCrp
                                        </a>
                                    </p>
                                    <p className="mt-1 flex gap-2 justify-start items-center w-full">
                                        <FaGlobe />
                                        <a
                                            href="https://quantumhash.me"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-400 truncate overflow-hidden whitespace-nowrap w-full"
                                        >
                                            quantumhash.me
                                        </a>
                                    </p>
                                    <p className="mt-1 flex gap-2 justify-start items-center w-full">
                                        <BiLogoGmail />
                                        <a
                                            href="mailto:admin@quantumhash.me"
                                            className="underline text-blue-400 truncate overflow-hidden whitespace-nowrap w-full"
                                        >
                                            admin@quantumhash.me
                                        </a>
                                    </p>
                                </div>

                            </div>

                        </div>
                        <div className="stbox p-6 rounded-lg w-full md:w-[60%] max-w-md">
                            <form ref={form} onSubmit={sendEmail} className="space-y-4 text-white">

                                <div>
                                    <label className="block mb-1 text-sm">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Full Name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-sm">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-sm">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter Your Phone Number"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-sm">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Enter Your Subject"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-sm">Your Query</label>
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="Enter Your Query"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300"
                                    />
                                </div>

                                <div className="flex justify-end gap-4">
                                    <button
                                        type="submit"
                                        className="border border-solid border-white rounded-full px-6 py-2 text-white cursor-pointer"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                        <div className=" md:w-[40%] w-full">
                            <img src="/contactTree.png" alt="" />
                        </div>
                    </div>
                    <img src="/gap.png" alt="" className=" h-10 w-full mt-16" />
                    <Meeting />
                </div>
            </section>
        </>
    )
}
export default Contact;