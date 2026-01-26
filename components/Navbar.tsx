"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Pages that have transparent/light nav initially due to dark backgrounds
    const darkHeroPaths = ["/", "/appointment", "/contact"];
    const isDarkHero = darkHeroPaths.includes(pathname);

    // Determine if we should show dark text or light text (always dark if menu is open)
    const useDarkText = scrolled || !isDarkHero || isOpen;

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-500",
                (scrolled || !isDarkHero) && !isOpen
                    ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-2 shadow-sm"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 z-50 group">
                        <div className="relative w-11 h-11 flex items-center justify-center">
                            {/* Main Background with Tilt */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl rotate-3 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-[var(--color-primary)]/40"></div>
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                            {/* Icon */}
                            <div className="relative z-10 text-white transform group-hover:scale-110 transition-transform duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-2xl font-brand font-extrabold tracking-tight leading-none transition-colors duration-300",
                                useDarkText ? "text-slate-900" : "text-white"
                            )}>
                                Fortis<span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Plus</span>
                            </span>
                            <span className={cn(
                                "text-[0.65rem] font-medium tracking-widest uppercase ml-0.5 transition-colors duration-300",
                                useDarkText ? "text-slate-500" : "text-slate-300"
                            )}>Medical </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className={cn(
                            "flex items-center gap-1 rounded-full backdrop-blur-md px-2 py-1.5 border transition-all duration-300",
                            useDarkText
                                ? "bg-white/50 border-transparent hover:border-slate-100"
                                : "bg-white/10 border-white/10 hover:bg-white/20"
                        )}>
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-brand font-medium transition-all duration-300",
                                        pathname === item.href
                                            ? (useDarkText ? "bg-slate-900 text-white shadow-md" : "bg-white text-[var(--color-primary)] shadow-md")
                                            : (useDarkText ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50" : "text-white/80 hover:text-white hover:bg-white/10")
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/appointment"
                            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-[1px] shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <div className="relative flex items-center gap-2 bg-white rounded-full px-6 py-3 transition-all duration-300 group-hover:bg-transparent">
                                <Calendar size={18} className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                                <span className="font-brand font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] group-hover:text-white transition-all duration-300">
                                    Book Now
                                </span>
                                <ArrowRight size={16} className="text-[var(--color-secondary)] group-hover:text-white transition-colors duration-300 -ml-1 group-hover:translate-x-1" />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center z-50">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-2 rounded-md transition-colors w-10 h-10 flex items-center justify-center",
                                useDarkText ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
                            )}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden animate-in fade-in slide-in-from-bottom-5 duration-100 flex flex-col pt-24 px-6 overflow-y-auto">
                    <div className="flex flex-col space-y-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-3xl font-brand font-bold tracking-tight transition-colors",
                                    pathname === item.href ? "text-[var(--color-primary)]" : "text-slate-400 hover:text-slate-900"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="h-px bg-slate-100 w-full my-6"></div>
                        <Link
                            href="/appointment"
                            onClick={() => setIsOpen(false)}
                            className="btn-primary w-full justify-center flex items-center gap-2 py-4 text-lg"
                        >
                            <Calendar size={20} /> Book Appointment
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
