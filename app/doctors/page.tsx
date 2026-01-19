import DoctorCard from "@/components/DoctorCard";

export const metadata = {
    title: "Our Specialists - FortisPlus",
    description: "Meet our team of experienced doctors and specialists.",
};

const doctors = [
    { name: "Dr. Sarah Wilson", specialization: "Cardiology", experience: "15 Years", image: "/doctors/dr_sarah_wilson.png" },
    { name: "Dr. James Carter", specialization: "Neurology", experience: "12 Years", image: "/doctors/dr_james_carter.png" },
    { name: "Dr. Emily Chen", specialization: "Pediatrics", experience: "10 Years", image: "/doctors/dr_emily_chen.png" },
    { name: "Dr. Michael Brown", specialization: "Orthopedics", experience: "18 Years", image: "/doctors/dr_michael_brown.png" },
    { name: "Dr. Linda Taylor", specialization: "Dermatology", experience: "8 Years", image: "/doctors/dr_linda_taylor.png" },
    { name: "Dr. Robert Lee", specialization: "General Medicine", experience: "20 Years", image: "/doctors/dr_robert_lee.png" },
    { name: "Dr. Karen Martinez", specialization: "Gynecology", experience: "14 Years", image: "/doctors/dr_karen_martinez.png" },
    { name: "Dr. David Anderson", specialization: "Ophthalmology", experience: "16 Years", image: "/doctors/dr_david_anderson.png", isAvailable: false },
];

export default function Doctors() {
    return (
        <div className="pb-20">
            <section className="bg-teal-50 py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Specialists</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Meet our team of highly qualified doctors dedicated to your health and well-being.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {doctors.map((doctor, index) => (
                            <DoctorCard key={index} {...doctor} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
