"use client";

import { Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        İmparatorluğunuzu <span className="text-primary">Kurun</span>
                    </h2>
                    <p className="text-gray-400">
                        Otomatik içerik sisteminizi bugün güvenceye alın. Bu hafta için sınırlı kontenjan.
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 uppercase mb-2">Ad Soyad</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Adınız"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 uppercase mb-2">E-posta</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="ornek@sirket.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase mb-2">Paket Seçimi</label>
                            <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                                <option>Starter (40.000₺)</option>
                                <option>Growth (75.000₺)</option>
                                <option>Scale (105.000₺)</option>
                                <option>Empire (130.000₺)</option>
                                <option>Monopoly (150.000₺)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase mb-2">Mesajınız (Opsiyonel)</label>
                            <textarea
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Özel bir niş veya sorunuz var mı?"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" /> Başvuru Gönder
                        </button>
                        <p className="text-xs text-center text-gray-600">
                            Göndererek, verilerinizin teklif için işlenmesini kabul etmiş olursunuz.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
