import React from 'react';
import Image from "../assets/Image.png";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Avatar from "../assets/Avatar.png";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";

const blogPosts = [
    {
        title: "UX review presentations",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        category: "Design",
        author: "Olivia Rhye",
        date: "20 Jan 2024",
        authorImage: Avatar,
        image: Image
    },
    {
        title: "Migrating to Linear 101",
        description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
        category: "Product",
        author: "Phoenix Baker",
        date: "19 Jan 2024",
        authorImage: Avatar1,
        image: Image1
    },
    {
        title: "Building your API stack",
        description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        category: "Software Engineering",
        author: "Lana Steiner",
        date: "18 Jan 2024",
        authorImage: Avatar2,
        image: Image2
    }
];

const Blogs = () => {
    return (
        <div className="py-16 bg-white flex flex-col items-center gap-8">
            <header className="px-4 md:px-8 mb-4">
                <h2 className="text-[#6840c6] text-base font-semibold">Our blog</h2>
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h1 className="text-[#0f1728] text-3xl md:text-4xl font-semibold">Latest blog posts</h1>
                    <button className="mt-4 md:mt-0 px-5 py-3 bg-[#7e56d8] rounded-lg shadow border border-[#7e56d8] text-white text-base font-semibold">View all posts</button>
                </div>
                <p className="text-[#475466] text-lg md:text-xl">Tools and strategies modern teams need to help their companies grow.</p>
            </header>

            <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <div key={index} className="flex flex-col gap-6 border-b md:border-b-0 pb-6 md:pb-0">
                        <img className="h-60 w-full object-cover" src={post.image} alt={post.title} />
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="text-[#6840c6] text-sm font-semibold">{post.category}</span>
                                <h3 className="text-[#0f1728] text-xl md:text-2xl font-semibold">{post.title}</h3>
                                <p className="text-[#475466] text-base">{post.description}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#0f1728] text-sm font-semibold">{post.author}</span>
                                    <span className="text-[#475466] text-sm">{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
