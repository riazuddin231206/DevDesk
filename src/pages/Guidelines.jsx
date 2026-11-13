const Guidelines = () => {
    return (
        <div className="bg-[#0b0f17] pt-25 min-h-screen text-base-content px-4 mt-13 py-20  md:px-8 py-6">
            <div className="max-w-6xl mx-auto space-y-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Side Navigation bar */}
                    <div className="lg:col-span-3 lg:sticky lg:top-32 space-y-2 hidden lg:block">
                        <div className="text-xs font-semibold opacity-60 uppercase tracking-wider mb-3">On this page</div>
                        <ul className="space-y-2 border-l border-base-200 pl-5 text-sm font-medium">
                            <li><a href="#cable-management" className="text-success hover:underline">Cable Management</a></li>
                            <li><a href="#ergonomics" className="opacity-70 hover:opacity-100">Ergonomics</a></li>
                            <li><a href="#lighting" className="opacity-70 hover:opacity-100">Lighting</a></li>
                            <li><a href="#audio-mic" className="opacity-70 hover:opacity-100">Audio & Mic</a></li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-8">

                        {/* Content Hero */}
                        <div className="space-y-3 border-b pb-6 border-base-200 ">
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Guidelines & Setup Tips</h1>
                            <p className="text-base-content/70 max-w-2xl text-base leading-relaxed">
                                Four habits shared by almost every top-rated desk. None of them need expensive gear — start with whichever one bothers you most today.
                            </p>
                        </div>

                        {/* Cable Management */}
                        <div id="cable-management" className="card bg-base-100 shadow-md border border-base-200 p-6 md:p-8 space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <span className="text-success">🔌</span> Cable Management 101
                            </h2>
                            <p className="opacity-80 text-sm md:text-base leading-relaxed">
                                A clean desk photo is mostly a clean underside. Route everything down to one place before you buy a single accessory.
                            </p>
                            <ul className="space-y-2 text-sm opacity-90 list-disc list-inside">
                                <li>Mount a power strip under the desk so only one cable runs to the wall.</li>
                                <li>Use a cable tray or basket along the back edge and velcro ties, not zip ties, so you can change things later.</li>
                                <li>Pick a dock or monitor with USB-C power delivery and reduce the laptop to a single cable.</li>
                            </ul>
                            <div className="bg-base-200 p-3 rounded-lg font-mono text-xs opacity-70">
                                rule_of_thumb: if you can see a cable from your chair, it has no reason to be there.
                            </div>
                        </div>

                        {/* Ergonomics */}
                        <div id="ergonomics" className="card bg-base-100 shadow-md border border-base-200 p-6 md:p-8 space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <span className="text-success">🪑</span> Optimal Ergonomics & Eye Level
                            </h2>
                            <p className="opacity-80 text-sm md:text-base leading-relaxed">
                                Neck and wrist pain builds slowly. A few centimetres of adjustment now saves you a physiotherapist later.
                            </p>
                            <ul className="space-y-2 text-sm opacity-90 list-disc list-inside">
                                <li>Set the top of the screen at or slightly below eye level, about an arm’s length away.</li>
                                <li>Keep elbows at roughly 90° with the keyboard at elbow height — lower the keyboard, not your shoulders.</li>
                                <li>Alternate sitting and standing every 30–45 minutes if your desk allows it.</li>
                            </ul>
                            <div className="bg-base-200 p-3 rounded-lg font-mono text-xs opacity-70">
                                rule_of_thumb: eyes on the top third of the screen, feet flat, shoulders relaxed.
                            </div>
                        </div>

                        {/* Lighting */}
                        <div id="lighting" className="card bg-base-100 shadow-md border border-base-200 p-6 md:p-8 space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <span className="text-success">💡</span> Ambient & Bias Lighting
                            </h2>
                            <p className="opacity-80 text-sm md:text-base leading-relaxed">
                                Staring at a bright screen in a dark room strains your eyes. Light behind the monitor balances the contrast.
                            </p>
                            <ul className="space-y-2 text-sm opacity-90 list-disc list-inside">
                                <li>Add a bias light strip or light bar behind the monitor at a neutral 6500K white.</li>
                                <li>Keep a warm ambient lamp in the room for evenings so the screen is never the only light source.</li>
                                <li>Place the desk perpendicular to windows to avoid glare and backlit video calls.</li>
                            </ul>
                            <div className="bg-base-200 p-3 rounded-lg font-mono text-xs opacity-70">
                                rule_of_thumb: the wall behind your monitor should be about 10% as bright as the screen.
                            </div>
                        </div>

                        {/* Audio & Mic */}
                        <div id="audio-mic" className="card bg-base-100 shadow-md border border-base-200 p-6 md:p-8 space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <span className="text-success">🎙️</span> Audio & Desk Mic Placement
                            </h2>
                            <p className="opacity-80 text-sm md:text-base leading-relaxed">
                                You spend hours on calls. A decent mic placed well beats an expensive one sitting on the desk.
                            </p>
                            <ul className="space-y-2 text-sm opacity-90 list-disc list-inside">
                                <li>Put the mic on a boom arm 10–15 cm from your mouth, slightly off-axis to soften plosives.</li>
                                <li>Use a desk mat and soft furnishings to cut keyboard noise and room echo.</li>
                                <li>Wear closed-back headphones on calls so your speakers never feed back into the mic.</li>
                            </ul>
                            <div className="bg-base-200 p-3 rounded-lg font-mono text-xs opacity-70">
                                rule_of_thumb: closer mic, lower gain — your keyboard should be quiet on the recording.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Guidelines;