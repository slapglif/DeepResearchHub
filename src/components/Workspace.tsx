
import { useState } from "react";
import { QueryInput } from "./QueryInput";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Bot } from "lucide-react";
import { Header } from "./workspace/Header";
import { ResearchTab } from "./workspace/ResearchTab";
import { AgentTab } from "./workspace/AgentTab";

export const Workspace = () => {
  const [activeTab, setActiveTab] = useState("research");
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-6 space-y-8">
      <Header />
      
      <QueryInput 
        onProcessingChange={(processing) => {
          setIsProcessing(processing);
          if (processing) setHasContent(true);
        }} 
      />

      {hasContent && (
        <Tabs
          defaultValue="research"
          className="w-full animate-fade-up"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="neo-blur grid w-full max-w-md mx-auto grid-cols-2 p-1 mb-8">
            <TabsTrigger 
              value="research" 
              className="data-[state=active]:glass-morphism flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Research Mode
            </TabsTrigger>
            <TabsTrigger 
              value="agent" 
              className="data-[state=active]:glass-morphism flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              Agent Mode
            </TabsTrigger>
          </TabsList>

          <TabsContent value="research" className="mt-6 space-y-6">
            <ResearchTab isProcessing={isProcessing} hasContent={hasContent} />
          </TabsContent>

          <TabsContent value="agent" className="mt-6">
            <AgentTab isProcessing={isProcessing} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};
