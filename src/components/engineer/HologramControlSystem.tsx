
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  Zap,
  Box,
  ArrowRight,
  Layers3,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function HologramControlSystem() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  const handleNodeHover = (node: string | null) => {
    setActiveNode(node);
  };

  const toggleSystem = () => {
    setIsActive(!isActive);
  };

  // Define nodes in the hologram control system
  const nodes = [
    { id: "nodejs", name: "Node.js Server", icon: Server, details: "Core control system and data processing" },
    { id: "arduino", name: "Arduino Controller", icon: Cpu, details: "Hardware interface for laser and motor control" },
    { id: "laser", name: "Laser Array", icon: Zap, details: "Precision laser system for volumetric projection" },
    { id: "volumetric", name: "Volumetric Display", icon: Box, details: "Specialized medium for 3D light diffusion" },
    { id: "hologram", name: "Hologram Output", icon: Layers3, details: "Final synchronized holographic terrain projection" }
  ];

  return (
    <div className="p-4 border border-muted rounded-lg bg-muted/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Hologram Control System</h3>
        
        <button 
          onClick={toggleSystem}
          className={`px-3 py-1 text-xs rounded-md border transition-colors ${
            isActive 
              ? "bg-green-500/20 border-green-500 text-green-500 hover:bg-green-500/30" 
              : "bg-muted/20 border-muted text-muted-foreground hover:bg-muted/30"
          }`}
        >
          {isActive ? "System Active" : "Activate System"}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex flex-col items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    className={`relative w-16 h-16 flex items-center justify-center rounded-lg border transition-all ${
                      activeNode === node.id
                        ? "border-kaal-primary bg-kaal-primary/10 text-kaal-primary"
                        : isActive 
                          ? "border-green-500 bg-green-500/10 text-green-500" 
                          : "border-muted bg-muted/20 text-muted-foreground"
                    }`}
                    onMouseEnter={() => handleNodeHover(node.id)}
                    onMouseLeave={() => handleNodeHover(null)}
                    animate={
                      isActive 
                        ? { 
                            boxShadow: ['0 0 0 rgba(34, 197, 94, 0)', '0 0 10px rgba(34, 197, 94, 0.5)', '0 0 0 rgba(34, 197, 94, 0)'],
                          } 
                        : {}
                    }
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                  >
                    <node.icon size={24} />
                    
                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
                    )}
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <div className="text-xs">
                    <p className="font-semibold">{node.name}</p>
                    <p className="max-w-[200px] pt-1">{node.details}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <p className={`mt-2 text-xs font-medium ${
              isActive ? "text-green-500" : "text-muted-foreground"
            }`}>
              {node.name}
            </p>
            
            {index < nodes.length - 1 && (
              <div className="hidden sm:block">
                <ArrowRight 
                  size={16} 
                  className={`mt-2 ${isActive ? "text-green-500" : "text-muted-foreground"}`} 
                />
              </div>
            )}
          </div>
        ))}

        {/* Hologram visualization */}
        {isActive && (
          <motion.div
            className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="hologram-glow w-full h-full rounded-full bg-green-500/5 flex items-center justify-center">
              <div className="w-1/2 h-1/2 rounded-full bg-green-500/10"></div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="text-xs p-2 border border-muted rounded bg-muted/10">
          <h4 className="font-medium mb-1">Technical Specifications</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Laser Array: 12 RGB laser units, 30mW each</li>
            <li>• Resolution: 1024 × 1024 × 512 voxels</li>
            <li>• Refresh Rate: 60Hz volumetric refresh</li>
            <li>• Projection Medium: Specialized diffusion medium</li>
          </ul>
        </div>
        <div className="text-xs p-2 border border-muted rounded bg-muted/10">
          <h4 className="font-medium mb-1">System Parameters</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Status: <span className={isActive ? "text-green-500" : "text-red-500"}>{isActive ? "Online" : "Standby"}</span></li>
            <li>• Power Draw: {isActive ? "420W" : "15W"}</li>
            <li>• Temperature: {isActive ? "38.2°C" : "22.5°C"}</li>
            <li>• Cooling: {isActive ? "Active (60%)" : "Passive"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
