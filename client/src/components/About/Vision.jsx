const Vision = () => {
    return (
        <section className="h-full w-full ">
            <div className="container mx-auto px-4 py-0 flex flex-col">
                <div className="about-box py-10 flex md:flex-row flex-col">
                    <div className=" md:w-[40%] w-full">
                        <img src="/vision1.webp" alt="" className=" h-[250px] w-[250px]" loading="lazy"/>
                    </div>
                    <div className=" md:w-[60%] w-full px-6">
                        <h1 className=" text-white text-[32px] font-bold my-4 md:my-0">Our <span className="h1head1">Vision</span></h1>
                        <p className=" text-[20px] text-white">To revolutionize human potential by building intelligent systems that understand, predict, and empower — advancing education, enhancing industrial safety, and transforming operations across classrooms, oil & gas fields, construction sites, and voice-enabled technologies — for a smarter, safer, and more connected world.</p>
                    </div>
                </div>
                <div className="about-box2 py-10 flex md:flex-row-reverse flex-col-reverse">
                    <div className=" md:w-[40%] w-full  flex justify-end items-center">
                        <img src="/vision2.webp" alt="" className=" h-[250px] w-[250px]" loading="lazy"/>
                    </div>
                    <div className=" md:w-[60%] w-full px-6">
                        <h1 className=" text-white text-[32px] font-bold my-4 md:my-0">Our <span className="h1head1">Mission</span></h1>
                        <p className=" text-[20px] text-white">To pioneer agentic AI systems that collaborate, adapt, and learn — safeguarding lives in high-risk industries, revolutionizing education through intelligent tools, and redefining human-machine interaction with voice-first, context-aware solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Vision;