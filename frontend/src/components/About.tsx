'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16">
                <div className="flex-1">
                    <h2 className="text-5xl font-bold mb-8">About Me</h2>
                    <p className="text-secondary text-xl leading-relaxed mb-8">
                        I’m Pious, a CSE student at AIUB who actually enjoys breaking things apart to understand how they work. I like building stuff that challenges me, from Django projects to AI agents to random experiments that stretch my brain.
                    </p>
                    <p className="text-secondary text-xl leading-relaxed mb-8">
                        I’m into machine learning, data science, psychology, and anything that helps me think sharper and see patterns faster. I question everything, connect ideas quickly, and constantly push myself to grow.
                    </p>
                    <p className="text-secondary text-xl leading-relaxed mb-8">
                        My goal is simple: build skills, build impact, and build a life that’s bigger than where I started.
                    </p>

                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">




                    <div className="md:col-span-2 flex flex-col gap-4">
                        <div className="flex gap-4 items-start">
                            <div className="bg-primary text-white p-1 rounded-full mt-1">✦</div>
                            <p className="text-secondary">With 4+ years of experience, I specialize in creating intuitive, user-focused solution that solve real-world problems.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-primary text-white p-1 rounded-full mt-1">✦</div>
                            <p className="text-secondary">I thrive on working closely with clients, blending creativity with strategy to bring their vision to life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
