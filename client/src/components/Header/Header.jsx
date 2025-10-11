 

import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Platforms', path: '/platforms' },
    { name: 'Investor', path: '/investor' },
    { name: 'Career', path: '/career' },
    { name: 'Connect', path: '/connect' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? 'bg-[rgba(13,1,37,0.6)] border-b border-white/10 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white lg:h-[5rem]">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex flex-col items-start">
          <img src="/Images/logo.webp" alt="logo" width="150" loading="lazy" />
          <span className="text-base font-normal tracking-[.18rem]">
            CORPORATION
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `font-medium px-3 py-2 rounded transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white rounded-3xl'
                    : 'text-white hover:text-[#8a7fff]'
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-xl text-black flex flex-col items-center transition-all duration-300 container mx-auto rounded-b-3xl shadow-lg border-t border-black/10">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-medium text-lg border-b border-black/20 px-4 py-6 w-full text-center transition ${
                  isActive
                    ? 'bg-black/10 text-black font-semibold'
                    : 'hover:text-[#6700ff]'
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
