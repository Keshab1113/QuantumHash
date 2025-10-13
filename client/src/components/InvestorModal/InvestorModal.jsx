 

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Drawer, DrawerContent, DrawerBody, Button } from "@heroui/react";
import Select from "react-select";
import { useToast } from "../ToastContext";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    border: state.isFocused
      ? "1px solid rgba(168, 85, 247, 0.6)"
      : "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "none",
    borderRadius: "10px",
    color: "#fff",
    padding: "6px 8px",
    minHeight: "46px",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "rgba(168, 85, 247, 0.4)",
      backgroundColor: "rgba(255, 255, 255, 0.12)",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "rgba(17, 17, 27, 0.98)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
    marginTop: "8px",
    zIndex: 99,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "rgba(168, 85, 247, 0.2)"
      : "transparent",
    color: state.isFocused ? "#fff" : "rgba(255, 255, 255, 0.85)",
    cursor: "pointer",
    padding: "12px 16px",
    transition: "all 0.15s ease",
    "&:active": {
      backgroundColor: "rgba(168, 85, 247, 0.3)",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.45)",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.5)",
    "&:hover": {
      color: "rgba(255, 255, 255, 0.7)",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const InvestorModal = () => {
  const { addToast } = useToast();
  const [placement, setPlacement] = useState("bottom");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "Seed", label: "Seed" },
    { value: "Angel", label: "Angel" },
  ];

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/investor`, {
        name: formValues.name,
        email: formValues.email,
        companyName: formValues.companyName,
        investmentInterest: formValues.investmentInterest,
        message: formValues.message,
      });
      formRef.current?.reset();
      setFormValues({
        name: "",
        email: "",
        companyName: "",
        message: "",
      });
      handleClose();
      addToast("success", "Form submitted successfully!");
    } catch (error) {
      addToast("error", "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const { name, email, companyName, investmentInterest, message } =
      formValues;
    const allFilled =
      name && email && companyName && investmentInterest && message;
    setIsFormValid(!!allFilled);
  }, [formValues]);

  return (
    <section className="pb-10 flex items-center justify-center">
    <div className="w-full flex justify-center px-4">
  <button
    onClick={() => handleOpen("bottom")}
    className="relative cursor-pointer overflow-hidden border border-white/20 rounded-full py-4 px-6 sm:px-10 shadow-lg text-white w-full sm:w-[350px] max-w-[400px] h-[70px] group font-medium transition-all duration-300 hover:border-white/40 hover:shadow-xl hover:shadow-purple-500/10 text-center"
  >
    <span className="block text-sm sm:text-base font-medium transition-transform duration-500 group-hover:translate-x-full">
      Join our Investor Circle
    </span>
    <span className="block absolute left-0 top-0 w-full h-full flex items-center justify-center transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0">
      Let's Connect
    </span>
  </button>
</div>




      <Drawer isOpen={isOpen} placement={placement} onOpenChange={setIsOpen}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody className="relative h-screen overflow-hidden p-0 md:p-6 bg-[#0a0614] flex flex-col">
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Gradient orbs */}
                  <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                  {/* Radial gradient overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_50%)]"></div>

                  {/* Animated lines */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-20"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%">
                        <stop
                          offset="0%"
                          style={{
                            stopColor: "rgb(168, 85, 247)",
                            stopOpacity: 0.3,
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{
                            stopColor: "rgb(236, 72, 153)",
                            stopOpacity: 0,
                          }}
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 Q150,20 300,50 T600,50"
                      stroke="url(#grad1)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-draw"
                    />
                    <path
                      d="M100,100 Q250,70 400,100 T700,100"
                      stroke="url(#grad1)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-draw animation-delay-1000"
                    />
                  </svg>

                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent)]"></div>
                </div>

                <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 overflow-y-auto md:overflow-hidden max-h-[100vh] p-4 md:p-6 pt-8">

                  {/* Left Side - Info Section */}
                  <div className="w-full space-y-4 md:space-y-6 mt-6 md:mt-0">

                    {/* Main Card */}
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-white/20 p-6 md:p-8 shadow-2xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 text-xs font-medium mb-4">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Investment Opportunity
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Partner with Innovation
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                        Join a network of visionary investors building the
                        future. We're looking for strategic partners who share
                        our vision for innovation and exponential growth.
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                        <div className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl md:rounded-2xl p-4 md:p-5 border border-purple-500/20 backdrop-blur-sm">
                          <div className="text-2xl md:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            $50M+
                          </div>
                          <div className="text-xs text-gray-400">
                            Target Raise
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-pink-500/10 to-transparent rounded-xl md:rounded-2xl p-4 md:p-5 border border-pink-500/20 backdrop-blur-sm">
                          <div className="text-2xl md:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            20+
                          </div>
                          <div className="text-xs text-gray-400">
                            Active Partners
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                            <svg
                              className="w-3 h-3 text-purple-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm md:text-base text-gray-200 font-medium">
                              High Growth Trajectory
                            </p>
                            <p className="text-xs md:text-sm text-gray-400 mt-0.5">
                              Disrupting markets with AI-powered innovation
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                            <svg
                              className="w-3 h-3 text-purple-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm md:text-base text-gray-200 font-medium">
                              Proven Leadership
                            </p>
                            <p className="text-xs md:text-sm text-gray-400 mt-0.5">
                              Team with 3 successful exits and 50+ years
                              combined experience
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                            <svg
                              className="w-3 h-3 text-purple-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm md:text-base text-gray-200 font-medium">
                              Strategic Network
                            </p>
                            <p className="text-xs md:text-sm text-gray-400 mt-0.5">
                              Direct access to Fortune 500 decision makers
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div className="w-full max-w-3xl">

                    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
                      {/* Header */}
                      <div className="px-6 md:px-8 pt-6 md:pt-8 pb-5 md:pb-6 bg-gradient-to-br from-purple-500/15 via-transparent to-pink-500/10 border-b border-white/20">
                        <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                          Let's Connect
                        </h2>
                        <p className="text-xs md:text-sm text-gray-300">
                          Share your details and expect a response within 24
                          hours
                        </p>
                      </div>

                      {/* Form */}
                      <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="p-6 md:p-8 space-y-4 md:space-y-5">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-200">
                            Full Name
                          </label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 md:py-3.5 border border-white/20 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-transparent focus:bg-white/15 transition-all"
                            onChange={handleInputChange}
                            value={formValues.name}
                            required
                          />
                        </div>

                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-200">
                            Email Address
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="xyz@company.com"
                            onChange={handleInputChange}
                            value={formValues.email}
                            className="w-full px-4 py-3 md:py-3.5 border border-white/20 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-transparent focus:bg-white/15 transition-all"
                            required
                          />
                        </div>

                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-200">
                            Company Name
                          </label>
                          <input
                            name="companyName"
                            type="text"
                            placeholder="Your Company"
                            onChange={handleInputChange}
                            value={formValues.companyName}
                            className="w-full px-4 py-3 md:py-3.5 border border-white/20 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-transparent focus:bg-white/15 transition-all"
                            required
                          />
                        </div>

                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-200">
                            Investment Type
                          </label>
                          <Select
                            name="investmentInterest"
                            options={options}
                            styles={customStyles}
                            placeholder="Select investment type"
                            value={
                              options.find(
                                (option) =>
                                  option.value === formValues.investmentInterest
                              ) || null
                            }
                            onChange={(selectedOption) =>
                              setFormValues((prev) => ({
                                ...prev,
                                investmentInterest: selectedOption
                                  ? selectedOption.value
                                  : "",
                              }))
                            }
                          />
                        </div>

                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-200">
                            Message
                          </label>
                          <textarea
                            name="message"
                            placeholder="Share your investment interests and goals..."
                            onChange={handleInputChange}
                            value={formValues.message}
                            rows="4"
                            className="w-full px-4 py-3 border border-white/20 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-transparent focus:bg-white/15 transition-all resize-none"
                            required
                          />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                         
                          <Button
                            type="submit"
                            className="w-full sm:flex-1 rounded-xl px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
                            disabled={!isFormValid || isSubmitting}>
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <svg
                                  className="animate-spin h-4 w-4"
                                  viewBox="0 0 24 24">
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </span>
                            ) : (
                              "Submit Inquiry"
                            )}
                          </Button>
                           <Button
                            onPress={handleClose}
                            className="w-full sm:flex-1 border border-white/30 rounded-xl px-6 py-3 text-white bg-white/5 hover:bg-white/10 transition-all font-medium">
                            Cancel
                          </Button>
                        </div>

                        {/* Privacy Note */}
                        <div className="flex items-center justify-center gap-2 pt-2">
                          <svg
                            className="w-3.5 h-3.5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                          <p className="text-xs text-gray-400">
                            Your information is encrypted and secure
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>

      <style>{`
            @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            .animate-blob {
            animation: blob 7s infinite;
            }
            .animation-delay-1000 {
            animation-delay: 1s;
            }
            .animation-delay-2000 {
            animation-delay: 2s;
            }
            .animation-delay-4000 {
            animation-delay: 4s;
            }
            @keyframes draw {
            0% { stroke-dashoffset: 1000; }
            100% { stroke-dashoffset: 0; }
            }
            .animate-draw {
            stroke-dasharray: 1000;
            animation: draw 8s ease-in-out infinite;
            }
             
        `}</style>
    </section>
  );
};

export default InvestorModal;
