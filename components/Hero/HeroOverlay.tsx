'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';

// Helper to create fade in/out transforms
const useScrollOpacity = (
    scrollYProgress: MotionValue<number>,
    start: number,
    peak: number,
    end: number
) => {
    return useTransform(
        scrollYProgress,
        [start, peak - 0.05, peak + 0.05, end],
        [0, 1, 1, 0]
    );
};

export default function HeroOverlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const opacity2 = useScrollOpacity(scrollYProgress, 0.2, 0.35, 0.45);
    const opacity3 = useScrollOpacity(scrollYProgress, 0.45, 0.55, 0.65);
    const opacity4 = useScrollOpacity(scrollYProgress, 0.65, 0.75, 0.85); // Adjusted to not overlap too much with end
    const opacityEnd = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

    return (
        <div ref={containerRef} className="absolute inset-0 h-[400vh] pointer-events-none z-20 ">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">

                {/* Stage 1: Intro */}
                <motion.div style={{ opacity: opacity1 }} className="absolute text-center px-2 ">
                    <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white ">
                        Rameez <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Siddiqui</span>
                    </h1>
                    <p className="text-xl lg:text-3xl text-zinc-300 font-light">
                        Software Engineer
                    </p>
                </motion.div>





                {/* Stage 2: Foundations */}
                <motion.div style={{ opacity: opacity2 }} className="absolute text-center px-2">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        Strong <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Foundations</span>.
                    </h2>
                    <p className="mt-4 text-xl sm:text-[23px] md:text-[27px] lg:text-3xl text-zinc-300 font-light">
                        Clean Code.
                    </p>
                </motion.div>

                {/* Stage 3: Full Stack */}
                <motion.div style={{ opacity: opacity3 }} className="absolute text-center px-2">
                    <h2 className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-bold text-white">
                        Frontend. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Backend</span>.
                    </h2>
                    <p className="mt-4 text-xl sm:text-[23px] md:text-[27px] lg:text-3xl text-zinc-300 font-light">
                        Systems that scale.
                    </p>
                </motion.div>

                {/* Stage 4: Real Products */}
                <motion.div style={{ opacity: opacity4 }} className="absolute text-center px-2">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-bold text-white">
                        Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Products</span>.
                    </h2>
                    <p className="mt-4 text-xl sm:text-[23px] md:text-[27px] lg:text-3xl text-zinc-300 font-light">
                        Real Users.
                    </p>
                </motion.div>

                {/* Stage 5: CTA */}
                <motion.div style={{ opacity: opacityEnd }} className="absolute text-center w-full">
                    <p className="text-zinc-300 text-xl sm:text-2xl md:text-3xl animate-bounce">Scroll to explore my work ↓</p>
                </motion.div>

            </div>
        </div>
    );
}
