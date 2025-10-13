 

import { Helmet } from "react-helmet";
import React, { useEffect, useRef, useState } from "react";
import Meeting from "../../components/Contact/Meeting";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { useToast } from "../../components/ToastContext";
import axios from "axios";
import AiBotSection from "../../components/AiBot/AiBotSection";

const Contact = () => {
  const form = useRef(null);
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/email`,
        data
      );
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
    const { name, email, phone, subject, message } = formValues;
    const allFilled = name && email && phone && subject && message;
    setIsFormValid(!!allFilled);
  }, [formValues]);

  // 👇 Image Slideshow Logic
  const images = [
    { src: "/Projects/officemom.PNG", name: "OfficeMom" },
    { src: "/Projects/image2.webp", name: "ASES" },
    { src: "/Projects/assesment.PNG", name: "Assessment System" },
    { src: "/Projects/image.PNG", name: "Quantum AI Platform" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Connect | QuantumHash</title>
      </Helmet>

      <section className="min-h-screen w-full bg-[#0d0125]  ">
        <AiBotSection headText="Connect" />
        <div className="container text-white mx-auto px-4 py-10 flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8 lg:w-[40%]">
            {/* Address */}
             <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition p-6 space-y-4">
    <h2 className="text-xl font-semibold">Address</h2>
    <p className="text-sm opacity-80 leading-relaxed">
      800 N King Street, Suite 304, Wilmington, DE 19801, USA
    </p>
    <div className="h-[15rem] w-full rounded-xl overflow-hidden shadow-lg border border-white/10">
      <iframe
        title="QuantumHash Location"
        src="https://www.google.com/maps?q=800+N+King+Street,+Suite+304,+Wilmington,+DE+19801,+USA&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

            {/* Follow Links */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition p-6">
              <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="https://twitter.com/QuantumhashCrp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition">
                  <FaXTwitter /> @QuantumhashCrp
                </a>
                  <a
                  href="https://www.linkedin.com/company/quantumhash-corporation/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition">
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://quantumhash.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition">
                  <FaGlobe /> quantumhash.me
                </a>
                <a
                  href="mailto:admin@quantumhash.me"
                  className="flex items-center gap-2 hover:text-blue-400 transition">
                  <BiLogoGmail /> admin@quantumhash.me
                </a>
               
  
              </div>
            </div>

            {/* Image Slideshow */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg aspect-[16/9]">
 
  {images.map((img, index) => (
    <div
      key={index}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={img.src}
        alt={img.name}
        className="w-full h-full object-cover"
      />

      {/* Overlay with project name */}
      <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
        <h3 className="text-white text-xl md:text-2xl font-semibold text-center drop-shadow-lg">
          {img.name}
        </h3>
      </div>
    </div>
  ))}

  {/* Indicators */}
  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
    {images.map((_, idx) => (
      <span
        key={idx}
        className={`w-2 h-2 rounded-full transition ${
          idx === currentIndex ? "bg-white" : "bg-white/30"
        }`}
      />
    ))}
  </div>
</div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/30 transition lg:w-[55%] w-full">
            <h1 className="text-2xl font-semibold ">Get In Touch</h1>
            <hr className="w-1/4 mb-6 mt-1 " />
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {[
                { label: "Full Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone Number", name: "phone", type: "tel" },
                { label: "Subject", name: "subject", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block mb-1 text-sm opacity-80">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-1 text-sm opacity-80">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400 resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition disabled:opacity-50">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
 <div
  className="w-2/4 mx-auto h-px mb-8 fade-in-up moving-line"
  style={{ animationDelay: "0.4s" }}></div>

        <section id="meeting" className="container mx-auto px-4 py-10">
          <Meeting />
        </section>
      </section>
    </>
  );
};

export default Contact;
