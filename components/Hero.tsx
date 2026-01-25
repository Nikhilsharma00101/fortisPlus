"use client";

import Link from "next/link";
import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[750px] md:min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image Placeholder - To be replaced by generated image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat" />
                {/* Fallback gradient if image missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 -z-10" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/90 via-[var(--color-primary)]/20 to-transparent z-10" />
            </div>

            <div className="container-custom relative z-20 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="glass p-6 md:p-12 rounded-2xl md:rounded-[2rem] border-l-4 border-[var(--color-secondary)] backdrop-blur-xl bg-white/80 shadow-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold mb-6 backdrop-blur-sm border border-[var(--color-primary)]/20">
                            <span className="flex h-2 w-2 rounded-full bg-[var(--color-secondary)] animate-pulse"></span>
                            World-Class Medical Care
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                            Advancing Healthcare <br />
                            <span className="text-[var(--color-primary)]">With Trust</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed max-w-xl font-medium">
                            Experience the future of medicine with our team of expert doctors and state-of-the-art facilities. Your well-being is our lifelong commitment.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/appointment" className="btn-primary flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/20">
                                <CalendarCheck size={20} />
                                Book Appointment
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/contact" className="px-8 py-4 rounded-full font-bold transition-all duration-300 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] flex items-center justify-center gap-2 shadow-md">
                                <Phone size={20} />
                                Emergency Contact
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}
