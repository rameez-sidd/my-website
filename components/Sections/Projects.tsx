'use client';

import { PROJECTS } from '@/lib/data';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
    return (
        <section id="projects" className="py-12 sm:py-24 md:py-32 px-6 md:px-12 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-end justify-between mb-16 sm:mb-20 md:mb-24"
                >
                    <h2 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                        Selected Works
                    </h2>
                    <span className="hidden md:block text-zinc-500 text-sm">(04)</span>
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
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-[28px] sm:text-3xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-none">
                                        <Github className="w-5 h-5 text-zinc-600 hover:text-white transition-colors" />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-none">
                                        <ArrowUpRight className="w-5 h-5 text-zinc-600 hover:text-indigo-400 transition-colors" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-zinc-400 font-light mb-8 leading-relaxed max-w-md">
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
