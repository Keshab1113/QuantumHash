import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <section className="  h-full w-full bg-[#0d0125] footer relative overflow-hidden">
            <div className="container mx-auto px-4 mt-20  h-full flex md:flex-row flex-col ">
                <img src="/footer-man.png" alt="" className=" h-[306px]" />
                <div className=" h-full w-full  mt-16 border-t border-solid border-amber-50 grid md:grid-cols-1 lg:grid-cols-3 grid-col-1 pb-48 md:pb-[250px]">
                    <div className=" pt-10 px-4">
                        <img src="/logo.png" alt="" className=" w-40 mb-4" />
                        <ol className="space-y-1">
                            <li>
                                <Link to="/" className="text-[#580dec] hover:text-[#8c74f7f3] flex items-start gap-2" >
                                    <i className="fa fa-map-marker h1head1 mt-1" aria-hidden="true"></i>
                                    800 N King Street, Suite 304, Wilmington, DE 19801, USA
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/" className="text-[#580dec] hover:text-[#8c74f7f3] flex items-center gap-2">
                                    <i className="fa fa-envelope h1head1 mt-1" aria-hidden="true"></i>
                                    admin@quantumhash.me
                                </Link>
                            </li>
                        </ol>

                    </div>
                    <div className=" pt-10 px-4">
                        <h1 className=" text-white text-[20px] font-semibold mb-4">Invite visitors to</h1>
                        <ol className=" space-y-1">
                            <li>
                                <Link to={"https://quantumhash.me/pages/contact#contactcontact"} className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    Partner with you
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://quantumhash.me/pages/contact#meeting-wrapper"} className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    Book a demo
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://quantumhash.me/pages/contact#contactcontact"} className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    Join as beta testers
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://quantumhash.me/pages/contact#meeting-wrapper"} className="text-[#580dec] hover:text-[#8c74f7f3]">
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
                                <Link to={"https://qhashai.com/"} className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    QhashAi
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://artlabss.com/"} className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    Artlabss
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://quantumedu.in/"} className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    QuantumEdu
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://asesystem.com/"} className="text-[#580dec] hover:text-[#8c74f7f3]">
                                    <FontAwesomeIcon icon={faSquare} className=" bg-[linear-gradient(90deg,_#ff8d20,_#6700ff_80%)] rotate-45 mr-4 text-transparent max-h-3 max-w-3 overflow-hidden rounded-[1px]" />
                                    ASESystem
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className=" w-full md:rounded-t-full rounded-t-4xl footer-inner absolute px-10 flex justify-center items-center">
                <img src="/footer.png" alt="" className=" rotate-180 absolute bottom-0 md:left-10" />
                <p className=" text-center text-white">Copyright © 2025 QuantumHash. All rights reserved</p>
            </div>
        </section>
    )
}
export default Footer