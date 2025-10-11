// "use client";
// import { useScroll, useTransform, motion } from "motion/react";
// import React, { useRef, useState, useEffect } from "react";
// import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

// interface TimelineEntry {
//   title: string;
//   heading: string;
//   description: string;
//   subDescription: string;
//   link: string;
// }

// export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
//   const [timelineHeight, setTimelineHeight] = useState(0);

//   const toggleExpand = (index: number) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   // Calculate timeline height
//   useEffect(() => {
//     if (timelineRef.current) {
//       const rect = timelineRef.current.getBoundingClientRect();
//       setTimelineHeight(rect.height);
//     }
//   }, [data]);

//   // Track timeline container scroll
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 90%"],
//   });

//   // Transform scroll progress to height
//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div ref={containerRef} className="w-full font-sans md:px-10 relative">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="md:text-5xl text-3xl text-white font-bold mb-2">
//             Our{" "}
//             <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
//               Journey
//             </span>
//           </h1>
//           <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
//         </motion.div>
//       </div>

//       {/* Timeline */}
//       <div ref={timelineRef} className="relative max-w-7xl mx-auto pb-40">
//         {/* Static line container */}
//         <div
//           style={{ height: timelineHeight + "px" }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-700 to-transparent z-0"
//         >
//           {/* Animated line */}
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 z-10"
//           />
//         </div>

//         {/* Static background line */}
//         <div className="absolute md:left-8 left-8 top-0 bottom-0 w-[2px] bg-white/20 z-0 rounded-full" />

//         {data.map((item, index) => {
//           const isExpanded = expandedIndex === index;
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.4 }}
//               className="flex justify-start pt-10 md:pt-20 md:gap-10 relative z-20"
//             >
//               {/* Marker */}
//               <div className="sticky flex flex-col md:flex-row items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full z-20">
//                 <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30 z-20">
//                   <div className="h-6 w-6 rounded-full bg-white" />
//                 </div>
//                 <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//                   {item.title}
//                 </h3>
//               </div>

//               {/* Content */}
//               <div className="relative pl-20 pr-4 md:pl-4 w-full z-20">
//                 <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
//                   <h3 className="md:hidden block text-xl mb-4 font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//                     {item?.title}
//                   </h3>

//                   <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
//                     {item?.heading}
//                   </h4>

//                   {/* Subdescription always visible */}
//                   {item?.subDescription && (
//                     <p className="text-gray-400 mb-4 text-sm md:text-base">{item.subDescription}</p>
//                   )}

//                   {/* Description toggled */}
//                   {isExpanded && (
//                     <div className="text-gray-300 leading-relaxed space-y-2 text-sm md:text-base mt-2">
//                       {item?.description.split("\n\n").map((p, i) => (
//                         <p key={i}>{p}</p>
//                       ))}
//                     </div>
//                   )}

//                   {/* Toggle button */}
//                   <button
//                     onClick={() => toggleExpand(index)}
//                     className="flex justify-center items-center cursor-pointer mt-4 px-5 py-2.5 rounded-full bg-purple-500 text-white font-medium transition-all duration-300 hover:bg-purple-600 group"
//                   >
//                     {isExpanded ? "Hide Details" : "Show Details"}
//                     {isExpanded ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
//                   </button>

//                   {/* Visit link */}
//                   <motion.a
//                     href={item.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <button className="flex justify-center items-center cursor-pointer mt-4 px-5 py-2.5 rounded-full bg-white text-black font-medium transition-all duration-300 hover:bg-purple-500 hover:text-white group">
//                       <span>Visit</span>
//                       <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
//                     </button>
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface TimelineEntry {
  title: string;
  heading: string;
  description: string;
  subDescription: string;
  link: string;
  logo?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      setTimelineHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, timelineHeight]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full font-sans md:px-10 relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h1 className="md:text-5xl text-3xl text-white font-bold mb-2">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </motion.div>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative max-w-7xl mx-auto pb-40">
        {/* Line */}
        <div
          style={{ height: timelineHeight + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-700 to-transparent z-0">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 z-10"
          />
        </div>

        <div className="absolute md:left-8 left-8 top-0 bottom-0 w-[2px] bg-white/20 z-0 rounded-full" />

        {data.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="flex justify-start pt-10 md:pt-20 md:gap-10 relative z-20">
              {/* Marker + Date */}
              <div className="sticky flex flex-col md:flex-row items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full z-20 relative">
                <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30 z-20">
                  <div className="h-6 w-6 rounded-full bg-white" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent relative z-30">
                  {item.title}
                </h3>
              </div>

              {/* Faint logo BELOW date */}
              {item.logo && (
                <img
                  src={item.logo}
                  alt=""
                  className="absolute left-24 md:left-32 top-[65px] md:top-[170px] w-24 h-24 
               opacity-50 hover:opacity-85 object-contain z-10 
               transition-opacity duration-300 ease-in-out cursor-pointer"
                />
              )}

              {/* Content */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full z-20">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
                  {/* Faint Logo in Content Background */}
                  {/* {item.logo && (
                    <img
                      src={item.logo}
                      alt=""
                      className="absolute right-6 bottom-6 w-40 h-40 opacity-[0.05] object-contain select-none pointer-events-none"
                    />
                  )} */}

                  <h3 className="md:hidden block text-xl mb-4 font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {item?.title}
                  </h3>

                  {/* Heading with Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={`${item.heading} logo`}
                        className="w-9 h-9 object-contain"
                      />
                    )}
                    <h4 className="text-2xl md:text-3xl font-semibold text-white">
                      {item?.heading}
                    </h4>
                  </div>

                  {/* Sub Description */}
{item?.subDescription && (
  <p className="text-gray-300/80 mb-5 text-sm md:text-base italic tracking-wide leading-relaxed">
    {item.subDescription}
  </p>
)}

{/* Main Description */}
{isExpanded && (
  <div className="mt-4 space-y-4">
    {item?.description.split("\n\n").map((p, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        className="relative pl-5 group"
      >
        {/* Left Accent Line */}
        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover:scale-125 transition-transform duration-300"></span>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed tracking-wide">
          {p}
        </p>
      </motion.div>
    ))}
  </div>
)}


                  {/* Toggle button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex justify-center items-center cursor-pointer mt-4 px-5 py-2.5 rounded-full bg-purple-500 text-white font-medium transition-all duration-300 hover:bg-purple-600 group">
                    {isExpanded ? "Hide Details" : "Show Details"}
                    {isExpanded ? (
                      <FaChevronUp className="ml-2" />
                    ) : (
                      <FaChevronDown className="ml-2" />
                    )}
                  </button>

                  {/* Visit button */}
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <button className="flex justify-center items-center cursor-pointer mt-4 px-5 py-2.5 rounded-full bg-white text-black font-medium transition-all duration-300 hover:bg-purple-500 hover:text-white group">
                      <span>Visit</span>
                      <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
