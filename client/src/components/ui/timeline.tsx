"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-10">
        <h1 className=" md:text-[38px] text-[28px] text-white font-bold">Our <span className="h1head1">Journey</span></h1>

      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 ">
        {data.map((item: any, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-16 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-zinc-200 border-neutral-300 dark:border-neutral-700 p-2 dark:border-zinc-800" />
              </div>
              <h3 className="h1head1 w-fit hidden md:block text-xl md:pl-20 md:text-[38px] text-[28px] font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item?.title}
              </h3>
              <h4 className="text-2xl md:text-3xl font-semibold h1head1 mb-4 w-fit">
                {item?.heading}
              </h4>
              <p className="text-white whitespace-pre-line mb-4">
                {item?.description}
              </p>
              <p className="italic text-neutral-500 dark:text-neutral-200">
                {item?.subDescription}
              </p>
              <Link to={item.link}>
                <button className="flex justify-center items-center cursor-pointer mt-6 border border-solid border-white py-2 px-4 text-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black group">
                  Visit
                  <FaArrowRight className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </button>
              </Link>

            </div>

          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
