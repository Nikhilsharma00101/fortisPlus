import FAQAccordion from "@/components/FAQAccordion";
import { FileText, CreditCard, ShieldCheck } from "lucide-react";

export const metadata = {
    title: "Patient Resources - FortisPlus",
    description: "FAQs, Insurance information, and health tips.",
};

const faqs = [
    { question: "How do I book an appointment?", answer: "You can book an appointment easily through our website using the Book Appointment page, or by clicking the WhatsApp button to chat with us directly." },
    { question: "What insurance plans do you accept?", answer: "We accept most major insurance plans. Please contact our billing department or check the Insurance section for a detailed list." },
    { question: "Do you offer emergency services?", answer: "Yes, we have a 24/7 dedicated emergency department equipped to handle all medical emergencies." },
    { question: "Can I get my lab results online?", answer: "Yes, registered patients can access their lab results through our patient portal or receive them via email/WhatsApp." },
    { question: "What are your visiting hours?", answer: "General visiting hours are from 10:00 AM to 8:00 PM daily. ICU visiting hours may vary." },
];

export default function Resources() {
    return (
        <div className="pb-20">
            <section className="bg-teal-50 py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Patient Resources</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Everything you need to know for a smooth and comfortable hospital experience.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom grid lg:grid-cols-3 gap-12">
                    {/* Sidebar / Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Insurance</h3>
                            </div>
                            <p className="text-slate-600 mb-4">We work with all major insurance providers to facilitate cashless treatments.</p>
                            <ul className="text-sm text-slate-500 space-y-2 list-disc list-inside">
                                <li>Blue Cross</li>
                                <li>Aetna</li>
                                <li>Cigna</li>
                                <li>UnitedHealthcare</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                                    <CreditCard size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Billing</h3>
                            </div>
                            <p className="text-slate-600 mb-4">Transparent billing with no hidden charges. We accept cards, cash, and online transfers.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                                    <FileText size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Patient Guide</h3>
                            </div>
                            <p className="text-slate-600">Download our comprehensive patient guide for admission and discharge procedures.</p>
                            <button className="text-teal-600 font-medium mt-2 hover:underline">Download PDF</button>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQAccordion key={index} {...faq} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
