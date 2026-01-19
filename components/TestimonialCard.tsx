import { Quote, Star } from "lucide-react";

interface TestimonialProps {
    quote: string;
    name: string;
    role?: string;
}

export default function TestimonialCard({ quote, name, role = "Patient" }: TestimonialProps) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
            <Quote size={40} className="text-teal-100 absolute top-8 right-8" />
            <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            <p className="text-slate-600 italic mb-6 leading-relaxed relative z-10">"{quote}"</p>
            <div>
                <h4 className="text-lg font-bold text-slate-900">{name}</h4>
                <p className="text-sm text-slate-500">{role}</p>
            </div>
        </div>
    );
}
