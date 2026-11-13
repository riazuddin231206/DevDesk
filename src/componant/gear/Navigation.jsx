const Navigation = () => {
    return (
        <div>
            <div className="flex gap-4 border-b border-base-200 pb-3">
                    <a href="#displays" className="text-green-300 border-b border-base-900  text-sm font-medium transition-colors duration-200 [&.active]:text-emerald-400 [&.active]:font-semibold hover:text-white">Displays</a>
                    <a href="#keyboards" className="text-gray-300 text-sm font-medium transition-colors duration-200 [&.active]:text-emerald-400 [&.active]:font-semibold hover:text-white">Mechanical Keyboards</a>
                    <a href="#ergonomics" className="text-gray-300 text-sm font-medium transition-colors duration-200 [&.active]:text-emerald-400 [&.active]:font-semibold hover:text-white">Ergonomics</a>
                </div>
        </div>
    );
};

export default Navigation;