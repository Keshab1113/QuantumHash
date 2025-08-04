import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { useToast } from "../ToastContext";
import { DateTime } from 'luxon';
import {Link} from "react-router-dom"

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#0d0125",
        borderColor: state.isFocused ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.2)",
        boxShadow: state.isFocused ? "0 0 0 1px #a855f7" : "none",
        "&:hover": {
            borderColor: "#a855f7",
        },
        borderRadius: "10px",
        fontSize: state.selectProps.myFontSize,
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "rgba(255,255,255,0.8)",
        fontSize: state.selectProps.myFontSize,
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#0d0125",
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
        color: "rgba(255,255,255,0.8)",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "rgba(255,255,255,0.4)",
    }),
};

const Meeting = () => {
    const [value, onChange] = useState(new Date());
    const [duration, setDuration] = useState(20);
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [meetingDetails, setMeetingDetails] = useState(null);


    const { addToast } = useToast();
    const form = useRef(null);

    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        query: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const timezones = Intl.supportedValuesOf('timeZone').map((tz) => ({
        value: tz,
        label: tz,
    }));

    useEffect(() => {
        generateTimeSlots(value);
    }, [value, timezone]);



    const generateTimeSlots = (selectedDate) => {
        const slots = [];

        const now = DateTime.local().setZone(timezone);
        const selectedDateTime = DateTime.fromJSDate(selectedDate).setZone(timezone);

        const isToday = now.hasSame(selectedDateTime, 'day');

        // Define fixed Kuwait time range
        const kuwaitStart = DateTime.fromJSDate(selectedDate)
            .setZone('Asia/Kuwait')
            .set({ hour: 10, minute: 0, second: 0, millisecond: 0 });

        const kuwaitEnd = kuwaitStart.set({ hour: 22, minute: 0 });

        // Convert to user's timezone
        const userStart = kuwaitStart.setZone(timezone);
        const userEnd = kuwaitEnd.setZone(timezone);

        let current = userStart;
        while (current < userEnd) {
            const label = current.toFormat('hh:mm a');

            // ✅ Only mark as past if the selected date is today
            const isPast = isToday && current < now;

            slots.push({ label, isPast });
            current = current.plus({ minutes: 30 });
        }

        setTimeSlots(slots);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(form.current);

        const data = {
            ...Object.fromEntries(formData.entries()),
            date: value.toDateString(),
            time: selectedTime,
            duration,
            timezone,
        };

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/meeting`, data);
            setMeetingDetails({ date: value.toDateString(), time: selectedTime });
            setIsConfirmed(true);
            addToast("success", "Meeting will be scheduled soon.");
            form.current.reset();
            setFormValues({ fullName: '', email: '', query: '' });
            setSelectedTime(null);
        } catch (err) {
            addToast("error", "Failed to schedule the meeting.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const { fullName, email, query } = formValues;
        const allFilled = fullName && email && query;
        setIsFormValid(!!allFilled);
    }, [formValues]);

    return (
        <section className='w-full'>
            <h1 className="md:text-[38px] text-[28px] font-bold h1head1 mt-10 text-center w-fit mx-auto">Schedule A Meeting</h1>
            <h2 className="text-base font-normal text-white mt-1 text-center">Meet With Our Quantumhash Team</h2>
            {isConfirmed ? (
                <div className="w-full flex items-center justify-center mt-20">
                    <div className="bg-white p-10 rounded-xl text-center shadow-lg w-full max-w-sm">
                        <img src="/confirmed-icon.png" alt="confirmed" className="w-16 h-16 mx-auto mb-4" loading='lazy' />
                        <h1 className="text-xl font-bold text-[#0d0125] mb-2">Meeting confirmed</h1>
                        <p className="text-sm text-gray-700 mb-4">
                            You're booked a Meeting with Quantumhash Team.<br />
                            An invitation has been emailed to you.
                        </p>
                        <p className="text-lg font-semibold text-[#0d0125]">
                            {meetingDetails?.date}<br />
                            {meetingDetails?.time}
                        </p>
                        <Link to="/meeting" className="mt-6 bg-[#00c3ff] cursor-pointer text-white px-6 py-2 rounded hover:bg-[#00aacc] mr-4">
                            <button>
                                Meet
                            </button>
                        </Link>
                        <button
                            onClick={() => setIsConfirmed(false)}
                            className="mt-6 bg-[#00c3ff] cursor-pointer text-white px-6 py-2 rounded hover:bg-[#00aacc]"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            ) :
                <div className='flex md:flex-row flex-col gap-6 mt-16 w-full flex-wrap'>
                    <div className={` md:px-10 border border-solid border-white bg-slate-200 px-4 md:py-10 py-8 rounded-2xl w-full lg:w-[40%] flex flex-col justify-start items-center md:w-[70%] mx-auto ${selectedTime && "hidden"}`}>
                        <h1 className='h1head1 capitalize text-2xl mb-10 font-bold text-center'>Choose the date from here</h1>
                        <Calendar onChange={onChange} value={value} className={" font-bold p-4 rounded-2xl bg-white "} minDate={new Date()} />
                    </div>

                    {selectedTime ? (
                        <form ref={form} onSubmit={handleSubmit} className=' lg:w-[85%] md:w-[100%] mx-auto w-full space-y-4 border border-white border-solid p-6 rounded-2xl text-white'>
                            <div>
                                <h3 className="text-lg font-bold capitalize">Your information</h3>
                                <h4 className="text-[12px] ">Quantumhash Digital Conference</h4>
                                <h2 className="text-[12px] ">{value.toDateString()} - {selectedTime} | Duration: {duration} minutes | {timezone}</h2>
                                <div className="text-sm text-gray-300">
                                </div>
                            </div>
                            <div>
                                <label className='block text-sm mb-1'>Full Name</label>
                                <input
                                    type='text'
                                    name="fullName"
                                    value={formValues.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full p-2 rounded text-white bg-white/20 outline-0'
                                />
                            </div>

                            <div>
                                <label className='block text-sm mb-1'>Email</label>
                                <input
                                    type='email'
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full p-2 rounded text-white bg-white/20 outline-0'
                                />
                            </div>

                            <div>
                                <label className='block text-sm mb-1'>Your Query</label>
                                <textarea
                                    name="query"
                                    value={formValues.query}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className='w-full p-2 rounded text-white bg-white/20 outline-0'
                                />
                            </div>



                            <button onClick={() => setSelectedTime(null)} className='bg-white mr-3 cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-200'>
                                Back
                            </button>
                            <button type='submit' className='bg-white disabled:opacity-50 cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-200' disabled={!isFormValid}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    ) :
                        <div className='border border-white border-solid rounded-2xl lg:w-[55%] w-full p-6 text-white'>
                            {/* Meeting Duration */}
                            <div className='mb-4'>
                                <label className='block mb-1 font-semibold'>Meeting Duration (in minutes)</label>
                                <input
                                    type='number'
                                    min={5}
                                    value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                    className='w-full p-2 px-3 rounded-xl text-white bg-white/20 outline-0'
                                />
                            </div>

                            {/* Timezone Selection */}
                            <div className='mb-4'>
                                <label className='block mb-1 font-semibold'>What time works best? (Timezone)</label>
                                <Select
                                    options={timezones}
                                    value={timezones.find((tz) => tz.value === timezone)}
                                    onChange={(selected) => setTimezone(selected.value)}
                                    styles={customStyles}
                                    myFontSize="15px"
                                />
                            </div>

                            {/* Available Time Slots */}
                            <div className='mt-6'>
                                <h3 className='font-semibold mb-2'>Available Time Slots:</h3>
                                <div className='grid grid-cols-4 gap-2 max-h-[300px] overflow-y-auto'>
                                    {timeSlots.map((slot, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (!slot.isPast) setSelectedTime(slot.label);
                                            }}
                                            disabled={slot.isPast}
                                            className={`border px-4 py-2 rounded transition-all
      ${slot.isPast
                                                    ? 'bg-gray-400 text-white cursor-not-allowed opacity-50'
                                                    : selectedTime === slot.label
                                                        ? 'bg-white text-black font-semibold'
                                                        : 'hover:bg-white hover:text-black'}
    `}
                                        >
                                            {slot.label}
                                        </button>
                                    ))}

                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
        </section>
    );
};

export default Meeting;