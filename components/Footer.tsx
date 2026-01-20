"use client";
import React from 'react';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsArrowUp } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 pb-12 pt-24 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">

          {/* Brand Column */}
          <div className="lg:col-span-1 border-r border-white/5 pr-8">
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/logo_final.png"
                  alt="Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-bold text-2xl tracking-tighter text-text-primary">
                HIFZAN<span className="text-accent-cyan">.</span>
              </span>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed font-sans mb-8">
              Empowering businesses with intelligent web solutions and advanced AI automation. Let's build the future together.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: <BsGithub />, link: "https://github.com/HifzanAli70938" },
                { icon: <BsLinkedin />, link: "https://www.linkedin.com/in/hifzan-ali-3a6b10271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { icon: <BsFacebook />, link: "https://www.facebook.com/share/17c7BpzEHX/" },
                { icon: <BsInstagram />, link: "https://www.instagram.com/hifzanmoon/?utm_source=qr&igsh=azh0dTFqODMyamdy#" }
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:bg-accent-cyan hover:text-dark hover:border-accent-cyan transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-8">
            <h4 className="text-text-primary font-black uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Reviews'].map(item => (
                <li key={item}>
                  <ScrollLink
                    to={`${item.toLowerCase()}-section`}
                    smooth={true}
                    className="text-text-secondary hover:text-accent-cyan transition-colors cursor-pointer font-medium"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-text-primary font-black uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {['Next.js Apps', 'AI Automation', 'LangChain Agents', 'Backend API', 'Full-Stack Dev'].map(item => (
                <li key={item} className="text-text-secondary font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-text-primary font-black uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="text-text-secondary font-medium hover:text-text-primary transition-colors">
                hifzanmoon@gmail.com
              </li>
              <li className="text-text-secondary font-medium hover:text-text-primary transition-colors">
                +92 3176755677
              </li>
              <li className="text-text-secondary font-medium uppercase tracking-tighter">
                Layyah, Punjab, Pakistan
              </li>
            </ul>
            <ScrollLink
              to="contact-section"
              smooth={true}
              className="inline-block px-8 py-3 bg-white text-dark font-bold rounded-xl hover:bg-accent-cyan transition-all cursor-pointer"
            >
              Hire Me
            </ScrollLink>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-secondary text-sm font-sans">
            © {currentYear} <span className="text-text-primary font-bold">Developer Hifzan</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-text-secondary font-sans">
            <a href="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to top float */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute left-8 bottom-8 z-40 w-12 h-12 rounded-full bg-accent-cyan text-dark flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all shadow-accent-cyan/20 border-2 border-white/20"
        aria-label="Back to Top"
      >
        <BsArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
