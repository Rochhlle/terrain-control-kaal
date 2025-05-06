
import { useState } from "react";
import { Header } from "@/components/Header";
import { LiveMap } from "@/components/LiveMap";
import EngineerMode from "./EngineerMode";
import CommanderMode from "./CommanderMode";

const Index = () => {
  const [currentMode, setCurrentMode] = useState<"engineer" | "commander">("engineer");

  const handleModeChange = (mode: "engineer" | "commander") => {
    setCurrentMode(mode);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentMode={currentMode} onModeChange={handleModeChange} />
      
      {currentMode === "engineer" ? (
        <EngineerMode />
      ) : (
        <CommanderMode />
      )}
      
      <LiveMap />
    </div>
  );
};

export default Index;
