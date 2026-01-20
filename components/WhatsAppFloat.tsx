"use client";
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppFloat = () => {
    return (
        <a
            href="https://wa.me/923176755677"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
            <BsWhatsapp size={28} className="text-white relative z-10" />
        </a>
    );
};

export default WhatsAppFloat;
