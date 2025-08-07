import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <section className="  h-full w-full bg-[#0d0125] footer relative overflow-hidden">
            <div className="container mx-auto px-4 mt-20  h-full flex md:flex-row flex-col ">
                <img src="/Images/footer-man.webp" alt="" className=" h-[306px]" loading="lazy" />
                <div className=" h-full w-full  mt-16 border-t border-solid border-amber-50 grid md:grid-cols-1 lg:grid-cols-3 grid-col-1 pb-48 md:pb-[250px]">
                    <div className=" pt-10 px-4">
                        <img src="/Images/logo.webp" alt="" className=" w-40 mb-4" loading="lazy" />
                        <ol className="space-y-1">
                            <li>
                                <a
                                    href="https://www.google.com/maps?q=800+N+King+Street,+Suite+304,+Wilmington,+DE+19801,+USA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#580dec] hover:text-[#8c74f7f3] flex items-start gap-2"
                                >
                                    <i className="fa fa-map-marker h1head1 mt-1" aria-hidden="true"></i>
                                    800 N King Street, Suite 304, Wilmington, DE 19801, USA
                                </a>
                            </li>


                            <li>
                                <a
                                    href="mailto:admin@quantumhash.me?subject=Inquiry&body=Hello Quantumhash team,"

                                    className="text-[#580dec] hover:text-[#8c74f7f3] flex items-center gap-2"
                                >
                                    <i className="fa fa-envelope h1head1 mt-1" aria-hidden="true"></i>
                                    admin@quantumhash.me
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className=" pt-10 px-4">
                        <h1 className=" text-white text-[20px] font-semibold mb-4">Invite visitors to</h1>
                        <ol className=" space-y-1">
                            <li>
                                <Link to={"connect#contact"} className="text-[#580dec] hover:text-[#8c74f7f3]"
                                    onClick={(e) => {
                                        if (window.location.pathname === '/connect') {
                                            e.preventDefault();
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                                window.history.pushState(null, '', '#contact');
                                            }
                                        }
                                    }}>
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    Partner with us
                                </Link>
                            </li>
                            <li>
                                <Link to={"connect#meeting"} className="text-[#580dec] hover:text-[#8c74f7f3]"
                                    onClick={(e) => {
                                        if (window.location.pathname === '/connect') {
                                            e.preventDefault();
                                            const contactSection = document.getElementById('meeting');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                                window.history.pushState(null, '', '#meeting');
                                            }
                                        }
                                    }}>
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    Book a demo
                                </Link>
                            </li>
                            <li>
                                <Link to={"connect#contact"} className="text-[#580dec] hover:text-[#8c74f7f3]"
                                    onClick={(e) => {
                                        if (window.location.pathname === '/connect') {
                                            e.preventDefault();
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                                window.history.pushState(null, '', '#contact');
                                            }
                                        }
                                    }}>
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    Join as beta testers
                                </Link>
                            </li>
                            <li>
                                <Link to={"connect#meeting"} className="text-[#580dec] hover:text-[#8c74f7f3]"
                                    onClick={(e) => {
                                        if (window.location.pathname === '/connect') {
                                            e.preventDefault();
                                            const contactSection = document.getElementById('meeting');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                                window.history.pushState(null, '', '#meeting');
                                            }
                                        }
                                    }}>
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    Explore custom AI solutions
                                </Link>
                            </li>
                        </ol>
                    </div>
                    <div className=" pt-10 px-4">
                        <h1 className=" text-white text-[20px] font-semibold mb-4">Organization</h1>
                        <ol className=" space-y-1">
                            <li>
                                <Link to={"https://qhashai.com/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    QhashAi
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://quantumedu.in/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    QuantumEdu
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://asesystem.com/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    ASESystem
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className=" w-full md:rounded-t-full rounded-t-4xl footer-inner absolute px-10 flex justify-center items-center">
                <img src="/Images/footer.png" alt="" className=" rotate-180 absolute bottom-0 md:left-10" />
                <p className=" text-center text-white">Copyright © 2025 QuantumHash. All rights reserved</p>
            </div>
        </section>
    )
}
export default Footer