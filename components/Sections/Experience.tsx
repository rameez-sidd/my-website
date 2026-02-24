
'use client';

import { EXPERIENCE, EDUCATION } from '@/lib/data';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="py-12 sm:py-24 md:py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden"
        >
            {/* Background Accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 left-0 w-[420px] h-[420px] bg-indigo-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-[-120px] w-[480px] h-[480px] bg-cyan-500/5 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 sm:mb-20 md:mb-24"
                >
                    <div>
                        <h2 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
                            Experience &amp; Education
                        </h2>
                        <p className="mt-1 sm:mt-2 md:mt-3 text-zinc-500 text-sm md:text-base max-w-xl">
                            A quick view of where I&apos;ve been learning, building, and shipping.
                        </p>
                    </div>

                    {/* Legend / Pills */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 border border-zinc-800 px-2 py-1 text-xs text-zinc-400 w-fit">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-900/80">
                            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Industry</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-900/40">
                            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Academia</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 md:gap-16">
                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="flex items-center gap-2 mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
                            <span className="w-8 h-[1px] bg-indigo-500/60" />
                            <span>Experience</span>
                        </div>

                        <div className="relative pl-4 sm:pl-6">
                            {/* Vertical Line */}
                            <div className="absolute left-1 sm:left-2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-zinc-800 to-transparent" />

                            <div className="space-y-6">
                                {EXPERIENCE.map((company, companyIdx) => (
                                    <motion.article
                                        key={company.company}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: companyIdx * 0.1 }}
                                        className="relative group rounded-2xl border border-zinc-800/80 bg-zinc-950/40 hover:border-indigo-500/60 hover:bg-zinc-900/60 transition-colors duration-300 overflow-hidden"
                                    >
                                        {/* Node */}
                                        <div className="absolute -left-[22px] sm:-left-[26px] top-6 flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700">
                                                <div className="w-3 h-3 rounded-full bg-indigo-500/80 group-hover:scale-125 group-hover:bg-indigo-400 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        <div className="p-5 sm:p-6 md:p-7">
                                            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 border border-white/5 flex items-center justify-center text-sm font-semibold text-white/90 overflow-hidden">
                                                        <Image src={company.logo} alt={company.company} width={40} height={40} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base sm:text-lg font-semibold text-white">
                                                            {company.company}
                                                        </h3>
                                                        <p className="text-xs sm:text-[13px] text-zinc-500">
                                                            {company.location}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-left flex gap-x-2 xs3:flex-col! gap-y-1">
                                                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                                        TOTAL
                                                    </p>
                                                    <p className="text-xs text-zinc-200">
                                                        {company.totalDuration}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                {company.roles.map((role, roleIdx) => (
                                                    <div
                                                        key={`${company.company}-${roleIdx}-${role.title}`}
                                                        className="group/role rounded-xl border border-zinc-800/60 bg-zinc-950/60 hover:border-indigo-500/60 hover:bg-zinc-900/80 transition-colors duration-300 p-4"
                                                    >
                                                        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-1">
                                                            <p className="text-sm sm:text-[15px] font-medium text-zinc-100">
                                                                {role.title}
                                                            </p>
                                                            <span className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-indigo-300/80 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-2 py-0.5 pt-1">
                                                                {role.type}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs mt-4 xs2:mt-0! text-zinc-400">
                                                            {role.period} • <span className="text-zinc-300">{role.duration}</span>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="flex items-center gap-2 mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
                            <span className="w-8 h-[1px] bg-cyan-400/60" />
                            <span>Education</span>
                        </div>

                        <div className="space-y-5">
                            {EDUCATION.map((edu, idx) => (
                                <motion.article
                                    key={edu.degree + edu.period}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * idx }}
                                    className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/40 hover:border-cyan-400/60 hover:bg-zinc-900/60 transition-colors duration-300 overflow-hidden"
                                >
                                    <div className="p-5 sm:p-6 md:p-7">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <div>
                                                <h3 className="text-base sm:text-lg font-semibold text-white">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-xs sm:text-[13px] text-zinc-400 mt-1">
                                                    {edu.shortName}
                                                </p>
                                            </div>
                                            <GraduationCap className="w-6 h-6 shrink-0 text-cyan-400/80 group-hover:text-cyan-300 transition-colors" />
                                        </div>

                                        <p className="text-xs text-zinc-400 mb-3">
                                            {edu.period}
                                        </p>

                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <p className="text-xs text-zinc-500 max-w-xs">
                                                {edu.institution}
                                            </p>
                                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-300">
                                                <span>{edu.gradeLabel}</span>
                                                <span className="text-white font-semibold tracking-normal">
                                                    {edu.gradeValue}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

