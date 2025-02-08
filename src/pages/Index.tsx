
import { Workspace } from "@/components/Workspace";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] via-[#1A1F2C]/95 to-[#1A1F2C]/90">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/5 via-[#7E69AB]/5 to-[#6E59A5]/5 blur-3xl" />
        <Workspace />
      </div>
    </div>
  );
};

export default Index;
