"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
    const faqs = [
        {
            question: "What is this workspace for?",
            answer: "This workspace helps you organize notes, manage tasks, and keep projects structured in one simple place.",
        },
        {
            question: "Can I access it on mobile?",
            answer: "Yes, the workspace is fully responsive and can be accessed from any device, including phones and tablets.",
        },
        {
            question: "Do I need to pay to use it?",
            answer: "No, it’s completely free to use. You can start creating, planning, and organizing without any subscription.",
        },
        {
            question: "Can I share my projects with others?",
            answer: "Currently, the workspace is designed for personal use, but collaboration features will be added soon.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex justify-center p-5 mt-10">
            <div className="w-full max-w-[1300px]">
                <div className="w-full max-w-[900px] mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#2E2E2E]">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-500 mt-3">
                            Find quick answers to the most common questions about this workspace.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 p-5 cursor-pointer bg-white"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium text-gray-800">
                                        {faq.question}
                                    </h3>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-gray-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-600" />
                                    )}
                                </div>
                                {openIndex === index && (
                                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
