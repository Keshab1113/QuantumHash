import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { useToast } from "../ToastContext";
import { DateTime } from 'luxon';
import { Link } from "react-router-dom"
import { convertFromKuwaitTime } from "../../lib/utils";

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
    const [value, setValue] = useState(DateTime.local().toJSDate());
    const [duration, setDuration] = useState(20);
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [meetingDetails, setMeetingDetails] = useState(null);
    const [bookedSlots, setBookedSlots] = useState([]);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);
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

    const fetchBookedSlots = async (selectedDate, updatedTimezone = timezone) => {
        setIsLoadingSlots(true);
        const formattedDate = DateTime.fromJSDate(selectedDate).setZone(updatedTimezone).toFormat('yyyy-MM-dd');

        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/meetings?date=${formattedDate}`);
            const slots = response.data;
            setBookedSlots(slots);
            generateTimeSlots(selectedDate, slots, updatedTimezone);
        } catch (error) {
            console.error("Error fetching booked slots:", error);
            addToast("error", "Failed to load available time slots");
            setBookedSlots([]);
            generateTimeSlots(selectedDate, [], updatedTimezone);
        } finally {
            setIsLoadingSlots(false);
        }
    };

    const generateTimeSlots = (selectedDate, customBookedSlots = bookedSlots, activeTimezone = timezone) => {
        const slots = [];
        const now = DateTime.local().setZone(activeTimezone);
        const selectedDateTime = DateTime.fromJSDate(selectedDate).setZone(activeTimezone);
        const isToday = now.hasSame(selectedDateTime, 'day');

        const kuwaitStart = DateTime.fromJSDate(selectedDate)
            .setZone('Asia/Kuwait')
            .set({ hour: 10, minute: 0, second: 0, millisecond: 0 });

        const kuwaitEnd = kuwaitStart.set({ hour: 22, minute: 0 });
        const userStart = kuwaitStart.setZone(activeTimezone);
        const userEnd = kuwaitEnd.setZone(activeTimezone);

        let current = userStart;

        while (current < userEnd) {
            const label = current.toFormat('hh:mm a');
            const timeValue = current.toFormat('HH:mm');
            const isPast = isToday && current < now;

            const isBooked = customBookedSlots.some(slot => {
                const time24 = DateTime.fromFormat(slot.meeting_time, "hh:mm a", {
                    zone: 'Asia/Kuwait',
                }).toFormat("HH:mm");

                const date = DateTime.fromISO(slot.meeting_date).toFormat("yyyy-MM-dd");
                const converted = convertFromKuwaitTime(time24, date, activeTimezone);

                if (!converted || !converted.kuwaitISO) return false;
                const convertedTime = DateTime.fromISO(converted.kuwaitISO).toFormat("HH:mm");
                return convertedTime === timeValue;
            });

            slots.push({
                label,
                isPast,
                isBooked,
                disabled: isPast || isBooked,
            });

            current = current.plus({ minutes: 30 });
        }

        setTimeSlots(slots);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(form.current);
        const formattedDate = DateTime.fromJSDate(value).setZone(timezone).toFormat('yyyy-MM-dd');

        const data = {
            ...Object.fromEntries(formData.entries()),
            date: formattedDate,
            time: selectedTime,
            duration,
            timezone,
        };

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/meeting`, data);
            setMeetingDetails({ date: formattedDate, time: selectedTime });
            setIsConfirmed(true);
            addToast("success", "Meeting will be scheduled soon.");
            form.current.reset();
            setFormValues({ fullName: '', email: '', query: '' });
            setSelectedTime(null);
            fetchBookedSlots(value, timezone);
        } catch (err) {
            if (err.response?.data?.error === 'Time slot already booked') {
                addToast("error", "This time slot is already booked. Please choose another time.");
                fetchBookedSlots(value, timezone);
            } else {
                addToast("error", "Failed to schedule the meeting.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const { fullName, email, query } = formValues;
        const allFilled = fullName && email && query;
        setIsFormValid(!!allFilled);
    }, [formValues]);

    useEffect(() => {
        fetchBookedSlots(value, timezone);
    }, [value, timezone]);

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
                    <div className={` md:px-10 border border-solid border-white bg-slate-200 px-4 md:py-10 py-8 rounded-2xl w-full lg:w-[40%] flex flex-col justify-start items-center mx-auto ${selectedTime && "hidden"}`}>
                        <h1 className='h1head1 capitalize text-2xl mb-6 font-bold text-center'>Choose the date from here</h1>
                        <Calendar onChange={(date) => {
                            setValue(date);
                            fetchBookedSlots(date, timezone);
                        }}
                            value={value}
                            className={" font-bold p-4 rounded-2xl bg-white "}
                            minDate={DateTime.local().toJSDate()}
                        />
                        <div className=' mt-6 bg-white rounded-2xl p-4'>
                            <p className=' text-sm font-bold text-zinc-800'>🚀 Connect</p>
                            <h1 className=' text-xl font-bold my-2'>Meet the QuantumHash Team</h1>
                            <p className=' text-sm font-bold text-zinc-800'>🕒 20 min</p>
                            <p className=' text-sm mt-2'>Want to unlock the full potential of your digital ecosystem? Book a session with our expert team to explore your ideas, solve key technical challenges, and learn how QuantumHash’s innovative solutions can accelerate your product, streamline operations, and drive results across your business.</p>
                        </div>
                    </div>

                    {selectedTime ? (
                        <form ref={form} onSubmit={handleSubmit} className=' lg:w-[85%] md:w-[100%] mx-auto w-full space-y-4 border border-white border-solid p-6 rounded-2xl text-white'>
                            <div>
                                <h3 className="text-lg font-bold capitalize">Your information</h3>
                                <h4 className="text-[12px] ">Quantumhash Digital Conference</h4>
                                <h2 className="text-[12px] ">{value.toDateString()} - {selectedTime} | Duration: {duration} minutes | {timezone}</h2>
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

                            <button onClick={() => setSelectedTime(null)} className='bg-white mr-3 cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-200'>Back</button>
                            <button type='submit' className='bg-white disabled:opacity-50 cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-200' disabled={!isFormValid || isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
                        </form>
                    ) :
                        <div className='border border-white border-solid rounded-2xl lg:w-[55%] w-full p-6 text-white'>
                            <div className='mb-4'>
                                <label className='block mb-2 font-semibold md:text-xl text-lg'>Meeting Duration (in minutes)</label>
                                <input
                                    type='text'
                                    min={20}
                                    max={20}
                                    readOnly
                                    value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                    className='w-full p-2 px-3 rounded-xl text-white bg-white/20 outline-0'
                                />
                            </div>

                            <div className='mb-4'>
                                <label className='block mb-2 font-semibold md:text-xl text-lg'>What time works best? (Timezone)</label>
                                <Select
                                    options={timezones}
                                    value={timezones.find((tz) => tz.value === timezone)}
                                    onChange={(selected) => setTimezone(selected.value)}
                                    styles={customStyles}
                                    myFontSize="15px"
                                />
                            </div>

                            <div className='mt-6'>
                                <h3 className='font-semibold mb-4 md:text-xl text-lg'>Available Time Slots:</h3>
                                {isLoadingSlots ? (
                                    <div className="text-center py-4">Loading available slots...</div>
                                ) :
                                    <div className='grid md:grid-cols-3 grid-cols-2 gap-2 max-h-[400px] overflow-y-auto'>
                                        {timeSlots.map((slot, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    if (!slot.disabled) setSelectedTime(slot.label);
                                                }}
                                                disabled={slot.disabled}
                                                className={`border px-4 py-2 rounded transition-all
                                                    ${slot.disabled
                                                        ? 'bg-gray-400 text-white cursor-not-allowed opacity-50'
                                                        : selectedTime === slot.label
                                                            ? 'bg-white text-black font-semibold'
                                                            : 'hover:bg-white cursor-pointer hover:text-black'} ${slot.isBooked && "bg-gray-400"}
                                                `}
                                                title={slot.isBooked ? "This slot is already booked" : ""}
                                            >
                                                {slot.label}
                                            </button>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            }
        </section>
    );
};

export default Meeting;