import ServiceCard from "@/components/ServiceCard";
import { Stethoscope, Activity, HeartPulse, Microscope, Baby, Brain, Eye, UserPlus } from "lucide-react";

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

    return (
        <div className="pb-20">
            <section className="bg-teal-50 py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        From preventive care to specialized treatments, we offer a full spectrum of medical services designed to meet your needs.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
