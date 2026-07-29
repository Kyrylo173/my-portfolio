import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import yumiMusicImg from './media/yumi-music.png';
import yumiShopImg from './media/yumi-shop.png';
import yumiDevImg from './media/yumi-for-developers.png';
import yumiCompanyImg from './media/yumi-landing-company.png';

export default function FeaturedProjects() {
    const projects = [
        {
            title: "YUMI Music",
            role: "Sole Full-Stack Developer",
            description: "A full-featured music streaming web platform with real-time audio playback, interactive playlists, dynamic QR-code search, and integrated Stripe subscriptions.",
            image: yumiMusicImg,
            link: "https://yumi-music.space",
            github: "https://github.com/Kyrylo173/musical-app",
            stack: ["React", "Node.js", "Express", "NoSQL", "Tailwind CSS", "Stripe", "Framer Motion", "JavaScript"]
        },
        {
            title: "YUMI Shop",
            role: "Sole Full-Stack Developer",
            description: "An e-commerce ecosystem for YUMI Music merchandise featuring JWT authentication, state-managed shopping cart, and secure Stripe checkout integration.",
            image: yumiShopImg,
            link: "https://yumi-shop.store",
            github: "https://github.com/Kyrylo173/yumi-shop",
            stack: ["React 18", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Stripe"]
        },
        {
            title: "Landing Page for YUMI for Developers",
            role: "Frontend Developer & Designer",
            description: "Modern landing page for the YUMI developer extension. Promotes coding time tracking features and automatic programming language detection.",
            image: yumiDevImg,
            link: "https://yumi-music.space/yumi-extension",
            github: "#",
            stack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"]
        },
        {
            title: "Landing Page for YUMI Studio",
            role: "Sole Full-Stack Developer",
            description: "Responsive, high-converting capstone landing page showcasing tech stack, methodologies, dark/light theme toggle, and a direct lead generation form.",
            image: yumiCompanyImg,
            link: "#",
            github: "https://github.com/Kyrylo173/my-course-work",
            stack: ["React 18", "TypeScript", "Tailwind CSS", "Node.js", "Firebase"]
        }
    ];

    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-6 text-left">
                <h1 className="text-white font-bold text-5xl md:text-7xl mb-4 tracking-tight">
                    FEATURED PROJECTS
                </h1>
                <p className="text-gray-400 text-lg mb-16 max-w-2xl">
                    Here are some of the selected projects that showcase my passion for Full-Stack development.
                </p>

                <div className="flex flex-col gap-12">
                    {projects.map((project, idx) => (
                        <article 
                            key={idx} 
                            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        >
                            <div className="w-full md:w-1/2 min-h-[260px] md:min-h-[360px] bg-zinc-800 relative flex items-center justify-center overflow-hidden group">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="text-gray-500 font-medium">No Image Available</div>
                                )}
                            </div>

                            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-2">
                                        {project.title}
                                    </h2>

                                    <div className="mb-4">
                                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-lime-400 bg-lime-950/50 border border-lime-800/40 px-2.5 py-1 rounded-md">
                                            Role: {project.role}
                                        </span>
                                    </div>

                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <hr className="border-zinc-800 my-4" />

                                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                                        Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.stack.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="text-xs font-medium bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-md border border-zinc-700/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <hr className="border-zinc-800 my-4" />
                                    <div className="flex items-center gap-6 pt-2">
                                        {project.link && project.link !== "#" && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="inline-flex items-center gap-2 text-lime-400 font-medium hover:text-lime-300 transition-colors text-sm"
                                            >
                                                <span>Live Demo</span>
                                                
                                            </a>
                                        )}
                                        
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center gap-2 text-gray-400 font-medium hover:text-white transition-colors text-sm"
                                        >
                                            <span>See on GitHub</span>
                                            <FontAwesomeIcon icon={faGithub} size="lg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}