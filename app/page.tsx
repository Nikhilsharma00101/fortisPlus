import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServiceCard from "@/components/ServiceCard";
import CarePhilosophy from "@/components/CarePhilosophy";
import FeaturedDoctors from "@/components/FeaturedDoctors";
import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";
import { ArrowRight, Stethoscope, Activity, HeartPulse, Microscope } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "General Consultation",
      description: "Comprehensive medical checkups and consultations with experienced physicians for all ages.",
      icon: Stethoscope,
      href: "/services",
    },
    {
      title: "Diagnostics & Lab",
      description: "Advanced diagnostic services including blood tests, X-rays, and MRI scannings.",
      icon: Microscope,
      href: "/services",
    },
    {
      title: "Preventive Care",
      description: "Proactive health management programs, vaccinations, and wellness screenings.",
      icon: HeartPulse,
      href: "/services",
    },
    {
      title: "Specialist Care",
      description: "Access to top specialists in cardiology, neurology, orthopedics, and more.",
      icon: Activity,
      href: "/services",
    },
  ];

  return (
    <main>
      <Hero />
      <TrustIndicators />

      {/* Section 3: Key Services */}
      <section className="py-24 bg-medical-clean relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[500px] h-[500px] bg-[var(--color-secondary)]/10 rounded-full pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[var(--color-primary)] text-sm font-semibold mb-6 shadow-sm">
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm">Comprehensive Healthcare</h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">We offer a wide range of medical services to ensure your health and well-being are always in good hands.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="btn-secondary hover:bg-[var(--color-primary)] hover:text-white border-2">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Doctors */}
      <FeaturedDoctors />

      {/* Section 5: Care Philosophy */}
      <CarePhilosophy />

      {/* Section 6: Testimonials */}
      <TestimonialsSection />

      {/* Section 7: CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        {/* Abstract Wave SVG Background */}
        <div className="absolute inset-0 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-secondary)] to-transparent"></div>
          <svg className="absolute bottom-0 left-0 w-full h-full opacity-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0FB9B1" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-shadow-sm">Ready to prioritize your health?</h2>
          <p className="text-slate-100 text-xl mb-10 max-w-2xl mx-auto font-medium shadow-black/10 text-shadow-sm">Book an appointment today with trusted specialists and take the first step towards a healthier life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="btn-primary bg-gradient-to-r from-[var(--color-secondary)] to-teal-500 hover:shadow-[var(--color-secondary)]/50 border-none">
              Book Your Appointment Now
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-transparent text-white border border-white/30 hover:bg-white/10 flex items-center justify-center gap-2">
              Contact Support <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
