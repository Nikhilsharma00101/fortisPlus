"use client";

import Link from "next/link";
import DoctorCard from "./DoctorCard";
import { ArrowRight, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const featuredDoctors = [
    { name: "Dr. Sarah Wilson", specialization: "Cardiology", experience: "15 Years", image: "/doctors/dr_sarah_wilson.png" },
    { name: "Dr. James Carter", specialization: "Neurology", experience: "12 Years", image: "/doctors/dr_james_carter.png" },
    { name: "Dr. Emily Chen", specialization: "Pediatrics", experience: "10 Years", image: "/doctors/dr_emily_chen.png" },
    { name: "Dr. Michael Brown", specialization: "Orthopedics", experience: "18 Years", image: "/doctors/dr_michael_brown.png" },
];

export default function FeaturedDoctors() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
                            <Stethoscope size={16} /> Meet Our Experts
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Top Specialists, Personalised Care.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We have assembled a team of the finest medical minds to ensure you receive the best possible treatment.
                        </p>
                    </div>
                    <Link href="/doctors" className="btn-secondary hidden md:flex items-center gap-2 group">
                        View All Doctors <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredDoctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <DoctorCard key={index} {...doctor} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/doctors" className="btn-secondary flex items-center justify-center gap-2 group w-full">
                        View All Doctors <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
