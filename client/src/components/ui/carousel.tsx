"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import axios from "axios"
import { useToast } from "../../components/ToastContext";

interface SlideData {
  title: string;
  button: string;
  src: string;
  benefits: any;
  eligibility: any;
  responsibilities: any;
  overview: string;
  type: string;
}
interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  resume: File | null;
  jobTitle: string;
}
interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { addToast } = useToast();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    resume: null as File | null,
  });
  const [isFormValid, setIsFormValid] = useState(false);



  const handleOpen = (placement) => {
    setPlacement(placement);
    onOpen();
  };

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(1);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormValues((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, onClose: () => void) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);


    try {
      const response = await axios.post('https://quantumhash.onrender.com/api/apply', {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        country: formData.get('country'),
        city: formData.get('city'),
        jobTitle: formData.get('jobTitle'),
        resumeLink: formData.get('resume') ? (formData.get('resume') as File).name : 'No resume attached',
      });
      formRef.current?.reset();
      onClose();
      addToast("success", "Application submitted successfully!");
    } catch (error) {
      console.error('Error:', error);
      addToast("error", "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const { src, button, title, type, overview, responsibilities, eligibility, benefits } = slide;
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const { name, email, phone, country, city, resume } = formValues;
    const allFilled = name && email && phone && country && city && resume;
    setIsFormValid(!!allFilled);
  }, [formValues]);


  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[90vw] lg:h-[82vmin] md:h-[80vh] h-screen mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full stbox rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) 0)"
                : "none",
          }}
        >
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <h2 className=" md:text-4xl md:mb-6 text-xl font-semibold  relative">
            {title} - {type}
          </h2>
          <div className=" flex justify-start items-start flex-col mb-2">
            <h2 className=" md:text-xl text-lg font-semibold  relative mb-1">
              Overview
            </h2>
            <p className=" text-start md:text-lg text-sm">{overview}</p>
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 mt-10 overflow-y-auto md:overflow-y-hidden h-[50vh] md:h-full">
              <div>
                <h2 className=" font-semibold  relative text-xl mb-2 underline">
                  Responsibilities
                </h2>
                <ol className="list-decimal list-inside text-sm text-start mb-2">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className=" font-semibold  relative mb-2 text-xl underline">
                  Eligibility
                </h2>
                <ol className="list-decimal list-inside text-sm text-start mb-2">
                  {eligibility.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="font-semibold relative mb-2 text-xl underline">Benefits</h2>
                <ol className="list-decimal list-inside text-sm text-start mb-2">
                  {benefits.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button onPress={() => handleOpen("bottom")} className="mt-2 cursor-pointer  px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-zinc-200 border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-zinc-800">
              Apply Now
            </Button>
          </div>
        </article>
      </li>

      <Drawer isOpen={isOpen} placement={"bottom"} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody className=" bg-[#0d0125] h-screen min-h-screen max-h-screen flex justify-center items-center" style={{
                backgroundImage: "url('/Images/careerBG.png')",
                backgroundSize: "cover",
              }}>
                <div className="stbox p-6 rounded-lg w-full max-w-md relative mx-auto">
                  <h2 className="text-2xl text-white font-semibold mb-4 text-center">Apply Now</h2>
                  <form ref={formRef} className="space-y-4 text-white" onSubmit={(e) => handleSubmit(e, onClose)}>
                    <input type="hidden" name="jobTitle" value={title} />
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
                      <label className="block mb-1 text-sm">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm">Country</label>
                      <input
                        name="country"
                        type="text"
                        placeholder="Enter your country"
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm">City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm">Upload CV <span className="text-xs text-gray-300">(PDF or DOC)</span></label>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-600 file:text-white
          hover:file:bg-indigo-700"
                        required
                      />
                    </div>

                    <div className="flex justify-end gap-4">
                      <Button onPress={onClose} className=" border border-solid border-white rounded-full px-6 py-2 text-white">
                        Close
                      </Button>
                      <Button type="submit" className=" border border-solid border-white rounded-full px-6 py-2 text-white disabled:opacity-50" disabled={!isFormValid || isSubmitting}>
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
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
        }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[90vw] lg:h-[82vmin] md:h-[80vh] h-screen mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
