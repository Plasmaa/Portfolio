'use client';

const experiences = [
    {
        company: "Edulinking Career",
        role: "Research Intern",
        date: "August 2025 – Present",
        tags: ["Research", "AI", "Analysis"]
    },
    {
        company: "AIUB",
        role: "BSc in Computer Science & Engineering",
        date: "2023 – Present",
        tags: ["CSE", "Development", "AI"]
    }
];

export default function Experience() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="font-medium">Experiences</span>
                </div>
                <h2 className="text-5xl font-bold max-w-xl">Explore My Design Journey</h2>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="group flex flex-col md:flex-row justify-between items-start border-b border-gray-100 pb-12 hover:border-gray-300 transition-colors">
                        <div className="md:w-1/3 mb-4 md:mb-0">
                            <h3 className="text-2xl font-medium mb-2">{exp.company}</h3>
                            <p className="text-secondary text-sm">{exp.date}</p>
                        </div>

                        <div className="md:w-1/3 mb-4 md:mb-0">
                            <p className="text-secondary">{exp.role}</p>
                        </div>

                        <div className="md:w-1/3 flex justify-end gap-2">
                            {exp.tags.map((tag, i) => (
                                <span key={i} className="px-4 py-1 rounded-full border border-gray-200 text-sm text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
