"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Anasayfa", href: "#hero" },
    { label: "Özellikler", href: "#features" },
    { label: "Süreç", href: "#process" },
    { label: "Fiyatlar", href: "#pricing" },
    { label: "SSS", href: "#faq" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold shadow-lg shadow-red-600/20">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <span className="text-xl font-display font-bold text-white tracking-tight">
                        Otomasyonum
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Özellikler</a>
                    <a href="#process" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Nasıl Çalışır?</a>
                    <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Fiyatlandırma</a>
                    <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">SSS</a>
                    <button className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-colors">
                        Sistemi Başlat
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-gray-400 hover:text-white font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#pricing"
                        onClick={() => setMenuOpen(false)}
                        className="block text-center px-5 py-3 bg-white text-black rounded-full font-bold"
                    >
                        Start Scaling
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
