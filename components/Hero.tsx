"use client";

import Link from "next/link";
import { ArrowRight, CalendarCheck, Activity, Users, ShieldCheck, HeartPulse } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
            {/* --- Background Layer --- */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y: y1 }} className="absolute inset-0">
                    <Image
                        src="/images/hero-bg-creative.png"
                        alt="Futuristic Medical Lab"
                        fill
                        className="object-cover opacity-60 scale-105"
                        priority
                    />
                </motion.div>

                {/* Dynamic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(15,185,177,0.15),transparent_50%)] z-10" />

                {/* Animated Mesh Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-[120px] z-10"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/20 rounded-full blur-[150px] z-10"
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] z-10"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
                />
            </div>

            <div className="container-custom relative z-20 w-full grid lg:grid-cols-2 gap-16 items-center py-12">
                {/* --- Left Column: Content --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[var(--color-secondary)] text-sm font-bold mb-8 backdrop-blur-md"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-secondary)]"></span>
                        </span>
                        Next-Generation Medical Excellence
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                        Health <span className="text-gradient brightness-125">Defined</span> <br />
                        By Innovation.
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-xl font-medium">
                        Merging cutting-edge technology with compassionate care to deliver a healthcare experience that is faster, safer, and more personalized than ever before.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link href="/appointment" className="btn-primary group !px-10 !py-5 text-lg flex items-center justify-center gap-3 bg-[var(--color-primary)] hover:scale-105 active:scale-95 transition-all">
                            <CalendarCheck className="w-6 h-6" />
                            Book Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link href="/services" className="px-10 py-5 rounded-full font-bold transition-all duration-300 bg-white/5 text-white border border-white/10 hover:bg-white/10 flex items-center justify-center gap-3 backdrop-blur-sm">
                            <Activity className="w-6 h-6" />
                            Explore Services
                        </Link>
                    </div>

                    {/* Quick Stats Overlaying Left Column */}
                    <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">50+</div>
                            <div className="text-sm text-slate-400 font-medium">Specialists</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">24/7</div>
                            <div className="text-sm text-slate-400 font-medium">Emergency</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-sm text-slate-400 font-medium">Patient Care</div>
                        </div>
                    </div>
                </motion.div>

                {/* --- Right Column: Floating Cards --- */}
                <div className="relative hidden lg:block h-[600px]">
                    {/* Main "Holographic" Card */}
                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 glass-dark rounded-[3rem] border-white/20 p-8 flex flex-col items-center justify-center overflow-hidden group shadow-[0_0_50px_rgba(15,185,177,0.2)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-secondary)]/10 to-transparent pointer-events-none" />

                        <div className="relative z-10 mb-8 bg-slate-950/50 p-6 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-500">
                            <HeartPulse className="w-16 h-16 text-[var(--color-secondary)]" />
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Live Vitality</h3>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="h-1.5 w-12 rounded-full bg-slate-800 overflow-hidden">
                                    <motion.span
                                        animate={{ x: [-48, 48] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="block h-full w-full bg-[var(--color-secondary)]"
                                    />
                                </span>
                                <span className="text-[var(--color-secondary)] font-mono text-sm">72 BPM</span>
                            </div>
                            <p className="text-slate-400 text-sm">Real-time health monitoring integrated into every consultation.</p>
                        </div>
                    </motion.div>

                    {/* Small Floating Card 1: Experience */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 2, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-0 glass-dark px-6 py-4 rounded-2xl border-white/20 flex items-center gap-4 shadow-2xl backdrop-blur-xl"
                    >
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                            <Users className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Top Rated</div>
                            <div className="text-[10px] text-slate-400">by 50,000+ patients</div>
                        </div>
                    </motion.div>

                    {/* Small Floating Card 2: Security */}
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -2, 0]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-0 glass-dark px-6 py-4 rounded-2xl border-white/20 flex items-center gap-4 shadow-2xl backdrop-blur-xl"
                    >
                        <div className="bg-teal-500/20 p-2 rounded-lg">
                            <ShieldCheck className="w-6 h-6 text-teal-400" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">ISO Certified</div>
                            <div className="text-[10px] text-slate-400">Global Standards</div>
                        </div>
                    </motion.div>

                    {/* Decorative Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full pointer-events-none" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Scroll to Explore</div>
                <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-1 rounded-full bg-[var(--color-secondary)]"
                    />
                </div>
            </motion.div>
        </section>
    );
}
