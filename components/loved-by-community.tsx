"use client"

export default function LovedByCommunity() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Testimonial
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Add your community testimonials or achievements here */}
                    <div className="bg-card p-6 rounded-lg shadow-lg">
                        <p className="text-muted-foreground">
                            "Mubarak's contributions to the AI community have been invaluable. His expertise and dedication to helping others learn and grow is truly inspiring."
                        </p>
                        <div className="mt-4">
                            <p className="font-semibold">AI Community Member</p>
                        </div>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-lg">
                        <p className="text-muted-foreground">
                            "Working with Mubarak on various projects has been a great experience. His technical skills and collaborative approach make him an excellent team member."
                        </p>
                        <div className="mt-4">
                            <p className="font-semibold">Project Collaborator</p>
                        </div>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-lg">
                        <p className="text-muted-foreground">
                            "Mubarak's innovative solutions and problem-solving abilities have helped us achieve remarkable results in our AI initiatives."
                        </p>
                        <div className="mt-4">
                            <p className="font-semibold">Industry Professional</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 