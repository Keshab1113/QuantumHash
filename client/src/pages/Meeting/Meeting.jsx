// import { Helmet } from "react-helmet";
// import AiBotSection from "../../components/AiBot/AiBotSection";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { LoaderOne } from "../../components/ui/loader";

// const Meeting = () => {
//   const [accessGranted, setAccessGranted] = useState(false);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [isAllowed, setIsAllowed] = useState(null);
// const [timeLeft, setTimeLeft] = useState(null);
// const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     const requestMediaAccess = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });
//         // Optional: stop the tracks after permission is granted
//         stream.getTracks().forEach((track) => track.stop());
//         setAccessGranted(true);
//       } catch (err) {
//         console.error("Media access error:", err);
//         setError("Permission denied or device not available.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     requestMediaAccess();
//   }, []);

//   // useEffect(() => {
//   //   const validateAccess = async () => {
//   //     try {
//   //       const res = await axios.get(
//   //         `${import.meta.env.VITE_BACKEND_URL}/api/meeting/validate/${id}`
//   //       );
//   //       if (res.data.allowed) {
//   //         setIsAllowed(true);
//   //       } else {
//   //         navigate("/noschedule");
//   //       }
//   //     } catch (err) {
//   //       console.error("Validation error:", err);
//   //       navigate("/nopage");
//   //     }
//   //   };

//   //   validateAccess();
//   // }, [id, navigate]);

// useEffect(() => {
//   const validateAccess = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_BACKEND_URL}/api/meeting/validate/${id}`
//       );
      
//       if (res.data.allowed) {
//         setIsAllowed(true);
//         setTimeLeft(null);
//         if (intervalId) clearInterval(intervalId);
//       } else if (res.data.diffInMinutes !== undefined) {
//         setIsAllowed(false);
//         setTimeLeft(Math.ceil(res.data.diffInMinutes * 60)); // store in seconds ⏳
//       } else {
//         setError("Meeting not found or invalid.");
//       }
//     } catch (err) {
//       console.error("Validation error:", err);
//       setError("Could not validate meeting.");
//     }
//   };

//   validateAccess();
//   const idInterval = setInterval(validateAccess, 30000);
//   setIntervalId(idInterval);

//   return () => clearInterval(idInterval);
// }, [id]);

// useEffect(() => {
//   if (timeLeft === null) return;
//   const countdown = setInterval(() => {
//     setTimeLeft((prev) => {
//       if (prev <= 1) {
//         clearInterval(countdown);
//         setIsAllowed(true); // ⏳ unlock when timer reaches zero
//         return 0;
//       }
//       return prev - 1;
//     });
//   }, 1000);

//   return () => clearInterval(countdown);
// }, [timeLeft]);

// const formatTime = (seconds) => {
//   const mins = Math.floor(seconds / 60);
//   const secs = seconds % 60;
//   return `${mins}:${secs.toString().padStart(2, "0")}`;
// };




// //   return (
// //     <>
// //       <Helmet>
// //         <meta charSet="utf-8" />
// //         <title>Our Conference | QuantumHash</title>
// //         <link rel="canonical" href="http://mysite.com/example" />
// //       </Helmet>

// //       <section className="h-full w-full bg-[#0d0125]">
// //         <AiBotSection headText="Digital conference" />
// //         {isAllowed === null ? (
// //           <div className="container mx-auto px-4 py-6 h-full flex flex-col justify-center items-center">
// //             <h1 className="text-white text-[34px] font-bold mt-20 text-center">
// //               Welcome to QuantumHash Corporation
// //             </h1>
// //             <h1 className="text-white text-[28px] font-bold mt-2 text-center mb-6">
// //               Please wait we are checking access...
// //             </h1>
// //             <LoaderOne />
// //           </div>
// //         ) : (
// //           // <div className="container mx-auto px-4 py-6 h-full flex flex-col">
// //           //   <h1 className="text-white text-[34px] font-bold mt-20 text-center">
// //           //     Welcome to QuantumHash Corporation
// //           //   </h1>
// //           //   <h1 className="text-white text-[28px] font-bold mt-2 text-center">
// //           //     If you think this is incorrect, please contact with the organizer.
// //           //   </h1>
// //           //   <Link
// //           //     to={"/connect#meeting"}
// //           //     className="text-sm mt-10 text-blue-500 text-center capitalize w-fit mx-auto"
// //           //   >
// //           //     go to schedule a meeting
// //           //   </Link>

// //           //   <div className="mt-10 flex-grow relative">
// //           //     {loading && (
// //           //       <p className="text-white text-center">
// //           //         Requesting camera and microphone access...
// //           //       </p>
// //           //     )}

