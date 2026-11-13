import { NavLink, Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-18 w-full bg-[#0b0f17] border-b border-gray-800/60 py-3.5 px-6">
            <div className="w-9/12 max-w-7xl mx-auto flex items-center justify-between">

                {/* Left: Brand / Logo */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight hover:opacity-90 transition">
                        <span className="text-emerald-400 font-mono text-base">&lt;/&gt;</span>
                        <span>DevDesk <span className="text-emerald-400">.dev</span></span>
                    </Link>
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink
                        to="/"
                        className="text-gray-300 text-sm font-medium transition-colors duration-200 [&.active]:text-emerald-400 [&.active]:font-semibold hover:text-white"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/setups"
                        className="text-gray-300 text-sm font-medium transition-colors duration-200 [&.active]:text-emerald-400 [&.active]:font-semibold hover:text-white"
                    >
                        Setups
                    </NavLink>

                    <NavLink
                        to="/gearguide"
                        className="text-gray-300 text-sm font-medium transition-colors duration-200 [&.active]:text-emerald-400 [&.active]:font-semibold hover:text-white"
                    >
                        Gear Guide
                    </NavLink>

                    <NavLink
                        to="/guidelines"
                        className="text-gray-300 text-sm font-medium transition-colors duration-200 [&.active]:text-emerald-400 [&.active]:font-semibold hover:text-white"
                    >
                        Guidelines
                    </NavLink>
                    <Link
                        to="/submit"
                        className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg border border-gray-700 transitionbg-gray-800/80 hover:bg-gray-800 text-white hover:text-emerald-400 font-medium px-4 py-2 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition duration-200 ease-in-out"
                    >
                        Submit Setup
                    </Link>
                </div>



            </div>
        </nav>
    );
};

export default Navbar;