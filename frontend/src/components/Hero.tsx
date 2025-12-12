'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-8 max-w-7xl mx-auto pt-24 md:pt-32 gap-12 md:gap-0">
            <div className="flex-1 z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:flex gap-8 md:gap-12 mb-8 md:mb-12 text-secondary text-sm font-medium tracking-wide"
                >
                    <div>
                        <span className="block text-foreground text-2xl font-bold mb-1">+20</span>
                        Project completed
                    </div>
                    <div>
                        <span className="block text-foreground text-2xl font-bold mb-1">+5</span>
                        Product created
                    </div>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl sm:text-[8rem] md:text-[13rem] leading-[0.85] font-bold tracking-tighter text-foreground mb-6"
                >
                    Hello
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-secondary mt-4 md:mt-8 font-light"
                >
                    — It's <span className="text-foreground font-medium">Shaikh Zarif Shahriar</span>, a developer & learner
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-[400px] md:h-[600px] w-full md:w-auto md:flex-1"
            >
                <div className="w-full h-full bg-tertiary rounded-2xl overflow-hidden relative shadow-2xl transition-all duration-700">
                    <Image
                        src="/images/zarif_final.png"
                        alt="Shaikh Zarif Shahriar"
                        fill
                        className="object-cover transition-all duration-700 scale-100 hover:scale-105"
                    />
                </div>
            </motion.div>

            {/* Mobile Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex md:hidden gap-8 w-full justify-start text-secondary text-sm font-medium tracking-wide mt-4"
            >
                <div>
                    <span className="block text-foreground text-2xl font-bold mb-1">+20</span>
                    Project completed
                </div>
                <div>
                    <span className="block text-foreground text-2xl font-bold mb-1">+5</span>
                    Product created
                </div>
            </motion.div>
        </section>
    );
}
