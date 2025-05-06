
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TechStack() {
  const stacks = [
    {
      category: "Frontend",
      techs: [
        { name: "React", description: "UI Component Library" },
        { name: "TailwindCSS", description: "Utility-first CSS Framework" },
        { name: "WebSocket", description: "Realtime Communication" },
      ]
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", description: "Server Runtime" },
        { name: "MQTT", description: "Message Queue Telemetry Transport" },
        { name: "WebSocket", description: "Realtime Communication Protocol" }
      ]
    },
    {
      category: "Hardware",
      techs: [
        { name: "Arduino/RPi", description: "Microcontrollers" },
        { name: "PWM/DMX512", description: "Control Protocols" },
        { name: "GPIO", description: "General Purpose Input/Output" }
      ]
    },
    {
      category: "Simulation",
      techs: [
        { name: "UE5", description: "Unreal Engine 5 (Nanite, Lumen)" },
        { name: "Cesium", description: "3D Geospatial Platform" },
        { name: "QGIS", description: "Geographical Information System" }
      ]
    }
  ];

  return (
    <div className="p-3 rounded-lg bg-muted/20 border border-muted overflow-hidden">
      <div className="overflow-x-auto pb-2">
        <div className="flex items-center justify-between min-w-[600px]">
          {stacks.map((stack, index) => (
            <div key={stack.category} className="flex flex-col items-center">
              <div className="text-sm font-medium mb-2">{stack.category}</div>
              <div className="flex flex-col items-center space-y-2">
                {stack.techs.map((tech, techIndex) => (
                  <TooltipProvider key={techIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="px-3 py-1 rounded bg-muted/30 border border-muted text-xs hover:bg-muted/50 transition-colors cursor-help">
                          {tech.name}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
              {index < stacks.length - 1 && (
                <div className="hidden md:block absolute right-[-15px] top-1/2 transform -translate-y-1/2">
                  <span className="text-kaal-primary">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
