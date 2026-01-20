"use client";
import React from 'react';
import Image from 'next/image';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { RevealOnScroll } from '../RevealOnScroll';

const projects = [
  {
    title: "AI Automation Platform",
    description: "A full-stack automation engine built with Next.js, LangChain, and FastAPI. Automates complex content workflows using multi-agent systems.",
    image: "/images/website1.png",
    tags: ["Next.js", "LangChain", "Python", "FastAPI"],
    link: "#"
  },
  {
    title: "E-Commerce Ecosystem",
    description: "Scaleable online marketplace featuring real-time inventory tracking, AI-powered product recommendations, and secure Laravel backend.",
    image: "/images/web2.png",
    tags: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
    link: "#"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "High-performance data visualization platform for SaaS metrics, built with React and D3.js, featuring real-time collaborative features.",
    image: "/images/web3.png",
    tags: ["React", "Typescript", "Node.js", "PostgreSQL"],
    link: "#"
  }
];

function ProjectsSection() {
  return (
    <section className="bg-background section-padding border-t border-white/5" id="projects-section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <p className="text-accent-cyan font-black tracking-widest uppercase text-xs mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight tracking-tight">
              Featured <span className="accent-gradient">Creations</span>
            </h2>
            <p className="text-text-secondary text-lg mt-6 font-sans">
              A selection of high-impact projects ranging from intelligent AI agents to scalable enterprise platforms.
            </p>
          </div>
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-text-primary font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 group w-full md:w-auto justify-center">
            All Projects <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="group bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:border-accent-cyan/30 transition-all duration-500 shadow-2xl block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-accent-cyan/10 group-hover:bg-transparent transition-colors z-10"></div>
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-background/80 backdrop-blur-md border border-white/10 text-accent-cyan text-[10px] font-black uppercase tracking-tighter rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-6">
                <h3 className="text-xl md:text-2xl font-black text-text-primary group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm md:text-base font-sans leading-relaxed line-clamp-3 group-hover:text-text-primary/90 transition-colors">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="flex items-center gap-2 text-text-primary font-bold hover:text-accent-cyan transition-colors group/link text-sm md:text-base">
                    View Project <BsArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <div className="flex gap-4 relative z-30">
                    {/* Prevent link propagation if GitHub icon is clicked separately */}
                    <div onClick={(e) => { e.preventDefault(); window.open("#", "_blank"); }}>
                      <BsGithub className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

