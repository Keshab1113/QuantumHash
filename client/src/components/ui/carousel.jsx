import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import axios from "axios";
import { useToast } from "../ToastContext";

// Carousel Component
const Carousel2 = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    resume: null,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormValues((prev) => ({
      ...prev,
      resume: file,
    }));
  };

const handleSubmit = async (e, onClose) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("phone", formValues.phone);
    formData.append("country", formValues.country);
    formData.append("city", formValues.city);
    formData.append("jobTitle", slide.title);
    if (formValues.resume) {
      formData.append("resume", formValues.resume); // 📎 attach file directly
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/apply`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    formRef.current?.reset();
    setFormValues({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      resume: null,
    });
    onClose();
    addToast("success", "Application submitted successfully!");
  } catch (error) {
    console.error("Error:", error);
    addToast("error", "Failed to submit application. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  useEffect(() => {
    const { name, email, phone, country, city, resume } = formValues;
    const allFilled = name && email && phone && country && city && resume;
    setIsFormValid(!!allFilled);
  }, [formValues]);

  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto px-4">
        <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-enter { animation: slideIn 0.5s ease-out; }
      `}</style>

        {/* Card */}
        <div className="slide-enter bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/15 rounded-3xl p-8 md:p-12 w-full transition-all duration-500 hover:border-white/25 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.03] hover:shadow-2xl hover:shadow-purple-900/20">
          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {slide.title}
              </h2>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/40 to-cyan-500/30 border border-purple-400/40 rounded-full text-xs md:text-sm font-semibold text-purple-200 backdrop-blur-sm">
                {slide.type}
              </span>
            </div>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-4xl">
              {slide.overview}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
            {[
              {
                title: "Responsibilities",
                items: slide.responsibilities,
                icon: "→",
                color: "text-purple-400",
              },
              {
                title: "Eligibility",
                items: slide.eligibility,
                icon: "✓",
                color: "text-cyan-400",
              },
              {
                title: "Benefits",
                items: slide.benefits,
                icon: "⭐",
                color: "text-orange-400",
              },
            ].map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-white/75 text-sm md:text-base leading-relaxed flex items-start gap-3">
                      <span
                        className={`${section.color} mt-1 flex-shrink-0 font-bold`}>
                        {section.icon}
                      </span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button
              onClick={onOpen}
              className="px-8 py-3.5 cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base">
              Apply Now
              <ExternalLink size={18} />
            </button>
            {/* <button className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 text-sm md:text-base">
            Learn More
          </button> */}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-center items-center mt-12">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110">
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-8 h-2.5"
                    : "bg-white/20 w-2.5 h-2.5 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Drawer isOpen={isOpen} placement={"bottom"} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody className="relative min-h-screen h-screen w-full flex justify-center items-center overflow-hidden bg-[#0d0125]">
                <style>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradient {
              background: linear-gradient(135deg, #1a0b3a, #0d0125, #13062e);
              background-size: 200% 200%;
              animation: gradient 10s ease infinite;
            }
            @keyframes pulse-glow {
              0%, 100% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 0.5; transform: scale(1.1); }
            }
            .glow {
              position: absolute;
              border-radius: 50%;
              filter: blur(100px);
              opacity: 0.3;
              animation: pulse-glow 6s ease-in-out infinite;
            }
            @keyframes slideIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-slideIn {
              animation: slideIn 0.6s ease-out forwards;
            }
          `}</style>

                {/* Animated Background */}
                <div className="absolute inset-0 animate-gradient"></div>
                <div className="glow bg-purple-600/40 w-96 h-96 top-10 -left-20"></div>
                <div className="glow bg-orange-500/30 w-96 h-96 bottom-10 -right-20"></div>
                <div className="glow bg-blue-500/20 w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                {/* Form Container */}
                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
                  {/* Header Section */}
                  <div className="mb-8 animate-slideIn">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full"></div>
                      <h2 className="text-3xl text-white font-semibold tracking-wide">
                        Apply for {slide.title}
                      </h2>
                    </div>
                    <p className="text-gray-300 text-sm ml-4">
                      Join our team and grow with us. Fill in your details
                      below.
                    </p>
                  </div>

                  <form
                    ref={formRef}
                    className="space-y-6 text-white"
                    onSubmit={(e) => handleSubmit(e, onClose)}>
                    {/* Personal Information Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center text-xs">
                          1
                        </span>
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 text-sm font-medium">
                            Full Name
                          </label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition hover:border-white/30"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium">
                            Email
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="mail@example.com"
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition hover:border-white/30"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center text-xs">
                          2
                        </span>
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 text-sm font-medium">
                            Phone Number
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            placeholder="phone number"
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition hover:border-white/30"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium">
                            Country
                          </label>
                          <input
                            name="country"
                            type="text"
                            placeholder="country"
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition hover:border-white/30"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Location Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center text-xs">
                          3
                        </span>
                        Location
                      </h3>
                      <div>
                        <label className="block mb-2 text-sm font-medium">
                          City
                        </label>
                        <input
                          name="city"
                          type="text"
                          placeholder="city"
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition hover:border-white/30"
                          required
                        />
                      </div>
                    </div>

                    {/* Resume Upload Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-purple-300 mb-4 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center text-xs">
                          4
                        </span>
                        Resume
                      </h3>
                      <div className="relative">
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="resume-upload"
                          required
                        />
                        <label
                          htmlFor="resume-upload"
                          className="flex items-center justify-center w-full px-4 py-6 rounded-lg border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition cursor-pointer group">
                          <div className="text-center">
                            <svg
                              className="w-8 h-8 mx-auto mb-2 text-purple-400 group-hover:text-purple-300 transition"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <p className="text-sm text-gray-300">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              PDF, DOC, or DOCX (Max 5MB)
                            </p>
                          </div>
                        </label>
                        {formValues.resume && (
                          <div className="mt-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center gap-3">
                            <svg
                              className="w-5 h-5 text-purple-400 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1v-6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-200 truncate font-medium">
                                {formValues.resume.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {(formValues.resume.size / 1024).toFixed(2)} KB
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                const fileInput =
                                  document.getElementById("resume-upload");
                                if (fileInput) fileInput.value = "";
                                setFormValues((prev) => ({
                                  ...prev,
                                  resume: null,
                                }));
                              }}
                              className="text-gray-400 hover:text-red-400 transition flex-shrink-0">
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between gap-4 pt-6 border-t border-white/10">
                      <Button
                        type="submit"
                        className="text-xs md:text-base bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full px-8 py-3 w-full hover:shadow-lg hover:shadow-purple-500/40 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!isFormValid || isSubmitting}>
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Submitting...
                          </div>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                      <Button
                        onPress={onClose}
                        className="border border-white/30 text-white rounded-full px-8 py-3 hover:bg-white/10 hover:border-white/50 transition w-full font-medium disabled:opacity-50"
                        disabled={isSubmitting}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Carousel2;
