import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-black/5 mt-20">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-foreground font-bold text-xl tracking-tight">
                    Shaikh Zarif Shahriar
                </div>
                <div className="text-secondary text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
                <div className="flex gap-8 text-secondary font-medium">
                    <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
