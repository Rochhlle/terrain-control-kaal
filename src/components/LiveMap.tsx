
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Map, Maximize2, Minimize2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function LiveMap() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Show map after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <motion.div
      className={`fixed bottom-6 right-6 z-40 rounded-lg border border-muted overflow-hidden ${
        isExpanded 
          ? "w-[600px] h-[400px] max-w-[80vw] max-h-[60vh]" 
          : "w-12 h-12"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full bg-muted/30 backdrop-blur-sm">
        {isExpanded ? (
          <>
            <div className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')",
                opacity: 0.7
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <p className="text-sm font-mono">Live Terrain Map</p>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Map size={16} className="text-muted-foreground" />
          </div>
        )}
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute top-2 right-2 p-1 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p className="text-xs">{isExpanded ? "Minimize map" : "Expand map"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  );
}
