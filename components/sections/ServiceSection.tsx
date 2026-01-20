"use client";
import React, { useState } from 'react';
import {
  SiNextdotjs, SiReact, SiVuedotjs, SiTailwindcss, SiJavascript,
  SiHtml5, SiCss3, SiPhp, SiLaravel, SiPython, SiDjango, SiFastapi,
  SiMongodb, SiMysql, SiPostgresql,
  SiAmazonaws, SiGooglecloud, SiMicrosoftazure,
  SiDocker, SiKubernetes, SiGithubactions,
  SiTypescript, SiNodedotjs
} from 'react-icons/si';
import { GiRobotAntennas, GiArtificialIntelligence, GiGearHammer } from 'react-icons/gi';
import { RevealOnScroll } from '../RevealOnScroll';

const categories = {
  "Frontend": [
    { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <SiCss3 />, color: 'text-blue-500' },
    { name: 'Javascript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400' },
    { name: 'React.js', icon: <SiReact />, color: 'text-cyan-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
    { name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-emerald-500' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-300' },
  ],
  "Backend": [
    { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500' },
    { name: 'PHP', icon: <SiPhp />, color: 'text-indigo-400' },
    { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-500' },
    { name: 'Python', icon: <SiPython />, color: 'text-yellow-600' },
    { name: 'Django', icon: <SiDjango />, color: 'text-emerald-800' },
    { name: 'Fast API', icon: <SiFastapi />, color: 'text-emerald-400' },
  ],
  "Databases": [
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-300' },
  ],
  "Cloud & DevOps": [
    { name: 'AWS', icon: <SiAmazonaws />, color: 'text-orange-400' },
    { name: 'Azure', icon: <SiMicrosoftazure />, color: 'text-blue-500' },
    { name: 'Google Cloud', icon: <SiGooglecloud />, color: 'text-red-400' },
    { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-600' },
    { name: 'CI/CD', icon: <SiGithubactions />, color: 'text-white' },
  ],
  "AI & Automation": [
    { name: 'LangChain', icon: <GiArtificialIntelligence />, color: 'text-accent-cyan' },
    { name: 'LangGraph', icon: <GiRobotAntennas />, color: 'text-accent-purple' },
    { name: 'AI Agents', icon: <GiGearHammer />, color: 'text-accent-cyan' },
  ]
};

function ServiceSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section className="bg-background section-padding" id="services-section">
      <div className="container mx-auto">
        <RevealOnScroll width="100%" direction="down">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent-cyan font-black tracking-widest uppercase text-xs mb-4">Specialities</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
              My <span className="accent-gradient">Technical Arsenal</span>
            </h2>
            <div className="w-24 h-1 bg-accent-cyan mx-auto rounded-full mb-8"></div>
            <p className="text-text-secondary text-lg font-sans">
              A comprehensive toolkit tailored for scalable web applications and intelligent automation systems.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${activeCategory === category
                    ? 'bg-accent-cyan text-dark border-accent-cyan shadow-lg shadow-accent-cyan/25 scale-105'
                    : 'bg-white/5 text-text-secondary border-white/10 hover:border-accent-cyan/50 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 min-h-[300px]">
            {categories[activeCategory as keyof typeof categories].map((tech, index) => (
              <div
                key={index}
                className="group relative bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-500 hover:border-accent-cyan/30 hover:bg-white/[0.08] hover:-translate-y-2 overflow-hidden animate-fadeIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className={`text-5xl mb-4 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl ${tech.color}`}>
                  {tech.icon}
                </div>
                <p className="text-text-primary font-bold text-sm text-center relative z-10">{tech.name}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default ServiceSection;
