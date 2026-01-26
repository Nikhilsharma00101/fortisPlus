"use client";

import { useRef } from "react";
import {
    Stethoscope, Activity, HeartPulse, Microscope, Baby, Brain, Eye, UserPlus,
    Calendar, FileSearch, UserCheck, ArrowRight, Plus, type LucideIcon
} from "lucide-react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Components ---

interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

const ServiceBentoItem = ({ service, index }: { service: Service, index: number }) => {
    // Determine span based on index patterns to create "random" bento look
    const isLarge = index === 0 || index === 3 || index === 6;
    const isTall = index === 2 || index === 5;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-primary)]/5 hover:-translate-y-1",
                isLarge ? "md:col-span-2" : "md:col-span-1",
                isTall ? "md:row-span-2 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]" : "bg-white"
            )}
        >
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
                        isTall
                            ? "bg-white/20 text-white"
                            : "bg-[var(--color-accent)]/20 text-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white"
                    )}>
                        <service.icon size={24} />
                    </div>

                    <h3 className={cn(
                        "text-2xl font-bold mb-3",
                        isTall ? "text-white" : "text-slate-900"
                    )}>
                        {service.title}
                    </h3>

                    <p className={cn(
                        "text-sm leading-relaxed mb-6",
                        isTall ? "text-blue-100" : "text-slate-500"
                    )}>
                        {service.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className={cn(
                        "text-xs font-bold uppercase tracking-widest",
                        isTall ? "text-blue-200" : "text-slate-400"
                    )}>
                        Explore
                    </span>
                    <Link href={service.href} className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                        isTall
                            ? "bg-white text-[var(--color-primary)] hover:scale-110"
                            : "bg-slate-100 text-slate-900 group-hover:bg-[var(--color-primary)] group-hover:text-white"
                    )}>
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <service.icon
                className={cn(
                    "absolute -bottom-8 -right-8 w-48 h-48 opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110",
                    isTall ? "text-white opacity-10" : "text-slate-900"
                )}
            />
        </motion.div>
    );
};

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const services = [
        { title: "General Consultation", description: "Comprehensive health assessments by senior physicians focusing on preventive care and early detection.", icon: Stethoscope, href: "#" },
        { title: "Expert Cardiology", description: "Advanced heart care including non-invasive diagnostics and interventional procedures.", icon: HeartPulse, href: "#" },
        { title: "Neurology", description: "Specialized treatment for complex neurological conditions with state-of-the-art brain mapping.", icon: Brain, href: "#" },
        { title: "Pediatrics", description: "Compassionate care for your little ones, from vaccinations to developmental tracking.", icon: Baby, href: "#" },
        { title: "Lab Diagnostics", description: "High-precision testing lab operating 24/7 with same-day digital reports.", icon: Microscope, href: "#" },
        { title: "Ophthalmology", description: "Vision correction surgeries and comprehensive eye care using laser technology.", icon: Eye, href: "#" },
        { title: "Physiotherapy", description: "Personalized rehabilitation programs to restore mobility and strength.", icon: Activity, href: "#" },
        { title: "Wellness Programs", description: "Corporate and individual wellness plans designed for modern lifestyle management.", icon: UserPlus, href: "#" },
    ];

    const process = [
        { num: "01", title: "Book", desc: "Digital Scheduling", icon: Calendar },
        { num: "02", title: "Meet", desc: "Expert Consultation", icon: UserCheck },
        { num: "03", title: "Test", desc: "Precise Diagnostics", icon: FileSearch },
        { num: "04", title: "Heal", desc: "Treatment Plan", icon: HeartPulse },
    ];

    return (
        <main ref={containerRef} className="pb-0 bg-[var(--color-background)] min-h-screen">

            {/* --- Hero Section: Clean & Minimal --- */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Abstract animated geometric shapes (CSS+Framer) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[var(--color-accent)]/20 to-transparent rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none"
                />
                <motion.div
                    animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/5 rounded-full blur-[80px] -ml-40 -mb-40 pointer-events-none"
                />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
                            Clinical Excellence
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-light text-slate-900 mb-8 leading-[0.9] tracking-tight"
                        >
                            Medical Care, <br />
                            <span className="font-bold text-[var(--color-primary)]">Reimagined.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-xl leading-relaxed font-light"
                        >
                            We combine advanced technology with a holistic approach to deliver healthcare that is effective, personalized, and deeply human.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Bento Grid Services --- */}
            <section className="py-20 relative">
                <div className="container-custom">
                    {/* The Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                        {services.map((service, index) => (
                            <ServiceBentoItem key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section 3: Horizontal Interactive Process --- */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="container-custom">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Patient Journey</h2>
                            <p className="text-slate-500 text-lg">A seamless flow from your first click to full recovery.</p>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50"><ArrowRight className="rotate-180" /></button>
                            <button className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-lg"><ArrowRight /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {process.map((step, i) => (
                            <div key={i} className="group relative">
                                <div className="absolute top-8 left-0 w-full h-px bg-slate-100 group-hover:bg-[var(--color-secondary)]/50 transition-colors duration-500 -z-10 md:block hidden" />

                                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 text-slate-300 font-bold flex items-center justify-center text-xl mb-8 group-hover:border-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2 relative z-10">
                                    {step.num}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                    {step.title}
                                </h3>
                                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
                                    <step.icon size={16} />
                                    <span>{step.desc}</span>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    Detailed description appearing on hover to keep the interface clean initially.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section 4: Creative CTA --- */}
            <section className="py-24 relative overflow-hidden bg-slate-50">
                {/* Giant Text Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-slate-200/40 select-none pointer-events-none whitespace-nowrap">
                    HEALTH
                </div>

                <div className="container-custom relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-[var(--color-secondary)] mb-10 rotate-12 hover:rotate-0 transition-transform duration-500">
                        <Plus size={40} />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 max-w-3xl">
                        Ready for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Healthier</span> Tomorrow?
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/appointment" className="px-10 py-5 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-1 transition-all">
                            Start Your Journey
                        </Link>
                        <Link href="/contact" className="px-10 py-5 rounded-full bg-white text-slate-700 border border-slate-200 font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
