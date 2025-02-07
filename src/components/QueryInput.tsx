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
          className="pr-12 h-14 text-lg border-2 border-primary/20 focus:border-primary/40"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 bg-primary hover:bg-primary/90"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};