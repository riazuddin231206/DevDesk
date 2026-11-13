const Ergonomics = () => {
    return (
        <div>
            <section id="ergonomics" className="space-y-6 pt-6">
                <div>
                    <h2 className="text-2xl font-bold">Ergonomics</h2>
                    <p className="text-base-content/70 text-sm mt-1">
                        The least photogenic gear and the most important. Spend here before you spend on lights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Item 1 */}
                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-60">Dual-motor frame</span>
                                <span className="badge badge-success badge-outline font-bold">$$$</span>
                            </div>
                            <h3 className="text-xl font-bold">Jarvis Bamboo Standing Desk</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Stable at full height with memory presets. Bamboo top holds up to clamp-on arms.
                            </p>
                        </div>
                        <div className="text-xs opacity-50 mt-6 pt-4 border-t border-base-200">
                            in 12 featured setups
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-60">Single arm</span>
                                <span className="badge badge-success badge-outline font-bold">$$</span>
                            </div>
                            <h3 className="text-xl font-bold">Ergotron LX Monitor Arm</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Puts the top of the screen at eye level and frees the whole desk surface underneath.
                            </p>
                        </div>
                        <div className="text-xs opacity-50 mt-6 pt-4 border-t border-base-200">
                            in 15 featured setups
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-60">Task chair</span>
                                <span className="badge badge-success badge-outline font-bold">$$$</span>
                            </div>
                            <h3 className="text-xl font-bold">Herman Miller Aeron (refurb)</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Adjustable lumbar and arms; refurbished units cost half and come with a warranty.
                            </p>
                        </div>
                        <div className="text-xs opacity-50 mt-6 pt-4 border-t border-base-200">
                            in 10 featured setups
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ergonomics;