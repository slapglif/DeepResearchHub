
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Loader2 } from "lucide-react";

interface AgentTabProps {
  isProcessing: boolean;
}

export const AgentTab = ({ isProcessing }: AgentTabProps) => {
  return (
    <Card className="neo-blur h-[500px] group hover-scale glow">
      <ScrollArea className="h-full">
        <div className="p-6">
          <h3 className="font-semibold mb-6 text-gradient group-hover:scale-105 transition-transform flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            Agent Workspace
          </h3>
          <div className="relative">
            {isProcessing ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg animate-fade-in">
                <Loader2 className="w-8 h-8 animate-spin text-white" />
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in">
                <p className="text-muted-foreground flex items-center gap-2">
                  Agent mode is currently in development
                  <Bot className="w-4 h-4 animate-pulse" />
                </p>
                <div className="glass-morphism rounded-lg p-6 space-y-4">
                  <h4 className="font-medium">Coming Soon</h4>
                  <p className="text-sm text-white/80">Advanced agent capabilities will be available here...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
};
