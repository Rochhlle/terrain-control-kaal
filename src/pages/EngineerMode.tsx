
import { SystemOverview } from "@/components/engineer/SystemOverview";
import { HardwareControl } from "@/components/engineer/HardwareControl";
import { EnvironmentalEffects } from "@/components/engineer/EnvironmentalEffects";
import { TerrainSimulation } from "@/components/engineer/TerrainSimulation";
import { HologramSystem } from "@/components/engineer/HologramSystem";
import { SafetyDiagnostics } from "@/components/engineer/SafetyDiagnostics";
import { TechStack } from "@/components/engineer/TechStack";
import { Separator } from "@/components/ui/separator";

export default function EngineerMode() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <span className="mr-2">🧠</span>
          Technical System Architecture
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Comprehensive system architecture view of Project KAAL components, protocols, and control chains for technical evaluators and engineers.
        </p>
      </div>

      <div className="space-y-10">
        <SystemOverview />
        
        <Separator />
        
        <HardwareControl />
        
        <Separator />
        
        <EnvironmentalEffects />
        
        <Separator />
        
        <TerrainSimulation />
        
        <Separator />
        
        <HologramSystem />
        
        <Separator />
        
        <SafetyDiagnostics />
        
        <Separator />
        
        <div className="py-6">
          <h2 className="text-xl font-semibold mb-4">Technology Stack</h2>
          <TechStack />
        </div>
      </div>
    </div>
  );
}
