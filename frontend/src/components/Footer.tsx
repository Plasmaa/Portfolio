import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background py-20 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="max-w-2xl">
                    <h2 className="text-6xl font-bold mb-8 leading-tight">Got a Vision? Let's Bring It to Life!</h2>
                    <p className="text-secondary text-xl mb-8">
                        I'm always open to discussing product design work or partnership opportunities.
                    </p>
                    <a href="mailto:zarifpious@gmail.com" className="text-3xl font-medium underline decoration-2 underline-offset-8 hover:text-primary transition-colors">
                        zarifpious@gmail.com
                    </a>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex gap-8 text-lg font-medium">
                        <Link href="https://github.com/Plasmaa" target="_blank" className="hover:text-primary transition-colors">GitHub</Link>
                        <Link href="https://www.linkedin.com/in/shaikh-zarif-shahriar-4bb14815a/" target="_blank" className="hover:text-primary transition-colors">LinkedIn</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
                    </div>
                    <div className="text-secondary">
                        <p>© 2025 Shaikh Zarif Shahriar</p>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
