import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Platforms', path: '/platforms' },
        { name: 'Investor', path: '/investor' },
        { name: 'Career', path: '/career' },
        { name: 'Connect', path: '/connect' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 rounded-b-4xl transition-all duration-100 ${scrolled ? 'bg-[linear-gradient(90deg,_#000,_#6700ff_80%,_#000)]' : ''
                }`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white lg:h-[13vh]">
                <Link to={"/"} className="text-2xl font-bold flex flex-col">
                    <img src="/logo.webp" alt="logo" width="150px" loading="lazy"/>
                    <span className="text-base font-normal tracking-[.18rem]">CORPORATION</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex space-x-8">
                    {navItems.map(({ name, path }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `font-medium px-3 py-2 rounded ${isActive
                                    ? "bg-white/10 opacity-100 text-white rounded-3xl"
                                    : "text-white hover:text-blue-600"
                                }`
                            }
                        >
                            {name}
                        </NavLink>
                    ))}
                </nav>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-white z-50 cursor-pointer"
                >
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white w-[100%] text-black flex flex-col items-center gap-6 py-6 transition-all duration-300 container mx-auto rounded-b-4xl">
                    {navItems.map(({ name, path }) => (
                        <NavLink
                            key={path}
                            to={path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `font-medium text-lg ${isActive
                                    ? "underline text-black"
                                    : "text-black hover:text-blue-500"
                                }`
                            }
                        >
                            {name}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
