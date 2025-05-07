
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Map,
  Mountain,
  Globe,
  Gamepad2,
  Zap,
  ArrowRight,
  Lightbulb
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TerrainEngineFlow() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleNodeHover = (node: string | null) => {
    setActiveNode(node);
  };

  // Define the nodes in the terrain processing flow
  const nodes = [
    { id: "qgis", name: "QGIS", icon: Map, details: "Geographic Information System for initial terrain data preparation" },
    { id: "dem", name: "DEM", icon: Mountain, details: "Digital Elevation Model - Height map data for terrain" },
    { id: "cesium", name: "Cesium", icon: Globe, details: "3D geospatial platform for realistic world terrain" },
    { id: "ue5", name: "UE5", icon: Gamepad2, details: "Unreal Engine 5 with Nanite & Lumen for photorealistic rendering" },
    { id: "blueprint", name: "Blueprints", icon: Zap, details: "Visual scripting system for terrain events and interactions" },
    { id: "triggers", name: "Triggers", icon: Lightbulb, details: "Event system for environment and mission changes" },
  ];

  return (
    <div className="p-4 border border-muted rounded-lg bg-muted/10">
      <h3 className="text-lg font-medium mb-6">Terrain Engine Pipeline</h3>

      <div className="flex flex-wrap justify-center gap-6">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex flex-col items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    className={`w-16 h-16 flex flex-col items-center justify-center rounded-lg border p-2 transition-all ${
                      activeNode === node.id
                        ? "border-kaal-primary bg-kaal-primary/10 text-kaal-primary"
                        : "border-muted bg-muted/20 text-muted-foreground"
                    }`}
                    onMouseEnter={() => handleNodeHover(node.id)}
                    onMouseLeave={() => handleNodeHover(null)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <node.icon size={24} />
                    <span className="text-xs font-medium mt-1">{node.name}</span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <div className="text-xs max-w-[200px]">
                    <p>{node.details}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {index < nodes.length - 1 && (
              <div className="hidden md:flex items-center justify-center mt-2">
                <ArrowRight size={16} className="text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-muted pt-4">
        <h4 className="text-sm font-medium mb-2">Key Features</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 mr-2 bg-kaal-primary/20 border border-kaal-primary rounded-sm flex-shrink-0 mt-0.5"></span>
            <span>Nanite virtualized geometry for unlimited detail</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 mr-2 bg-kaal-primary/20 border border-kaal-primary rounded-sm flex-shrink-0 mt-0.5"></span>
            <span>Lumen global illumination for dynamic lighting</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 mr-2 bg-kaal-primary/20 border border-kaal-primary rounded-sm flex-shrink-0 mt-0.5"></span>
            <span>Real-world GIS data with centimeter accuracy</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 mr-2 bg-kaal-primary/20 border border-kaal-primary rounded-sm flex-shrink-0 mt-0.5"></span>
            <span>Dynamic weather and environmental effects</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
