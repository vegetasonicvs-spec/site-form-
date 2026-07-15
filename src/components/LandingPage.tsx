import { Sparkles } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white relative font-sans overflow-hidden">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] uppercase">
        Form
      </h1>
      <div className="absolute bottom-8 right-8 text-white/80">
        <Sparkles size={32} strokeWidth={1} className="fill-current" />
      </div>
    </div>
  );
}
