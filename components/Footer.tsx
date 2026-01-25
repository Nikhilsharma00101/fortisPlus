import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-11 h-11 flex items-center justify-center">
                                {/* Glass Background with Tilt */}
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl -rotate-3 group-hover:rotate-0 transition-all duration-300 shadow-lg group-hover:shadow-white/5"></div>
                                {/* Icon */}
                                <div className="relative z-10 text-[var(--color-secondary)] transform group-hover:scale-110 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-brand font-extrabold text-white tracking-tight leading-none">
                                    Fortis<span className="text-[var(--color-secondary)]">Plus</span>
                                </span>
                                <span className="text-[0.65rem] font-medium text-slate-400 tracking-widest uppercase ml-0.5 group-hover:text-white transition-colors">Medical </span>
                            </div>
                        </Link>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Advancing healthcare with trust. We provide world-class medical services with a focus on patient care and advanced diagnostics.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-slate-300">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link href="/doctors" className="hover:text-primary transition-colors">Find a Doctor</Link></li>
                            <li><Link href="/appointment" className="hover:text-primary transition-colors">Book Appointment</Link></li>
                            <li><Link href="/resources" className="hover:text-primary transition-colors">Patient Resources</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services" className="hover:text-primary transition-colors">General Consultation</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Cardiology</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Diagnostics & Labs</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Pediatrics</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Emergency Care</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                                <span>Fortis Flt. Lt. Rajan Dhall Hospital, Sector-B, Pocket-1, Vasant Kunj, New Delhi, Delhi 110070</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span>+91 11 4277 6222</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span>contact@fortisplus.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {new Date().getFullYear()} FortisPlus. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