// //           //     {accessGranted && (
// //           //       <iframe
// //           //         src={`${import.meta.env.VITE_MEETING_URL}/${id}`}
// //           //         className="w-full h-[80vh] rounded-lg border border-white"
// //           //         title="Embedded Conference"
// //           //         allow="camera; microphone; fullscreen"
// //           //         allowFullScreen
// //           //       />
// //           //     )}
               
// //           //     {error && (
// //           //       <p className="text-red-500 text-center mt-4">{error}</p>
// //           //     )}
// //           //   </div>
// //           // </div>
// //           <div className="container mx-auto px-4 py-6 h-full flex flex-col">
// //   <h1 className="text-white text-[34px] font-bold mt-20 text-center">
// //     Welcome to QuantumHash Corporation
// //   </h1>

// //   {isAllowed === false && timeLeft !== null ? (
// //     <>
// //       <h1 className="text-white text-[28px] font-bold mt-4 text-center">
// //         Your meeting will start soon
// //       </h1>
// //       <p className="text-white text-lg text-center mt-2">
// //         Access will open {timeLeft} minute{timeLeft !== 1 && "s"} before the meeting.
// //       </p>
// //       <div className="mt-6 flex justify-center">
// //         <div className="text-4xl text-blue-400 font-bold">
// //           ⏳ {timeLeft} min
// //         </div>
// //       </div>
// //     </>
// //   ) : (
// //     <>
// //       <h1 className="text-white text-[28px] font-bold mt-2 text-center">
// //         If you think this is incorrect, please contact the organizer.
// //       </h1>
// //       <Link
// //         to={"/connect#meeting"}
// //         className="text-sm mt-10 text-blue-500 text-center capitalize w-fit mx-auto"
// //       >
// //         go to schedule a meeting
// //       </Link>

// //       <div className="mt-10 flex-grow relative">
// //         {loading && (
// //           <p className="text-white text-center">
// //             Requesting camera and microphone access...
// //           </p>
// //         )}

// //         {accessGranted && (
// //           <iframe
// //             src={`${import.meta.env.VITE_MEETING_URL}/${id}`}
// //             className="w-full h-[80vh] rounded-lg border border-white"
// //             title="Embedded Conference"
// //             allow="camera; microphone; fullscreen"
// //             allowFullScreen
// //           />
// //         )}

// //         {error && (
// //           <p className="text-red-500 text-center mt-4">{error}</p>
// //         )}
// //       </div>
// //     </>
// //   )}
// // </div>

// //         )}
// //       </section>
// //     </>
// //   );

// return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Our Conference | QuantumHash</title>
//         <link rel="canonical" href="http://mysite.com/example" />
//       </Helmet>

//       <section className="h-full w-full bg-[#0d0125] min-h-screen flex flex-col">
//         <AiBotSection headText="Digital conference" />

//         {isAllowed === null ? (
//           // 🕒 Loading state while checking access
//           <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center flex-grow">
//             <h1 className="text-white text-[34px] font-bold mt-20 text-center">
//               Welcome to QuantumHash Corporation
//             </h1>
//             <h1 className="text-white text-[28px] font-bold mt-2 text-center mb-6">
//               Please wait, we are checking access...
//             </h1>
//             <LoaderOne />
//           </div>
//         ) : isAllowed === false && timeLeft !== null ? (
//           // ⏳ Countdown before meeting starts
//           <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center flex-grow">
//             <h1 className="text-white text-[34px] font-bold mt-20 text-center">
//               Welcome to QuantumHash Corporation
//             </h1>
//             <h1 className="text-white text-[28px] font-bold mt-4 text-center">
//               Your meeting will start soon
//             </h1>
//             <p className="text-white text-lg text-center mt-2">
//               Access will open when the timer reaches zero.
//             </p>
//             <div className="mt-6 flex justify-center">
//               <div className="text-5xl text-blue-400 font-bold tracking-wide">
//                 ⏳ {formatTime(timeLeft)}
//               </div>
//             </div>
//           </div>
//         ) : (
//           // ✅ Meeting started or access granted
//           <div className="container mx-auto px-4 py-6 flex flex-col flex-grow">
//             <h1 className="text-white text-[34px] font-bold mt-20 text-center">
//               Welcome to QuantumHash Corporation
//             </h1>
//             <h1 className="text-white text-[28px] font-bold mt-2 text-center">
//               If you think this is incorrect, please contact the organizer.
//             </h1>
//             <Link
//               to={"/connect#meeting"}
//               className="text-sm mt-10 text-blue-500 text-center capitalize w-fit mx-auto"
//             >
//               go to schedule a meeting
//             </Link>

