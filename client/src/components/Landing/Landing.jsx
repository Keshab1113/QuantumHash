const Landing = () => {
    return (
        <section className=" bg-[linear-gradient(90deg,_#000,_#6700ff_80%,_#000)] md:h-screen h-full w-full pt-[15vh] relative overflow-hidden">
            <div className="absolute inset-0 radial-waves z-0"></div>
            <div className=" md:w-[80%] w-full mx-auto pt-20 md:pl-[20%] md:px-0 px-4 md:pb-0 pb-10">
                <h1 className=" md:text-[30px] text-[18px] text-white font-bold leading-tight mb-6 md:text-start text-center md:px-0 px-6">
                    From safety intelligence to next-gen education and voice technologies – we pioneer AI-driven transformation, turning raw data into actionable intelligence that empowers industries, educators, and innovators worldwide.
                </h1>
                <h2 className=" text-[20px] text-white font-medium leading-tight mb-8 md:text-start text-center md:px-0 px-6">
                    Driving transformation across industries by empowering educators, innovators, and frontline teams with cutting-edge, applied AI solutions.

                </h2>
                <div className=" flex gap-[30px] md:flex-row flex-col">
                    <button className=" text-white border-white border-solid border cursor-pointer py-4 px-6 rounded-full">Explore Our Platforms</button>
                    <button className=" text-white border-white border-solid border cursor-pointer py-4 px-6 rounded-full">Investor Relations</button>
                </div>
            </div>
        </section>
    );
};
export default Landing;