import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Stethoscope, Activity, HeartPulse, Microscope, Users, Clock } from "lucide-react";
import Link from "next/link";

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

  const testimonials = [
    {
      quote: "The care I received at FortisPlus was exceptional. The doctors were attentive and the facilities are world-class.",
      name: "Sarah Johnson",
      role: "Patient"
    },
    {
      quote: "I highly recommend FortisPlus for their efficient diagnostic services. The staff is professional and caring.",
      name: "Michael Chen",
      role: "Corporate Client"
    },
    {
      quote: "Best medical experience I've had. The appointment process via WhatsApp was so convenient.",
      name: "Emily Davis",
      role: "Patient"
    }
  ];

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Healthcare Services</h2>
            <p className="text-lg text-slate-600">We offer a wide range of medical services to ensure your health and well-being are always in good hands.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-teal-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose FortisPlus?</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Users className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Medical Team</h3>
                    <p className="text-slate-600">Our team consists of highly qualified doctors and specialists with years of experience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Clock className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Support</h3>
                    <p className="text-slate-600">We are always available to handle emergencies and provide round-the-clock care.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Activity className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Technology</h3>
                    <p className="text-slate-600">We use the latest medical technology and state-of-the-art equipment for precise diagnostics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative z-10">
                <div className="bg-teal-100 rounded-2xl h-64 w-full mb-6 flex items-center justify-center">
                  {/* Placeholder Image */}
                  <span className="text-teal-800 font-medium">Modern Facility Image</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold text-slate-900">4.9/5</p>
                    <p className="text-slate-500 text-sm">Patient Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">15+</p>
                    <p className="text-slate-500 text-sm">Years of Trust</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 -right-10 w-full h-full bg-teal-200/50 rounded-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Patient Stories</h2>
            <p className="text-lg text-slate-600">Hear from those who have experienced our care firsthand.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to prioritize your health?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Book an appointment today with trusted specialists and take the first step towards a healthier life.</p>
          <Link href="/appointment" className="btn-primary bg-teal-500 hover:bg-teal-400 border-none text-white text-lg px-8 py-4">
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </>
  );
}
