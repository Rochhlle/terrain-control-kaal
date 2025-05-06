
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { LiveMap } from "@/components/LiveMap";
import EngineerMode from "./EngineerMode";
import CommanderMode from "./CommanderMode";

const Index = () => {
  const [currentMode, setCurrentMode] = useState<"engineer" | "commander">("engineer");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleModeChange = (mode: "engineer" | "commander") => {
    if (currentMode !== mode) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMode(mode);
        setIsTransitioning(false);
      }, 500); // Match this with the animation duration
    }
  };

  // Set document title based on current mode
  useEffect(() => {
    document.title = currentMode === "engineer" 
      ? "Project KAAL - Engineer Mode" 
      : "Project KAAL - Commander Mode";
  }, [currentMode]);

  return (
    <div className={`min-h-screen bg-background transition-colors duration-500 ${
      currentMode === "engineer" ? "engineer-bg" : "commander-bg"
    }`}>
      <Header currentMode={currentMode} onModeChange={handleModeChange} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {currentMode === "engineer" ? (
            <EngineerMode />
          ) : (
            <CommanderMode />
          )}
        </motion.div>
      </AnimatePresence>
      
      <LiveMap />
    </div>
  );
};

export default Index;
