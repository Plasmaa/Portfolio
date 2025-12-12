'use client';
import { motion } from 'framer-motion';

const skills = [
    "Python", "Django", "TypeScript", "Next.js",
    "React", "Tailwind CSS", "PostgreSQL", "Docker",
    "Git", "AI Agents", "Machine Learning", "System Design"
];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
                {/* Bio Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                        <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
                        <span className="font-medium tracking-wide text-secondary uppercase text-sm">About Me</span>
                    </div>

                    <div className="space-y-6 text-base md:text-lg text-secondary leading-relaxed">
                        <p>
                            I’m <span className="text-foreground font-medium">Pious</span>, a CSE student at AIUB who enjoys breaking things apart to understand how they work. I like building stuff that challenges me, from Django projects to AI agents to random experiments that stretch my brain.
                        </p>
                        <p>
                            I’m into machine learning, data science, psychology, and anything that helps me think sharper and see patterns faster. I question everything, connect ideas quickly, and constantly push myself to grow.
                        </p>
                        <p>
                            My goal is simple: build skills, build impact, and build a life that’s bigger than where I started.
                        </p>
                    </div>

                    <div className="mt-8 md:mt-12 flex flex-col gap-4 md:gap-6">
                        <div className="flex gap-4 items-start group">
                            <div className="bg-foreground text-white p-1.5 rounded-full mt-1 group-hover:bg-accent transition-colors duration-300 shrink-0">✦</div>
                            <p className="text-secondary group-hover:text-foreground transition-colors duration-300 text-sm md:text-base">
                                With 4+ years of experience, I specialize in creating intuitive, user-focused solutions that solve real-world problems.
                            </p>
                        </div>
                        <div className="flex gap-4 items-start group">
                            <div className="bg-foreground text-white p-1.5 rounded-full mt-1 group-hover:bg-accent transition-colors duration-300 shrink-0">✦</div>
                            <p className="text-secondary group-hover:text-foreground transition-colors duration-300 text-sm md:text-base">
                                I thrive on working closely with clients, blending creativity with strategy to bring their vision to life.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-tertiary rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground relative z-10">Skills & Technologies</h3>

                    <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                                className="px-4 py-2 md:px-5 md:py-2.5 bg-white text-secondary rounded-full text-xs md:text-sm font-medium border border-black/5 hover:border-accent hover:text-accent hover:shadow-md transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-black/5 relative z-10">
                        <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground">Current Focus</h4>
                        <p className="text-secondary mb-4 md:mb-6 text-sm md:text-base">
                            Currently exploring the intersection of <span className="text-accent font-medium">Generative AI</span> and <span className="text-accent font-medium">Full-stack Development</span> to build smarter, more adaptive applications.
                        </p>
                        <a href="#portfolio" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group text-sm md:text-base">
                            See my work <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
