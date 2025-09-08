import Image from "next/image";
import MainLogo from "@/app/assets/mainLogo.png";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="flex justify-center px-5 py-10 mt-5 bg-black">
            <div className="w-full max-w-[1300px]">
                <div className="flex justify-center">
                    <div className="flex items-center gap-2">
                        <Image
                            src={MainLogo}
                            width={35}
                            height={35}
                            alt="Logo Ruangku"
                            className="w-full max-w-[35px]"
                        />
                        <span className="text-white text-xl">Ruangku</span>
                    </div>
                </div>

                <p className="text-center mt-3 text-gray-400">
                    Discover Productivity in One Smart Workspace
                </p>

                <hr className="border border-gray-900 my-5" />

                <p className="text-center mt-3 text-white">
                    Copyright © {year} by Ruangku
                </p>
            </div>
        </div>
    );
}
