"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import PhoneFrame from "./PhoneFrame";
import { Send, Share2, Heart, MessageCircle, MoreHorizontal, CheckCircle, Video } from "lucide-react";

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className={className}
    >
        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
    </svg>
);

export default function ProcessFlow() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [promptText, setPromptText] = useState("");
    const fullPrompt = "futuristic luxury car driving through neon tokyo city, cinematic lighting, 4k --ar 9:16";

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            // Determine active step based on scroll position
            if (latest < 0.25) setCurrentStep(1);
            else if (latest < 0.50) setCurrentStep(2);
            else if (latest < 0.75) setCurrentStep(3);
            else setCurrentStep(4);

            // Typing effect only during step 1
            if (latest < 0.25) {
                const charCount = Math.floor((latest / 0.20) * fullPrompt.length);
                setPromptText(fullPrompt.slice(0, charCount));
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const progressWidth = useTransform(scrollYProgress, [0.25, 0.45], ["0%", "100%"]);

    return (
        <section ref={containerRef} id="process" className="h-[400vh] relative bg-black font-sans">
            <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden w-full max-w-7xl mx-auto px-4 gap-4 md:gap-12">

                {/* Left Side: Explanations - Mobile optimized */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20 h-auto md:h-96 relative justify-end md:justify-center order-2 md:order-1 mt-4 md:mt-0 absolute bottom-8 md:relative md:bottom-auto">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-2 md:space-y-6 md:absolute w-full bg-black/80 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider">
                                    Adım 1
                                </div>
                                <h2 className="text-2xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                    Konsept & Prompt
                                </h2>
                                <p className="text-sm md:text-xl text-gray-400 max-w-md mx-auto md:mx-0">
                                    Siz sadece konsepti belirlersiniz. Bizim algoritmamız en iyi sonucu verecek prompt'u (istem) sizin için hazırlar.
                                </p>
                            </motion.div>
                        )}
                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-2 md:space-y-6 md:absolute w-full bg-black/80 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider">
                                    Adım 2
                                </div>
                                <h2 className="text-2xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                    Yapay Zeka Üretimi
                                </h2>
                                <p className="text-sm md:text-xl text-gray-400 max-w-md mx-auto md:mx-0">
                                    Seçilen modele (Sora, Kling, Runway) göre video saniyeler içinde üretilir.
                                </p>
                            </motion.div>
                        )}
                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-2 md:space-y-6 md:absolute w-full bg-black/80 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider">
                                    Adım 3
                                </div>
                                <h2 className="text-2xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                    Kurgu & Adaptasyon
                                </h2>
                                <p className="text-sm md:text-xl text-gray-400 max-w-md mx-auto md:mx-0">
                                    Üretilen içerik TikTok, Reels ve Shorts formatına otomatik olarak uyarlanır, müzik ve efektler eklenir.
                                </p>
                            </motion.div>
                        )}
                        {currentStep === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-2 md:space-y-6 md:absolute w-full bg-black/80 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider">
                                    Adım 4
                                </div>
                                <h2 className="text-2xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                    Otomatik Paylaşım
                                </h2>
                                <p className="text-sm md:text-xl text-gray-400 max-w-md mx-auto md:mx-0">
                                    Onaylanan içerikler belirlediğiniz saatlerde tüm platformlarda aynı anda yayına girer.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Side: Phone Visualization */}
                <div className="w-full md:w-1/2 flex items-center justify-center z-10 scale-[0.6] md:scale-100 order-1 md:order-2 mb-32 md:mb-0">
                    <PhoneFrame>
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && (
                                <motion.div
                                    key="visual1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 bg-gray-900 p-4 font-mono text-xs text-green-400 flex flex-col pt-12"
                                >
                                    <div className="flex items-center gap-2 text-gray-400 mb-4 border-b border-gray-700 pb-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <span className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-auto">Terminal</span>
                                    </div>
                                    <div className="bg-black/50 p-2 rounded mb-2">
                                        <span className="text-blue-400">user@otomasyonum:~$</span> ./generate_concept.sh
                                    </div>
                                    <div className="mt-2 text-white break-words">
                                        <span className="text-gray-500">{">"}</span> {promptText}<span className="animate-pulse">_</span>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="visual2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 bg-black flex flex-col items-center justify-center p-6 text-center"
                                >
                                    <div className="w-16 h-16 rounded-full border-4 border-gray-800 border-t-primary animate-spin mb-6" />
                                    <h3 className="text-white font-bold mb-2">Video Oluşturuluyor...</h3>
                                    <p className="text-gray-500 text-xs mb-4">Upscaling to 4K...</p>

                                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div style={{ width: progressWidth }} className="h-full bg-primary" />
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    key="visual3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 bg-black overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-black/80 z-0">
                                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                                    </div>

                                    <div className="absolute right-2 bottom-24 flex flex-col items-center gap-4 z-10">
                                        <div className="w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center text-white p-2 backdrop-blur-sm">
                                            <Heart className="w-5 h-5 fill-primary text-primary" />
                                        </div>
                                        <div className="text-xs text-white shadow-black drop-shadow-md">1.2M</div>
                                        <div className="w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center text-white p-2 backdrop-blur-sm">
                                            <MessageCircle className="w-5 h-5" />
                                        </div>
                                        <div className="text-xs text-white shadow-black drop-shadow-md">45K</div>
                                        <div className="w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center text-white p-2 backdrop-blur-sm">
                                            <Share2 className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-4 left-4 z-10 text-white w-2/3">
                                        <div className="font-bold text-sm mb-1">@otomasyonum</div>
                                        <div className="text-xs opacity-80 leading-snug">
                                            Yapay zeka ile üretilen fütüristik Tokyo manzarası... #ai #cyberpunk #future
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 4 && (
                                <motion.div
                                    key="visual4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 bg-black flex flex-col items-center justify-center p-6 space-y-8"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Başarıyla Yayınlandı!</h3>

                                    <div className="w-full flex justify-center gap-4">
                                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-white/10">
                                            <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                                                <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent ml-[2px]" />
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black" />
                                            <span className="text-white z-10 font-bold text-lg">Tk</span>
                                        </div>
                                        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-white/10 text-white">
                                            <div className="w-6 h-6 rounded-md border-2 border-white flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full border border-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 px-4 py-2 rounded-full text-xs text-green-400">
                                        Zamanlama: 18:00
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </PhoneFrame>
                </div>
            </div>
        </section>
    );
}
