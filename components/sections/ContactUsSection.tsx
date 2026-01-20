"use client";
import React, { useState } from 'react';
import { BsEnvelopeFill, BsGeoAltFill, BsArrowRight, BsTelephoneFill } from 'react-icons/bs';
import { RevealOnScroll } from '../RevealOnScroll';

import toast from 'react-hot-toast';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || 'Failed to send message');
      }

      toast.success('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error("Contact Form Error:", error);
      toast.error(`Error: ${error.message || 'Something went wrong'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-background section-padding border-t border-white/5" id="contact-section">
      <div className="container mx-auto">
        <RevealOnScroll width="100%">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <p className="text-accent-cyan font-black tracking-widest uppercase text-xs mb-4">Let&apos;s Connect</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-8 leading-tight tracking-tight">
                  Have a project in <span className="accent-gradient">mind?</span>
                </h2>
                <p className="text-text-secondary text-lg font-sans max-w-lg">
                  I&apos;m available for full-time roles, freelance projects, and automation consulting. Let&apos;s build something exceptional together.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all">
                    <BsEnvelopeFill size={24} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-1">Email Me</p>
                    <p className="text-text-primary font-bold text-lg">hifzanmoon@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all">
                    <BsTelephoneFill size={24} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-text-primary font-bold text-lg">+92 3176755677</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple/10 group-hover:border-accent-purple/30 transition-all">
                    <BsGeoAltFill size={24} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-text-primary font-bold text-lg uppercase tracking-tight">Layyah, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl h-[300px] relative group">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110190.222237839!2d70.85042251500473!3d30.932845618451004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393ad7187c3a0d5d%3A0xe54508494b5f884a!2zSmFtYW4gU2hhaCwgTGF5eWFoLCBQdW5qYWIsIFBha2lzdGFu!5e0!3m2!1sen!2s!4v1705481234567!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 bg-accent-cyan/5 pointer-events-none group-hover:bg-transparent transition-all"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-text-secondary text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text-primary focus:border-accent-cyan/50 focus:bg-white/10 outline-none transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-text-secondary text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text-primary focus:border-accent-cyan/50 focus:bg-white/10 outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-text-secondary text-xs font-bold uppercase tracking-widest ml-1">Project Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Website Automation"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text-primary focus:border-accent-cyan/50 focus:bg-white/10 outline-none transition-all font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-text-secondary text-xs font-bold uppercase tracking-widest ml-1">Message Details</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project dreams..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-text-primary focus:border-accent-cyan/50 focus:bg-white/10 outline-none transition-all font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-accent-cyan text-dark font-black rounded-2xl shadow-xl shadow-accent-cyan/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <BsArrowRight size={20} className={isSubmitting ? 'hidden' : 'block'} />
                </button>
              </form>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ContactUsSection;
