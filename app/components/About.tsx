
const steps = [
    {
        number: "01",
        title: "Konsept Stratejisi",
        description: "Yüksek performanslı nişleri analiz ediyor ve viral potansiyeli olan konseptleri seçiyoruz. Siz yönü seçin, biz yolu çizelim."
    },
    {
        number: "02",
        title: "Sistem Kurulumu",
        description: "Tam otomasyon yığınını dağıtıyoruz: n8n iş akışları, Fal.ai görüntü oluşturma ve hesap yönetimi için Blotato. Hosting ve alan adı dahil."
    },
    {
        number: "03",
        title: "Hesap Ağı",
        description: "YouTube, TikTok ve Instagram'da hesaplar oluşturuyor ve ısıtıyoruz. 1 Konsept = 3 Hesap. 5 Konsept = 15 Hesap."
    },
    {
        number: "04",
        title: "Lansman & Takip",
        description: "Sistem günlük paylaşıma başlar. Bir konsept test süresinde hedefleri tutturamazsa, onu iptal edip hemen yenisini başlatırız."
    }
];

const About = () => { // Reusing About as 'How It Works' / Process
    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Hızlı <span className="text-primary">Hareket Ediyoruz</span>. <br />
                            Daha Hızlı Adapte Oluyoruz.
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Kısa video içerik dünyasında hız ve hacim her şeydir.
                            Sistemimiz sadece bir paylaşım aracı değil; bir büyüme motorudur.
                        </p>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="text-4xl font-display font-bold text-white/5 group-hover:text-primary/20 transition-colors">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-sm text-gray-500">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="space-y-4">
                                {/* Mock UI for Automation */}
                                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-sm font-mono text-gray-300">n8n_workflow_v2.json</span>
                                    </div>
                                    <span className="text-xs text-primary">Aktif</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        <span className="text-sm font-mono text-gray-300">Fal.ai_generating...</span>
                                    </div>
                                    <span className="text-xs text-orange-500">İşleniyor</span>
                                </div>
                                <div className="p-4 bg-black/40 rounded-lg border border-white/5 space-y-2">
                                    <div className="text-xs text-gray-500 mb-2">Yükleme Sırası</div>
                                    <div className="flex gap-2">
                                        <div className="h-1 bg-primary w-full rounded-full" />
                                        <div className="h-1 bg-primary w-2/3 rounded-full" />
                                        <div className="h-1 bg-white/10 w-full rounded-full" />
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                                        <span>YouTube</span>
                                        <span>TikTok</span>
                                        <span>Instagram</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="font-bold mb-2">Başarısızlık Önleme Garantisi</h4>
                                <p className="text-sm text-gray-400">
                                    Sosyal medya öngörülemezdir. Bu yüzden bir güvenlik ağı sunuyoruz:
                                    eğer bir konsept performans göstermezse, kazanan formülünüzü bulana kadar
                                    15'e kadar yedek hesap oluşturulmasını biz üstleniyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
