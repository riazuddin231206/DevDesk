import { useState } from "react";
import { Link } from "react-router";

const cardData = [
    {
        id: "clean-minimalist-mac",
        title: "Clean Minimalist Mac Desk",
        creator: "@alex_dev",
        image: "https://cdn.magicpatterns.com/patterns/generated-images/cdd72e23-8252-494a-a436-11fe4b53c37d.jpg",
        gearOne: "M3 Max",
        gearTwo: "Keychron Q1",
        category: "Minimalist",
        upvotes: 1284,
        description: "A super clean desk setup designed for distraction-free coding and deep work.",
        tags: ["M3 Max", "Keychron Q1", "Minimalist"]
    },
    {
        id: "neon-night-shift",
        title: "Neon Night Shift Station",
        creator: "@kira.codes",
        image: "https://cdn.magicpatterns.com/patterns/generated-images/8cf69430-ec9b-46a4-ad49-ef108a8c0766.jpg",
        gearOne: "Odyssey G9",
        gearTwo: "GMMK Pro",
        category: "Cyberpunk",
        upvotes: 1102,
        description: "Built for late-night programming sessions with immersive ambient lighting.",
        tags: ["Odyssey G9", "GMMK Pro", "Cyberpunk"]
    },
    {
        id: "dual-dell-brick",
        title: "Dual Dell Brick-Wall Loft",
        creator: "@marco_rs",
        image: "https://cdn.magicpatterns.com/patterns/generated-images/b07f779a-8102-4f3c-b82a-69792cc4a899.jpg",
        gearOne: "2x U2723QE",
        gearTwo: "Keychron K8",
        category: "Dual-Monitor",
        upvotes: 967,
        description: "Two 4K displays mounted side-by-side on an exposed brick industrial wall.",
        tags: ["2x U2723QE", "Keychron K8", "Dual-Monitor"]
    }
];

const categories = ["All", "Minimalist", "Cyberpunk", "Dual-Monitor", "Mac Only"];

const Cards = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCards = selectedCategory === "All"
        ? cardData
        : cardData.filter(card => card.category === selectedCategory);

    return (
        <section className="w-full bg-[#0b0f17] text-white py-12 px-6">
            <div className="w-9/12 mx-auto">

                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-1">
                            Top rated this week
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Ranked by community upvotes, reset every Monday.
                        </p>
                    </div>

                    <Link
                        to="/setups"
                        className="text-emerald-400 hover:text-emerald-300 font-medium text-sm transition flex items-center gap-1"
                    >
                        See all 12 →
                    </Link>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 border ${selectedCategory === cat
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/50"
                                : "bg-[#131b29] text-gray-400 border-gray-800 hover:text-gray-200 hover:border-gray-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#111827] rounded-xl overflow-hidden border border-gray-800/80 hover:border-gray-700 transition duration-300 flex flex-col group"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-md text-gray-200/90 px-2.5 py-1 rounded-md border border-gray-700/60 text-xs font-semibold flex items-center gap-1">
                                    <span className="text-emerald-400">↑</span>
                                    <span>{card.upvotes}</span>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-emerald-400 transition">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {card.creator}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {card.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-[#1e293b]/70 text-gray-300 border border-gray-700/50 text-xs px-2.5 py-1 rounded-md font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to={`/setup/${card.id}`}
                                    className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold flex items-center gap-1 transition"
                                >
                                    View Setup Specs →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Cards;