
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="flex items-center p-1 border border-muted rounded-full bg-muted/30 relative">
      <motion.div
        className="absolute inset-y-1 rounded-full z-0"
        initial={false}
        animate={{
          left: currentMode === "engineer" ? "1px" : "50%",
          right: currentMode === "commander" ? "1px" : "50%",
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: currentMode === "engineer" 
            ? "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)" 
            : "linear-gradient(90deg, #ef4444 0%, #f97316 100%)"
        }}
      />
      
      <button
        className={`relative z-10 flex items-center space-x-1 px-3 py-1 rounded-full ${
          currentMode === "engineer"
            ? "text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => handleToggle("engineer")}
        disabled={isAnimating}
      >
        <span className="text-xl">🧠</span>
        <span className="font-medium">Engineer</span>
      </button>
      
      <button
        className={`relative z-10 flex items-center space-x-1 px-3 py-1 rounded-full ${
          currentMode === "commander"
            ? "text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => handleToggle("commander")}
        disabled={isAnimating}
      >
        <span className="text-xl">🪖</span>
        <span className="font-medium">Commander</span>
      </button>
    </div>
  );
}
