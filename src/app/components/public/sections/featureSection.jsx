export default function FeatureSection() {
    const features = [
        "Plan your daily tasks clearly and track progress with ease",
        "Start fresh with blank documents and turn ideas into action",
        "Keep notes well structured, easy to find, and always updated",
        "Visualize project timelines clearly and stay on top of deadlines",
    ];

    return (
        <div className="flex justify-center px-5 py-10 mt-5">
            <div className="w-full max-w-[1300px]">
                <div className="space-y-2 text-center">
                    <h3 className="text-sm font-medium tracking-widest text-gray-500">
                        WORK SMARTER
                    </h3>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#2E2E2E]">
                        Powerful Features to Boost Productivity
                    </h1>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full h-[350px] md:h-[400px] rounded-2xl bg-[#F2F2F2] p-10 flex items-end">
                        <p className="text-left text-lg font-semibold text-[#333] leading-relaxed">
                            All-in-one workspace to capture ideas, manage projects,
                            and stay focused designed to keep your workflow simple,
                            efficient, and always organized.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 bg-black rounded-2xl h-[160px] md:h-[190px]"
                            >
                                <p className="text-white leading-relaxed">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
