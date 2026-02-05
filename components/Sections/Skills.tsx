'use client';

import { TECH_STACK } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Skills() {
    return (
        <section id="skills" className="py-12 sm:py-24 md:py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20 md:mb-24"
                >
                    <h2 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-3.5 sm:mt-0 leading-[40px] sm:leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-600">
                        Technical Arsenal
                    </h2>
                    <p className="mt-3 sm:mt-2 md:mt-3 text-zinc-500 text-sm md:text-base">The tools I use to build worlds.</p>
                </motion.div>

                {/* Minimal Logo Grid */}
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8  gap-x-12 gap-y-16 md:gap-y-24">
                    {TECH_STACK.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.5 }}
                            className="group flex flex-col items-center justify-center gap-6 cursor-none"
                        >
                            {/* Logo Container - Clean, no box */}
                            <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">

                                {/* Glow Halo (Subtle) */}
                                <div className="absolute inset-0 bg-indigo-500/20 blur-[40px] rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Placeholder Image as requested */}
                                {/* Using a generic abstract shape as placeholder "random png" 
                                    In production, this src should be dynamic: `/logos/${skill.icon}.png` 
                                */}
                                <Image
                                    src={`/skills/${skill.icon}.svg`} // Using a generic code icon as "random png" for now
                                    alt={skill.name}
                                    fill
                                    className="object-contain drop-shadow-2xl opacity-50 group-hover:opacity-100 transition-all duration-300 grayscale-0 md:grayscale group-hover:grayscale-0"
                                />
                            </div>

                            {/* Label - Minimal Typography */}
                            <span className="text-zinc-500 text-xs md:text-sm font-medium tracking-widest uppercase opacity-40 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
