export const metadata = {
    title: "Disclaimer - FortisPlus",
};

export default function Disclaimer() {
    return (
        <div className="container-custom py-20 max-w-4xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Medical Disclaimer</h1>
            <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-6 p-6 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800 font-medium">
                    If you are experiencing a medical emergency, please call emergency services immediately. Do not rely on this website for emergency medical assistance.
                </p>

                <p className="mb-4">
                    The information provided on FortisPlus is for general educational and informational purposes only.
                    It is not intended to amount to advice on which you should rely.
                </p>

                <p className="mb-4">
                    Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up to date.
                </p>
            </div>
        </div>
    );
}
