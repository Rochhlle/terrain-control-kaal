
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { 
  Activity,
  Share2,
  Zap,
  ToggleLeft,
  ToggleRight,
  PlayCircle,
  StopCircle,
  CirclePause
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function HardwareControl() {
  const [activeRelays, setActiveRelays] = useState<string[]>([]);

  const toggleRelay = (relayId: string) => {
    setActiveRelays(prev => 
      prev.includes(relayId) 
        ? prev.filter(id => id !== relayId)
        : [...prev, relayId]
    );
  };

  const isRelayActive = (relayId: string) => {
    return activeRelays.includes(relayId);
  };

  return (
    <div className="system-border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Share2 size={20} className="mr-2 text-kaal-primary" /> 
        Hardware Control Chain
      </h2>

      <Tabs defaultValue="relays" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="relays">Relay Status</TabsTrigger>
          <TabsTrigger value="gpio">GPIO Mapping</TabsTrigger>
          <TabsTrigger value="signals">Signal Visualizer</TabsTrigger>
        </TabsList>

        <TabsContent value="relays">
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-muted/30 border border-muted">
              <h3 className="text-lg font-medium mb-3">Relay Control Matrix</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div 
                  className={`p-3 border rounded-lg cursor-pointer transition-all flex flex-col items-center ${isRelayActive("relay1") ? "border-green-500 bg-green-500/10" : "border-muted"}`}
                  onClick={() => toggleRelay("relay1")}
                >
                  <div className="flex items-center justify-center mb-2">
                    {isRelayActive("relay1") ? (
                      <ToggleRight size={24} className="text-green-500" />
                    ) : (
                      <ToggleLeft size={24} className="text-muted-foreground" />
                    )}
                  </div>
                  <span className="text-sm font-medium">Relay 1</span>
                  <span className="text-xs text-muted-foreground mt-1">Fog Machine Main</span>
                  <Badge 
                    variant="outline" 
                    className={`mt-2 ${isRelayActive("relay1") ? "bg-green-500/10 text-green-500 border-green-500" : "bg-red-500/10 text-red-500 border-red-500"}`}
                  >
                    {isRelayActive("relay1") ? "ON" : "OFF"}
                  </Badge>
                </div>

                <div 
                  className={`p-3 border rounded-lg cursor-pointer transition-all flex flex-col items-center ${isRelayActive("relay2") ? "border-green-500 bg-green-500/10" : "border-muted"}`}
                  onClick={() => toggleRelay("relay2")}
                >
                  <div className="flex items-center justify-center mb-2">
                    {isRelayActive("relay2") ? (
                      <ToggleRight size={24} className="text-green-500" />
                    ) : (
                      <ToggleLeft size={24} className="text-muted-foreground" />
                    )}
                  </div>
                  <span className="text-sm font-medium">Relay 2</span>
                  <span className="text-xs text-muted-foreground mt-1">LED Panels</span>
                  <Badge 
                    variant="outline" 
                    className={`mt-2 ${isRelayActive("relay2") ? "bg-green-500/10 text-green-500 border-green-500" : "bg-red-500/10 text-red-500 border-red-500"}`}
                  >
                    {isRelayActive("relay2") ? "ON" : "OFF"}
                  </Badge>
                </div>

                <div 
                  className={`p-3 border rounded-lg cursor-pointer transition-all flex flex-col items-center ${isRelayActive("relay3") ? "border-green-500 bg-green-500/10" : "border-muted"}`}
                  onClick={() => toggleRelay("relay3")}
                >
                  <div className="flex items-center justify-center mb-2">
                    {isRelayActive("relay3") ? (
                      <ToggleRight size={24} className="text-green-500" />
                    ) : (
                      <ToggleLeft size={24} className="text-muted-foreground" />
                    )}
                  </div>
                  <span className="text-sm font-medium">Relay 3</span>
                  <span className="text-xs text-muted-foreground mt-1">Fan Arrays</span>
                  <Badge 
                    variant="outline" 
                    className={`mt-2 ${isRelayActive("relay3") ? "bg-green-500/10 text-green-500 border-green-500" : "bg-red-500/10 text-red-500 border-red-500"}`}
                  >
                    {isRelayActive("relay3") ? "ON" : "OFF"}
                  </Badge>
                </div>

                <div 
                  className={`p-3 border rounded-lg cursor-pointer transition-all flex flex-col items-center ${isRelayActive("relay4") ? "border-green-500 bg-green-500/10" : "border-muted"}`}
                  onClick={() => toggleRelay("relay4")}
                >
                  <div className="flex items-center justify-center mb-2">
                    {isRelayActive("relay4") ? (
                      <ToggleRight size={24} className="text-green-500" />
                    ) : (
                      <ToggleLeft size={24} className="text-muted-foreground" />
                    )}
                  </div>
                  <span className="text-sm font-medium">Relay 4</span>
                  <span className="text-xs text-muted-foreground mt-1">HVAC Unit</span>
                  <Badge 
                    variant="outline" 
                    className={`mt-2 ${isRelayActive("relay4") ? "bg-green-500/10 text-green-500 border-green-500" : "bg-red-500/10 text-red-500 border-red-500"}`}
                  >
                    {isRelayActive("relay4") ? "ON" : "OFF"}
                  </Badge>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg border border-muted bg-muted/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Activity size={16} className="mr-2 text-kaal-primary" />
                    <span className="text-sm">System Latency:</span>
                  </div>
                  <Badge variant="outline" className="bg-kaal-primary/10 border-kaal-primary text-kaal-primary">
                    28ms
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-muted/30 border border-muted">
              <h3 className="text-lg font-medium mb-3">Hardware-Protocol Table</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Device</TableHead>
                    <TableHead>Interface</TableHead>
                    <TableHead>Fallback</TableHead>
                    <TableHead>Latency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Fog Machine</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-500/10 border-red-500 text-red-500">Relay 2</Badge>
                    </TableCell>
                    <TableCell>Manual</TableCell>
                    <TableCell>30ms</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>LED Panel</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500 text-yellow-500">PWM</Badge>
                    </TableCell>
                    <TableCell>Red LED</TableCell>
                    <TableCell>15ms</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fan Arrays</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-500/10 border-red-500 text-red-500">Relay 3</Badge>
                    </TableCell>
                    <TableCell>None</TableCell>
                    <TableCell>22ms</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>HVAC Unit</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">DMX</Badge>
                    </TableCell>
                    <TableCell>Manual</TableCell>
                    <TableCell>45ms</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="gpio">
          <div className="p-3 rounded-lg bg-muted/30 border border-muted">
            <h3 className="text-lg font-medium mb-3">GPIO/Relay Mapping Table</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>GPIO Pin</TableHead>
                  <TableHead>Connected Device</TableHead>
                  <TableHead>Command ID</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>GPIO 17</TableCell>
                  <TableCell>Fog Machine</TableCell>
                  <TableCell>CMD_FOG_ACTIVATE</TableCell>
                  <TableCell>
                    <Badge variant={isRelayActive("relay1") ? "default" : "outline"} className={isRelayActive("relay1") ? "bg-green-500" : "border-muted"}>
                      {isRelayActive("relay1") ? "ACTIVE" : "INACTIVE"}
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GPIO 18</TableCell>
                  <TableCell>LED Panel Power</TableCell>
                  <TableCell>CMD_LED_POWER</TableCell>
                  <TableCell>
                    <Badge variant={isRelayActive("relay2") ? "default" : "outline"} className={isRelayActive("relay2") ? "bg-green-500" : "border-muted"}>
                      {isRelayActive("relay2") ? "ACTIVE" : "INACTIVE"}
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GPIO 27</TableCell>
                  <TableCell>Fan Array</TableCell>
                  <TableCell>CMD_FAN_ACTIVATE</TableCell>
                  <TableCell>
                    <Badge variant={isRelayActive("relay3") ? "default" : "outline"} className={isRelayActive("relay3") ? "bg-green-500" : "border-muted"}>
                      {isRelayActive("relay3") ? "ACTIVE" : "INACTIVE"}
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GPIO 22</TableCell>
                  <TableCell>HVAC System</TableCell>
                  <TableCell>CMD_HVAC_POWER</TableCell>
                  <TableCell>
                    <Badge variant={isRelayActive("relay4") ? "default" : "outline"} className={isRelayActive("relay4") ? "bg-green-500" : "border-muted"}>
                      {isRelayActive("relay4") ? "ACTIVE" : "INACTIVE"}
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GPIO 23</TableCell>
                  <TableCell>Emergency Stop</TableCell>
                  <TableCell>CMD_EMERGENCY_STOP</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-red-500 text-red-500">
                      READY
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="signals">
          <div className="p-3 rounded-lg bg-muted/30 border border-muted">
            <h3 className="text-lg font-medium mb-3">Signal Visualizer</h3>
            
            <div className="space-y-4">
              <div className="flex items-center mb-2">
                <ToggleGroup type="single" defaultValue="live">
                  <ToggleGroupItem value="live" className="text-xs">LIVE</ToggleGroupItem>
                  <ToggleGroupItem value="recorded" className="text-xs">RECORDED</ToggleGroupItem>
                </ToggleGroup>
                
                <div className="ml-auto flex space-x-2">
                  <PlayCircle size={18} className="text-green-500" />
                  <CirclePause size={18} className="text-muted-foreground" />
                  <StopCircle size={18} className="text-muted-foreground" />
                </div>
              </div>

              <div className="relative h-24 bg-muted/50 rounded-lg overflow-hidden">
                {/* Mock oscilloscope display with CSS */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path 
                        d="M0,50 C10,30 20,70 30,50 C40,30 50,70 60,50 C70,30 80,70 90,50 L100,50" 
                        fill="none" 
                        stroke="#9b87f5" 
                        strokeWidth="2"
                        className="animate-pulse-glow"
                      />
                    </svg>
                    
                    {/* Grid lines */}
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-4">
                      {[...Array(40)].map((_, i) => (
                        <div key={i} className="border border-muted/20"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Overlay labels */}
                <div className="absolute top-2 left-2 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Zap size={12} className="mr-1 text-kaal-primary" />
                    <span>Signal Monitor</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 text-xs bg-muted/50 px-1 rounded">
                  <span className="text-green-500">28ms</span> | 60Hz
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded bg-muted/20 border border-muted">
                  <div className="text-xs text-muted-foreground mb-1">Command Latency</div>
                  <div className="text-sm">28ms <span className="text-green-500">(Normal)</span></div>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted">
                  <div className="text-xs text-muted-foreground mb-1">Relay Response</div>
                  <div className="text-sm">12ms <span className="text-green-500">(Normal)</span></div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-4" />

      <div className="p-3 bg-muted/30 rounded-lg border border-muted">
        <h3 className="text-lg font-medium mb-2">Control Flow Visualization</h3>
        <div className="text-sm text-muted-foreground mb-3">
          Hover on components to see the control flow path
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">Tablet UI</span>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-kaal-primary">➤</div>
          </div>
          
          <span className="animate-pulse text-kaal-primary">⟶</span>
          
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">Node.js Server</span>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-kaal-primary">➤</div>
          </div>
          
          <span className="animate-pulse text-kaal-primary">⟶</span>
          
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">Arduino/RPi</span>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-kaal-primary">➤</div>
          </div>
          
          <span className="animate-pulse text-kaal-primary">⟶</span>
          
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">PWM/Relays</span>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-kaal-primary">➤</div>
          </div>
          
          <span className="animate-pulse text-kaal-primary">⟶</span>
          
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">Devices</span>
          </div>
        </div>
      </div>
    </div>
  );
}
