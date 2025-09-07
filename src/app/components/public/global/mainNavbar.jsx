'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MainLogo from "@/app/assets/mainLogo.png"

export default function MainNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Features", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Contact", href: "#" },
    ];

    const authLinks = [
        { name: "Sign In", href: "/signin", className: "border border-[#1A1A1C] bg-balck px-4 py-2 rounded-lg text-white hover:bg-[#1A1A1C]/40" },
        { name: "Sign Up", href: "/signup", className: "bg-[#1A1A1C] px-4 py-2 rounded-lg text-white hover:bg-[#1A1A1C]/90" },
    ];

    return (
        <nav className="fixed left-0 right-0 top-0 z-50">
            <div className="flex justify-center px-5 py-3 bg-black">
                <div className="w-full max-w-[1300px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-10">
                            <Link href="/">
                                <Image
                                    src={MainLogo}
                                    width={35}
                                    height={35}
                                    alt="Logo Ruangku"
                                    className="w-full max-w-[35px]"
                                />
                            </Link>

                            <ul className="hidden md:flex items-center gap-5 text-white text-md">
                                {navLinks.map((link) => (
                                    <Link key={link.name} href={link.href}>
                                        {link.name}
                                    </Link>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-5 text-md">
                            <div className="hidden md:flex items-center gap-3">
                                {authLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`${link.className} text-center cursor-pointer`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <button
                                onClick={() => setIsOpen(true)}
                                className="md:hidden p-2 rounded-lg text-white"
                            >
                                <Menu size={25} /> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black md:hidden z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-black px-5 py-6 md:hidden z-50 flex flex-col"
                        >
                            <ul className="flex flex-col gap-5 font-medium text-white text-sm">
                                {navLinks.map((link) => (
                                    <Link key={link.name} href={link.href}>
                                        {link.name}
                                    </Link>
                                ))}
                            </ul>

                            <div className="mt-5 flex flex-col gap-3">
                                {authLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`${link.className} text-center cursor-pointer`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
