import React from "react";
import Logomark from "../assets/Logomark.png"


const Footer = () => {
    return (
        <div className="h-[480px] pt-16 pb-12 bg-white flex flex-col items-center gap-16">
            <div className="h-60 px-8 flex flex-col items-start gap-12">
                <div className="flex gap-28 cursor-pointer">
                    {/** Product Section */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[#667084] text-sm font-semibold">Product</span>
                        <div className="h-[204px] flex flex-col gap-6">
                            <LinkItem title="Overview" />
                            <LinkItem title="Features" />
                            <LinkItem title="Solutions" newTag={true} />
                            <LinkItem title="Tutorials" />
                            <LinkItem title="Pricing" />
                            <LinkItem title="Releases" />
                        </div>
                    </div>

                    {/** Company Section */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[#667084] text-sm font-semibold">Company</span>
                        <div className="h-[204px] flex flex-col gap-6">
                            <LinkItem title="About us" />
                            <LinkItem title="Careers" />
                            <LinkItem title="Press" />
                            <LinkItem title="News" />
                            <LinkItem title="Media kit" />
                            <LinkItem title="Contact" />
                        </div>
                    </div>

                    {/** Resources Section */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[#667084] text-sm font-semibold">Resources</span>
                        <div className="h-[204px] flex flex-col gap-6">
                            <LinkItem title="Blog" />
                            <LinkItem title="Newsletter" />
                            <LinkItem title="Events" />
                            <LinkItem title="Help centre" />
                            <LinkItem title="Tutorials" />
                            <LinkItem title="Support" />
                        </div>
                    </div>

                    {/** Use Cases Section */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[#667084] text-sm font-semibold">Use cases</span>
                        <div className="h-[204px] flex flex-col gap-6">
                            <LinkItem title="Startups" />
                            <LinkItem title="Enterprise" />
                            <LinkItem title="Government" />
                            <LinkItem title="SaaS centre" />
                            <LinkItem title="Marketplaces" />
                            <LinkItem title="Ecommerce" />
                        </div>
                    </div>

                    {/** Social Section */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[#667084] text-sm font-semibold">Social</span>
                        <div className="h-[204px] flex flex-col gap-6">
                            <LinkItem title="Twitter" />
                            <LinkItem title="LinkedIn" />
                            <LinkItem title="Facebook" />
                            <LinkItem title="GitHub" />
                            <LinkItem title="AngelList" />
                            <LinkItem title="Dribbble" />
                        </div>
                    </div>

                    {/** Legal Section */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[#667084] text-sm font-semibold">Legal</span>
                        <div className="h-[204px] flex flex-col gap-6">
                            <LinkItem title="Terms" />
                            <LinkItem title="Privacy" />
                            <LinkItem title="Cookies" />
                            <LinkItem title="Licenses" />
                            <LinkItem title="Settings" />
                            <LinkItem title="Contact" />
                        </div>
                    </div>
                </div>
            </div>

            {/** Footer */}
            <div className="h-16 px-8 flex flex-col items-start gap-8">
                <div className="self-stretch pt-8 border-t border-[#eaecf0] flex justify-between items-center">
                    <div className="flex items-start">
                        <div className="w-[142px] h-8 relative flex">
                            <div className="absolute shadow">
                                <img className="cursor-pointer" src={Logomark} alt="logo" />
                            </div>
                        </div>
                    </div>
                    <span className="text-[#667084] text-base font-normal">© 2077 Untitled UI. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
};

const LinkItem = ({ title, newTag }) => {
    return (
        <div className="flex items-center gap-2">
            <span className="text-[#475466] text-base font-semibold">{title}</span>
            {newTag && (
                <div className="px-2 py-0.5 bg-[#ebfdf2] rounded-2xl border border-[#abefc6]">
                    <span className="text-center text-[#067647] text-xs font-medium">New</span>
                </div>
            )}
        </div>
    );
};

export default Footer;
