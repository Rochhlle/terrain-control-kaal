
import { useState, useEffect } from "react";
import {
  Cloud,
  Lightbulb,
  Fan,
  Layers3,
  CircleDot,
  Volume2,
  Wifi,
  BatteryCharging,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SystemStatus {
  name: string;
  icon: typeof Cloud;
  status: "online" | "offline" | "standby";
  value?: string;
}

export function StatusBar() {
  const [systems, setSystems] = useState<SystemStatus[]>([
    { name: "Fog System", icon: Cloud, status: "standby" },
    { name: "LED Array", icon: Lightbulb, status: "online", value: "60%" },
    { name: "Ventilation", icon: Fan, status: "online", value: "800 RPM" },
    { name: "Hologram", icon: Layers3, status: "standby" },
    { name: "Audio", icon: Volume2, status: "online", value: "ON" },
    { name: "Network", icon: Wifi, status: "online", value: "45ms" },
    { name: "Power", icon: BatteryCharging, status: "online", value: "UPS READY" },
  ]);
  
  // Simulate system status changes
  useEffect(() => {
    const interval = setInterval(() => {
      setSystems(prev => {
        return prev.map(system => {
          // Randomly update some systems occasionally
          if (Math.random() > 0.85) {
            const statuses: Array<"online" | "offline" | "standby"> = ["online", "standby"];
            const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
            
            // Update values based on status
            let newValue;
            if (system.name === "Ventilation") {
              newValue = newStatus === "online" ? `${600 + Math.floor(Math.random() * 600)} RPM` : "IDLE";
            } else if (system.name === "LED Array") {
              newValue = newStatus === "online" ? `${Math.floor(Math.random() * 100)}%` : "STANDBY";
            } else if (system.name === "Network") {
              newValue = `${30 + Math.floor(Math.random() * 50)}ms`;
            }
            
            return { ...system, status: newStatus, value: newValue || system.value };
          }
          return system;
        });
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getStatusColor = (status: "online" | "offline" | "standby"): string => {
    switch (status) {
      case "online": return "text-green-500";
      case "standby": return "text-yellow-500";
      case "offline": return "text-red-500";
      default: return "text-muted-foreground";
    }
  };
  
  return (
    <div className="flex overflow-x-auto scrollbar-hide py-1 px-2 bg-muted/20 backdrop-blur-sm rounded-md">
      <div className="flex items-center space-x-6 min-w-full justify-between">
        {systems.map((system, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 p-0.5">
                  <system.icon size={14} className="text-muted-foreground" />
                  <span className="hidden md:inline-block text-xs text-muted-foreground">
                    {system.name}:
                  </span>
                  <div className="flex items-center gap-1">
                    <CircleDot size={8} className={getStatusColor(system.status)} />
                    <span className="text-xs">{system.value || system.status}</span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                {system.name}: {system.status.toUpperCase()}
                {system.value && <> - {system.value}</>}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
