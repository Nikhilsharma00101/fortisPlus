"use client";

import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";

const testimonials = [
    {
        quote: "The care I received at FortisPlus was exceptional. The doctors were attentive, and the facilities are world-class. I felt safe and well-cared for throughout my recovery.",
        name: "Anjali Sharma",
        role: "Recovered Patient"
    },
    {
        quote: "Booking an appointment was seamless, and I didn't have to wait at all. Dr. Wilson explained everything clearly. Highly recommend for anyone looking for quality healthcare.",
        name: "Rahul Verma",
        role: "Regular Checkup"
    },
    {
        quote: "The emergency team saved my father's life. Their quick response and expertise are unmatched. We are forever grateful to the entire staff at FortisPlus.",
        name: "Priya Mehta",
        role: "Family Member"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-200/40 to-emerald-200/40 blur-[60px] opacity-100"
                />

                <motion.div
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 blur-[60px] opacity-100"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-cyan-200/40 blur-[50px] opacity-100"
                />
            </div>

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(#0FB9B1 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-100 text-teal-600 text-sm font-semibold mb-6 shadow-sm"
                    >
                        <MessageSquareQuote size={16} /> Patient Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Stories of Hope & Healing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        Real stories from real people who entrusted us with their health.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        >
                            <TestimonialCard {...testimonial} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
