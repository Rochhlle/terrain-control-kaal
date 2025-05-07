
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SystemOverview } from "@/components/engineer/SystemOverview";
import { HardwareControl } from "@/components/engineer/HardwareControl";
import { EnvironmentalEffects } from "@/components/engineer/EnvironmentalEffects";
import { TerrainSimulation } from "@/components/engineer/TerrainSimulation";
import { HologramSystem } from "@/components/engineer/HologramSystem";
import { SafetyDiagnostics } from "@/components/engineer/SafetyDiagnostics";
import { TechStack } from "@/components/engineer/TechStack";
import { ControlChainVisualization } from "@/components/engineer/ControlChainVisualization";
import { TerrainEngineFlow } from "@/components/engineer/TerrainEngineFlow";
import { HologramControlSystem } from "@/components/engineer/HologramControlSystem";
import { FaultDetectionSystem } from "@/components/engineer/FaultDetectionSystem";
import { HardwareMapping } from "@/components/engineer/HardwareMapping";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function EngineerMode() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { toast } = useToast();
  
  // When the component mounts, show a welcome toast with technical information
  useEffect(() => {
    toast({
      title: "Engineer Mode Activated",
      description: "Technical system architecture and control interfaces are now accessible.",
      duration: 5000,
    });
  }, [toast]);

  const handleSectionEnter = (section: string) => {
    if (activeSection !== section) {
      setActiveSection(section);
    }
  };

  // Define section links for navigation
  const sections = [
    { id: "overview", name: "System Overview" },
    { id: "control-chain", name: "Control Chain" },
    { id: "hardware", name: "Hardware Control" },
    { id: "environmental", name: "Environmental Effects" },
    { id: "terrain", name: "Terrain Simulation" },
    { id: "terrain-flow", name: "Terrain Engine" },
    { id: "hologram", name: "Hologram System" },
    { id: "hologram-control", name: "Hologram Control" },
    { id: "fault-detection", name: "Fault Detection" },
    { id: "hardware-mapping", name: "Hardware Mapping" },
    { id: "safety", name: "Safety Diagnostics" },
    { id: "tech", name: "Technology Stack" },
  ];

  return (
    <div className="container mx-auto px-4 pt-28 pb-20 relative">
      {/* Mode indicator badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-20 left-4 z-30"
      >
        <Badge variant="outline" className="border-blue-500 text-blue-500 bg-muted/30 backdrop-blur-sm px-3 py-1">
          🧠 Engineer View
        </Badge>
      </motion.div>

      {/* Quick navigation bar */}
      <motion.div 
        className="fixed left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2 bg-muted/30 backdrop-blur-sm p-2 rounded-lg border border-muted">
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                activeSection === section.id 
                ? "bg-kaal-primary/20 text-kaal-primary" 
                : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {section.name}
            </a>
          ))}
        </div>
      </motion.div>

      <div className="mb-8">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mr-2">🧠</span>
          Technical System Architecture
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Comprehensive system architecture view of Project KAAL components, protocols, and control chains for technical evaluators and engineers.
        </motion.p>
      </div>

      <div className="space-y-10">
        <div id="overview" onMouseEnter={() => handleSectionEnter('overview')}>
          <SystemOverview />
        </div>
        
        <Separator />
        
        <div id="control-chain" onMouseEnter={() => handleSectionEnter('control-chain')}>
          <ControlChainVisualization />
        </div>
        
        <Separator />
        
        <div id="hardware" onMouseEnter={() => handleSectionEnter('hardware')}>
          <HardwareControl />
        </div>
        
        <Separator />
        
        <div id="environmental" onMouseEnter={() => handleSectionEnter('environmental')}>
          <EnvironmentalEffects />
        </div>
        
        <Separator />
        
        <div id="terrain" onMouseEnter={() => handleSectionEnter('terrain')}>
          <TerrainSimulation />
        </div>
        
        <Separator />
        
        <div id="terrain-flow" onMouseEnter={() => handleSectionEnter('terrain-flow')}>
          <TerrainEngineFlow />
        </div>
        
        <Separator />
        
        <div id="hologram" onMouseEnter={() => handleSectionEnter('hologram')}>
          <HologramSystem />
        </div>
        
        <Separator />
        
        <div id="hologram-control" onMouseEnter={() => handleSectionEnter('hologram-control')}>
          <HologramControlSystem />
        </div>
        
        <Separator />
        
        <div id="fault-detection" onMouseEnter={() => handleSectionEnter('fault-detection')}>
          <FaultDetectionSystem />
        </div>
        
        <Separator />
        
        <div id="hardware-mapping" onMouseEnter={() => handleSectionEnter('hardware-mapping')}>
          <HardwareMapping />
        </div>
        
        <Separator />
        
        <div id="safety" onMouseEnter={() => handleSectionEnter('safety')}>
          <SafetyDiagnostics />
        </div>
        
        <Separator />
        
        <div id="tech" onMouseEnter={() => handleSectionEnter('tech')} className="py-6">
          <h2 className="text-xl font-semibold mb-4">Technology Stack</h2>
          <TechStack />
        </div>
      </div>
    </div>
  );
}
