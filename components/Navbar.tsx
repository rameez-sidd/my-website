'use client';

import { motion } from 'framer-motion';
import { Home, User, Briefcase, Cpu, Film, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Home', icon: Home, href: '#' },
    { name: 'Profile', icon: User, href: '#about' },
    { name: 'Work', icon: Briefcase, href: '#projects' },
    { name: 'Skills', icon: Cpu, href: '#skills' },
    { name: 'Cinema', icon: Film, href: '#cinema' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

export default function Navbar() {
    const [active, setActive] = useState('#');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1)).filter(id => id);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActive(`#${section}`);
                        return;
                    }
                }
            }
            if (window.scrollY < 100) setActive('#');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <nav className="flex items-center gap-1 p-2 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50">
                {navItems.map((item) => {
                    const isActive = active === item.href;
                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActive(item.href)}
                            className="relative px-4 py-2 rounded-full transition-colors group"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-zinc-800 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className={`relative z-10 text-sm font-medium flex items-center gap-2 ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                                <item.icon className="w-4 h-4" />
                                <span className="hidden md:block">{item.name}</span>
                            </span>
                        </a>
                    );
                })}
            </nav>
        </motion.div>
    );
}