//             <div className="mt-10 flex-grow relative">
//               {loading && (
//                 <p className="text-white text-center">
//                   Requesting camera and microphone access...
//                 </p>
//               )}

//               {accessGranted && (
//                 <iframe
//                   src={`${import.meta.env.VITE_MEETING_URL}/${id}`}
//                   className="w-full h-[80vh] rounded-lg border border-white"
//                   title="Embedded Conference"
//                   allow="camera; microphone; fullscreen"
//                   allowFullScreen
//                 />
//               )}

//               {error && (
//                 <p className="text-red-500 text-center mt-4">{error}</p>
//               )}
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   );


// };

// export default Meeting;


import { Helmet } from "react-helmet";
import AiBotSection from "../../components/AiBot/AiBotSection";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoaderOne } from "../../components/ui/loader";

const Meeting = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  // ✅ Request Camera + Mic
  useEffect(() => {
    const requestMediaAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        stream.getTracks().forEach((track) => track.stop());
        setAccessGranted(true);
      } catch (err) {
        console.error("Media access error:", err);
        setError("Permission denied or device not available.");
      } finally {
        setLoading(false);
      }
    };

    requestMediaAccess();
  }, []);

  // ✅ Validate Meeting Access
  useEffect(() => {
    const validateAccess = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/meeting/validate/${id}`
        );

        if (res.data.allowed) {
          setIsAllowed(true);
          setTimeLeft(null);
          if (intervalId) clearInterval(intervalId);
        } else if (typeof res.data.diffInMinutes === "number") {
          setIsAllowed(false);
          // 🕒 store in seconds for live countdown
          setTimeLeft(Math.max(Math.ceil(res.data.diffInMinutes * 60), 0));
        } else {
          setError("Meeting not found or invalid.");
        }
      } catch (err) {
        console.error("Validation error:", err);
        setError("Could not validate meeting.");
      }
    };

    validateAccess();
    const idInterval = setInterval(validateAccess, 30000);
    setIntervalId(idInterval);

    return () => clearInterval(idInterval);
  }, [id]);

  // ✅ Timer Countdown
  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) {
      setIsAllowed(true);
      return;
    }

    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsAllowed(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Conference | QuantumHash</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="h-full w-full bg-[#0d0125] min-h-screen flex flex-col">
        <AiBotSection headText="Digital conference" />

        {/* 🟡 Initial loading */}
        {isAllowed === null ? (
          <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center flex-grow">
            <h1 className="text-white text-[34px] font-bold mt-20 text-center">
              Welcome to QuantumHash Corporation
            </h1>
            <h1 className="text-white text-[28px] font-bold mt-2 text-center mb-6">
              Please wait, we are checking access...
            </h1>
            <LoaderOne />
          </div>
        ) : !isAllowed && timeLeft !== null ? (
          // 🕒 Countdown screen
          <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center flex-grow">
            <h1 className="text-white text-[34px] font-bold mt-20 text-center">
              Welcome to QuantumHash Corporation
            </h1>
            <h1 className="text-white text-[28px] font-bold mt-4 text-center">
              Your meeting will start soon
            </h1>
            <p className="text-white text-lg text-center mt-2">
              Access will open when the timer reaches zero.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="text-5xl text-blue-400 font-bold tracking-wide">
                ⏳ {formatTime(timeLeft)}
              </div>
            </div>
          </div>
        ) : (
          // ✅ Meeting iframe
          <div className="container mx-auto px-4 py-6 flex flex-col flex-grow">
            <h1 className="text-white text-[34px] font-bold mt-20 text-center">
              Welcome to QuantumHash Corporation
            </h1>
            <h1 className="text-white text-[28px] font-bold mt-2 text-center">
              If you think this is incorrect, please contact the organizer.
            </h1>
            <Link
              to={"/connect#meeting"}
              className="text-sm mt-10 text-blue-500 text-center capitalize w-fit mx-auto"
            >
              go to schedule a meeting
            </Link>

            <div className="mt-10 flex-grow relative">
              {loading && (
                <p className="text-white text-center">
                  Requesting camera and microphone access...
                </p>
              )}

              {accessGranted && (
                <iframe
                  src={`${import.meta.env.VITE_MEETING_URL}/${id}`}
                  className="w-full h-[80vh] rounded-lg border border-white"
                  title="Embedded Conference"
                  allow="camera; microphone; fullscreen"
                  allowFullScreen
                />
              )}

              {error && (
                <p className="text-red-500 text-center mt-4">{error}</p>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Meeting;
