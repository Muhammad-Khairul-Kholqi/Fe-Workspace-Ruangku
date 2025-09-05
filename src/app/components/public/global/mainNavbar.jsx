'use client'

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed left-0 right-0 top-0 z-50">
            <div className="flex justify-center px-5 py-3 bg-white border-b border-gray-200">
                <div className="w-full max-w-[1300px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <Link
                                href="/"
                                className="font-semibold text-lg text-[#004DE4]"
                            >
                                Ruangku
                            </Link>

                            <ul className="hidden md:flex items-center gap-5 font-medium text-gray-700 text-sm">
                                <Link href="#" className="hover:text-black">Home</Link>
                                <Link href="#" className="hover:text-black">Features</Link>
                                <Link href="#" className="hover:text-black">Contact</Link>
                            </ul>
                        </div>

                        <div className="flex items-center gap-5 text-sm">
                            <div className="hidden md:flex items-center gap-5">
                                <Link
                                    href="/signin"
                                    className="border border-[#004DE4] bg-white px-4 py-2 rounded-lg text-[#004DE4] hover:bg-blue-50 cursor-pointer"
                                >
                                    Sign In
                                </Link>

                                <Link
                                    href="/signup"
                                    className="bg-[#004DE4] px-4 py-2 rounded-lg text-white hover:bg-[#004DE4]/90 cursor-pointer"
                                >
                                    Sign Up
                                </Link>
                            </div>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-100"
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-b border-gray-200 px-5 py-4"
                    >
                        <ul className="flex flex-col gap-4 font-medium text-gray-700 text-sm">
                            <Link href="#" className="hover:text-black">Home</Link>
                            <Link href="#" className="hover:text-black">Features</Link>
                            <Link href="#" className="hover:text-black">Contact</Link>
                        </ul>

                        <div className="mt-4 flex flex-col gap-3">
                            <Link
                                href="/signin"
                                className="border border-[#004DE4] bg-white px-4 py-2 rounded-lg text-[#004DE4] hover:bg-blue-50 cursor-pointer text-center"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/signup"
                                className="bg-[#004DE4] px-4 py-2 rounded-lg text-white hover:bg-[#004DE4]/90 cursor-pointer text-center"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
