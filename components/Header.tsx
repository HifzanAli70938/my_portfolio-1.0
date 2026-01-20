"use client";
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll, scroller, Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const navItems = [
    { name: 'Home', to: 'hero-section' },
    { name: 'About', to: 'about-section' },
    { name: 'Services', to: 'services-section' },
    { name: 'Projects', to: 'projects-section' },
    { name: 'Reviews', to: 'feedback-section' },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${isSticky ? 'glass shadow-2xl py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <ScrollLink
          to="contact-section"
          smooth="easeInOutQuart"
          duration={2000}
          className="cursor-pointer flex items-center gap-3 group hover:scale-110 active:scale-95 transition-transform duration-300"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 group-hover:border-accent-cyan/50 transition-colors">
            <Image
              src="/logo_final.png"
              alt="Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="font-bold text-xl tracking-tighter text-text-primary group-hover:accent-gradient transition-all">
            HIFZAN<span className="text-accent-cyan">.</span>
          </span>
        </ScrollLink>

        <div className="flex items-center">
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth="easeInOutQuart"
                  offset={-80}
                  duration={2000}
                  activeClass="!text-accent-cyan !bg-white/5"
                  className="px-4 py-2 rounded-xl text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all cursor-pointer block hover:scale-110 active:scale-95"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
            <li className="ml-4">
              <ScrollLink
                to="contact-section"
                smooth="easeInOutQuart"
                offset={-80}
                duration={2000}
                className="px-6 py-2.5 rounded-xl text-sm font-bold bg-accent-cyan text-dark hover:bg-accent-purple hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-cyan/20 cursor-pointer block"
              >
                Hire Me
              </ScrollLink>
            </li>
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className={`p-2 transition-colors rounded-xl bg-white/5 text-text-primary border border-white/10`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showSidebar ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[60] transition-transform duration-500 transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity" onClick={toggleSidebar}></div>
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-background border-l border-white/5 shadow-2xl p-10 transform transition-transform duration-500">
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-2xl accent-gradient"></span>
            <button onClick={toggleSidebar} className="p-2 text-text-secondary hover:text-accent-cyan transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth="easeInOutQuart"
                  offset={-80}
                  duration={2000}
                  activeClass="!text-accent-cyan bg-white/5"
                  onClick={toggleSidebar}
                  className="group flex items-center justify-between p-4 rounded-2xl text-lg font-semibold text-text-secondary hover:bg-white/5 hover:text-text-primary transition-all duration-300 w-full text-left"
                >
                  {item.name}
                  <svg className="h-5 w-5 opacity-0 group-hover:opacity-100 text-accent-cyan transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </ScrollLink>
              </li>
            ))}
            <li className="pt-8">
              <ScrollLink
                to="contact-section"
                smooth="easeInOutQuart"
                offset={-80}
                duration={2000}
                onClick={toggleSidebar}
                className="w-full py-4 rounded-2xl bg-accent-cyan text-dark font-bold text-center shadow-lg shadow-accent-cyan/20 block"
              >
                Hire Me
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
