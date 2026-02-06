'use client';

import { PROFILE } from '@/lib/data';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Instagram, Heart } from 'lucide-react';

const icons: Record<string, any> = {
    "github": Github,
    "linkedin": Linkedin,
    "instagram": Instagram
};

export default function Contact() {
    return (
        <section id="contact" className="py-32 md:py-48 bg-[#050505] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

            {/* Glow Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl relative z-10"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Available for new opportunities
                </div>

                <h2 className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] sm:leading-none mt-2 sm:mt-0 mb-8">
                    Let's build something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">extraordinary.</span>
                </h2>

                <p className="text-zinc-400 text-sm sm:text-base md:text-[17px] lg:text-lg md:text-xl mb-12 max-w-xl mx-auto">
                    Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new systems.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a
                        href={`mailto:${PROFILE.email}`}
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300"
                    >
                        <Mail className="w-5 h-5" />
                        Say Hello
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex gap-2">
                        {Object.entries(PROFILE.social).map(([platform, url]) => {
                            const Icon = icons[platform] || ArrowRight;
                            return (
                                <a
                                    key={platform}
                                    href={url as string}
                                    target="_blank"
                                    className="p-4 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <footer className="mt-32 text-zinc-600 text-xs">
                    &copy; {new Date().getFullYear()} {PROFILE.name}. <br className="md:hidden" /> Engineered with <Heart className='w-3 -mt-1 h-3 inline' />
                </footer>
            </motion.div>
        </section>
    );
}


