import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
                    <div className="w-full h-[350px] md:h-[400px] rounded-2xl bg-[#F2F2F2]/60 p-10 flex flex-col justify-between">
                        <div className="flex">
                            <div className="border border-gray-200 px-5 py-2 rounded-full">
                                <span>Features</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                                From notes to projects, discover tools that make your work
                                <span className="text-[#626262]"> easier and more organized</span>
                            </p>
                            <div className="flex items-center gap-2">
                                <Link
                                    href=""
                                    className="border border-gray-200 px-5 py-2 rounded-full hover:scale-105 duration-300"
                                >
                                    <span>Try Now</span>
                                </Link>
                                <Link
                                    href=""
                                    className="border border-gray-200 rounded-full bg-black flex items-center justify-center w-10 h-10 group overflow-hidden relative"
                                >
                                    <ArrowUpRight className="text-white transform transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-0" />
                                    <ArrowUpRight className="text-white absolute transform translate-x-[-10px] translate-y-[10px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gradient-to-br from-black to-[#626262] rounded-2xl h-[160px] md:h-[190px]"
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
