export const metadata = {
    title: "Terms of Service - FortisPlus",
};

export default function Terms() {
    return (
        <div className="container-custom py-20 max-w-4xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms of Service</h1>
            <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                    By accessing and using the FortisPlus website and services, you agree to be bound by these Terms of Service.
                </p>

                <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Medical Disclaimer</h2>
                <p>
                    The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
                    Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>

                <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Use of Services</h2>
                <p>
                    You agree to use our services only for lawful purposes. You are prohibited from using the site to compromise security or tamper with system resources.
                </p>
            </div>
        </div>
    );
}
