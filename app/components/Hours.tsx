"use client";
import { motion } from "framer-motion";
import { Clock, Sun, Moon } from "lucide-react";

const schedule = [
    { day: "Pazartesi", hours: "08:00 – 21:00", open: true },
    { day: "Salı", hours: "08:00 – 21:00", open: true },
    { day: "Çarşamba", hours: "08:00 – 21:00", open: true },
    { day: "Perşembe", hours: "08:00 – 21:00", open: true },
    { day: "Cuma", hours: "08:00 – 21:00", open: true },
    { day: "Cumartesi", hours: "09:00 – 17:00", open: true },
    { day: "Pazar", hours: "Kapalı", open: false },
];

const Hours = () => {
    const today = new Date().getDay();
    const dayMap = [6, 0, 1, 2, 3, 4, 5]; // JS Sunday=0 → our index
    const todayIdx = dayMap[today];

    return (
        <section id="hours" className="py-24 lg:py-32 bg-[#FAF7F2]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm uppercase tracking-[0.3em] text-[#C19A6B] font-semibold flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Çalışma Saatleri
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] font-semibold text-[#1A1A1A] mt-3 mb-6 leading-tight">
                            Her Gün
                            <br />
                            <span className="text-[#C19A6B] italic">Yanınızdayız</span>
                        </h2>
                        <p className="text-[#8A8A8A] font-light leading-relaxed mb-8">
                            Haftanın 6 günü, sabahtan akşama kadar açık olan stüdyomuzda
                            size en uygun saatte ders alabilirsiniz.
                        </p>
                        <div className="flex items-center gap-8 text-sm text-[#8A8A8A]">
                            <span className="flex items-center gap-2">
                                <Sun className="w-4 h-4 text-[#C19A6B]" /> Sabah 08:00
                            </span>
                            <span className="flex items-center gap-2">
                                <Moon className="w-4 h-4 text-[#C19A6B]" /> Akşam 21:00
                            </span>
                        </div>
                    </motion.div>

                    {/* Right - Schedule */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-[#E8E0D6] rounded-2xl overflow-hidden shadow-sm"
                    >
                        {schedule.map((s, i) => {
                            const isToday = i === todayIdx;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`flex items-center justify-between px-6 py-5 border-b border-[#E8E0D6]/50 last:border-0 transition-colors ${isToday
                                            ? "bg-[#C19A6B]/10 border-l-4 border-l-[#C19A6B]"
                                            : "hover:bg-[#FAF7F2]"
                                        }`}
                                >
                                    <span
                                        className={`font-semibold text-sm tracking-wide ${isToday ? "text-[#C19A6B]" : s.open ? "text-[#1A1A1A]" : "text-[#CCCCCC]"
                                            }`}
                                    >
                                        {s.day}
                                        {isToday && (
                                            <span className="ml-2 text-xs text-[#C19A6B]/70 font-normal">
                                                (Bugün)
                                            </span>
                                        )}
                                    </span>
                                    <span
                                        className={`text-sm font-medium ${s.open ? (isToday ? "text-[#C19A6B]" : "text-[#5A5A5A]") : "text-red-400"
                                            }`}
                                    >
                                        {s.hours}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hours;
