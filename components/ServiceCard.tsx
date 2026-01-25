import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
    return (
        <div className="relative p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-secondary)]/20 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-500 ease-out"></div>

            <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-[var(--color-secondary)]/10 border border-white/60 shadow-inner flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                    <Icon size={32} className="text-[var(--color-primary)]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                    {description}
                </p>

                <Link href={href} className="inline-flex items-center text-[var(--color-primary)] font-semibold group-hover:text-[var(--color-secondary)] transition-colors">
                    Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
