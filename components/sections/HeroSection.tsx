"use client";
import React from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { RevealOnScroll } from '../RevealOnScroll';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden" id="hero-section">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto section-padding relative z-10 pt-32 pb-20">
        <RevealOnScroll direction="right">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-accent-cyan text-sm font-bold mb-6 backdrop-blur-sm border border-white/10 tracking-widest uppercase">
                Full-Stack & AI Automation Expert
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary leading-[1.1] mb-8 tracking-tight">
                Building the Future with <span className="accent-gradient">Intelligence</span> & Efficiency
              </h1>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0 font-sans">
                Specializing in Next.js applications and cutting-edge AI automation using LangChain and LangGraph. I transform complex ideas into performant, automated digital solutions.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <ScrollLink
                  to="projects-section"
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="px-10 py-4 bg-accent-cyan text-dark font-black rounded-2xl shadow-2xl shadow-accent-cyan/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  View My Portfolio
                </ScrollLink>
                <ScrollLink
                  to="contact-section"
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="px-10 py-4 border border-white/20 text-text-primary font-bold rounded-2xl hover:bg-white/5 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  Let's Talk
                </ScrollLink>
              </div>

              <div className="mt-16 flex items-center justify-center lg:justify-start gap-12 border-t border-white/10 pt-10">
                <div>
                  <p className="text-3xl font-black text-text-primary">5+</p>
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-tighter">Years of Craft</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <p className="text-3xl font-black text-text-primary">100+</p>
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-tighter">Global Projects</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center items-center">
              <div className="relative w-full max-w-[450px] aspect-square group">
                <div className="absolute -inset-10 bg-gradient-to-tr from-accent-cyan to-accent-purple rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl transform group-hover:scale-[1.02] transition-transform duration-700">
                  <Image
                    src="/images/hifzan_pic.jpg"
                    fill
                    alt="Hifzan Ali"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default HeroSection;
