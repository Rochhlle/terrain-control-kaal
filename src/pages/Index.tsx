
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { LiveMap } from "@/components/LiveMap";
import EngineerMode from "./EngineerMode";
import CommanderMode from "./CommanderMode";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      
      <div className="container mx-auto px-4 pt-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-8"
        >
          <img 
            src="/lovable-uploads/7b825a42-916d-4b3d-b7b6-8fd4d30ef9e7.png" 
            alt="Project KAAL Logo" 
            className="h-28 mb-4 filter drop-shadow-lg" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <Button 
            variant="outline" 
            className="border-kaal-primary text-kaal-primary hover:bg-kaal-primary hover:text-white"
            asChild
          >
            <a 
              href="https://drive.google.com/file/d/1OvUWK_zNXv3vOYzz1ZKOAUSiBrf9gq06/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download size={18} />
              <span>Download to view in a different language</span>
            </a>
          </Button>
        </motion.div>
      </div>
      
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
