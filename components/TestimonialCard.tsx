"use client";
import React from 'react';
import { BsFillStarFill, BsQuote } from 'react-icons/bs';
import Image from 'next/image';

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating, image }) => {
    return (
        <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] relative group hover:bg-white/[0.08] hover:border-accent-cyan/30 transition-all duration-300 flex flex-col h-full">
            <div className="absolute top-6 right-8 text-white/5 group-hover:text-accent-cyan/10 transition-colors">
                <BsQuote size={60} />
            </div>

            <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(rating)].map((_, i) => (
                    <BsFillStarFill key={i} className="text-accent-cyan w-4 h-4" />
                ))}
            </div>

            <p className="text-text-secondary italic leading-relaxed mb-8 text-lg font-sans relative z-10 flex-grow group-hover:text-text-primary/90 transition-colors">
                "{content}"
            </p>

            <div className="flex items-center gap-5 border-t border-white/5 pt-6 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0 group-hover:border-accent-cyan transition-colors">
                    <Image
                        src={image}
                        alt={name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <h4 className="font-black text-text-primary text-base md:text-lg group-hover:text-accent-cyan transition-colors">{name}</h4>
                    <p className="text-accent-purple text-xs font-bold uppercase tracking-widest">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
