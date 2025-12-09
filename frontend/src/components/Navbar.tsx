import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
            <div className="text-2xl font-bold">
                <Link href="/">Logo</Link>
            </div>
            <div className="space-x-8 text-secondary">
                <Link href="#about" className="hover:text-primary transition-colors">About Me</Link>
                <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
                <Link href="#blog" className="hover:text-primary transition-colors">Blog</Link>
            </div>
            <div>
                <Link href="mailto:zarifpious@gmail.com" className="flex items-center gap-2 text-primary font-medium hover:opacity-80">
                    Book A Call ↗
                </Link>
            </div>
        </nav>
    );
}
