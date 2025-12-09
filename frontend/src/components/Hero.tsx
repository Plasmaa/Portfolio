'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-8 max-w-7xl mx-auto">
            <div className="flex-1">
                <div className="flex gap-12 mb-8 text-secondary text-sm">
                    <div>
                        <span className="block text-primary text-xl font-bold">+200</span>
                        Project completed
                    </div>
                    <div>
                        <span className="block text-primary text-xl font-bold">+50</span>
                        Startup raised
                    </div>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[12rem] leading-none font-bold tracking-tighter"
                >
                    Hello
                </motion.h1>
                <p className="text-xl text-secondary mt-4">— It's Shaikh Zarif Shahriar, a developer & learner</p>
            </div>
            <div className="flex-1 relative h-[600px] w-full">
                <div className="w-full h-full bg-tertiary rounded-lg overflow-hidden relative">
                    <Image
                        src="/images/pious_2.jpg"
                        alt="Shaikh Zarif Shahriar"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
