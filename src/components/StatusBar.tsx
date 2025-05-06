
import { useState, useEffect } from "react";
import { 
  CircleCheck, 
  CircleX, 
  Cloud, 
  Layers, 
  Activity,
  Thermometer
} from "lucide-react";

export function StatusBar() {
  // Simulated system states
  const [statuses, setStatuses] = useState({
    relays: { status: "online", latency: "28ms" },
    fog: { status: "standby", level: "42%" },
    terrain: { status: "online", mode: "Mountain" },
    hologram: { status: "online", sync: "98%" },
    temperature: { status: "normal", value: "24°C" },
    power: { status: "online", draw: "1.2kW" }
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
    detail 
  }: { 
    icon: React.ElementType; 
    label: string; 
    status: string; 
    detail: string; 
  }) => (
    <div className="flex items-center space-x-2">
      <Icon size={14} className={getStatusColor(status)} />
      <span className="text-xs font-medium">{label}:</span>
      <span className={`text-xs ${getStatusColor(status)}`}>{detail}</span>
    </div>
  );

  return (
    <div className="w-full glassmorphism py-1 px-3">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <StatusItem 
          icon={statuses.relays.status === "online" ? CircleCheck : CircleX}
          label="Relays"
          status={statuses.relays.status}
          detail={statuses.relays.latency}
        />
        
        <StatusItem 
          icon={Cloud}
          label="Fog"
          status={statuses.fog.status}
          detail={statuses.fog.level}
        />
        
        <StatusItem 
          icon={Layers}
          label="Terrain"
          status={statuses.terrain.status}
          detail={statuses.terrain.mode}
        />
        
        <StatusItem 
          icon={Activity}
          label="Hologram"
          status={statuses.hologram.status}
          detail={statuses.hologram.sync}
        />
        
        <StatusItem 
          icon={Thermometer}
          label="Temperature"
          status={statuses.temperature.status}
          detail={statuses.temperature.value}
        />
      </div>
    </div>
  );
}
