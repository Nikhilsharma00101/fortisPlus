import { Users, Target, Shield, Award } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "About Us - FortisPlus",
    description: "Learn about FortisPlus mission, vision, and values.",
};

export default function About() {
    return (
        <div className="pb-20">
            {/* Header */}
            <section className="bg-teal-50 py-20">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About FortisPlus</h1>
                    <p className="text-lg text-slate-600 max-w-3xl">
                        We are dedicated to providing compassionate, patient-centered care with excellence in medical practice.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-600">
                                <Target size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To deliver accessible, high-quality healthcare services that meet the diverse needs of our community, ensuring every patient receives personalized attention and the best possible medical outcomes.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                                <Shield size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To be the most trusted healthcare provider, recognized for medical excellence, ethical practices, and a commitment to advancing health and wellness for all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values</h2>
                        <p className="text-slate-600">The principles that guide our work every day.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Compassion", desc: "We treat everyone with kindness and empathy." },
                            { title: "Excellence", desc: "We strive for the highest standards in everything we do." },
                            { title: "Integrity", desc: "We act with honesty and transparency." },
                            { title: "Innovation", desc: "We embrace new technologies to improve care." }
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                                <p className="text-slate-500">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team/Leadership Placeholder */}
            <section className="py-20">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Medical Board</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                                <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                                    Dr. Photo {i}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900">Dr. Name {i}</h3>
                                    <p className="text-teal-600 mb-2">Chief Medical Officer</p>
                                    <p className="text-slate-500 text-sm">20+ years of experience in Cardiology and Hospital Management.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
