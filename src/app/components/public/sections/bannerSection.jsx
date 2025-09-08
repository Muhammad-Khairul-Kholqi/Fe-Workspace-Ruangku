import Link from "next/link"

export default function BannerSection() {
    return (
        <div className="flex justify-center px-5 py-10 mt-5">
            <div className="w-full max-w-[1300px] bg-black p-10 rounded-2xl">
                <div className="text-white">
                    <h1 className="text-3xl font-semibold tracking-wide">One Space for Notes, Tasks & Projects.</h1>
                    <p className="text-lg mt-2">Work smarter, stay organized, and get more done.</p>
                </div>

                <div className="flex items-center gap-3 mt-10">
                    <Link href="" className="px-5 py-2 text-center bg-white hover:bg-gray-200">
                        Get started
                    </Link>

                    <Link href="" className="px-5 py-2 text-center border border-gray-200 text-white hover:bg-gray-50 hover:text-black">
                        Get started
                    </Link>
                </div>
            </div>
        </div>
    )
}