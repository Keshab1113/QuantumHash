import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import 'react-calendar/dist/Calendar.css';
import emailjs from 'emailjs-com';

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

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        query: '',
    });

    const timezones = Intl.supportedValuesOf('timeZone').map((tz) => ({
        value: tz,
        label: tz,
    }));

    useEffect(() => {
        generateTimeSlots(value);
    }, [value, timezone]);

    const generateTimeSlots = (selectedDate) => {
        const slots = [];
        const now = new Date();
        const selected = new Date(selectedDate);
        const startTime = new Date(selected);

        if (selected.toDateString() === now.toDateString()) {
            const roundedMinutes = Math.ceil(now.getMinutes() / 30) * 30;
            startTime.setHours(now.getHours());
            startTime.setMinutes(roundedMinutes);
        } else {
            startTime.setHours(0);
            startTime.setMinutes(0);
        }

        while (startTime.getDate() === selected.getDate()) {
            const timeStr = startTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: timezone,
            });
            slots.push(timeStr);
            startTime.setMinutes(startTime.getMinutes() + 30);
        }

        setTimeSlots(slots);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            full_name: formData.fullName,
            email: formData.email,
            query: formData.query,
            meeting_date: value.toDateString(),
            meeting_time: selectedTime,
            duration: duration,
            timezone: timezone
        };

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
        )
            .then((response) => {
                alert("Meeting request submitted!");
                setFormData({ fullName: '', email: '', query: '' });
                setSelectedTime(null);
            })
            .catch((err) => {
                console.error('Email failed:', err);
                alert("There was an error sending your request.");
            });
    };

    return (
        <section className='w-full'>
            <h1 className="text-4xl font-bold h1head1 mt-10 text-center">Schedule A Meeting</h1>
            <h2 className="text-base font-normal text-white mt-1 text-center">Meet With Our Quantumhash Team</h2>

            <div className='flex md:flex-row flex-col gap-10 mt-16 w-full flex-wrap'>
                <div className={`bg-white md:px-10 px-4 md:py-10 py-8 rounded-2xl ${selectedTime && "hidden"}`}>
                    <h1 className='h1head1 capitalize text-2xl mb-10 font-bold text-center'>Choose the date from here</h1>
                    <Calendar onChange={onChange} value={value} className={" font-bold p-4 rounded-2xl"} />
                </div>

                {selectedTime ? (
                    <form onSubmit={handleSubmit} className=' md:w-[85%] mx-auto w-full space-y-4 border border-white border-solid p-6 rounded-2xl text-white'>
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
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                required
                                className='w-full p-2 rounded text-white bg-white/20 outline-0'
                            />
                        </div>

                        <div>
                            <label className='block text-sm mb-1'>Email</label>
                            <input
                                type='email'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className='w-full p-2 rounded text-white bg-white/20 outline-0'
                            />
                        </div>

                        <div>
                            <label className='block text-sm mb-1'>Your Query</label>
                            <textarea
                                value={formData.query}
                                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                                rows={3}
                                className='w-full p-2 rounded text-white bg-white/20 outline-0'
                            />
                        </div>



                        <button onClick={() => setSelectedTime(null)} className='bg-white mr-3 cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-200'>
                            Back
                        </button>
                        <button type='submit' className='bg-white cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-200'>
                            Submit
                        </button>
                    </form>
                ) :
                    <div className='border border-white border-solid rounded-2xl md:w-[55%] w-full p-6 text-white'>
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
                                        onClick={() => setSelectedTime(slot)}
                                        className={`border cursor-pointer px-4 py-2 rounded transition-all ${selectedTime === slot ? 'bg-white text-black font-semibold' : 'hover:bg-white hover:text-black'
                                            }`}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default Meeting;
