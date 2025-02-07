import { useState } from "react";
import { Search, Loader2, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface QueryInputProps {
  onProcessingChange?: (isProcessing: boolean) => void;
}

export const QueryInput = ({ onProcessingChange }: QueryInputProps) => {
  const [query, setQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [depth, setDepth] = useState([50]);
  const [sources, setSources] = useState([5]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsProcessing(true);
    onProcessingChange?.(true);

    try {
      const response = await fetch("https://api.anuna.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "MFDoom/deepseek-r1-tool-calling:1.5b",
          messages: [
            {
              role: "user",
              content: query,
            },
          ],
          parameters: {
            depth: depth[0],
            max_sources: sources[0],
          },
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setIsProcessing(false);
      onProcessingChange?.(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl animate-fade-up space-y-4">
      <div className="relative flex items-center gap-2">
        <Input
          type="text"
          placeholder="Enter your research query..."
          className="glass-morphism card-gradient pr-24 h-14 text-lg focus:ring-2 focus:ring-white/20 placeholder:text-white/50"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isProcessing}
        />
        <div className="absolute right-2 flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                size="icon"
                className="neo-blur hover:bg-white/10 glow"
                disabled={isProcessing}
              >
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 glass-morphism card-gradient border-none">
              <div className="space-y-6 p-2">
                <div className="space-y-4">
                  <label className="text-sm font-medium flex items-center justify-between">
                    Research Depth
                    <span className="text-xs text-muted-foreground">
                      {depth}%
                    </span>
                  </label>
                  <Slider
                    value={depth}
                    onValueChange={setDepth}
                    min={0}
                    max={100}
                    step={1}
                    className="[&_[role=slider]]:bg-white"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-medium flex items-center justify-between">
                    Max Sources
                    <span className="text-xs text-muted-foreground">
                      {sources} sources
                    </span>
                  </label>
                  <Slider
                    value={sources}
                    onValueChange={setSources}
                    min={1}
                    max={20}
                    step={1}
                    className="[&_[role=slider]]:bg-white"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button
            type="submit"
            size="icon"
            className="neo-blur hover:bg-white/10 glow"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};