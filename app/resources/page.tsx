import FAQAccordion from "@/components/FAQAccordion";
import { FileText, Download, ArrowRight, BookOpen, HeartPulse, Activity } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Patient Resources - FortisPlus",
    description: "FAQs, Insurance information, and health tips.",
};

const articles = [
    { title: "Understanding Heart Health", slug: "understanding-heart-health", category: "Cardiology", readTime: "5 min read", date: "Oct 12, 2023", image: "bg-red-50", icon: HeartPulse, color: "text-red-500" },
    { title: "Nutrition for Recovery", slug: "nutrition-for-recovery", category: "Wellness", readTime: "3 min read", date: "Sep 28, 2023", image: "bg-green-50", icon: Activity, color: "text-green-500" },
    { title: "Preparing for Surgery", slug: "preparing-for-surgery", category: "Guide", readTime: "7 min read", date: "Nov 05, 2023", image: "bg-blue-50", icon: FileText, color: "text-blue-500" },
];

const faqs = [
    { question: "How do I book an appointment?", answer: "You can book an appointment easily through our website using the Book Appointment page, or by clicking the WhatsApp button to chat with us directly." },
    { question: "What insurance plans do you accept?", answer: "We accept most major insurance plans. Please contact our billing department or check the Insurance section for a detailed list." },
    { question: "Do you offer emergency services?", answer: "Yes, we have a 24/7 dedicated emergency department equipped to handle all medical emergencies." },
    { question: "Can I get my lab results online?", answer: "Yes, registered patients can access their lab results through our patient portal or receive them via email/WhatsApp." },
    { question: "What are your visiting hours?", answer: "General visiting hours are from 10:00 AM to 8:00 PM daily. ICU visiting hours may vary." },
];

export default function Resources() {
    return (
        <main className="pb-0 bg-white">
            {/* Section 1: Educational Header */}
            <section className="relative pt-42 pb-24 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 mix-blend-multiply"></div>
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/50 border border-indigo-200 text-indigo-700 text-sm font-semibold mb-6">
                        <BookOpen size={16} /> Knowledge Hub
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Health Resources & Guides</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Empowering you with the right information to make informed decisions about your health.
                    </p>
                </div>
            </section>

            {/* Section 2: Articles / Guides */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Latest Articles</h2>
                            <p className="text-slate-500">Expert advice and medical insights.</p>
                        </div>
                        <Link href="#" className="hidden md:flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all">
                            View All <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {articles.map((article, index) => (
                            <div key={index} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className={`h-48 ${article.image} flex items-center justify-center relative overflow-hidden`}>
                                    <article.icon size={48} className={`${article.color} opacity-80 group-hover:scale-110 transition-transform duration-500`} />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                        {article.title}
                                    </h3>
                                    <Link href={`/resources/articles/${article.slug}`} className="inline-flex items-center text-sm font-semibold text-slate-500 group-hover:text-[var(--color-primary)] transition-colors">
                                        Read Article <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Section 3: Downloadables & FAQ */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Downloadables */}
                        <div className="lg:col-span-1 space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Patient Downloads</h3>

                            {[
                                { title: "Patient Handbook", size: "2.4 MB" },
                                { title: "Insurance Guide", size: "1.1 MB" },
                                { title: "Admission Form", size: "0.8 MB" }
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-center justify-between hover:bg-slate-100 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white p-2 rounded-lg shadow-sm text-slate-400 group-hover:text-[var(--color-primary)] transition-colors">
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800">{item.title}</p>
                                            <p className="text-xs text-slate-500">PDF • {item.size}</p>
                                        </div>
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm group-hover:text-[var(--color-primary)] group-hover:shadow-md transition-all">
                                        <Download size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* FAQ */}
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Common Questions</h3>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <FAQAccordion key={index} {...faq} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
