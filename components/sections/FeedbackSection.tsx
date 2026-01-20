"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight, BsStarFill } from "react-icons/bs";

const testimonials = [
  { id: 1, name: "James Wilson", role: "CTO, TechFlow", content: "AI automation reduced our response time by 70%. Incredible execution.", rating: 5, image: "/images/1.jpg" },
  { id: 2, name: "Sarah Jenkins", role: "Product Manager", content: "Pixel-perfect UI and blazing-fast performance. Highly recommended.", rating: 5, image: "/images/2.jpg" },
  { id: 3, name: "Robert Miller", role: "Founder", content: "Delivered complex backend systems ahead of schedule with clean code.", rating: 5, image: "/images/3.jpg" },
  { id: 4, name: "Emily Thompson", role: "Marketing Director", content: "Understands business + AI deeply. The automation pipeline is brilliant.", rating: 5, image: "/images/4.jpg" },
  { id: 5, name: "Michael Chen", role: "Lead Developer", content: "The code quality is outstanding. Easy to maintain and scale.", rating: 5, image: "/images/5.jpg" },
  { id: 6, name: "Lisa Wong", role: "UX Designer", content: "A joy to work with. The animations add so much life to the project.", rating: 5, image: "/images/6.jpg" },
  { id: 7, name: "David Stark", role: "CEO, StartUp", content: "Transformed our MVP into a full-fledged product in record time.", rating: 5, image: "/images/7.jpg" },
  { id: 8, name: "Jessica Lee", role: "Operations Head", content: "The automated workflows saved us 20 hours a week. Game changer.", rating: 5, image: "/images/8.jpg" },
  { id: 9, name: "Daniel Kim", role: "Tech Lead", content: "Deep understanding of Full Stack. Solved our bottleneck instantly.", rating: 5, image: "/images/9.jpg" },
  { id: 10, name: "Sophia Davis", role: "Creative Director", content: "Beautiful aesthetics matched with powerful functionality.", rating: 5, image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { id: 11, name: "Ryan Connor", role: "SaaS Founder", content: "Scalable architecture that handled our traffic spike effortlessly.", rating: 5, image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { id: 12, name: "Emma Wilson", role: "Brand Manager", content: "Professional, timely, and incredibly talented. Will hire again.", rating: 5, image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" },
];

const ORBITS_CONFIG = [
  { radius: 105, radiusMobile: 70, speed: 25, direction: 1 },
  { radius: 165, radiusMobile: 110, speed: 35, direction: -1 },
  { radius: 225, radiusMobile: 150, speed: 45, direction: 1 },
];

const OrbitRing = ({ orbit, ringIndex, active, setActive, rotateX, rotateY }: any) => {
  const rotation = useMotionValue(0);
  const inverseRotation = useTransform(rotation, (v: number) => -v);
  const inverseRotateX = useTransform(rotateX, (v: number) => -v);
  const inverseRotateY = useTransform(rotateY, (v: number) => -v);
  const items = testimonials.slice(ringIndex * 4, (ringIndex + 1) * 4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const controls = animate(rotation, [0, orbit.direction * 360], {
      duration: orbit.speed,
      repeat: Infinity,
      ease: "linear",
    });
    return controls.stop;
  }, [orbit.direction, orbit.speed, rotation]);

  const currentRadius = isMobile ? orbit.radiusMobile : orbit.radius;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width: currentRadius * 2,
        height: currentRadius * 2,
        x: "-50%",
        y: "-50%",
        rotateZ: rotation,
        rotateX,
        rotateY,
        pointerEvents: "none",
      }}
    >
      {items.map((t, i) => {
        const angle = (360 / items.length) * i;
        const globalIndex = ringIndex * 4 + i;
        const isActive = testimonials[active].id === t.id;

        return (
          <div
            key={t.id}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translateY(${currentRadius}px)`,
              pointerEvents: "auto",
            }}
          >
            <motion.div
              style={{
                rotateZ: inverseRotation,
                rotateX: inverseRotateX,
                rotateY: inverseRotateY
              }}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(globalIndex);
                }}
                className={`cursor-pointer rounded-full overflow-hidden w-full h-full border-2 transition-colors duration-300 relative ${isActive ? "border-accent-cyan shadow-[0_0_15px_#00FFFF]" : "border-white/10"
                  }`}
              >
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default function FeedbackSection() {
  const [active, setActive] = useState(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    rotateY.set((x / rect.width) * 15);
    rotateX.set(-(y / rect.height) * 15);
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, { duration: 0.5 });
    animate(rotateY, 0, { duration: 0.5 });
  };

  return (
    <section id="feedback-section" className="bg-background py-16 md:py-24 px-4 md:px-6 lg:px-8 overflow-hidden relative">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan bg-[length:200%_auto] animate-gradient">
                Client Testimonials
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed font-light max-w-2xl mx-auto"
            >
              Discover how we&apos;ve transformed businesses with innovative AI automation and full-stack development.
              <span className="block mt-2 text-accent-cyan/80 font-medium">Real stories, real impact.</span>
            </motion.p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-4">
          {/* ORBIT SYSTEM */}
          <div
            className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] flex-shrink-0 flex items-center justify-center cursor-default"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* CENTER NUCLEUS */}
            <motion.div
              className="relative z-30 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border-2 border-accent-cyan shadow-[0_0_30px_#00ffff80] overflow-hidden"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Image
                src={testimonials[active].image}
                alt={testimonials[active].name}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* RINGS */}
            {ORBITS_CONFIG.map((orbit, ringIndex) => (
              <OrbitRing
                key={ringIndex}
                orbit={orbit}
                ringIndex={ringIndex}
                active={active}
                setActive={setActive}
                rotateX={rotateX}
                rotateY={rotateY}
              />
            ))}
          </div>

          {/* TESTIMONIAL CARD */}
          <div className="max-w-xl w-full relative z-10 px-4 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative max-w-lg"
              >
                <div className="absolute top-4 right-4 text-accent-cyan/15 pointer-events-none">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V5C3.017 3.89543 3.91243 3 5.017 3H8.017C10.2261 3 12.017 4.79086 12.017 7V15C12.017 18.3137 9.33071 21 6.017 21H3.017Z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <BsStarFill key={i} className="text-accent-cyan text-sm" />
                  ))}
                </div>

                <p className="text-lg md:text-xl italic mb-8 text-white/90 leading-relaxed font-serif">
                  “{testimonials[active].content}”
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonials[active].name}</h4>
                    <p className="text-xs uppercase tracking-widest text-accent-purple">{testimonials[active].role}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setActive(a => a > 0 ? a - 1 : testimonials.length - 1)}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-cyan transition-all flex items-center justify-center text-white hover:text-black"
                    >
                      <BsArrowLeft size={18} />
                    </button>
                    <button
                      onClick={() => setActive(a => a < testimonials.length - 1 ? a + 1 : 0)}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-cyan transition-all flex items-center justify-center text-white hover:text-black"
                    >
                      <BsArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div> {/* End of Flex Layout */}
      </div> {/* End of Container */}
    </section>
  );
}
