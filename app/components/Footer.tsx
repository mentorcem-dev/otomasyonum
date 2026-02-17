
const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-red-600/20">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <span className="text-lg font-display font-bold text-white">
                        Otomasyonum
                    </span>
                </div>

                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Otomasyonum. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
