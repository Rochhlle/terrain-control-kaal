
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ModeToggleProps {
  currentMode: "engineer" | "commander";
  onModeChange: (mode: "engineer" | "commander") => void;
}

export function ModeToggle({ currentMode, onModeChange }: ModeToggleProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = (mode: "engineer" | "commander") => {
    if (currentMode !== mode && !isAnimating) {
      setIsAnimating(true);
      onModeChange(mode);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <TooltipProvider>
      <div className="flex items-center p-1 border border-muted rounded-full bg-muted/30 backdrop-blur-sm relative">
        <motion.div
          className="absolute inset-y-1 rounded-full z-0"
          initial={false}
          animate={{
            left: currentMode === "engineer" ? "1px" : "50%",
            right: currentMode === "commander" ? "1px" : "50%",
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          style={{
            background: currentMode === "engineer" 
              ? "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)" 
              : "linear-gradient(90deg, #ef4444 0%, #f97316 100%)"
          }}
        />
        
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              className={`relative z-10 flex items-center space-x-1 px-3 py-1 rounded-full ${
                currentMode === "engineer"
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => handleToggle("engineer")}
              disabled={isAnimating}
              whileHover={{ scale: currentMode !== "engineer" ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">🧠</span>
              <span className="font-medium">Engineer</span>
            </motion.button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch to technical system architecture view</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              className={`relative z-10 flex items-center space-x-1 px-3 py-1 rounded-full ${
                currentMode === "commander"
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => handleToggle("commander")}
              disabled={isAnimating}
              whileHover={{ scale: currentMode !== "commander" ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">🪖</span>
              <span className="font-medium">Commander</span>
            </motion.button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch to strategic immersive view</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
