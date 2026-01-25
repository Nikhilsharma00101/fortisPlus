import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";

export const metadata = {
    title: "Contact Us - FortisPlus",
    description: "Get in touch with us.",
};

export default function Contact() {
    return (
        <main className="pb-0 bg-white">
            {/* Section 1: Contact Header */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-900 overflow-hidden text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
                {/* Curved Shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/10 rounded-full blur-xl -mr-20 -mt-20"></div>

                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-teal-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                        <MessageSquare size={16} /> We&apos;re here to help
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        Whether you have a question about our services, need to book an appointment, or require emergency assistance, our team is ready to listen.
                    </p>
                </div>
            </section>

            {/* Section 2: Contact Form & Info */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-slate-50/50"></div>
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Form (Glassmorphism) */}
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Send us a Message</h2>
                            <form className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all">
                                        <option>General Inquiry</option>
                                        <option>Appointment Issue</option>
                                        <option>Billing Question</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Message</label>
                                    <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 outline-none transition-all"></textarea>
                                </div>
                                <button type="button" className="w-full btn-primary flex items-center justify-center gap-2 text-lg">
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-10 lg:pt-10">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    Reach out to us directly or visit our hospital. We are available 24/7 for emergencies.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Our Location</h3>
                                        <p className="text-slate-600 leading-relaxed">Fortis Flt. Lt. Rajan Dhall Hospital,<br />Sector-B, Pocket-1, Vasant Kunj,<br />New Delhi, Delhi 110070</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Phone Support</h3>
                                        <p className="text-slate-600 mb-1"><span className="font-semibold text-slate-800">General:</span> +91 11 4277 6222</p>
                                        <p className="text-red-500 font-semibold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Emergency: +91 11 4277 6444</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Email</h3>
                                        <p className="text-slate-600">info@fortisplus.com</p>
                                        <p className="text-slate-600">appointments@fortisplus.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Map */}
            <section className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4746654898166!2d77.15177027623122!3d28.525416088924254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd687effffff%3A0x6b009e448557ee92!2sFortis%20Flt.%20Lt.%20Rajan%20Dhall%20Hospital%2C%20Vasant%20Kunj!5e0!3m2!1sen!2sin!4v1705671500000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    className="absolute inset-0"
                ></iframe>
            </section>
        </main>
    );
}
