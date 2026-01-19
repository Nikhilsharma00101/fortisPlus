"use client";

import Link from "next/link";
import { ArrowRight, Activity, Heart, ShieldPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-teal-50 to-white overflow-hidden py-20 lg:py-32">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-teal-600 animate-pulse"></span>
                            Leading Medical Excellence
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Fortis<span className="text-primary">Plus</span> – Advancing Healthcare with Trust
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Experience world-class medical care with our team of expert doctors and state-of-the-art facilities. Your health is our priority.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/appointment" className="btn-primary text-center">
                                Book Appointment
                            </Link>
                            <Link href="/contact" className="btn-outline text-center flex items-center justify-center gap-2">
                                Contact Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-primary">50+</p>
                                <p className="text-sm text-slate-600">Specialist Doctors</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">10k+</p>
                                <p className="text-sm text-slate-600">Happy Patients</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">24/7</p>
                                <p className="text-sm text-slate-600">Emergency Support</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

                        {/* Placeholder for Medical Image - using a gradient/shape for now as per instructions (no lorem ipsum, pro design) */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                            {/* In a real app, use an image here. Using a stylized abstract representation since I don't have images. */}
                            <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl h-[500px] w-full flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                                <ShieldPlus className="text-white/20 w-64 h-64 absolute -bottom-12 -right-12" />
                                <Activity className="text-white/20 w-32 h-32 absolute top-12 left-12" />
                                <div className="text-white text-center p-8 z-10">
                                    <Heart className="w-20 h-20 mx-auto mb-4 fill-white text-white/50" />
                                    <p className="text-2xl font-bold">Trusted Care</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
