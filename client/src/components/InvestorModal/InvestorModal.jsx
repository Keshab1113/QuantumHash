import { useState } from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../ui/animated-modal";
import Select from "react-select";



const InvestorModal = () => {
    const [interest, setInterest] = useState("");
    const options = [
        { value: "Seed", label: "Seed", color: "white" },
        { value: "Angel", label: "Angel", color: "white" },
    ];

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "rgba(255, 255, 255, 0.2)", // bg-white/20
            borderColor: state.isFocused ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.2)", // Tailwind purple-500
            boxShadow: state.isFocused ? "0 0 0 1px #a855f7" : "none",
            "&:hover": {
                borderColor: "#a855f7",
            },
            borderRedius:"10px",
            color: "rgba(255,255,255,0.4)", // text-white/40
            fontSize: state.selectProps.myFontSize,
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: "rgba(255,255,255,0.4)",
            fontSize: state.selectProps.myFontSize,
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "black", // bg-white/20
             // glass effect (optional)
            zIndex: 99,
        }),
        option: (provided, state) => ({
            ...provided,
            fontWeight: state.isSelected ? "bold" : "normal",
            backgroundColor: state.isFocused
                ? "rgba(255,255,255,0.3)"
                : "rgba(255, 255, 255, 0.2)",
            color: "rgba(255,255,255,0.8)",
            fontSize: state.selectProps.myFontSize,
            cursor: "pointer",
        }),
        input: (provided) => ({
            ...provided,
            color: "rgba(255,255,255,0.4)",
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "rgba(255,255,255,0.4)",
        }),
    };

    return (
        <section className="pb-10  flex items-center justify-center">
            <Modal>
                <ModalTrigger className=" border border-solid border-white rounded-full py-4 px-10 shadow-xl shadow-white text-white flex justify-center group/modal-btn cursor-pointer">
                    <h1 className="group-hover/modal-btn:translate-x-58 text-center transition duration-500">
                        Join our Investor Circle
                    </h1>
                    <div className="-translate-x-58 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        Let's Connect
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent className=" h-[50vh] ">
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4">
                            Join Our Investor Circle
                        </h4>
                        <div className="flex justify-center items-center h-full ">
                            <form
                                className="w-full text-white"
                            >
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/40 text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/40 text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your company name"
                                        className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/40 text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-1 font-medium">Investment Interest</label>
                                    <Select myFontSize="15px" options={options} styles={customStyles} />
                                </div>



                                <div className="mb-6">
                                    <label className="block mb-1 font-medium">Message</label>
                                    <textarea
                                        rows="1"
                                        placeholder="Write your message here..."
                                        className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/40 text-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        {/* <button className="px-2 py-1 text-white  border border-gray-300 rounded-full cursor-pointer text-sm w-28">
                            Cancel
                        </button> */}
                        <button className="cursor-pointer text-white  text-sm px-2 py-1 rounded-full border border-gray-300 w-28">
                            Send
                        </button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </section>
    )
}

export default InvestorModal;