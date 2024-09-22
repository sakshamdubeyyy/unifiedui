import React, { useState } from 'react';

const faqData = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        question: "Can I change my plan later?",
        answer: "Absolutely! You can adjust your plan at any time based on your needs."
    },
    {
        question: "What is your cancellation policy?",
        answer: "You can cancel anytime. Just let us know, and we’ll take care of it."
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, we can customize your invoices to include any additional information you require."
    },
    {
        question: "How does billing work?",
        answer: "Billing is straightforward. You’ll receive a monthly invoice based on your plan and usage."
    },
    {
        question: "How do I change my account email?",
        answer: "You can change your email in the account settings. If you need help, just reach out."
    }
];

const Faq = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextQuestion = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % faqData.length);
    };

    const prevQuestion = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + faqData.length) % faqData.length);
    };

    return (
        <div className="py-24 bg-white flex flex-col items-center gap-16">
            <div className="text-center">
                <h2 className="text-[#0f1728] text-3xl md:text-4xl font-semibold">Frequently asked questions</h2>
                <p className="text-[#475466] text-lg md:text-xl">Everything you need to know about the product and billing.</p>
            </div>

            <div className="flex flex-col items-start gap-8 w-full max-w-md">
                <div className="border-t border-[#eaecf0] pt-6">
                    <h3 className="text-[#0f1728] text-lg font-medium">{faqData[currentIndex].question}</h3>
                    <p className="text-[#475466] text-base">{faqData[currentIndex].answer}</p>
                </div>
            </div>

            <div className="flex justify-between w-full max-w-xs mx-auto">
                <button onClick={prevQuestion} className="bg-[#7e56d8] text-white px-4 py-2 rounded-lg">Previous</button>
                <button onClick={nextQuestion} className="bg-[#7e56d8] text-white px-4 py-2 rounded-lg">Next</button>
            </div>

            <div className="p-8 bg-[#f8f9fb] rounded-2xl flex flex-col items-center gap-8 w-full max-w-md">
                <h4 className="text-center text-[#0f1728] text-lg md:text-xl font-semibold">Still have questions?</h4>
                <p className="text-center text-[#475466] text-base md:text-lg">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <button className="bg-[#7e56d8] text-white px-5 py-3 rounded-lg">Get in touch</button>
            </div>
        </div>
    );
};

export default Faq;
