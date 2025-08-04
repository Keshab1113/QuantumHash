import { Helmet } from "react-helmet";
import React, { useEffect, useRef, useState } from "react";
import Meeting from "../../components/Contact/Meeting";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { useToast } from "../../components/ToastContext";
import axios from "axios";
import AiBotSection from "../../components/AiBot/AiBotSection";

const Contact = () => {
    const form = useRef(null);
    const { addToast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, data);
            addToast("success", "We Will Contact You soon.");
            form.current.reset();
        } catch (err) {
            addToast("error", "Failed to send Contact Form.");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    useEffect(() => {
        const { name, email, phone, subject, message } = formValues;
        const allFilled = name && email && phone && subject && message;
        setIsFormValid(!!allFilled);
    }, [formValues]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Connect | QuantumHash</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <section className=" h-full w-full bg-[#0d0125] ">
                <AiBotSection headText="Connect" />
                <section className="container mx-auto px-4 py-6 flex flex-col justify-center items-center" id="contact">
                    <h1 className=" md:text-[38px] text-[28px] font-bold h1head1 w-fit mt-10">Contact Form</h1>
                    <div className=" flex md:flex-row flex-col w-full gap-12 mt-16">
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
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300"
                                    />
                                </div>

                                <div className="flex justify-end gap-4">
                                    <button
                                        type="submit"
                                        className="border border-solid border-white rounded-full px-6 py-2 disabled:opacity-50 text-white cursor-pointer"
                                        disabled={!isFormValid}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </button>
                                </div>
                            </form>

                        </div>
                        <div className=" md:w-[40%] w-full">
                            <img src="/contactTree.webp" alt="" loading="lazy" />
                        </div>
                    </div>
                    <img src="/gap.png" alt="" className=" h-10 w-full mt-16" />

                </section>
                <section id="meeting" className="container mx-auto px-4 py-6">
                    <Meeting />
                </section>
            </section>
        </>
    )
}
export default Contact;