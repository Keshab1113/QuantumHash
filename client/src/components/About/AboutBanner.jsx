const AboutBanner = ({title}) => {
    return (
        <section className="h-[60vh] w-full bg-[#d7cfe6] pt-[15vh]" style={{
            backgroundImage: "url('/aboutBanner.png')",
            backgroundSize: 'cover'
        }}>
            <div className="container mx-auto px-4 py-6 flex justify-center items-center">
                <div className=" flex md:flex-row flex-col justify-center items-center md:gap-6">
                    <img src="/AI-Images/bot.png" alt="" className="h-30 bot-head" />
                    <h1 className=" text-center text-[34px] font-bold text-white">{title}</h1>
                </div>
            </div>
        </section>
    )
}
export default AboutBanner;