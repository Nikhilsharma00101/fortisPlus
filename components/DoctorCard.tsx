import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
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
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
            <div className="h-64 bg-slate-200 relative overflow-hidden group">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                        <span className="text-lg font-medium">Photo of {name}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Link href="/appointment" className="w-full btn-primary text-center text-sm py-2">
                        Book Appointment
                    </Link>
                </div>
            </div>

            <div className="p-6">
                <p className="text-teal-600 text-sm font-semibold mb-1 uppercase tracking-wider">{specialization}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
                <p className="text-slate-500 text-sm mb-4">{experience} Experience</p>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                    <div className={cn(
                        "font-medium text-sm flex items-center transition-colors",
                        isAvailable ? "text-slate-700" : "text-red-500"
                    )}>
                        <Calendar size={16} className="mr-2" />
                        {isAvailable ? "Available Today" : "Not Available Today"}
                    </div>
                </div>
            </div>
        </div>
    );
}
