import { useState } from "react";
import { QueryInput } from "./QueryInput";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Workspace = () => {
  const [activeTab, setActiveTab] = useState("research");

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-gradient animate-fade-up">
        Research Assistant
      </h1>
      
      <QueryInput />

      <Tabs
        defaultValue="research"
        className="w-full animate-fade-up"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="glass-morphism grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="research" className="data-[state=active]:neo-blur">Research Mode</TabsTrigger>
          <TabsTrigger value="agent" className="data-[state=active]:neo-blur">Agent Mode</TabsTrigger>
        </TabsList>

        <TabsContent value="research" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-morphism p-4 h-[500px] overflow-auto">
              <h3 className="font-semibold mb-4 text-gradient">Sources</h3>
              <p className="text-muted-foreground">No sources loaded yet.</p>
            </Card>
            
            <Card className="glass-morphism p-4 h-[500px] overflow-auto md:col-span-2">
              <h3 className="font-semibold mb-4 text-gradient">Analysis</h3>
              <p className="text-muted-foreground">
                Enter a query above to begin your research.
              </p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="agent" className="mt-6">
          <Card className="glass-morphism p-4 h-[500px]">
            <h3 className="font-semibold mb-4 text-gradient">Agent Workspace</h3>
            <p className="text-muted-foreground">
              Agent mode is currently in development.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};