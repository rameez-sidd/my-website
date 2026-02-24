'use client';

import { PROJECTS } from '@/lib/data';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
    return (
        <section id="projects" className="py-12 sm:py-24 md:py-32 px-6 md:px-12 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 sm:mb-20 md:mb-24"
                >
                    <h2 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                        Selected Works
                    </h2>
                    <p className="mt-1 sm:mt-2 md:mt-3 text-zinc-500 text-sm md:text-base">A selection of applications I’ve designed, developed, and deployed.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative border-t border-zinc-800 pt-12 hover:border-indigo-500/50 transition-colors duration-500"
                        >
                            {/* Preview image */}
                            {project.image && (
                                <div className="relative mb-6 aspect-[1715/829] overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                                    <Image
                                        src={`/projects/${project.image}`}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
                                </div>
                            )}

                            <div className="flex justify-between gap-3 items-start mb-3">
                                <h3 className="text-[22px] sm:text-3xl font-bold -mt-2 text-zinc-100 group-hover:text-white transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-none shrink-0">
                                        <Github className="w-5 h-5 text-zinc-600 hover:text-white transition-colors shrink-0" />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-none shrink-0">
                                        <ArrowUpRight className="w-5 h-5 text-zinc-600 hover:text-indigo-400 transition-colors shrink-0" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-zinc-400 text-sm sm:text-base font-light mb-8 leading-relaxed max-w-md">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="text-xs font-medium text-zinc-500 border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/30">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
