"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CarePhilosophy() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Placeholder for "Doctor holding patient’s hand" */}
                            <div className="aspect-[4/5] bg-slate-200 relative group">
                                <div className="absolute inset-0 bg-[url('/images/care-philosophy.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                            <p className="text-[var(--color-primary)] font-bold text-lg mb-1">Patient-First Approach</p>
                            <p className="text-slate-500 text-sm">We treat every patient with the same care and respect we would our own family.</p>
                        </div>

                        {/* Decorative shape */}
                        <div className="absolute -z-10 top-1/2 -left-12 w-64 h-64 bg-[var(--color-accent)]/30 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-semibold mb-6">
                            Our Philosophy
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Compassionate Care, <br />
                            <span className="text-gradient">Medical Excellence.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            At FortisPlus, we believe that healing goes beyond just medicine. It&apos;s about building trust, showing empathy, and ensuring that you feel heard and supported throughout your healthcare journey.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Holistic treatment plans tailored to your needs",
                                "Empathetic communication and support",
                                "Collaborative decision making involving patients",
                                "Continuous follow-up and long-term wellness"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-[var(--color-secondary)] shrink-0 mt-1" size={20} />
                                    <p className="text-slate-700 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/about" className="btn-primary inline-flex items-center">
                            Discover Our Story
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
