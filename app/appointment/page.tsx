"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle, Send } from "lucide-react";

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
        const phone = "919876543210"; // Replaced with actual Indian support number
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Form Side */}
                    <div className="p-8 md:p-12 w-full md:w-2/3">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Book an Appointment</h1>
                        <p className="text-slate-600 mb-8">Fill the form below and we will confirm your slot via WhatsApp.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
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

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                                <input
                                    required
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                    placeholder="Briefly describe your symptoms or inquiry..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
                            >
                                <Send size={20} />
                                Book via WhatsApp
                            </button>
                            <p className="text-xs text-slate-500 text-center mt-4">
                                By booking, you agree to receive appointment updates via WhatsApp.
                            </p>
                        </form>
                    </div>

                    {/* Info Side */}
                    <div className="bg-teal-600 p-8 md:p-12 w-full md:w-1/3 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Clock className="shrink-0 mt-1 alpha-80" />
                                    <div>
                                        <p className="font-semibold">Working Hours</p>
                                        <p className="text-teal-100 text-sm">Mon - Sat: 8AM - 8PM</p>
                                        <p className="text-teal-100 text-sm">Sun: 10AM - 4PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MessageCircle className="shrink-0 mt-1 alpha-80" />
                                    <div>
                                        <p className="font-semibold">Emergency</p>
                                        <p className="text-teal-100 text-sm">24/7 Support Available</p>
                                        <p className="text-teal-100 text-sm">+91 11 4277 6444</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12">
                            <QuoteBox />
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-teal-700 rounded-full blur-3xl opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function QuoteBox() {
    return (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <p className="italic text-teal-50 mb-4">"Health is not valued till sickness comes."</p>
            <p className="font-bold text-sm">— Dr. Thomas Fuller</p>
        </div>
    );
}
