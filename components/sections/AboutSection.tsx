"use client";
import React from 'react';
import Image from 'next/image';
import { RevealOnScroll } from '../RevealOnScroll';

function AboutSection() {
    return (
        <section className="bg-background section-padding overflow-hidden border-t border-white/5" id="about-section">
            <div className="container mx-auto">
                <RevealOnScroll direction="left">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-accent-cyan/10 rounded-[3rem] blur-3xl group-hover:bg-accent-purple/10 transition-all duration-700"></div>
                            <div className="relative aspect-square max-w-[480px] mx-auto overflow-hidden rounded-[3rem] border-8 border-white/5 shadow-3xl">
                                <Image
                                    src="/images/hifzan_pic.jpg"
                                    fill
                                    alt="Hifzan Ali"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-[2rem] border-white/10 backdrop-blur-2xl">
                                    <p className="font-black text-xl text-text-primary mb-1">Hifzan Ali</p>
                                    <p className="text-accent-cyan text-sm font-bold uppercase tracking-widest">Full-Stack & AI Specialist</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <p className="text-accent-purple font-black tracking-widest uppercase text-xs mb-4">The Journey</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-8 leading-tight tracking-tight">
                                Passionate about <span className="accent-gradient">Code</span> & <span className="text-accent-cyan">Automation</span>
                            </h2>

                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-sans">
                                <p>
                                    I am a passionate Web App developer based in Pakistan, dedicated to building high-performance, intelligent digital experiences. My core philosophy is simple: <span className="text-text-primary font-bold">Never stop until the problem is solved.</span>
                                </p>
                                <p>
                                    With a deep focus on <span className="text-accent-cyan font-bold">Next.js</span> and <span className="text-accent-purple font-bold">AI Automation</span>, I specialize in creating seamless user interfaces while architecting robust backend systems that leverage the power of LLMs via LangChain and LangGraph.
                                </p>
                                <p>
                                    I prioritize pixel-perfect precision and clean, scalable code. Whether it's a dynamic web application or a complex automation workflow, I ensure every solution is optimized for speed and reliability.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-4">
                                <div className="px-6 py-4 bg-white/5 rounded-2xl flex items-center gap-3 border border-white/10 group hover:border-accent-cyan/50 transition-all">
                                    <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse"></div>
                                    <span className="text-text-primary font-bold text-sm uppercase tracking-wider">Ready for Hire</span>
                                </div>
                                <div className="px-6 py-4 bg-white/5 rounded-2xl flex items-center gap-3 border border-white/10 group hover:border-accent-purple/50 transition-all">
                                    <span className="text-text-primary font-bold text-sm uppercase tracking-wider">Fast Turnaround</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}

export default AboutSection;
