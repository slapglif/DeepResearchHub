import { useState } from "react";
import { QueryInput } from "./QueryInput";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";

export const Workspace = () => {
  const [activeTab, setActiveTab] = useState("research");
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-6 space-y-8">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 blur-3xl" />
        <h1 className="relative text-4xl font-bold text-gradient animate-fade-up">
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
        <TabsList className="glass-morphism grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="research" className="data-[state=active]:neo-blur">
            Research Mode
          </TabsTrigger>
          <TabsTrigger value="agent" className="data-[state=active]:neo-blur">
            Agent Mode
          </TabsTrigger>
        </TabsList>

        <TabsContent value="research" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-morphism p-4 h-[500px] overflow-auto group hover:ring-2 hover:ring-white/20 transition-all duration-300">
              <h3 className="font-semibold mb-4 text-gradient group-hover:scale-105 transition-transform">
                Sources
              </h3>
              <div className="relative">
                {isProcessing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg">
                    <Loader2 className="w-8 h-8 animate-spin text-white" />
                  </div>
                )}
                <p className="text-muted-foreground">No sources loaded yet.</p>
              </div>
            </Card>
            
            <Card className="glass-morphism p-4 h-[500px] overflow-auto md:col-span-2 group hover:ring-2 hover:ring-white/20 transition-all duration-300">
              <h3 className="font-semibold mb-4 text-gradient group-hover:scale-105 transition-transform">
                Analysis
              </h3>
              <div className="relative">
                {isProcessing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg">
                    <Loader2 className="w-8 h-8 animate-spin text-white" />
                  </div>
                )}
                <p className="text-muted-foreground">
                  Enter a query above to begin your research.
                </p>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="agent" className="mt-6">
          <Card className="glass-morphism p-4 h-[500px] group hover:ring-2 hover:ring-white/20 transition-all duration-300">
            <h3 className="font-semibold mb-4 text-gradient group-hover:scale-105 transition-transform">
              Agent Workspace
            </h3>
            <div className="relative">
              {isProcessing && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg">
                  <Loader2 className="w-8 h-8 animate-spin text-white" />
                </div>
              )}
              <p className="text-muted-foreground">
                Agent mode is currently in development.
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};