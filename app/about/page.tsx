import { Users, Target, Shield, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "About Us - FortisPlus",
    description: "Learn about FortisPlus mission, vision, and values.",
};

export default function About() {
    return (
        <main className="pb-0 bg-white">
            {/* Section 1: Intro (Designed) */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute inset-0 bg-[url('/images/about-hero-bg.png')] bg-cover bg-center opacity-40"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[80px] -ml-20 -mb-20"></div>
                </div>

                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-[var(--color-primary)] text-sm font-semibold tracking-wide uppercase">
                        Who We Are
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                        Redefining Healthcare with <br /> <span className="text-gradient">Compassion & Innovation</span>
                    </h1>
                    <p className="text-xl text-slate-700 leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
                        FortisPlus was founded on a simple yet powerful belief: that world-class medical care should be accessible, transparent, and rooted in genuine human connection.
                    </p>
                </div>
            </section>

            {/* Section 2: Our Story (Image + Texture + Timeline) */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                                <div className="absolute inset-0 bg-slate-200 bg-[url('/images/about-story.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="font-bold text-2xl">Since 2008</p>
                                    <p className="opacity-90">Serving the community with pride</p>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full border-2 border-[var(--color-secondary)]/30 rounded-[2rem]"></div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Journey to Excellence</h2>
                            <div className="space-y-8 pl-4 border-l-2 border-slate-100">
                                <div className="relative pl-8">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--color-primary)] ring-4 ring-white"></div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">2008: The Beginning</h3>
                                    <p className="text-slate-600">Established as a small clinic with a mission to provide personalized care to local families.</p>
                                </div>
                                <div className="relative pl-8">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--color-secondary)] ring-4 ring-white"></div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">2015: Expansion</h3>
                                    <p className="text-slate-600">Inaugurated our multi-specialty wing, adding cardiology and orthopedics departments.</p>
                                </div>
                                <div className="relative pl-8">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--color-accent)] ring-4 ring-white"></div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">2023: Going Digital</h3>
                                    <p className="text-slate-600">Launched FortisPlus Digital Health initiative to bring healthcare to your fingertips.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Mission & Values (Designed) */}
            <section className="py-24 bg-medical-clean relative overflow-hidden">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Driven by Values</h2>
                        <p className="text-lg text-slate-600">Our core principles guide every decision we make, ensuring that you receive the highest standard of ethical medical care.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Mission Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 text-teal-600">
                                <Target size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">To deliver accessible, world-class healthcare with a human touch, ensuring that every patient leaves healthier and happier.</p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <Shield size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">To be the most trusted healthcare partner in the region, known for clinical excellence and unwavering integrity.</p>
                        </div>

                        {/* Values Grid (Mini) */}
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { icon: Users, label: "Patient Centricity", color: "text-purple-600", bg: "bg-purple-50" },
                                { icon: Award, label: "Medical Excellence", color: "text-orange-600", bg: "bg-orange-50" },
                                { icon: CheckCircle2, label: "Integrity & Trust", color: "text-green-600", bg: "bg-green-50" }
                            ].map((val, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md border border-slate-100">
                                    <div className={`p-2 rounded-lg ${val.bg} ${val.color}`}>
                                        <val.icon size={20} />
                                    </div>
                                    <span className="font-bold text-slate-800">{val.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Infrastructure / Credibility */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70"></div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">World-Class Infrastructure</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Our facility is designed to provide the highest level of safety and comfort. From advanced operation theaters to luxury recovery suites, every detail is meticulously planned for your well-being.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                                    <span className="text-slate-200">State-of-the-art Operation Theaters</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                                    <span className="text-slate-200">Advanced Diagnostic Labs (MRI, CT, Pathology)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                                    <span className="text-slate-200">24/7 ICU & Emergency Response</span>
                                </li>
                            </ul>
                            <Link href="/services" className="btn-primary">Explore Facilities</Link>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <p className="text-4xl font-bold text-[var(--color-secondary)] mb-2">500+</p>
                                <p className="text-sm text-slate-300">Beds Capacity</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <p className="text-4xl font-bold text-[var(--color-secondary)] mb-2">50+</p>
                                <p className="text-sm text-slate-300">ICU Beds</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <p className="text-4xl font-bold text-[var(--color-secondary)] mb-2">10</p>
                                <p className="text-sm text-slate-300">Modular OTs</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <p className="text-4xl font-bold text-[var(--color-secondary)] mb-2">24h</p>
                                <p className="text-sm text-slate-300">Pharmacy & Lab</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
