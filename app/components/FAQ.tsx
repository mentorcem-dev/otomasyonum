"use client";

import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Bu neden aylık abonelik değil de tek seferlik bir ödeme?",
            answer: "Tam mülkiyet modeline inanıyoruz. Sistemi sizin için kuruyoruz, teslim ediyoruz ve size çalışır vaziyette bırakıyoruz. Aylık ücret yok, sadece kendi API maliyetleriniz (cüzi miktarlar) olur."
        },
        {
            question: "Pivot Protokolü nedir?",
            answer: "Eğer bir konsept 30 gün içinde beklenen performansı göstermezse, yeni bir hesap/konsept kurulumunu ücretsiz yapıyoruz. Başarınız bizim başarımızdır."
        },
        {
            question: "İçerik kalitesi nasıl?",
            answer: "En son yapay zeka modellerini (Midjourney, Runway, ElevenLabs) kullanıyoruz. İçerikler 4K kalitesinde, profesyonel kurgulu ve viral olmaya adaydır."
        },
        {
            question: "Kaç farklı platformda paylaşım yapılıyor?",
            answer: "YouTube Shorts, TikTok ve Instagram Reels olmak üzere 3 ana platformda aynı anda paylaşım yapılır."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-black relative">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">
                    Sıkça Sorulan <span className="text-primary">Sorular</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-45 text-primary' : 'text-gray-400'}`}>+</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}
                            >
                                <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
