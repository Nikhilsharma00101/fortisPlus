import ServiceCard from "@/components/ServiceCard";
import {
    Stethoscope, Activity, HeartPulse, Microscope, Baby, Brain, Eye, UserPlus,
    Calendar, FileSearch, UserCheck, ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Our Services - FortisPlus",
    description: "Explore our comprehensive medical services.",
};

export default function Services() {
    const services = [
        { title: "General Consultation", description: "Routine health checkups and primary care.", icon: Stethoscope, href: "#" },
        { title: "Cardiology", description: "Heart health diagnostics and treatments.", icon: HeartPulse, href: "#" },
        { title: "Lab Diagnostics", description: "Comprehensive blood tests and imaging.", icon: Microscope, href: "#" },
        { title: "Pediatrics", description: "Specialized care for infants and children.", icon: Baby, href: "#" },
        { title: "Neurology", description: "Treatment for neurological disorders.", icon: Brain, href: "#" },
        { title: "Ophthalmology", description: "Eye care and surgeries.", icon: Eye, href: "#" },
        { title: "Physiotherapy", description: "Rehabilitation and physical therapy.", icon: Activity, href: "#" },
        { title: "Corporate Wellness", description: "Health programs for companies and employees.", icon: UserPlus, href: "#" },
    ];

    const processSteps = [
        {
            id: 1,
            title: "Book Appointment",
            description: "Schedule via website or WhatsApp.",
            icon: Calendar
        },
        {
            id: 2,
            title: "Doctor Consultation",
            description: "Meet our experts for detailed checkup.",
            icon: UserCheck
        },
        {
            id: 3,
            title: "Diagnosis & Test",
            description: "Precise testing using modern lab.",
            icon: FileSearch
        },
        {
            id: 4,
            title: "Treatment Plan",
            description: "Personalized care path for recovery.",
            icon: HeartPulse
        }
    ];

    return (
        <main className="pb-0 bg-white">
            {/* Section 1: Intro */}
            <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[500px]">
                {/* Background Image */}
                <Image
                    src="/images/services-hero-bg.png"
                    alt="Medical Services Background"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay */}


                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold  mb-6 tracking-tight">World-Class Medical Services</h1>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
                        From advanced diagnostics to complex surgeries, we provide holistic care tailored to your unique health needs.
                    </p>
                </div>
            </section>

            {/* Section 2: Services Grid */}
            <section className="py-24 relative">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Process / How We Treat */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 opacity-50"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to Recovery</h2>
                        <p className="text-slate-400 text-lg">A simple, transparent process designed for your comfort.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent -translate-y-1/2 opacity-30"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {processSteps.map((step, index) => (
                                <div key={step.id} className="relative z-10 text-center group">
                                    <div className="relative inline-flex mb-6">
                                        <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-[var(--color-secondary)] group-hover:border-[var(--color-secondary)] transition-all duration-500 shadow-lg relative z-20">
                                            <step.icon size={28} className="text-[var(--color-secondary)] group-hover:text-white transition-colors" />
                                        </div>
                                        {/* Pulse effect */}
                                        <div className="absolute inset-0 rounded-full bg-[var(--color-secondary)] opacity-0 group-hover:animate-ping"></div>

                                        {/* Step Number Badge */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-slate-900 font-bold flex items-center justify-center border-2 border-slate-900 shadow-sm z-30">
                                            {step.id}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-secondary)] transition-colors">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-blue-600"></div>
                {/* Texture */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-2 text-shadow-sm">Need Specialist Advice?</h2>
                        <p className="text-blue-50 text-lg font-medium">Our doctors are ready to help you with expert medical opinion.</p>
                    </div>
                    <Link href="/appointment" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 border border-transparent hover:border-white/50">
                        Get a Consultation <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
