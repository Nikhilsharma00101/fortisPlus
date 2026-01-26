"use client";

import { useRef } from "react";
import { Users, Target, Shield, Award, CheckCircle2, ArrowRight, HeartPulse, Microscope, Dna } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// --- Components for Animation ---

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function RevealText({ text, className = "" }: { text: string; className?: string }) {
    return (
        <span className={`inline-block overflow-hidden ${className}`}>
            <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="inline-block"
            >
                {text}
            </motion.span>
        </span>
    );
}

// --- Main Page Component ---

export default function About() {
    const heroRef = useRef(null);
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <main className="pb-0 bg-slate-950 overflow-x-hidden">

            {/* --- Section 1: Hero (Immersive & Parallax) --- */}
            <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-hero-creative.png"
                        alt="Futuristic Medical Background"
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-10" />
                </motion.div>

                {/* Animated Particles/Orbs */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] border border-white/5 rounded-full z-0 opacity-30 dashed-border"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] border border-teal-500/10 rounded-full z-0 opacity-30"
                />

                <div className="container-custom relative z-10 text-center max-w-5xl mx-auto">
                    <FadeIn delay={0.2}>
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[var(--color-secondary)] text-sm font-bold tracking-widest uppercase mb-8 hover:bg-white/10 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                            Who We Are
                        </div>
                    </FadeIn>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                        <RevealText text="Redefining" /> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-teal-400">
                            Healthcare
                        </span>
                    </h1>

                    <FadeIn delay={0.4}>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 font-light max-w-3xl mx-auto">
                            FortisPlus was founded on a revolutionary vision: to fuse the precision of <span className="text-white font-medium">advanced technology</span> with the warmth of <span className="text-white font-medium">human connection</span>.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link href="#our-vision" className="w-[80px] h-[80px] rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--color-secondary)] hover:border-transparent transition-all duration-300 group">
                                <ArrowRight className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </FadeIn>
                </div>

                {/* Scroll Prompt */}
                <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2">
                    <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
                </motion.div>
            </section>

            {/* --- Section 2: Interactive Timeline (The Journey) --- */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-secondary)] to-purple-600 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse-slow" />
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group h-[600px]">
                                <Image
                                    src="/images/about-leadership.png"
                                    alt="Visionary Leadership"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-10 w-full">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <Award className="text-[var(--color-secondary)]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">Excellence Since 2008</p>
                                            <p className="text-slate-400 text-sm">Pioneering Medical Standards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <FadeIn>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight">
                                    A Legacy of <br /> <span className="text-[var(--color-primary-light)]">Unstoppable Progress</span>
                                </h2>
                            </FadeIn>

                            <div className="space-y-12 border-l border-white/10 ml-4 pl-12 relative">
                                {[
                                    { year: "2008", title: "The Inception", desc: "Started as a boutique clinic focused on family health.", icon: HeartPulse },
                                    { year: "2015", title: "Technological Leap", desc: "Digitalized patient records and introduced AI diagnostics.", icon: Dna },
                                    { year: "2023", title: "Global Standards", desc: "Achieved JCI accreditation and expanded to 3 new cities.", icon: Microscope },
                                    { year: "Future", title: "The Next Horizon", desc: "Investing in genomic medicine and robotic surgery.", icon: Target }
                                ].map((item, i) => (
                                    <FadeIn key={i} delay={i * 0.1} className="relative group">
                                        <span className="absolute -left-[59px] top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-[var(--color-secondary)] group-hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center">
                                            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </span>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                                            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700 group-hover:from-[var(--color-secondary)] group-hover:to-teal-200 transition-all duration-300">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-secondary)] transition-colors">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed max-w-md group-hover:text-slate-300 transition-colors">
                                            {item.desc}
                                        </p>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 3: Vision & Mission (Holographic Cards) --- */}
            <section id="our-vision" className="py-32 relative bg-slate-900">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent opacity-50" />

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <FadeIn>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Core <span className="text-[var(--color-secondary)]">DNA</span></h2>
                            <p className="text-xl text-slate-400 font-light">
                                Driven by principles that prioritize your health above everything else.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <FadeIn delay={0.1} className="h-full">
                            <div className="relative group p-8 rounded-3xl bg-slate-950 border border-white/10 h-full overflow-hidden hover:border-[var(--color-secondary)]/50 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-secondary)]/20 rounded-full blur-[50px] group-hover:bg-[var(--color-secondary)]/30 transition-all" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[var(--color-secondary)]/10">
                                        <Target className="text-[var(--color-secondary)]" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                                    <p className="text-slate-400 leading-relaxed font-light">
                                        To democratize access to elite healthcare, ensuring every patient benefits from precision diagnosis and personalized treatment plans using the latest medical breakthroughs.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Card 2 */}
                        <FadeIn delay={0.2} className="h-full">
                            <div className="relative group p-8 rounded-3xl bg-slate-950 border border-white/10 h-full overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] group-hover:bg-blue-500/30 transition-all" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/10">
                                        <Shield className="text-blue-500" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                                    <p className="text-slate-400 leading-relaxed font-light">
                                        To be the global benchmark for trust and transparency in medicine, where technology serves biology to create a healthier, more vibrant world for everyone.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Card 3 (Values List) */}
                        <FadeIn delay={0.3} className="h-full">
                            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 h-full overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-8">Our Values</h3>
                                        <ul className="space-y-6">
                                            {[
                                                { label: "Patient First", color: "text-[var(--color-secondary)]" },
                                                { label: "Radical Integrity", color: "text-blue-400" },
                                                { label: "Continuous Innovation", color: "text-purple-400" },
                                                { label: "Empathy & Respect", color: "text-pink-400" }
                                            ].map((val, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 className={`w-5 h-5 ${val.color}`} />
                                                    <span className="text-slate-300 font-medium text-lg">{val.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-white/5">
                                        <p className="text-xs text-slate-500 uppercase tracking-widest">Non-Negotiable Standards</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* --- Section 4: Infrastructure Stats --- */}
            <section className="py-24 bg-black relative">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Specialized Beds", color: "text-[var(--color-secondary)]" },
                            { number: "120", label: "Example Awards", color: "text-blue-400" },
                            { number: "50k+", label: "Happy Patients", color: "text-purple-400" },
                            { number: "24/7", label: "Emergency Support", color: "text-teal-400" },
                        ].map((stat, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="text-center p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
                                    <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>{stat.number}</div>
                                    <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
