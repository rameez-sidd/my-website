'use client';

import { MOVIES } from '@/lib/data';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export default function Cinema() {
    // Duplicate movies to create seamless loop
    const loopedMovies = [...MOVIES, ...MOVIES, ...MOVIES];

    return (
        <section id="cinema" className="py-12 sm:py-24 md:py-32 bg-zinc-950 relative overflow-hidden">

            {/* Cinematic Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

            <div className="max-w-[1920px] mx-auto relative z-10 overflow-hidden">
                <div className="px-6 flex md:flex-row items-end justify-between gap-12 mb-16 sm:mb-20 md:mb-24 max-w-7xl mx-auto">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-unna text-white tracking-tighter"
                        >
                            Cinema I Admire.
                        </motion.h2>
                        <p className="mt-1 sm:mt-2 md:mt-3 text-zinc-500 text-sm md:text-base">
                            Movies that respect the audience, value storytelling, and say something worth remembering.
                        </p>
                    </div>
                    <div className="hidden md:block w-32 h-[1px] bg-white/20 mb-8" />
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden mask-fade-sides">
                    <div
                        className="flex gap-8 md:gap-12 w-max pl-6 md:pl-24 animate-marquee"
                    >
                        <style jsx global>{`
                            @keyframes marquee {
                                0% { transform: translateX(0%); }
                                100% { transform: translateX(-33.33%); }
                            }
                            .animate-marquee {
                                animation: marquee 70s linear infinite;
                            }
                            /* Mobile: Pause on press (active) */
                            @media (max-width: 768px) {
                                .animate-marquee:active {
                                    animation-play-state: paused;
                                }
                            }
                            /* Desktop: Pause on hover */
                            @media (min-width: 769px) {
                                .animate-marquee:hover {
                                    animation-play-state: paused;
                                }
                            }
                        `}</style>
                        {loopedMovies.map((movie, idx) => (
                            <div
                                key={`${movie.title}-${idx}`}
                                className="group relative w-[300px] md:w-[400px] aspect-[2/3] flex-shrink-0 bg-zinc-900 overflow-hidden rounded-sm"
                            >
                                {/* Movie Poster Image */}
                                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                                    <Image
                                        src={`/cinema/${movie.poster}`}
                                        alt={movie.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                                    <Quote className="w-8 h-8 text-white/80 mb-4 opacity-50" />
                                    <p className="text-base sm:text-lg md:text-2xl font-serif italic text-zinc-200 leading-tight mb-6 drop-shadow-lg">
                                        "{movie.quote}"
                                    </p>
                                    <div>
                                        <h3 className="text-white font-bold uppercase tracking-widest drop-shadow-md">{movie.title}</h3>
                                        <span className="text-zinc-400 text-xs">{movie.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
