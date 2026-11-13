const MKeyboards = () => {
    return (
        <div>
            <section id="keyboards" className="space-y-6 pt-6">
                <div>
                    <h2 className="text-2xl font-bold">Mechanical Keyboards</h2>
                    <p className="text-base-content/70 text-sm mt-1">
                        Switch feel, layout and build quality. Start with a hot-swap board so you can change switches without soldering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-60">75% · gasket mount</span>
                                <span className="badge badge-success badge-outline font-bold">$$</span>
                            </div>
                            <h3 className="text-xl font-bold">Keychron Q1 Pro</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Aluminium case, hot-swap sockets and QMK/VIA remapping out of the box. Quiet with linear switches.
                            </p>
                        </div>
                        <div className="text-xs opacity-50 mt-6 pt-4 border-t border-base-200">
                            in 18 featured setups
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-60">TKL · wireless</span>
                                <span className="badge badge-success badge-outline font-bold">$</span>
                            </div>
                            <h3 className="text-xl font-bold">Keychron K8 Pro</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Switches between Mac and Linux with a toggle. A solid first mechanical board.
                            </p>
                        </div>
                        <div className="text-xs opacity-50 mt-6 pt-4 border-t border-base-200">
                            in 8 featured setups
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-60">Tofu60 + Gateron Oil Kings</span>
                                <span className="badge badge-success badge-outline font-bold">$$</span>
                            </div>
                            <h3 className="text-xl font-bold">Custom 60% build</h3>
                            <p className="text-sm opacity-80 leading-relaxed">
                                A weekend project that teaches you how boards work. Small enough to keep the mouse close.
                            </p>
                        </div>
                        <div className="text-xs opacity-50 mt-6 pt-4 border-t border-base-200">
                            in 6 featured setups
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MKeyboards;