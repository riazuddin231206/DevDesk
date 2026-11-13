import { Link, useParams } from "react-router";
import ViewsCard from "../componant/home/ViewsCard";
// import { useState } from "react";

const CardDetails = () => {

    const { id } = useParams();
    

    const handleCopyJson = () => {
        const jsonString = JSON.stringify(singleView.specs.items, null, 2);
        navigator.clipboard.writeText(jsonString);
    };

    const singleView = ViewsCard.find((view) => view.id = id)
    return (
        <div>
            <div className="pt-25 min-h-screen bg-base-300 text-base-content px-4 md:px-8 py-6 ">
                <div className="max-w-6xl mx-auto space-y-8">

                    {/* Back Link */}
                    <div>
                        <Link to="/setups" className="btn btn-ghost btn-sm gap-2 text-base-content/70 hover:text-base-content">

                            <span className="text-xl pb-1">←</span> Back to Setups
                        </Link>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Left Column: Image Preview & Thumbnails */}
                        <div className="lg:col-span-7 space-y-4">
                            {/* Main Image Showcase */}
                            <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden aspect-video relative">
                                <figure className="w-full h-full m-0">
                                    <img
                                        src={singleView.images[0]}
                                        alt={singleView.title}
                                        className="w-full h-full object-cover transition-all duration-300"
                                    />
                                </figure>
                            </div>

                            {/* Thumbnails Gallery */}
                            <div className="grid grid-cols-3 gap-3">
                                {singleView.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        // onClick={() => setActiveImage(img)}
                                        className={`card bg-base-100 cursor-pointer overflow-hidden aspect-video border-2 transition-all    'border-success shadow-md scale-[1.02]' : 'border-base-300 opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <figure className="w-full h-full m-0">
                                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Title, Author & Specs */}
                        <div className="lg:col-span-5 space-y-6">

                            {/* Categories & Title */}
                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2">
                                    {singleView.categories.map((cat, idx) => (
                                        <span key={idx} className="badge badge-success badge-outline font-medium text-xs">
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                    {singleView.title}
                                </h1>
                            </div>

                            {/* Author Profile Card (DaisyUI style) */}
                            <div className="card bg-base-100 shadow-md border border-base-200 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar placeholder">
                                            <div className="bg-success text-success-content w-12 rounded-lg font-bold">
                                                <span>{singleView.author.name}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-base">{singleView.author.username}</div>
                                            <div className="text-xs opacity-60">{singleView.author.role} · {singleView.author.location}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button className="btn btn-sm btn-success gap-1.5 text-white ">
                                            <span className="text-lg">↑</span>
                                            <span className="w-4 h-4 fill-current" /> 
                                            <span>{singleView.upvotes}</span>
                                        </button>
                                        <button className="btn btn-sm btn-ghost btn-square">
                                            <span className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Specs Box with DaisyUI Card / Mockup */}
                            <div className="card bg-base-100 shadow-md border border-base-200 overflow-hidden">
                                <div className="bg-base-200 px-4 py-3 border-b border-base-300 font-mono text-xs flex justify-between items-center opacity-80">
                                    <span>{singleView.specs.fileName}</span>
                                    <button
                                        onClick={handleCopyJson}
                                        className="btn btn-ghost btn-xs gap-1 normal-case font-sans"
                                        title="Copy specs"
                                    >
                                        {/* {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                                        {copied ? 'Copied' : 'Copy'} */}
                                    </button>
                                </div>

                                <div className="card-body p-0 divide-y divide-base-200 text-sm">
                                    {singleView.specs.items.map((item, idx) => (
                                        <div key={idx} className="grid grid-cols-3 px-5 py-3">
                                            <span className="opacity-60">{item.label}</span>
                                            <span className="col-span-2 font-semibold">{item.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="px-5 py-3 bg-base-200/50 border-t border-base-200 flex flex-wrap gap-2">
                                    {singleView.specs.tags.map((tag, idx) => (
                                        <span key={idx} className="badge badge-sm badge-neutral">{tag}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* About this setup section */}
                    <div className="card bg-base-100 shadow-md border border-base-200 p-6 md:p-8 max-w-4xl space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">About this setup</h2>
                        <div className="space-y-4 opacity-90 leading-relaxed text-base">
                            {singleView.about.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;