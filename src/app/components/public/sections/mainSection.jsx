import Link from "next/link"

export default function MainSection() {
    const stats = [
        { value: "100+", label: "DOCUMENTS CREATED" },
        { value: "45+", label: "HAPPY USERS" },
        { value: "24/7", label: "SUPPORT AVAILABLE" },
    ]

    return (
        <div className="flex justify-center px-5 py-10 bg-black">
            <div className="w-full max-w-[1300px] text-white">
                <h1 className="text-center text-4xl md:text-6xl font-semibold">
                    One Space for All <br /> <span className="text-[#626262]">Your Ideas & Projects</span>
                </h1>

                <div className="flex justify-center mt-5">
                    <p className="text-center w-full max-w-[550px] text-sm md:text-base">
                        Organize notes, manage tasks, and grow your ideas seamlessly in one clean,
                        professional workspace designed to keep you focused and productive.
                    </p>
                </div>

                <div className="flex justify-center mt-10">
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href=""
                            className="px-5 py-3 rounded-lg bg-[#FFC108]/20 hover:bg-[#FFC108]/30 w-full sm:w-auto text-center text-[#FFC108]"
                        >
                            Get started
                        </Link>

                        <Link
                            href=""
                            className="px-5 py-3 rounded-lg border border-[#FFC108]/20 hover:bg-[#FFC108]/10 w-full sm:w-auto text-center text-[#FFC108]"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-3xl">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center space-y-3">
                                <h3 className="text-3xl md:text-4xl font-semibold">{stat.value}</h3>
                                <h4 className="text-xs text-center">{stat.label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
