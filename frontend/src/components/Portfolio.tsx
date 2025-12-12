'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/lib/api';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string;
}

export default function Portfolio() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    return (
        <section id="portfolio" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
                        <span className="font-medium tracking-wide text-secondary uppercase text-sm">Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">Latest Works</h2>
                </div>
                <a href="#" className="text-foreground font-medium hover:text-accent transition-colors flex items-center gap-2 group text-sm md:text-base">
                    View All <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {projects.map((project) => (
                    <Link href={project.link || '#'} key={project.id} target="_blank" className="group cursor-pointer block">
                        <div className="relative h-80 w-full mb-6 rounded-2xl overflow-hidden bg-tertiary shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                    unoptimized
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-secondary">No Image</div>
                            )}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                                <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl">
                                    <span className="text-2xl">↗</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-secondary text-sm font-medium uppercase tracking-wide">{project.tags}</p>
                    </Link>
                ))}
                {projects.length === 0 && (
                    <div className="col-span-full text-center py-32 bg-tertiary rounded-3xl border border-dashed border-secondary/20">
                        <p className="text-secondary text-lg">No projects found. Add some in the backend!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
