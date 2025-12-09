'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300">
            <div className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
                <div className="text-2xl font-bold tracking-tight z-50 relative">
                    <Link href="/" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Logo</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-secondary font-medium">
                    <Link href="#about" className="hover:text-foreground hover:scale-105 transition-all">About Me</Link>
                    <Link href="#portfolio" className="hover:text-foreground hover:scale-105 transition-all">Portfolio</Link>
                    <Link href="#blog" className="hover:text-foreground hover:scale-105 transition-all">Blog</Link>
                </div>

                <div className="hidden md:block">
                    <Link href="mailto:zarifpious@gmail.com" className="flex items-center gap-2 bg-foreground text-white px-5 py-2.5 rounded-full font-medium hover:bg-accent transition-all hover:shadow-lg hover:-translate-y-0.5">
                        Book A Call ↗
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-foreground block transition-transform origin-center"
                    ></motion.span>
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-0.5 bg-foreground block transition-opacity"
                    ></motion.span>
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-foreground block transition-transform origin-center"
                    ></motion.span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden h-screen"
                    >
                        <Link href="#about" onClick={() => setIsOpen(false)} className="text-3xl font-bold hover:text-accent transition-colors">About Me</Link>
                        <Link href="#portfolio" onClick={() => setIsOpen(false)} className="text-3xl font-bold hover:text-accent transition-colors">Portfolio</Link>
                        <Link href="#blog" onClick={() => setIsOpen(false)} className="text-3xl font-bold hover:text-accent transition-colors">Blog</Link>
                        <Link href="mailto:zarifpious@gmail.com" onClick={() => setIsOpen(false)} className="text-xl font-medium text-accent mt-8 border border-accent px-6 py-3 rounded-full">
                            Book A Call ↗
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
