"use client";

import { motion } from "framer-motion";
import { Award, Users, Activity, Clock } from "lucide-react";

const stats = [
    {
        id: 1,
        value: "50+",
        label: "Specialist Doctors",
        icon: Users,
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        id: 2,
        value: "10k+",
        label: "Happy Patients",
        icon: Activity,
        color: "text-teal-600",
        bg: "bg-teal-100",
    },
    {
        id: 3,
        value: "15+",
        label: "Years of Experience",
        icon: Award,
        color: "text-indigo-600",
        bg: "bg-indigo-100",
    },
    {
        id: 4,
        value: "24/7",
        label: "Emergency Support",
        icon: Clock,
        color: "text-red-500",
        bg: "bg-red-100",
    },
];

export default function TrustIndicators() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="medical-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" className="text-slate-900 fill-current" />
                            <path d="M20 20h4M22 18v4" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#medical-pattern)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                            <p className="text-slate-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Strip */}
                <div className="mt-16 pt-10 border-t border-slate-200 flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for logos */}
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
                        <Award className="w-8 h-8 text-teal-600" /> NABH Accredited
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
                        <ShieldPlus className="w-8 h-8 text-blue-600" /> ISO 9001:2015
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
                        SafeCare Certified
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShieldPlus(props: React.ComponentProps<"svg">) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="M8 11h8" />
            <path d="M12 7v8" />
        </svg>
    )
}
