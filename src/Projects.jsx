import { useState } from "react";

export default function Projects() {
    const [currentImageIndex, setCurrentImageIndex] = useState({});

    const projects = [
        {
            title: "YUMI Music ",
            description: "A music streaming web-platform ",
            images: ['./media/yumi-music.png', './media/yumi-music-middle.png'],
            link: "https://yumi-music.space",
            stack: ["React", "Node.js", "NoSQL", "Express", "Tailwind CSS", "Stripe", "Framer Motion", "JavaScript"]

        },
        {
            title: "YUMI Shop",
            description: "An e-commerce store for YUMI Music merchandise with user authentication and a shopping cart. Built with React, TypeScript, Node.js, and Stripe for payment processing.",
            images: ['./media/yumi-shop.png'],
            link: "https://yumi-shop.store",
            stack: ["React", "TypeScript", "Node.js", "Stripe"]
        },
        {
           title: "Landing Page for YUMI for developers",
           description: "Landing page for YUMI Music`s developer extension. Extension can be used for tracking coding time and detect programing languages",
           images: ['./media/yumi-for-developers.png','./media/yumi-for-developers-features.png', './media/yumi-for-developers-question.png'
           ],
           link: "https://yumi-music.space/yumi-extension",
           stack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"]
        },
        {
            title: "Landing Page for YUMI company",
            description: "Landing page for YUMI Music company website.",
            images: ['./media/yumi-landing-company.png','./media/yumi-landing-stack.png','./media/yumi-landing-contact.png'],
            link: "...",
            stack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"]
        }
    ]
    

    const getImage = (path) => {
        try {
            return require(`${path}`);
        } catch (e) {
            return null;
        }
    }

    return (
        <section className="bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-white font-bold text-3xl text-center mb-8">My projects</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project, idx) => {
                        const imageIndex = currentImageIndex[idx] || 0;
                        const hasMultipleImages = project.images && project.images.length > 1;

                        const handlePrevImage = () => {
                            setCurrentImageIndex({
                                ...currentImageIndex,
                                [idx]: imageIndex === 0 ? project.images.length - 1 : imageIndex - 1
                            });
                        };

                        const handleNextImage = () => {
                            setCurrentImageIndex({
                                ...currentImageIndex,
                                [idx]: imageIndex === project.images.length - 1 ? 0 : imageIndex + 1
                            });
                        };

                        return (
                        <article key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <div className="relative h-48 bg-gray-700 flex items-center justify-center overflow-hidden group">
                                {project.images && project.images.length > 0 ? (
                                    <>
                                        <img
                                            src={getImage(project.images[imageIndex])}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {hasMultipleImages && (
                                            <>
                                                <button
                                                    onClick={handlePrevImage}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                                >
                                                    ❮
                                                </button>
                                                <button
                                                    onClick={handleNextImage}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                                >
                                                    ❯
                                                </button>
                                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                                    {imageIndex + 1} / {project.images.length}
                                                </div>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <div className="text-gray-400">No image</div>
                                )}
                            </div>

                            <div className="p-4">
                                <h2 className="text-white text-lg font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-300 text-sm mb-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack && project.stack.map((s, i) => (
                                        <span key={i} className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">{s}</span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-600">
                                        View Project
                                    </a>
                                    <span className="text-gray-400 text-xs">{project.images ? project.images.length : 0} image(s)</span>
                                </div>
                            </div>
                        </article>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}