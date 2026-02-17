
const tiers = [
    {
        name: "Starter",
        price: "40.000",
        concepts: 1,
        accounts: 3,
        platforms: ["YouTube", "TikTok", "Instagram"],
        features: [
            "1 Özgün Konsept",
            "3 Toplam Hesap",
            "Tam n8n Kurulumu",
            "Hosting & Domain Dahil",
            "Günlük İçerik Otomasyonu"
        ]
    },
    {
        name: "Growth",
        price: "75.000",
        concepts: 2,
        accounts: 6,
        platforms: ["YouTube", "TikTok", "Instagram"],
        popular: true,
        features: [
            "2 Özgün Konsept",
            "6 Toplam Hesap",
            "Risk Dağıtımı",
            "Gelişmiş Destek",
            "Öncelikli Kurulum"
        ]
    },
    {
        name: "Scale",
        price: "105.000",
        concepts: 3,
        accounts: 9,
        platforms: ["YouTube", "TikTok", "Instagram"],
        features: [
            "3 Özgün Konsept",
            "9 Toplam Hesap",
            "Pazar Hakimiyet Stratejisi",
            "Gelişmiş Analitik Kurulumu",
            "Özel Hesap Yöneticisi"
        ]
    },
    {
        name: "Empire",
        price: "130.000",
        concepts: 4,
        accounts: 12,
        platforms: ["YouTube", "TikTok", "Instagram"],
        features: [
            "4 Özgün Konsept",
            "12 Toplam Hesap",
            "Tam Niş Kapsamı",
            "Özel Marka Entegrasyonu",
            "7/24 İzleme"
        ]
    },
    {
        name: "Monopoly",
        price: "150.000",
        concepts: 5,
        accounts: 15,
        platforms: ["YouTube", "TikTok", "Instagram"],
        features: [
            "5 Özgün Konsept",
            "15 Toplam Hesap",
            "Maksimum Viral Potansiyel",
            "Garantili Hesap Değişimi",
            "VIP Hizmet"
        ]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Yatırım <span className="text-primary">Planları</span>
                    </h2>
                    <p className="text-gray-400">
                        Tam otomatik içerik makinesi için tek seferlik ödeme. Tüm kurulum, hosting ve yapılandırma dahildir.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative p-6 rounded-2xl border ${tier.popular ? 'bg-primary/5 border-primary' : 'bg-white/5 border-white/10'} hover:border-primary/50 transition-all hover:-translate-y-1 flex flex-col`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                                    POPULAR
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-300 mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold">₺{tier.price}</span>
                                    <span className="text-sm text-gray-500">/tek seferlik</span>
                                </div>
                            </div>

                            <div className="mb-6 space-y-2">
                                <div className="p-3 bg-white/5 rounded-lg text-center">
                                    <div className="text-xl font-bold text-white">{tier.concepts}</div>
                                    <div className="text-xs text-gray-400">Konsept</div>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg text-center">
                                    <div className="text-xl font-bold text-white">{tier.accounts}</div>
                                    <div className="text-xs text-gray-400">Toplam Hesap</div>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                        <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold text-sm transition-colors ${tier.popular ? 'bg-primary hover:bg-red-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                Hemen Başla
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 text-center">
                    <h4 className="text-xl font-bold mb-2">Özel Lansman Teklifi</h4>
                    <p className="text-gray-300">
                        Maksimize edilmiş erişim için <span className="text-primary font-bold">5 Konsept Paketi</span>.
                        <br className="hidden md:block" />
                        Öncelikli hesap kurulumu ve niş danışmanlığı içerir.
                        <span className="block mt-2 font-display text-2xl font-bold text-primary">Tahmini Değer: 120.000₺ + KDV</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
