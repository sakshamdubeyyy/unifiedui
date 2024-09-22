import React from 'react';
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import Candice from "../assets/Candice.png";
import FicComLogo from "../assets/FicComLogo.png";

const Body = () => {
    return (
        <div className='mt-80'>
            <div className="h-[836px] py-24 bg-white flex flex-col items-center gap-16">
                {/* Header Section */}
                <div className="h-40 px-8 flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-5">
                        <div className="text-center text-[#6840c6] text-base font-semibold">Features</div>
                        <div className="text-center text-[#0f1728] text-4xl font-semibold leading-[44px]">
                            Analytics that feels like it’s from the future
                        </div>
                        <div className="text-center text-[#475466] text-xl font-normal leading-[30px]">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                    {[
                        { title: "Share team inboxes", description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.", icon: icon1 },
                        { title: "Deliver instant answers", description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.", icon: icon2 },
                        { title: "Manage your team with reports", description: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.", icon: icon3 },
                        { title: "Connect with customers", description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.", icon: icon4 },
                        { title: "Connect the tools you already use", description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.", icon: icon5 },
                        { title: "Our people make the difference", description: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.", icon: icon6 }
                    ].map((feature, index) => (
                        <div key={index} className="flex flex-col items-center gap-5">
                            <div className="w-12 h-12 bg-white rounded-[10px] shadow border border-[#eaecf0] flex justify-center items-center">
                                <img src={feature.icon} alt='icon' />
                            </div>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <div className="text-[#0f1728] text-xl font-semibold leading-[30px]">{feature.title}</div>
                                <div className="text-[#475466] text-base font-normal leading-normal">{feature.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-[452px] w-9/12 mx-auto bg-[#f8f9fb] flex flex-col items-center gap-16">
                {/* Testimonial Content */}
                <div className="px-8 flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-8">
                        {/* Icon Section */}
                        <img src={FicComLogo} alt="FicComLogo" />
                        {/* Main Testimonial Text */}
                        <div className="text-center text-[#0f1728] text-5xl font-medium leading-[60px]">
                            We’ve been using Untitled to kickstart every new project and can’t imagine working without it.
                        </div>

                        {/* Author Section */}
                        <div className="flex flex-col items-center gap-4">
                            {/* Avatar */}
                            <img className='w-16 h-16 rounded-full border border-[#0f1728]' src={Candice} alt='candice' />
                            {/* Author Info */}
                            <div className="text-center">
                                <div className="text-lg font-semibold text-[#0f1728] leading-7">Candice Wu</div>
                                <div className="text-base text-[#475466]">Product Manager, Sisyphus</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
