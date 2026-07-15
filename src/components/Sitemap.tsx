import { Link } from "react-router-dom";

export function Sitemap() {
  return (
    <div className="min-h-screen bg-black text-white p-12 font-sans overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-light tracking-widest uppercase mb-12">Sitemap</h1>
        <p className="text-white/50 mb-8 font-light tracking-wide">
          Preview environment detected. You have been redirected to the sitemap.
        </p>
        <nav className="flex flex-col gap-4">
          <Link
            to="/lp-video"
            className="text-xl font-light text-white/70 hover:text-white transition-colors uppercase tracking-widest border border-white/20 p-6 flex justify-between items-center group"
          >
            <span>Landing Page (Video)</span>
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
          <Link
            to="/sitemap"
            className="text-xl font-light text-white/70 hover:text-white transition-colors uppercase tracking-widest border border-white/20 p-6 flex justify-between items-center group"
          >
            <span>Sitemap</span>
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
