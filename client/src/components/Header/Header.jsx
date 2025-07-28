import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
        return (
        <header className=" bg-[linear-gradient(90deg,_#000,_#6700ff_80%,_#000)] fixed w-full lg:h-[13vh] z-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
                <div className="text-2xl font-bold  flex flex-col">
                    <img src="/logo.png" alt="logo" width={"160px"} />
                    <span className="text-xl font-normal tracking-[.18rem]">CORPORATION</span>
                </div>

                <nav className="hidden lg:flex space-x-8">
                    

                    <NavLink to="/" className={({ isActive }) =>
                            `font-medium px-3 py-2 rounded ${isActive
                                ? "bg-white/10 opacity-100 text-white rounded-3xl "
                                : "text-white hover:text-blue-600"
                            }`
                        }>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                            `font-medium px-3 py-2 rounded ${isActive
                                ? "bg-white/10 opacity-100 text-white rounded-3xl "
                                : "text-white hover:text-blue-600"
                            }`
                        }>About Us</NavLink>
                    <NavLink to="/platforms" className={({ isActive }) =>
                            `font-medium px-3 py-2 rounded ${isActive
                                ? "bg-white/10 opacity-100 text-white rounded-3xl "
                                : "text-white hover:text-blue-600"
                            }`
                        }>Platforms</NavLink>
                    <NavLink to="/investor" className={({ isActive }) =>
                            `font-medium px-3 py-2 rounded ${isActive
                                ? "bg-white/10 opacity-100 text-white rounded-3xl "
                                : "text-white hover:text-blue-600"
                            }`
                        }>Investor</NavLink>
                    <NavLink to="/career" className={({ isActive }) =>
                            `font-medium px-3 py-2 rounded ${isActive
                                ? "bg-white/10 opacity-100 text-white rounded-3xl "
                                : "text-white hover:text-blue-600"
                            }`
                        }>Career</NavLink>
                    <NavLink to="/connect" className={({ isActive }) =>
                            `font-medium px-3 py-2 rounded ${isActive
                                ? "bg-white/10 opacity-100 text-white rounded-3xl "
                                : "text-white hover:text-blue-600"
                            }`
                        }>Connect</NavLink>
                </nav>

                <button className="lg:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;