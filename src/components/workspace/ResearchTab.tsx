
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Loader2, 
  ExternalLink, 
  ArrowUpRight,
  MessageSquare 
} from "lucide-react";

interface ResearchTabProps {
  isProcessing: boolean;
  hasContent: boolean;
}

export const ResearchTab = ({ isProcessing, hasContent }: ResearchTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="neo-blur h-[500px] overflow-hidden group hover-scale glow">
        <ScrollArea className="h-full">
          <div className="p-6">
            <h3 className="font-semibold mb-6 text-gradient group-hover:scale-105 transition-transform flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
              Sources
            </h3>
            <div className="relative">
              {isProcessing ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg animate-fade-in">
                  <Loader2 className="w-8 h-8 animate-spin text-white" />
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  {!hasContent ? (
                    <p className="text-muted-foreground">No sources loaded yet.</p>
                  ) : (
                    <>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-morphism rounded-lg p-4 hover:bg-white/5 transition-all duration-300 group/item cursor-pointer">
                          <div className="flex items-start justify-between">
                            <h4 className="font-medium group-hover/item:text-white/90">Source {i}</h4>
                            <ExternalLink className="w-4 h-4 text-white/50 group-hover/item:text-white/90" />
                          </div>
                          <p className="text-sm text-white/70 mt-2">Sample source description with relevant context...</p>
                          <div className="flex items-center gap-2 mt-3 text-xs text-white/50">
                            <span>Relevance: 85%</span>
                            <span>•</span>
                            <span>Credibility: High</span>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </Card>
      
      <Card className="neo-blur h-[500px] overflow-hidden md:col-span-2 group hover-scale glow">
        <ScrollArea className="h-full">
          <div className="p-6">
            <h3 className="font-semibold mb-6 text-gradient group-hover:scale-105 transition-transform flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
              Analysis
            </h3>
            <div className="relative">
              {isProcessing ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg animate-fade-in">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-white" />
                    <p className="text-sm text-white/80">Processing your query...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  {!hasContent ? (
                    <p className="text-muted-foreground">Enter a query above to begin your research</p>
                  ) : (
                    <>
                      <div className="glass-morphism rounded-lg p-6 hover:bg-white/5 transition-all duration-300 group/section">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Key Findings
                          </h4>
                          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover/section:text-white/90" />
                        </div>
                        <div className="space-y-4">
                          <p className="text-sm text-white/80">Analysis content with key findings...</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {["AI", "Research", "Technology"].map((tag) => (
                              <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="glass-morphism rounded-lg p-6 hover:bg-white/5 transition-all duration-300 group/section">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium">Detailed Analysis</h4>
                          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover/section:text-white/90" />
                        </div>
                        <p className="text-sm text-white/80">In-depth analysis with supporting evidence...</p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};
