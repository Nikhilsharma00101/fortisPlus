
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Tag, Share2 } from "lucide-react";

// Article Data
const articlesData: Record<string, {
    title: string;
    description: string;
    content: React.ReactNode;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
}> = {
    "understanding-heart-health": {
        title: "Understanding Heart Health",
        description: "A comprehensive guide to keeping your heart strong and healthy through lifestyle changes and regular checkups.",
        category: "Cardiology",
        author: "Dr. Sarah Wilson",
        date: "Oct 12, 2023",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80",
        content: (
            <div className="space-y-6 text-slate-700 leading-loose">
                <p>
                    Your heart is the engine of your body, working tirelessly to pump blood and oxygen to every cell.
                    Maintaing heart health is not just about avoiding disease—it&apos;s about building a lifestyle that supports longevity and vitality.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Pillars of Heart Health</h3>
                <p>
                    Cardiologists agree that heart health rests on four main pillars: diet, exercise, stress management, and sleep.
                    Neglecting one can often impact the others.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Balanced Diet:</strong> Focus on whole foods, rich in fiber, healthy fats (like avocado and olive oil), and lean proteins.</li>
                    <li><strong>Regular Activity:</strong> Aim for at least 150 minutes of moderate aerobic activity per week.</li>
                    <li><strong>Stress Reduction:</strong> Chronic stress raises blood pressure. Techniques like meditation or simple deep breathing can help.</li>
                    <li><strong>Quality Sleep:</strong> Sleep is when your body repairs itself. Aim for 7-9 hours per night.</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Screening & Prevention</h3>
                <p>
                    Regular check-ups are crucial. Conditions like hypertension (high blood pressure) often have no obvious symptoms until it&apos;s too late.
                    We recommend annual check-ups starting at age 30, or earlier if you have a family history of heart disease.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg italic">
                    &quot;Prevention is always better than cure. Small daily habits compound over years to create a lifetime of heart health.&quot;
                </div>
            </div>
        )
    },
    "nutrition-for-recovery": {
        title: "Nutrition for Recovery",
        description: "The essential nutrients your body needs to heal faster after surgery or illness.",
        category: "Wellness",
        author: "Dr. Robert Lee",
        date: "Sep 28, 2023",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80",
        content: (
            <div className="space-y-6 text-slate-700 leading-loose">
                <p>
                    Recovering from an illness or surgery increases your body&apos;s energy demands.
                    Proper nutrition provides the building blocks—protein, vitamins, and minerals—needed to repair tissue and fight infection.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Protein: The Building Block</h3>
                <p>
                    Protein is essential for wound healing and immune function. During recovery, your protein needs may increase.
                    Include sources like lean meats, beans, eggs, and greek yogurt in every meal.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Hydration Matters</h3>
                <p>
                    Water transports nutrients and oxygen to cells and removes waste. Dehydration can delay healing and cause fatigue.
                    Aim for clear, pale urine as a sign of good hydration.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Vitamins C and Zinc</h3>
                <p>
                    Did you know Vitamin C is crucial for collagen formation? Collagen is the main protein in scar tissue.
                    Zinc is also vital for skin integrity. Citrus fruits, strawberries, nuts, and seeds are great boosters.
                </p>
            </div>
        )
    },
    "preparing-for-surgery": {
        title: "Preparing for Surgery",
        description: "A step-by-step guide to help you prepare physically and mentally for your upcoming procedure.",
        category: "Guide",
        author: "FortisPlus Surgical Team",
        date: "Nov 05, 2023",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80",
        content: (
            <div className="space-y-6 text-slate-700 leading-loose">
                <p>
                    Surgery can be daunting, but preparation is half the battle.
                    Being prepared reduces anxiety and can actually speed up your recovery time.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. The Week Before</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Review Medications:</strong> Some medicines (like blood thinners) may need to be paused. Consult your doctor.</li>
                    <li><strong>Arrange Support:</strong> You will likely need someone to drive you home and stay with you for the first 24 hours.</li>
                    <li><strong>Prepare Your Home:</strong> Place essential items within arm&apos;s reach to avoid straining when you return.</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. The Night Before</h3>
                <p>
                    Follow the fasting instructions strictly. Usually, this means no food or drink after midnight.
                    This is critical for anesthesia safety. Shower with the provided antibacterial soap if instructed.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Mental Preparation</h3>
                <p>
                    It&apos;s normal to feel nervous. Practice deep breathing, listen to calming music, and trust your medical team.
                    We are here to take care of you every step of the way.
                </p>
            </div>
        )
    }
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articlesData[slug];

    if (!article) {
        notFound();
    }

    return (
        <main className="bg-white pb-24">
            {/* Hero Header */}
            <div className="relative h-[400px] w-full">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/60"></div>

                <div className="absolute inset-0 flex items-center">
                    <div className="container-custom">
                        <Link href="/resources" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                            <ArrowLeft size={20} className="mr-2" /> Back to Resources
                        </Link>
                        <div className="max-w-3xl">
                            <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wide">
                                {article.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {article.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-medium">
                                <span className="flex items-center gap-2"><User size={16} /> {article.author}</span>
                                <span className="flex items-center gap-2"><Calendar size={16} /> {article.date}</span>
                                <span className="flex items-center gap-2"><Clock size={16} /> {article.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="container-custom -mt-20 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                    {/* Share / Actions */}
                    <div className="flex justify-between items-center border-b border-slate-100 pb-8 mb-8">
                        <p className="text-xl md:text-2xl font-serif italic text-slate-500">
                            {article.description}
                        </p>
                        <button className="hidden sm:flex items-center gap-2 text-[var(--color-primary)] font-bold bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                            <Share2 size={18} /> Share
                        </button>
                    </div>

                    {/* Main Text */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        {article.content}
                    </div>

                    {/* Footer Tag */}
                    <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-2 text-slate-500">
                        <Tag size={18} />
                        <span className="font-medium">Filed under: {article.category}, Health, Education</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
