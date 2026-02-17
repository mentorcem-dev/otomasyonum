import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black to-transparent" />
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">Yeni Nesil İçerik Otomasyonu</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight">
                        YouTube & Sosyal Medya
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-300% animate-gradient">
                            İmparatorluğu Kurun
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Tek kurulum, sonsuz içerik. Yapay zeka destekli sistemimiz ile YouTube, TikTok ve Instagram hesaplarınızı otomatik yönetin.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-[0_0_30px_rgba(230,0,46,0.3)] w-full sm:w-auto">
                            Hemen Başlayın
                        </button>
                        <button className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm w-full sm:w-auto">
                            Örnekleri İncele
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">15+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Aktif Hesap</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">1M+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Aylık İzlenme</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">%99.9</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Otomasyon</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">7/24</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">İçerik Üretimi</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
