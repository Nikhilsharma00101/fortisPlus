import Image from "next/image";
import Link from "next/link";
import { UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface DoctorProps {
    name: string;
    specialization: string;
    experience: string;
    image?: string;
    isAvailable?: boolean;
}

export default function DoctorCard({ name, specialization, experience, image, isAvailable = true }: DoctorProps) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 border border-slate-100/60 relative">
            <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                        {/* Placeholder Avatar */}
                        <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center">
                            <UserCheck size={40} className="text-slate-400" />
                        </div>
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Floating Action Button */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <Link href="/appointment" className="btn-primary w-full py-3 text-sm flex items-center justify-center">
                        Book Appointment
                    </Link>
                </div>
            </div>

            <div className="p-6 relative z-10 bg-white">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-wider bg-[var(--color-secondary)]/10 px-2 py-1 rounded inline-block">
                        {specialization}
                    </p>
                    <div className={cn(
                        "w-3 h-3 rounded-full shadow-sm",
                        isAvailable ? "bg-green-500 shadow-green-500/50" : "bg-red-500"
                    )} title={isAvailable ? "Available" : "Unavailable"}></div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">{name}</h3>
                <p className="text-slate-500 text-sm font-medium">{experience} Experience</p>
            </div>
        </div>
    );
}
