import DoctorCard from "@/components/DoctorCard";
import { BadgeCheck, Stethoscope, Award, HeartHandshake } from "lucide-react";

export const metadata = {
    title: "Our Specialists - FortisPlus",
    description: "Meet our team of experienced doctors and specialists.",
};

const doctors = [
    { name: "Dr. Sarah Wilson", specialization: "Cardiology", experience: "15 Years", image: "/doctors/dr_sarah_wilson.png" },
    { name: "Dr. James Carter", specialization: "Neurology", experience: "12 Years", image: "/doctors/dr_james_carter.png" },
    { name: "Dr. Emily Chen", specialization: "Pediatrics", experience: "10 Years", image: "/doctors/dr_emily_chen.png" },
    { name: "Dr. Michael Brown", specialization: "Orthopedics", experience: "18 Years", image: "/doctors/dr_michael_brown.png" },
    { name: "Dr. Linda Taylor", specialization: "Dermatology", experience: "8 Years", image: "/doctors/dr_linda_taylor.png" },
    { name: "Dr. Robert Lee", specialization: "General Medicine", experience: "20 Years", image: "/doctors/dr_robert_lee.png" },
    { name: "Dr. Karen Martinez", specialization: "Gynecology", experience: "14 Years", image: "/doctors/dr_karen_martinez.png" },
    { name: "Dr. David Anderson", specialization: "Ophthalmology", experience: "16 Years", image: "/doctors/dr_david_anderson.png", isAvailable: false },
];

import Image from "next/image";

export default function Doctors() {
    return (
        <main className="pb-0 bg-white">
            {/* Section 1: Page Header */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-52 overflow-hidden flex items-center justify-center min-h-[400px]">
                {/* Background Image */}
                <Image
                    src="/images/doctors-hero-bg.png"
                    alt="Doctors Team Background"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay - adjusting opacity to ensure text is readable but image is visible */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t "></div>

                <div className="container-custom relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-teal-100/50 text-teal-700 text-sm font-semibold mb-6 shadow-sm">
                        <BadgeCheck size={16} /> Verified Specialists
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm">Meet Our Specialists</h1>
                    <p className="text-xl text-slate-800 max-w-2xl mx-auto leading-relaxed font-medium">
                        Our team of highly qualified doctors collaborates to provide you with the most advanced and compassionate care possible.
                    </p>
                </div>
            </section>

            {/* Section 2: Doctors Grid */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {doctors.map((doctor, index) => (
                            <DoctorCard key={index} {...doctor} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Why Our Doctors */}
            <section className="py-24 bg-medical-subtle relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-white/50"></div>
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Trust FortisPlus Doctors?</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We believe that great healthcare starts with great people. Our rigorous selection process ensures that you are treated by the best minds in medicine.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Award, title: "Board Certified", desc: "All our specialists are board-certified and hold degrees from top institutions." },
                                    { icon: HeartHandshake, title: "Empathetic Care", desc: "We prioritize doctors who listen and treat patients with genuine compassion." },
                                    { icon: Stethoscope, title: "10+ Years Exp.", desc: "Our average specialist has over a decade of clinical experience." },
                                    { icon: BadgeCheck, title: "Peer Recognized", desc: "Our doctors are regularly voted as top specialists by their peers." }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-3">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[var(--color-primary)]">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Side */}
                        <div className="relative">
                            <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] opacity-10 absolute -inset-4 rotate-3"></div>
                            <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl aspect-square">
                                <Image
                                    src="/images/doctor-patient-care.png"
                                    alt="Doctor caring for patient"
                                    fill
                                    className="object-cover"
                                />
                                {/* Optional overlay badge */}
                                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-[150px]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Rated</span>
                                    </div>
                                    <div className="text-2xl font-bold text-slate-900 leading-none">#1</div>
                                    <div className="text-xs text-slate-600 font-medium">In Patient Care</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
