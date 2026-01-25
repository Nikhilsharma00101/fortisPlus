"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle, Send, ShieldCheck, UserCheck, Star, Phone } from "lucide-react";

export default function Appointment() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "General Consultation",
        date: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format message for WhatsApp
        const message = `*New Appointment Request*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Date: ${formData.date}
Message: ${formData.message || "N/A"}`;

        // Redirect to WhatsApp
        const phone = "919876543210";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="pb-0 min-h-screen relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[800px] -z-10">
                <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068"
                    alt="Medical Appointment Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-white/30 backdrop-blur-[5px]"></div>

                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-secondary)]/10 rounded-full blur-3xl -mr-40 -mt-40 animate-pulse"></div>
            </div>

            <div className="container-custom pt-24 pb-12 md:pt-32 md:pb-20">
                {/* Reassurance Header */}
                <div className="text-center mb-12 max-w-2xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold mb-6 border border-[var(--color-primary)]/20">
                        <ShieldCheck size={16} /> Secure & Confidential Booking
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Your Health, Our Priority</h1>
                    <p className="text-xl text-slate-600 opacity-90 leading-relaxed font-medium">
                        Book your appointment today and take the first step towards a healthier tomorrow. Quick, easy, and reliable.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 md:p-10 relative"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Calendar className="text-[var(--color-secondary)]" /> Book Your Slot
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Service Required</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all"
                                        >
                                            <option>General Consultation</option>
                                            <option>Cardiology</option>
                                            <option>Pediatrics</option>
                                            <option>Neurology</option>
                                            <option>Diagnostics / Lab</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Preferred Date</label>
                                    <input
                                        required
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Reason for Visit (Optional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all"
                                        placeholder="Briefly describe your symptoms..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center gap-2 text-lg shadow-xl shadow-[var(--color-primary)]/20 hover:shadow-2xl hover:shadow-[var(--color-primary)]/30 hover:-translate-y-1 transform transition-all duration-300"
                                >
                                    Confirm Booking <Send size={20} />
                                </button>
                                <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1">
                                    <ShieldCheck size={12} /> Your personal information is kept strictly confidential.
                                </p>
                            </form>
                        </motion.div>
                    </div>

                    {/* Trust & Safety Side */}
                    <div className="space-y-6">
                        {/* Summary Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Why Choose FortisPlus?</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: Star, text: "Top-Rated Specialists", color: "text-amber-500", bg: "bg-amber-50" },
                                    { icon: Clock, text: "Zero Waiting Time", color: "text-blue-500", bg: "bg-blue-50" },
                                    { icon: UserCheck, text: "Personalized Care", color: "text-teal-500", bg: "bg-teal-50" },
                                    { icon: ShieldCheck, text: "Safe & Sanitized", color: "text-green-500", bg: "bg-green-50" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-medium text-slate-700">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Emergency Card */}
                        <div className="bg-gradient-to-br from-red-500 to-rose-600 p-8 rounded-3xl shadow-lg text-white text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm animate-pulse">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Need Urgent Help?</h3>
                                <p className="text-red-100 text-sm mb-4">Our emergency department is open 24/7 for critical care.</p>
                                <a href="tel:+911142776444" className="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-bold shadow-md hover:bg-red-50 transition-colors">
                                    Call 1066
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
