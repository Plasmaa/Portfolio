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
        <section id="portfolio" className="py-20 px-8 max-w-7xl mx-auto">
            <div className="mb-16 flex justify-between items-end">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="font-medium">Portfolio</span>
                    </div>
                    <h2 className="text-5xl font-bold">Latest Works</h2>
                </div>
                <a href="#" className="text-primary font-medium hover:opacity-80">View All ↗</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link href={project.link || '#'} key={project.id} target="_blank" className="group cursor-pointer block">
                        <div className="relative h-80 w-full mb-4 rounded-2xl overflow-hidden bg-gray-100">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">↗</div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-secondary text-sm">{project.tags}</p>
                    </Link>
                ))}
                {projects.length === 0 && (
                    <div className="col-span-full text-center py-20 bg-gray-50 rounded-2xl">
                        <p className="text-secondary">No projects found. Add some in the backend!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
