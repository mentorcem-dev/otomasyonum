"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "/pilates-hero.png", alt: "Reformer Pilates Stüdyo", label: "Stüdyomuz", span: "md:col-span-2 md:row-span-2" },
    { src: "/pilates-group.png", alt: "Grup Dersi", label: "Grup Dersleri", span: "" },
    { src: "/pilates-private.png", alt: "Özel Ders", label: "Özel Dersler", span: "" },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-[#C19A6B] font-semibold">
                        Galeri
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] font-semibold text-[#1A1A1A] mt-3 mb-4">
                        Stüdyomuzdan <span className="text-[#C19A6B] italic">Kareler</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span} ${i === 0 ? "min-h-[400px] lg:min-h-[500px]" : "min-h-[240px]"
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white text-lg font-[family-name:var(--font-heading)] font-semibold">
                                    {img.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
