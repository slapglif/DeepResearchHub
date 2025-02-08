
import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 via-[#7E69AB]/10 to-[#6E59A5]/10 blur-3xl animate-pulse" />
      <h1 className="relative text-4xl md:text-5xl font-bold text-gradient animate-fade-up flex items-center justify-center gap-3 mb-8">
        <Sparkles className="w-8 h-8 animate-pulse text-[#9b87f5]" />
        Anuna Agentic Research
      </h1>
    </div>
  );
};
