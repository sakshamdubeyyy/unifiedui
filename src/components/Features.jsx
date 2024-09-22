import React from 'react';
import Content from "../assets/Content.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const Features = () => {
    return (
        <div className="py-24 bg-white flex flex-col items-center gap-16">
            <header className="px-8 flex flex-col items-start gap-8">
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-5">
                        <div className="bg-[#f9f5ff] border border-[#e9d7fe] rounded-2xl px-3 py-1 flex items-center">
                            <span className="text-[#6840c6] text-sm font-medium text-center leading-tight">Features</span>
                        </div>
                        <h1 className="text-[#0f1728] text-4xl font-semibold text-center leading-[44px]">Cutting-edge features for advanced analytics</h1>
                    </div>
                    <p className="text-[#475466] text-xl text-center leading-[30px]">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </header>

            <main className="px-8 flex flex-col items-center gap-24">
                <section className="flex justify-center">
                    <img src={Content} alt="content" className="w-full max-w-md" />
                </section>
                <section className="flex flex-col md:flex-row justify-center items-start gap-8">
                    {[
                        {
                            title: 'Share team inboxes',
                            description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
                            icon: icon1
                        },
                        {
                            title: 'Deliver instant answers',
                            description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
                            icon: icon2
                        },
                        {
                            title: 'Manage your team with reports',
                            description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple of clicks.',
                            icon: icon3
                        },
                    ].map((feature, index) => (
                        <div key={index} className="flex flex-col items-center gap-5">
                            <div className="w-12 h-12 bg-white rounded-[10px] shadow border border-[#eaecf0] relative flex justify-center items-center">
                                <img src={feature.icon} alt='icon' className="w-8 h-8 object-contain" />
                            </div>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h2 className="text-[#0f1728] text-xl font-semibold leading-[30px]">{feature.title}</h2>
                                <p className="text-[#475466] text-base leading-normal">{feature.description}</p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <span className="text-[#6840c6] text-base font-semibold leading-normal">Learn more</span>
                                <div className="w-5 h-5 relative" />
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Features;
