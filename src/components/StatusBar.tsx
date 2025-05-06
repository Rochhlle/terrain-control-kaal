
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CircleCheck, 
  CircleX, 
  Cloud, 
  Layers, 
  Activity,
  Thermometer,
  ShieldCheck,
  Timer
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function StatusBar() {
  // Simulated system states
  const [statuses, setStatuses] = useState({
    relays: { status: "online", latency: "28ms" },
    fog: { status: "standby", level: "42%" },
    terrain: { status: "online", mode: "Mountain" },
    hologram: { status: "online", sync: "98%" },
    temperature: { status: "normal", value: "24°C" },
    power: { status: "online", draw: "1.2kW" },
    security: { status: "online", level: "Maximum" },
    uptime: { status: "online", time: "23:41:05" }
  });

  // Simulate system status changes
  useEffect(() => {
    const interval = setInterval(() => {
      // Random status changes for demo purposes
      const newStatuses = {...statuses};
      
      const systems = ["relays", "fog", "terrain", "hologram"] as const;
      const randomSystem = systems[Math.floor(Math.random() * systems.length)];
      
      if (randomSystem === "fog") {
        newStatuses.fog.level = `${Math.floor(Math.random() * 100)}%`;
      } else if (randomSystem === "terrain") {
        const terrainModes = ["Mountain", "Desert", "Urban", "Forest"];
        newStatuses.terrain.mode = terrainModes[Math.floor(Math.random() * terrainModes.length)];
      } else if (randomSystem === "hologram") {
        newStatuses.hologram.sync = `${90 + Math.floor(Math.random() * 10)}%`;
      } else if (randomSystem === "relays") {
        newStatuses.relays.latency = `${20 + Math.floor(Math.random() * 15)}ms`;
      }
      
      // Update uptime
      const [hours, minutes, seconds] = statuses.uptime.time.split(':').map(Number);
      let newSeconds = seconds + 5;
      let newMinutes = minutes;
      let newHours = hours;
      
      if (newSeconds >= 60) {
        newSeconds = newSeconds % 60;
        newMinutes += 1;
      }
      
      if (newMinutes >= 60) {
        newMinutes = newMinutes % 60;
        newHours += 1;
      }
      
      newStatuses.uptime.time = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
      
      setStatuses(newStatuses);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [statuses]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "status-online";
      case "offline": return "status-offline";
      case "standby": return "status-standby";
      case "normal": return "status-online";
      default: return "";
    }
  };

  const StatusItem = ({ 
    icon: Icon, 
    label, 
    status, 
    detail,
    tooltip
  }: { 
    icon: React.ElementType; 
    label: string; 
    status: string; 
    detail: string;
    tooltip: string;
  }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div 
            className="flex items-center space-x-2 hoverable-component px-2 py-1 rounded-md"
            whileHover={{ scale: 1.05 }}
          >
            <Icon size={14} className={getStatusColor(status)} />
            <span className="text-xs font-medium">{label}:</span>
            <motion.span 
              key={detail}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-xs ${getStatusColor(status)}`}
            >
              {detail}
            </motion.span>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <motion.div 
      className="w-full glassmorphism py-1 px-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <StatusItem 
          icon={statuses.relays.status === "online" ? CircleCheck : CircleX}
          label="Relays"
          status={statuses.relays.status}
          detail={statuses.relays.latency}
          tooltip={`Hardware relay response time: ${statuses.relays.latency}`}
        />
        
        <StatusItem 
          icon={Cloud}
          label="Fog"
          status={statuses.fog.status}
          detail={statuses.fog.level}
          tooltip={`Fog machine output level: ${statuses.fog.level}`}
        />
        
        <StatusItem 
          icon={Layers}
          label="Terrain"
          status={statuses.terrain.status}
          detail={statuses.terrain.mode}
          tooltip={`Active terrain simulation: ${statuses.terrain.mode}`}
        />
        
        <StatusItem 
          icon={Activity}
          label="Hologram"
          status={statuses.hologram.status}
          detail={statuses.hologram.sync}
          tooltip={`Hologram synchronization level: ${statuses.hologram.sync}`}
        />
        
        <StatusItem 
          icon={Thermometer}
          label="Temperature"
          status={statuses.temperature.status}
          detail={statuses.temperature.value}
          tooltip={`System temperature: ${statuses.temperature.value}`}
        />
        
        <StatusItem 
          icon={ShieldCheck}
          label="Security"
          status={statuses.security.status}
          detail={statuses.security.level}
          tooltip="Security protocol status"
        />
        
        <StatusItem 
          icon={Timer}
          label="Uptime"
          status={statuses.uptime.status}
          detail={statuses.uptime.time}
          tooltip="System uptime since last restart"
        />
      </div>
    </motion.div>
  );
}
