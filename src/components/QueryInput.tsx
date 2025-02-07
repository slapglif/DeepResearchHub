import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const QueryInput = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Query submitted:", query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl animate-fade-up">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Enter your research query..."
          className="glass-morphism pr-12 h-14 text-lg focus:ring-2 focus:ring-white/20"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 neo-blur hover:bg-white/10"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};