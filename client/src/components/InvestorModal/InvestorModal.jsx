import { useEffect, useRef, useState } from "react";
import axios from "axios"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import Select from "react-select";
import { useToast } from "../ToastContext";


const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "rgba(255, 255, 255, 0.2)", // bg-white/20
        borderColor: state.isFocused ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.2)", // Tailwind purple-500
        boxShadow: state.isFocused ? "0 0 0 1px #a855f7" : "none",
        "&:hover": {
            borderColor: "#a855f7",
        },
        borderRedius: "10px",
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


const InvestorModal = () => {
    const { addToast } = useToast();
    const [placement, setPlacement] = useState("left");
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        companyName: '',
        Message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [isFormValid, setIsFormValid] = useState(false);
    const [interest, setInterest] = useState("");
    const options = [
        { value: "Seed", label: "Seed", color: "white" },
        { value: "Angel", label: "Angel", color: "white" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (placement) => {
        setPlacement(placement);
        setIsOpen(true);  // directly open the drawer
    };

    const handleClose = () => {
        setIsOpen(false);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const formRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);


        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/investor`, {
                name: formData.get('name'),
                email: formData.get('email'),
                companyName: formData.get('companyName'),
                investmentInterest: formData.get('investmentInterest'),
                message: formData.get('message'),
            });
            formRef.current?.reset();
            handleClose();
            addToast("success", "Form submitted successfully!");
        } catch (error) {
            console.error('Error:', error);
            addToast("error", "Failed to submit form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const { name, email, companyName, message } = formValues;
        const allFilled = name && email && companyName && message;
        setIsFormValid(!!allFilled);
    }, [formValues]);

    return (
        <section className="pb-10  flex items-center justify-center">
            <button
                onClick={() =>
                    handleOpen("bottom")}
                className="relative cursor-pointer overflow-hidden border border-white rounded-full py-4 px-10 shadow-xl shadow-white text-white w-[350px] h-[56px] group font-medium"
            >
                <h1
                    className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:translate-x-full"
                >
                    Join our Investor Circle
                </h1>

                <div
                    className="absolute left-1/2 top-1/2 -translate-x-[400%] -translate-y-1/2 transition-transform duration-500 group-hover:translate-x-[-50%]"
                >
                    Let's Connect
                </div>
            </button>



            <Drawer isOpen={isOpen} placement={placement} onOpenChange={setIsOpen}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerBody className=" bg-[#0d0125] h-screen min-h-screen max-h-screen flex justify-center items-center" style={{
                                backgroundImage: "url('/careerBG.png')",
                                backgroundSize: "cover",
                            }}>
                                <div className="stbox p-6 rounded-lg w-full max-w-md relative mx-auto">
                                    <h2 className="text-2xl text-white font-semibold mb-4 text-center">Join Our Investor Circle</h2>
                                    <form ref={formRef} className="space-y-4 text-white" onSubmit={(e) => handleSubmit(e)}>
                                        <div>
                                            <label className="block mb-1 text-sm">Full Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-1 text-sm">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-1 text-sm">Company Name</label>
                                            <input
                                                name="companyName"
                                                type="text"
                                                placeholder="Enter your Company Name"
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-1 text-sm">Investment Interest</label>
                                            <Select myFontSize="15px" name="investmentInterest" options={options} styles={customStyles} />
                                        </div>

                                        <div>
                                            <label className="block mb-1 text-sm">Message</label>
                                            <input
                                                type="text"
                                                name="message"
                                                placeholder="Enter your Message"
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                                                required
                                            />
                                        </div>
                                        <div className="flex justify-end gap-4">
                                            <Button onPress={handleClose} className=" border border-solid border-white rounded-full px-6 py-2 text-white">
                                                Close
                                            </Button>
                                            <Button type="submit" className=" border border-solid border-white rounded-full px-6 py-2 text-white disabled:opacity-50" disabled={!isFormValid}>
                                                {isSubmitting ? "Submitting..." : "Submit"}
                                            </Button>
                                        </div>
                                    </form>
                                </div>

                            </DrawerBody>

                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </section>
    )
}

export default InvestorModal;