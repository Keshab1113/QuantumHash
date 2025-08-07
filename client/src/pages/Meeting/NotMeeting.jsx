import { Helmet } from "react-helmet";
import AiBotSection from "../../components/AiBot/AiBotSection";
import { Link } from "react-router-dom";

const NotMeeting = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Conference | QuantumHash</title>
        <link rel="canonical" href="https://quantumhash.me/conference" />
      </Helmet>

      <section className="min-h-screen w-full bg-[#0d0125]">
        <AiBotSection headText="Digital Conference" />

        <div className="container mx-auto px-4 py-10 flex flex-col justify-center items-center">
          <h1 className="text-white text-[34px] font-bold mt-10 text-center">
            Welcome to QuantumHash Corporation
          </h1>

          <p className="text-white text-[20px] font-medium mt-8 text-center max-w-3xl">
            The meeting you’re trying to join is not yet available. For security reasons, access to the conference room is only allowed <span className="font-semibold text-blue-400">5 minutes before the scheduled time.</span>
          </p>

          <p className="text-white text-[18px] font-medium mt-6 text-center max-w-3xl">
            If you believe this is a mistake, please contact the meeting organizer for more information.
          </p>

          <Link
            to="/connect#meeting"
            className="mt-10 text-blue-500 hover:underline text-base font-semibold"
          >
            Go to Schedule a Meeting
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotMeeting;
