export function CommunityWorkspaces() {
  return (
    <div className="bg-[#0b0f17] mt-16">
      <section className="p-12 px-6 w-9/12 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex gap-3 align-center">
              <h2 className="text-5xl font-semibold tracking-tight text-white">Community Workspaces</h2>
              <div className="flex items-center gap-2 mb-2 pt-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Showing 12 setups
                </span>
              </div>
            </div>

            <p className="text-slate-400 mt-1">

              Every desk here lists its full gear. Open one to see the specs and the story behind it.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sort-select" className="text-sm text-slate-400 whitespace-nowrap">
              Sort:
            </label>
            <select
              id="sort-select"
              className="bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              defaultValue="most-upvoted"
            >
              <option value="most-upvoted">Most upvoted</option>
              <option value="newest">Newest</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>

        {/* Grid of setups would go here */}
      </section>
    </div>
  );
}