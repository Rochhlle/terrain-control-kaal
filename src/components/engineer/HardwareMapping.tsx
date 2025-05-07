
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Fan,
  Lightbulb,
  Layers3,
  Power,
  ShieldCheck,
  Cog,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function HardwareMapping() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  // Device ↔ Interface mapping
  const deviceInterfaceMapping = [
    { 
      id: 1,
      device: "Fog Machine", 
      icon: Cloud, 
      interface: "Relay 2 / DMX 1", 
      protocol: "DMX512",
      status: "Online" 
    },
    { 
      id: 2,
      device: "Fan System", 
      icon: Fan, 
      interface: "Relay 4 / PWM 3", 
      protocol: "PWM",
      status: "Online" 
    },
    { 
      id: 3,
      device: "LED Wall", 
      icon: Lightbulb, 
      interface: "HDMI 1 / DMX 5-12", 
      protocol: "HDMI + DMX512",
      status: "Online" 
    },
    { 
      id: 4,
      device: "Hologram Projector", 
      icon: Layers3, 
      interface: "GPIO 8-15 / SPI Bus", 
      protocol: "Digital + SPI",
      status: "Online" 
    },
    { 
      id: 5,
      device: "Power Management", 
      icon: Power, 
      interface: "Relay Array 1", 
      protocol: "Digital",
      status: "Online" 
    },
  ];

  // GPIO/Relay mapping
  const gpioRelayMapping = [
    { 
      id: 1, 
      port: "GPIO 1-4", 
      function: "Emergency Stop Signal", 
      fallback: "Always OFF",
      priority: "Critical" 
    },
    { 
      id: 2, 
      port: "Relay 1-2", 
      function: "Fog Machine Control", 
      fallback: "OFF after 30s",
      priority: "High" 
    },
    { 
      id: 3, 
      port: "GPIO 5-7", 
      function: "Temperature Sensors", 
      fallback: "Report Last + Alert",
      priority: "Medium" 
    },
    { 
      id: 4, 
      port: "Relay 3-6", 
      function: "Fan & Cooling Systems", 
      fallback: "ON for 2min, then 50%",
      priority: "High" 
    },
    { 
      id: 5, 
      port: "GPIO 16-23", 
      function: "LED Control Signals", 
      fallback: "Safe Mode Lighting",
      priority: "Medium" 
    },
  ];

  // Safety fallback mapping
  const safetyFallbackMapping = [
    { 
      id: 1, 
      condition: "Power Failure", 
      action: "Graceful Shutdown", 
      backup: "UPS Transition",
      tested: "Weekly" 
    },
    { 
      id: 2, 
      condition: "Temperature > 75°C", 
      action: "Max Fan + Reduce Power", 
      backup: "Emergency Cutoff",
      tested: "Monthly" 
    },
    { 
      id: 3, 
      condition: "Network Loss", 
      action: "Cache Last Command", 
      backup: "Safe State after 60s",
      tested: "Weekly" 
    },
    { 
      id: 4, 
      condition: "Low Voltage Alert", 
      action: "Reduce Power Draw", 
      backup: "Critical Systems Only",
      tested: "Monthly" 
    },
    { 
      id: 5, 
      condition: "Software Error", 
      action: "Restart Control App", 
      backup: "Manual Control Mode",
      tested: "Monthly" 
    },
  ];

  const renderStatusBadge = (status: string) => {
    if (status === "Online") {
      return <Badge className="bg-green-500/20 text-green-500 border-green-500">{status}</Badge>;
    } else if (status === "Standby") {
      return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500">{status}</Badge>;
    } else {
      return <Badge className="bg-red-500/20 text-red-500 border-red-500">{status}</Badge>;
    }
  };

  const renderPriorityBadge = (priority: string) => {
    if (priority === "Critical") {
      return <Badge className="bg-red-500/20 text-red-500 border-red-500">{priority}</Badge>;
    } else if (priority === "High") {
      return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500">{priority}</Badge>;
    } else {
      return <Badge className="bg-blue-500/20 text-blue-500 border-blue-500">{priority}</Badge>;
    }
  };

  const renderTestBadge = (tested: string) => {
    return <Badge className="bg-kaal-primary/20 text-kaal-primary border-kaal-primary">{tested}</Badge>;
  };
  
  return (
    <div className="p-4 border border-muted rounded-lg bg-muted/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Hardware Configuration</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="p-2 rounded-full hover:bg-muted/30 transition-colors">
                <Cog size={16} />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-xs">Hardware configuration settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Tabs defaultValue="device-interface">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="device-interface">Devices</TabsTrigger>
          <TabsTrigger value="gpio-relay">GPIO/Relay</TabsTrigger>
          <TabsTrigger value="safety">Safety Fallbacks</TabsTrigger>
        </TabsList>
        
        {/* Device Interface Tab */}
        <TabsContent value="device-interface">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-muted">
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Device</th>
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Interface</th>
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Protocol</th>
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {deviceInterfaceMapping.map((item) => (
                  <tr 
                    key={item.id}
                    className={`border-b border-muted ${
                      activeRow === item.id ? "bg-muted/20" : ""
                    }`}
                    onMouseEnter={() => setActiveRow(item.id)}
                    onMouseLeave={() => setActiveRow(null)}
                  >
                    <td className="px-2 py-2">
                      <div className="flex items-center">
                        <item.icon size={16} className="mr-2" />
                        <span>{item.device}</span>
                      </div>
                    </td>
                    <td className="px-2 py-2 font-mono text-xs">{item.interface}</td>
                    <td className="px-2 py-2">
                      <Badge variant="outline" className="font-mono text-xs">
                        {item.protocol}
                      </Badge>
                    </td>
                    <td className="px-2 py-2">
                      {renderStatusBadge(item.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        {/* GPIO Relay Tab */}
        <TabsContent value="gpio-relay">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-muted">
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Port</th>
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Function</th>
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Fallback State</th>
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Priority</th>
                </tr>
              </thead>
              <tbody>
                {gpioRelayMapping.map((item) => (
                  <tr 
                    key={item.id}
                    className={`border-b border-muted ${
                      activeRow === item.id ? "bg-muted/20" : ""
                    }`}
                    onMouseEnter={() => setActiveRow(item.id)}
                    onMouseLeave={() => setActiveRow(null)}
                  >
                    <td className="px-2 py-2 font-mono text-xs">{item.port}</td>
                    <td className="px-2 py-2">{item.function}</td>
                    <td className="px-2 py-2 text-xs">{item.fallback}</td>
                    <td className="px-2 py-2">
                      {renderPriorityBadge(item.priority)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        {/* Safety Fallbacks Tab */}
        <TabsContent value="safety">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-muted">
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Condition</th>
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Primary Action</th>
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Backup Action</th>
                  <th className="px-2 py-2 text-left font-medium text-muted-foreground">Test Frequency</th>
                </tr>
              </thead>
              <tbody>
                {safetyFallbackMapping.map((item) => (
                  <tr 
                    key={item.id}
                    className={`border-b border-muted ${
                      activeRow === item.id ? "bg-muted/20" : ""
                    }`}
                    onMouseEnter={() => setActiveRow(item.id)}
                    onMouseLeave={() => setActiveRow(null)}
                  >
                    <td className="px-2 py-2">{item.condition}</td>
                    <td className="px-2 py-2 text-xs">{item.action}</td>
                    <td className="px-2 py-2 text-xs">{item.backup}</td>
                    <td className="px-2 py-2">
                      {renderTestBadge(item.tested)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-2 bg-muted/20 border border-muted rounded-lg flex items-center text-xs">
            <ShieldCheck size={16} className="text-green-500 mr-2" />
            <span>All safety systems operational and regularly tested</span>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
