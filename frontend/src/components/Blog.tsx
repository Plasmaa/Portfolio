'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/api';

interface BlogPost {
    id: number;
    title: string;
    content: string;
    date_posted: string;
    image: string;
    category: string;
    reading_time: number;
}

export default function Blog() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        getBlogPosts().then(setPosts);
    }, []);

    return (
        <section id="blog" className="py-20 px-8 max-w-7xl mx-auto">
            <div className="mb-16 flex justify-between items-end">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="font-medium">Blog</span>
                    </div>
                    <h2 className="text-5xl font-bold">Latest Insights</h2>
                </div>
                <a href="#" className="text-primary font-medium hover:opacity-80">View All ↗</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                        <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden bg-gray-100">
                            {post.image ? (
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                            )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-secondary mb-3">
                            <span className="bg-gray-100 px-3 py-1 rounded-full">{post.category}</span>
                            <span>{post.reading_time} min read</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-secondary line-clamp-3">{post.content}</p>
                    </div>
                ))}
                {posts.length === 0 && (
                    <div className="col-span-full text-center py-20 bg-gray-50 rounded-2xl">
                        <p className="text-secondary">No blog posts found. Add some in the backend!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
