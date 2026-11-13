const Navigation = () => {
    return (
        <div>
            <div className="flex gap-4 border-b border-base-200 pb-3">
                    <a href="#displays" className="font-semibold opacity-70 hover:opacity-100 transition-opacity">Displays</a>
                    <a href="#keyboards" className="font-semibold opacity-70 hover:opacity-100 transition-opacity">Mechanical Keyboards</a>
                    <a href="#ergonomics" className="font-semibold text-success border-b-2 border-success pb-1">Ergonomics</a>
                </div>
        </div>
    );
};

export default Navigation;