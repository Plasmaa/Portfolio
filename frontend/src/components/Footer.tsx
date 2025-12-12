import Link from 'next/link';
import { Github, Facebook, Instagram, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-black/5 mt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-foreground font-bold text-xl tracking-tight">
                    Shaikh Zarif Shahriar
                </div>
                <div className="text-secondary text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
                <div className="flex gap-6 text-secondary font-medium flex-wrap justify-center md:justify-end">
                    <a href="https://github.com/Plasmaa" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:scale-110 transition-all p-2 bg-secondary/5 rounded-full">
                        <Github size={20} />
                    </a>
                    <a href="https://www.facebook.com/shaikh.zarif.1293" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:scale-110 transition-all p-2 bg-secondary/5 rounded-full">
                        <Facebook size={20} />
                    </a>
                    <a href="https://www.instagram.com/pious_zarif/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:scale-110 transition-all p-2 bg-secondary/5 rounded-full">
                        <Instagram size={20} />
                    </a>
                    <a href="https://codeforces.com/profile/plasmaa" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:scale-110 transition-all p-2 bg-secondary/5 rounded-full" title="Codeforces">
                        <Code2 size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/shaikh-zarif-shahriar-4bb14815a/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:scale-110 transition-all p-2 bg-secondary/5 rounded-full">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:zarifpious@gmail.com" className="hover:text-foreground hover:scale-110 transition-all p-2 bg-secondary/5 rounded-full">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
