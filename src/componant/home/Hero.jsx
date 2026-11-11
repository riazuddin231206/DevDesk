import { Link } from "react-router";

const HeroSection = () => {
    return (
        <div className="w-full bg-[#0b0f17] text-white py-20 px-6">
            <div className="max-w-5xl mx-auto">
              
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                    Inspiring Workspaces Built by <span className="text-white">Developers</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                    Real desks from real engineers — with the full gear list behind every photo, so you can copy what works and skip what doesn't.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                    <Link
                        to="/setups"
                        className="bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold px-6 py-3 rounded-lg transition duration-200 flex items-center gap-2 shadow-lg shadow-emerald-900/20"
                    >
                        Browse All Setups
                        <span>→</span>
                    </Link>

                    <Link
                        to="/gear-guide"
                        className="text-gray-300 hover:text-white font-medium px-4 py-3 transition duration-200"
                    >
                        Read the Gear Guide
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;