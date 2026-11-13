const Displays = () => {
    return (
        <div>
            <section id="displays" className="space-y-6 border-b border-base-200">
                <div>
                    <h2 className="text-2xl font-bold">Displays</h2>
                    <p className="text-base-content/70 text-sm mt-1">
                        The screen is what you look at for eight hours. Pixel density for crisp text matters more than refresh rate.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-60">32" 4K IPS</span>
                                <span className="badge badge-success badge-outline font-bold">$$$</span>
                            </div>
                            <h3 className="text-xl font-bold">Dell UltraSharp U3223QE</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Built-in USB-C hub with 90W charging means one cable to the laptop. Text is sharp at 100% scaling.
                            </p>
                        </div>
                        <div className="text-xs opacity-50 mt-6 pt-4 border-t border-base-200">
                            in 14 featured setups
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-60">34" ultra-wide</span>
                                <span className="badge badge-success badge-outline font-bold">$$</span>
                            </div>
                            <h3 className="text-xl font-bold">LG 34WN80C-B</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Fits three code panes comfortably and the gentle curve avoids neck turns at the edges.
                            </p>
                        </div>
                        <div className="text-xs opacity-50 mt-6 pt-4 border-t border-base-200">
                            in 9 featured setups
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-60">27" 4K</span>
                                <span className="badge badge-success badge-outline font-bold">$</span>
                            </div>
                            <h3 className="text-xl font-bold">Dell S2721QS</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                The cheapest way to get 4K text clarity. Buy two for a dual setup under one premium panel.
                            </p>
                        </div>
                        <div className="text-xs opacity-50 mt-6 pt-4 border-t border-base-200">
                            in 11 featured setups
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Displays;