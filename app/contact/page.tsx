import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us - FortisPlus",
    description: "Get in touch with us.",
};

export default function Contact() {
    return (
        <div className="pb-20">
            <section className="bg-teal-50 py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Get in touch with our team for inquiries, appointments, or emergency support.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
                                    <p className="text-slate-600 leading-relaxed">Fortis Flt. Lt. Rajan Dhall Hospital,<br />Sector-B, Pocket-1, Vasant Kunj, New Delhi, Delhi 110070</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Phone Numbers</h3>
                                    <p className="text-slate-600">+91 11 4277 6222 (General)</p>
                                    <p className="text-slate-600">+91 11 4277 6444 (Emergency)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email Address</h3>
                                    <p className="text-slate-600">info@fortisplus.com</p>
                                    <p className="text-slate-600">appointments@fortisplus.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Working Hours</h3>
                                    <p className="text-slate-600">Mon - Sat: 8:00 AM - 8:00 PM</p>
                                    <p className="text-slate-600">Sunday: 10:00 AM - 4:00 PM</p>
                                    <p className="text-teal-600 font-medium mt-1">Emergency: 24/7</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="lg:col-span-2 h-[500px] bg-slate-100 rounded-2xl overflow-hidden relative shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4746654898166!2d77.15177027623122!3d28.525416088924254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd687effffff%3A0x6b009e448557ee92!2sFortis%20Flt.%20Lt.%20Rajan%20Dhall%20Hospital%2C%20Vasant%20Kunj!5e0!3m2!1sen!2sin!4v1705671500000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
