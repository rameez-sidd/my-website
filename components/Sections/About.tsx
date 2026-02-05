'use client';

import { PROFILE } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, MapPin, Code2 } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section id="about" ref={containerRef} className="py-12 sm:py-24 md:py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">

            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Side */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm text-indigo-500 uppercase tracking-widest mb-8 flex items-center gap-2"
                    >
                        <span className="w-8 h-[1px] bg-indigo-500/50"></span>
                        Profile
                    </motion.h2>

                    <div className="space-y-6">
                        {PROFILE.about.map((paragraph, idx) => (
                            <motion.p
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-extralight text-zinc-300 leading-relaxed"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 flex flex-wrap gap-6"
                    >
                        <div className="flex items-center gap-2 text-zinc-400 text-sm px-4 py-2 bg-zinc-900/50 rounded-full border border-zinc-800">
                            <MapPin className="w-4 h-4 text-indigo-400" /> New Delhi, IN
                        </div>
                        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-zinc-400 text-sm px-4 py-2 bg-zinc-900/50 rounded-full border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors">
                            <Mail className="w-4 h-4 text-indigo-400" /> {PROFILE.email}
                        </a>
                    </motion.div>
                </div>

                {/* Visual Stats / Highlights */}
                <motion.div style={{ y }} className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl -z-10" />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm">
                            <Code2 className="w-8 h-8 text-indigo-400 mb-4" />
                            <h3 className="text-3xl font-bold text-white mb-1">1+</h3>
                            <p className="text-zinc-500 text-sm">Years Exp.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm">
                            <Github className="w-8 h-8 text-indigo-400 mb-4" />
                            <h3 className="text-3xl font-bold text-white mb-1">20+</h3>
                            <p className="text-zinc-500 text-sm">Repositories</p>
                        </div>
                        {/* Abstract Code Block Visual */}
                        <div className="col-span-2 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 font-mono text-xs text-zinc-500 overflow-hidden relative">
                            <div className="absolute top-4 right-4 flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                            </div>
                            <p className="text-indigo-400">class <span className="text-white">Engineer</span> <span className="text-zinc-600">{`{`}</span></p>
                            <p className="pl-4">constructor() <span className="text-zinc-600">{`{`}</span></p>
                            <p className="pl-8 text-green-400/80">this.passion = "Systems";</p>
                            <p className="pl-8 text-green-400/80">this.stack = "Full-Stack";</p>
                            <p className="pl-8 text-green-400/80">this.coffee = true;</p>
                            <p className="pl-4 text-zinc-600">{`}`}</p>
                            <p className="text-zinc-600">{`}`}</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
