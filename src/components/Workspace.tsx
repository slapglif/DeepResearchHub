import { useState } from "react";
import { QueryInput } from "./QueryInput";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, BookOpen, Bot, Sparkles, ArrowRight } from "lucide-react";

export const Workspace = () => {
  const [activeTab, setActiveTab] = useState("research");
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-6 space-y-8">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 blur-3xl animate-pulse" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-gradient animate-fade-up flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 animate-pulse text-white/80" />
          Research Assistant
        </h1>
      </div>
      
      <QueryInput onProcessingChange={setIsProcessing} />

      <Tabs
        defaultValue="research"
        className="w-full animate-fade-up"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="glass-morphism grid w-full max-w-md mx-auto grid-cols-2 p-1 mb-8">
          <TabsTrigger 
            value="research" 
            className="data-[state=active]:neo-blur flex items-center gap-2 transition-all duration-300"
          >
            <BookOpen className="w-4 h-4" />
            Research Mode
          </TabsTrigger>
          <TabsTrigger 
            value="agent" 
            className="data-[state=active]:neo-blur flex items-center gap-2 transition-all duration-300"
          >
            <Bot className="w-4 h-4" />
            Agent Mode
          </TabsTrigger>
        </TabsList>

        <TabsContent value="research" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-morphism card-gradient p-6 h-[500px] overflow-auto group hover-scale glow">
              <h3 className="font-semibold mb-6 text-gradient group-hover:scale-105 transition-transform flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                Sources
              </h3>
              <div className="relative">
                {isProcessing ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg">
                    <Loader2 className="w-8 h-8 animate-spin text-white" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">No sources loaded yet.</p>
                    <div className="h-24 glass-morphism rounded-lg shimmer p-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="h-3 w-2/3 bg-white/20 rounded" />
                    </div>
                    <div className="h-24 glass-morphism rounded-lg shimmer p-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="h-3 w-3/4 bg-white/20 rounded" />
                    </div>
                    <div className="h-24 glass-morphism rounded-lg shimmer p-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="h-3 w-1/2 bg-white/20 rounded" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
            
            <Card className="glass-morphism card-gradient p-6 h-[500px] overflow-auto md:col-span-2 group hover-scale glow">
              <h3 className="font-semibold mb-6 text-gradient group-hover:scale-105 transition-transform flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                Analysis
              </h3>
              <div className="relative">
                {isProcessing ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg">
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 className="w-8 h-8 animate-spin text-white" />
                      <p className="text-sm text-white/80">Processing your query...</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-muted-foreground flex items-center gap-2">
                      Enter a query above to begin your research
                      <ArrowRight className="w-4 h-4 animate-pulse" />
                    </p>
                    <div className="h-40 glass-morphism rounded-lg shimmer p-6 space-y-3">
                      <div className="h-3 w-3/4 bg-white/20 rounded" />
                      <div className="h-3 w-1/2 bg-white/20 rounded" />
                      <div className="h-3 w-2/3 bg-white/20 rounded" />
                    </div>
                    <div className="h-40 glass-morphism rounded-lg shimmer p-6 space-y-3">
                      <div className="h-3 w-2/3 bg-white/20 rounded" />
                      <div className="h-3 w-3/4 bg-white/20 rounded" />
                      <div className="h-3 w-1/2 bg-white/20 rounded" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="agent" className="mt-6">
          <Card className="glass-morphism card-gradient p-6 h-[500px] group hover-scale glow">
            <h3 className="font-semibold mb-6 text-gradient group-hover:scale-105 transition-transform flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
              Agent Workspace
            </h3>
            <div className="relative">
              {isProcessing ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg">
                  <Loader2 className="w-8 h-8 animate-spin text-white" />
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-muted-foreground flex items-center gap-2">
                    Agent mode is currently in development
                    <Bot className="w-4 h-4 animate-pulse" />
                  </p>
                  <div className="h-40 glass-morphism rounded-lg shimmer p-6 space-y-3">
                    <div className="h-3 w-2/3 bg-white/20 rounded" />
                    <div className="h-3 w-1/2 bg-white/20 rounded" />
                    <div className="h-3 w-3/4 bg-white/20 rounded" />
                  </div>
                  <div className="h-40 glass-morphism rounded-lg shimmer p-6 space-y-3">
                    <div className="h-3 w-3/4 bg-white/20 rounded" />
                    <div className="h-3 w-2/3 bg-white/20 rounded" />
                    <div className="h-3 w-1/2 bg-white/20 rounded" />
                  </div>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};