
import { Workspace } from "@/components/Workspace";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-teal-500/5 blur-3xl" />
        <Workspace />
      </div>
    </div>
  );
};

export default Index;
