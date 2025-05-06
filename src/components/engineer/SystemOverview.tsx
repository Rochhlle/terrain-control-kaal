
import React, { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  Cpu,
  Monitor,
  Cloud,
  Activity,
  Layers,
  PlayCircle,
} from "lucide-react";

export function SystemOverview() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleComponentHover = (component: string | null) => {
    setActiveComponent(component);
  };

  const isActive = (componentName: string) => {
    return activeComponent === componentName 
      ? "border-kaal-primary text-kaal-primary bg-kaal-primary/10" 
      : "border-muted";
  };

  return (
    <div className="system-border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Server size={20} className="mr-2 text-kaal-primary" /> 
        System Overview
      </h2>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-kaal-primary/10 border-kaal-primary text-kaal-primary">WebSocket</Badge>
          <Badge variant="outline" className="bg-blue-500/10 border-blue-500 text-blue-500">MQTT</Badge>
          <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">DMX</Badge>
          <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500 text-yellow-500">PWM</Badge>
          <Badge variant="outline" className="bg-orange-500/10 border-orange-500 text-orange-500">GPIO</Badge>
          <Badge variant="outline" className="bg-red-500/10 border-red-500 text-red-500">Relay</Badge>
        </div>

        <div className="relative bg-muted/30 border border-muted rounded-lg p-4 overflow-hidden">
          <h3 className="text-lg font-medium mb-4">Architecture Diagram</h3>
          
          <div className="flex flex-col items-center">
            <TooltipProvider>
              {/* User Interface Level */}
              <div className="w-full flex justify-center mb-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={`border ${isActive("ui")} rounded-lg p-3 cursor-pointer transition-colors`}
                      onMouseEnter={() => handleComponentHover("ui")}
                      onMouseLeave={() => handleComponentHover(null)}
                    >
                      <div className="flex items-center">
                        <Monitor size={18} className="mr-2" />
                        <span>Tablet UI</span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React-based tablet interface for mission control</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Connection Line */}
              <div className="h-8 w-0.5 bg-muted-foreground/50"></div>
              
              {/* Server Level */}
              <div className="w-full flex justify-center mb-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={`border ${isActive("server")} rounded-lg p-3 cursor-pointer transition-colors`}
                      onMouseEnter={() => handleComponentHover("server")}
                      onMouseLeave={() => handleComponentHover(null)}
                    >
                      <div className="flex items-center">
                        <Server size={18} className="mr-2" />
                        <span>Node.js Server</span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Command processing and protocol translation layer</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
              {/* Connection Line */}
              <div className="h-8 w-0.5 bg-muted-foreground/50"></div>

              {/* Controller Level */}
              <div className="w-full flex justify-center mb-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={`border ${isActive("controller")} rounded-lg p-3 cursor-pointer transition-colors`}
                      onMouseEnter={() => handleComponentHover("controller")}
                      onMouseLeave={() => handleComponentHover(null)}
                    >
                      <div className="flex items-center">
                        <Cpu size={18} className="mr-2" />
                        <span>Arduino/RPi Controllers</span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Hardware-level controllers managing physical systems</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Connection Line */}
              <div className="h-8 w-0.5 bg-muted-foreground/50"></div>

              {/* Output Systems */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={`border ${isActive("fog")} rounded-lg p-3 cursor-pointer transition-colors`}
                      onMouseEnter={() => handleComponentHover("fog")}
                      onMouseLeave={() => handleComponentHover(null)}
                    >
                      <div className="flex items-center">
                        <Cloud size={18} className="mr-2" />
                        <span>Fog System</span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>DMX-controlled fog machines with precise output management</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={`border ${isActive("terrain")} rounded-lg p-3 cursor-pointer transition-colors`}
                      onMouseEnter={() => handleComponentHover("terrain")}
                      onMouseLeave={() => handleComponentHover(null)}
                    >
                      <div className="flex items-center">
                        <Layers size={18} className="mr-2" />
                        <span>Terrain System</span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>UE5-powered terrain simulation with Cesium integration</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={`border ${isActive("hologram")} rounded-lg p-3 cursor-pointer transition-colors`}
                      onMouseEnter={() => handleComponentHover("hologram")}
                      onMouseLeave={() => handleComponentHover(null)}
                    >
                      <div className="flex items-center">
                        <Activity size={18} className="mr-2" />
                        <span>Hologram System</span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Volumetric holographic display with real-time updates</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>

          {activeComponent && (
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute inset-0 bg-kaal-primary/5 transition-opacity duration-300 ${activeComponent ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          )}
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="protocols">
          <AccordionTrigger>Communication Protocols</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                <span>WebSocket</span>
                <Badge variant="outline" className="bg-kaal-primary/10 border-kaal-primary text-kaal-primary">UI → Server</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                <span>MQTT</span>
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500 text-blue-500">Server → Controllers</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                <span>DMX512</span>
                <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">Controllers → Lighting</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                <span>PWM</span>
                <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500 text-yellow-500">Controllers → Analog Devices</Badge>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="safety">
          <AccordionTrigger>Failover & Safety</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                <span>Watchdog Timer</span>
                <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">Active</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                <span>Emergency Shutdown</span>
                <Badge variant="outline" className="bg-red-500/10 border-red-500 text-red-500">Ready</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                <span>Manual Override</span>
                <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500 text-yellow-500">Available</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                <span>Fallback Mode</span>
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500 text-blue-500">Configured</Badge>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
