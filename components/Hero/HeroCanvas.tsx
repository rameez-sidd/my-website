'use client';

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

const FRAME_COUNT = 48; // Total frames in /public/frames
const FRAME_PATH = '/frames/ezgif-frame-'; // Prefix
const FRAME_EXT = '.jpg'; // Extension

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [allLoaded, setAllLoaded] = useState(false);
    const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Helper to load a single image
    const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    };

    // 1. Initial Load: Load FIRST frame immediately to show something
    useEffect(() => {
        const loadFirstFrame = async () => {
            try {
                const firstFrameSrc = `${FRAME_PATH}001${FRAME_EXT}`;
                const img = await loadImage(firstFrameSrc);

                // Render immediately
                const canvas = canvasRef.current;
                const ctx = canvas?.getContext('2d');
                if (canvas && ctx) {
                    // Set dimensions match window initially
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;

                    // Draw
                    const { width, height } = canvas;
                    const scale = Math.max(width / img.width, height / img.height);
                    const x = (width / 2) - (img.width / 2) * scale;
                    const y = (height / 2) - (img.height / 2) * scale;
                    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
                }
                setFirstFrameLoaded(true);
            } catch (error) {
                console.error("Failed to load first frame", error);
            }
        };

        loadFirstFrame();
    }, []);

    // 2. Background Load: Load ALL frames for smooth playback
    useEffect(() => {
        const loadAllImages = async () => {
            const promises: Promise<HTMLImageElement>[] = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const frameNumber = i.toString().padStart(3, '0');
                promises.push(loadImage(`${FRAME_PATH}${frameNumber}${FRAME_EXT}`));
            }

            try {
                const loadedImages = await Promise.all(promises);
                setImages(loadedImages);
                setAllLoaded(true);
            } catch (error) {
                console.error("Failed to load frames sequence", error);
            }
        };

        if (firstFrameLoaded) {
            loadAllImages();
        }
    }, [firstFrameLoaded]); // Start buffering only after first frame is up

    // Draw frame helper
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const image = images[index];

        if (!canvas || !ctx || !image) return;

        const { width, height } = canvas;
        const scale = Math.max(width / image.width, height / image.height);
        const x = (width / 2) - (image.width / 2) * scale;
        const y = (height / 2) - (image.height / 2) * scale;

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
    };

    // Update on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!allLoaded || images.length === 0) return;

        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // If we have images, redraw current frame (or first frame if simplified)
                if (images.length > 0) {
                    // Redraw based on current scroll would be ideal, but for now redraw frame 0 or waiting for scroll is okay
                    // Actually, forcing a redraw of the last known frame would be better.
                    renderFrame(0);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images]);

    return (
        <div ref={containerRef} className="h-[400vh] relative z-10 bg-[#050505]">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">

                {/* Canvas - Shows as soon as First Frame is ready */}
                <canvas
                    ref={canvasRef}
                    className={clsx(
                        "block w-full h-full transition-opacity duration-1000",
                        firstFrameLoaded ? "opacity-100" : "opacity-0"
                    )}
                />

                {/* Loader Overlay - Shows until ALL frames are ready */}
                {/* We keep it visible even if first frame is loaded, until buffer is full? 
            User asked to "show first frame in beginning". 
            So we should probably show the first frame AND the loader on top until playback is ready.
        */}
                <div className={clsx(
                    "absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-700 z-20",
                    allLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                )}>
                    <div className="relative ">
                        {/* Techy Loader Ring */}
                        <div className="w-16 h-16 border border-zinc-800 rounded-full" />
                        <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin" />

                        {/* Center Dot */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
