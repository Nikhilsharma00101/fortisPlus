export const metadata = {
    title: "Privacy Policy - FortisPlus",
};

export default function PrivacyPolicy() {
    return (
        <div className="container-custom pt-32 pb-20 max-w-4xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
                <p>
                    We collect information that you provide directly to us when you book appointments, contact us, or use our services.
                    This may include your name, phone number, email address, and medical inquiry details.
                </p>

                <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
                <p>
                    We use your information to provide medical services, communicate with you about your appointments,
                    and improve our healthcare offerings. We do not sell your personal data.
                </p>

                <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, or misuse.
                </p>
            </div>
        </div>
    );
}
