import React from 'react';

const TrialSection = () => {
    return (
        <div className="py-16 bg-[#f8f9fb] flex flex-col items-center gap-10">
            <div className="px-4 md:px-8 flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-5">
                    <h2 className="text-center text-[#0f1728] text-3xl md:text-4xl font-semibold leading-tight">
                        Start your free trial
                    </h2>
                    <p className="text-center text-[#475466] text-lg md:text-xl font-normal leading-relaxed">
                        Join over 4,000+ startups already growing with Untitled.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-5 py-3 bg-white rounded-lg shadow border border-[#cfd4dc] flex justify-center items-center">
                        <span className="text-[#344053] text-base font-semibold">Learn more</span>
                    </button>
                    <button className="px-5 py-3 bg-[#7e56d8] rounded-lg shadow border border-[#7e56d8] flex justify-center items-center">
                        <span className="text-white text-base font-semibold">Get started</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrialSection;
