import React, { useState } from 'react';
import HeroImg from '../assets/Hero.png';
import Avatar from '../assets/Avatar.png';
import CompanyLogo1 from "../assets/CompanyLogo1.png";
import CompanyLogo2 from "../assets/CompanyLogo2.png";
import CompanyLogo3 from "../assets/CompanyLogo3.png";
import CompanyLogo4 from "../assets/CompanyLogo4.png";
import CompanyLogo5 from "../assets/CompanyLogo5.png";
import CompanyLogo6 from "../assets/CompanyLogo6.png";
import Body from './Body';
import play from "../assets/play.png";
import Logomark from "../assets/Logomark.png";

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="h-[1112px] bg-white flex flex-col items-center">
            {/* Header */}
            <div className="sticky py-5 top-0 w-full bg-white z-50 h-20 border-b border-[#f2f3f6] flex justify-between items-center px-8">
                {/* Left Section */}
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <img className='cursor-pointer' src={Logomark} alt='logo' />
                    </div>
                    {/* Navigation */}
                    <nav className={`flex gap-8 ${isMenuOpen ? 'flex-col absolute bg-white z-40 w-full top-20' : 'hidden md:flex'}`}>
                        {['Home', 'Products', 'Resources', 'Pricing'].map((item) => (
                            <div
                                key={item}
                                className="text-[#475466] text-base font-semibold cursor-pointer hover:text-gray-500 transition-all"
                            >
                                {item}
                            </div>
                        ))}
                    </nav>
                </div>
                {/* Hamburger Icon */}
                <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    <div className="w-8 h-1 bg-gray-700 mb-1"></div>
                    <div className="w-8 h-1 bg-gray-700 mb-1"></div>
                    <div className="w-8 h-1 bg-gray-700"></div>
                </div>
                {/* Avatar */}
                <div className="relative w-10 h-10 hidden md:block">
                    <img className="cursor-pointer rounded-full" src={Avatar} alt="Avatar" />
                    <div className="absolute inset-0 opacity-10 rounded-full border border-[#0f1728]" />
                </div>
            </div>

            {/* Hero Section */}
            <div className="flex flex-col items-center gap-16 pt-24">
                <div className="text-center max-w-3xl flex flex-col items-center gap-8">
                    {/* New Feature */}
                    <div className="flex items-center gap-3 bg-[#f9f5ff] border border-[#e9d7fe] rounded-2xl px-4 py-2">
                        <div className="bg-white border border-[#d6bbfb] px-3 py-1 rounded-2xl">New feature</div>
                        <span className="text-[#6840c6]">Check out the team dashboard</span>
                    </div>
                    {/* Title */}
                    <h1 className="text-6xl font-semibold text-[#0f1728] leading-[72px]">Beautiful analytics to grow smarter</h1>
                    {/* Description */}
                    <p className="text-xl text-[#475466]">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="flex items-center px-7 py-4 bg-white rounded-lg border border-[#cfd4dc] shadow text-lg font-semibold text-[#344053]">
                            <img className='mx-2' src={play} alt='play' />
                            Demo
                        </button>
                        <button className="px-7 py-4 bg-[#7e56d8] rounded-lg text-white text-lg font-semibold">Sign up</button>
                    </div>
                </div>
                {/* Hero Image */}
                <div className="w-full max-w-[1216px] relative border-8 border-[#0f1728] border-b-0 rounded-t-xl">
                    <img className="w-full h-[610px] rounded-t-xl" src={HeroImg} alt="Hero" />
                </div>
            </div>
            <div className="h-[296px] py-24 bg-white flex justify-center">
                <div className="w-[1280px] px-8 flex flex-col items-center gap-8">
                    {/* Text Section */}
                    <div className="text-center text-[#475466] text-base font-medium leading-normal">
                        Join 4,000+ companies already growing
                    </div>

                    {/* Logos Section */}
                    <div className="flex justify-between w-full">
                        <img src={CompanyLogo1} alt='company' />
                        <img src={CompanyLogo2} alt='company' />
                        <img src={CompanyLogo3} alt='company' />
                        <img src={CompanyLogo4} alt='company' />
                        <img src={CompanyLogo5} alt='company' />
                        <img src={CompanyLogo6} alt='company' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
