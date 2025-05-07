
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Tablet,
  Server,
  Cpu,
  Cloud,
  Lightbulb,
  Fan,
  Waves,
  ArrowRight,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ControlChainVisualization() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNodeHover = (node: string | null) => {
    setActiveNode(node);
  };

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Reset animation after completion
    setTimeout(() => {
      setIsAnimating(false);
    }, 7000); // Total animation duration
  };

  // Define the nodes in the control chain
  const nodes = [
    { id: "tablet", name: "Tablet UI", icon: Tablet, protocol: "", details: "Touch-based commander interface for mission control" },
    { id: "websocket", name: "WebSocket", icon: ArrowRight, protocol: "WebSocket", details: "Real-time bidirectional communication" },
    { id: "nodejs", name: "Node.js Server", icon: Server, protocol: "", details: "Command processing and protocol translation" },
    { id: "mqtt", name: "MQTT", icon: ArrowRight, protocol: "MQTT", details: "Message queuing for device communication" },
    { id: "arduino", name: "Arduino/RPi", icon: Cpu, protocol: "", details: "Microcontroller for hardware interfacing" },
    { id: "pwmrelay", name: "PWM/Relay", icon: ArrowRight, protocol: "PWM/Digital", details: "Signal control for actuators" },
    { id: "effects", name: "Room Effects", icon: Cloud, protocol: "", details: "Fog, lighting, and environmental systems" }
  ];
  
  return (
    <div className="p-4 border border-muted rounded-lg bg-muted/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Control Chain Visualization</h3>
        <button 
          onClick={startAnimation}
          className="px-3 py-1 text-xs rounded-md bg-kaal-primary/20 border border-kaal-primary text-kaal-primary hover:bg-kaal-primary/30 transition-colors"
          disabled={isAnimating}
        >
          {isAnimating ? "Animating..." : "Simulate Signal Flow"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-2 relative py-6 overflow-x-auto">
        {nodes.map((node, index) => {
          const isActive = activeNode === node.id || (isAnimating && index <= Math.floor((Date.now() % 7000) / 1000));
          
          return (
            <div key={node.id} className="flex flex-col items-center">
              {/* Node */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div 
                      className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg border transition-all ${
                        isActive 
                          ? "border-kaal-primary bg-kaal-primary/10 text-kaal-primary" 
                          : "border-muted bg-muted/20 text-muted-foreground"
                      }`}
                      onMouseEnter={() => handleNodeHover(node.id)}
                      onMouseLeave={() => handleNodeHover(null)}
                      animate={isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <node.icon size={node.icon === ArrowRight ? 20 : 24} />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <div className="text-xs">
                      <p className="font-semibold">{node.name}</p>
                      {node.protocol && <p className="text-muted-foreground">{node.protocol}</p>}
                      <p className="max-w-[200px] pt-1">{node.details}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              {/* Label */}
              <div className="mt-2 text-center">
                <p className={`text-xs font-medium ${isActive ? "text-kaal-primary" : "text-muted-foreground"}`}>
                  {node.name}
                </p>
                {node.protocol && (
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {node.protocol}
                  </p>
                )}
              </div>
            </div>
          );
        })}

        {/* Connection lines */}
        <div className="absolute top-[32px] left-0 right-0 h-0.5 bg-muted z-0 hidden md:block" />
        
        {/* Animated signal */}
        {isAnimating && (
          <motion.div 
            className="absolute top-[31px] h-1 bg-kaal-primary rounded-full z-10 hidden md:block"
            initial={{ width: "5%", left: "0%" }}
            animate={{ width: "5%", left: "95%" }}
            transition={{ duration: 7, ease: "linear" }}
          />
        )}
      </div>

      <div className="mt-8 text-xs text-muted-foreground">
        <p>This diagram visualizes the complete control chain from user input to physical effects.</p>
        <p className="mt-1">Hover over each component for more details or click "Simulate Signal Flow" to see a command propagate through the system.</p>
      </div>
    </div>
  );
}
