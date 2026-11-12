import { Link } from "react-router";

const SetCards = () => {
    const Cards = [
        {
            id: "clean-minimalist-mac",
            title: "Clean Minimalist Mac Desk",
            creator: "@alex_dev",
            image: "https://cdn.magicpatterns.com/patterns/generated-images/cdd72e23-8252-494a-a436-11fe4b53c37d.jpg",
            gearOne: "M3 Max",
            gearTwo: "Keychron Q1",
            category: "Minimalist",
            upvotes: 1284,
            description: "A super clean desk setup designed for distraction-free coding and deep work."
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
            description: "Built for late-night programming sessions with immersive ambient lighting."
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
            description: "Two 4K displays mounted side-by-side on an exposed brick industrial wall."
        },
        {
            id: "walnut-garden-office",
            title: "Walnut Garden Office",
            creator: "@priya_ships",
            image: "https://cdn.magicpatterns.com/patterns/generated-images/a63e3e05-51c6-4599-bcb8-bf8a3b06f55f.jpg",
            gearOne: "MacBook Air M2",
            gearTwo: "Kinesis Freestyle",
            category: "Minimalist",
            upvotes: 842,
            description: "Natural walnut wood desktop with low-noise split keyboard and daylight view."
        },
        {
            id: "pegboard-podcast-corner",
            title: "Pegboard Podcast Corner",
            creator: "@devon.fm",
            image: "https://cdn.magicpatterns.com/patterns/generated-images/99c94b56-ef8d-482d-9cf8-2b88678a8a8f.jpg",
            gearOne: "Shure SM7B",
            gearTwo: "Tofu60",
            category: "Minimalist",
            upvotes: 731,
            description: "Audio creator and engineering corner featuring wall-mounted pegboard organization."
        },
        {
            id: "tiling-wm-ultrawide",
            title: "Tiling WM Ultrawide Rig",
            creator: "@nixos_nate",
            image: "https://cdn.magicpatterns.com/patterns/generated-images/ca9d3edd-717b-40e9-a481-b3f38375f0db.jpg",
            gearOne: "Dell U3423WE",
            gearTwo: "Kinesis 360",
            category: "Minimalist",
            upvotes: 688,
            description: "Single curved ultrawide display running Linux tiling window manager for terminal flow."
        }
    ];
    return (
        <section className="w-full bg-[#0b0f17] text-white py-12 px-6">
            <div className="w-9/12 mx-auto">
                
                {/* Static Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        Cards.map((card) => (
                            <div className="bg-[#111827] rounded-xl overflow-hidden border border-gray-800/80 hover:border-gray-700 transition duration-300 flex flex-col group">
                                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                                    <img
                                        to={`/carddetails/${card.id}`}
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-md text-gray-200 px-2.5 py-1 rounded-md border border-gray-700/60 text-xs font-semibold flex items-center gap-1">
                                        <span className="text-emerald-400">↑</span>
                                        <span>{card.upvotes.toLocaleString()}</span>
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
                                            <span className="bg-[#1e293b]/70 text-gray-300 border border-gray-700/50 text-xs px-2.5 py-1 rounded-md font-mono">
                                                {card.gearOne}
                                            </span>
                                            <span className="bg-[#1e293b]/70 text-gray-300 border border-gray-700/50 text-xs px-2.5 py-1 rounded-md font-mono">
                                                {card.gearTwo}
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/carddetails/${card.id}`}
                                        className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold flex items-center gap-1 transition"
                                    >
                                        View Setup Specs →
                                    </Link>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    );
};

export default SetCards;