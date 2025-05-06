
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MonitorPlay,
  ArrowRight,
  Circle,
} from "lucide-react";

export function WhyKaal() {
  const [activeDemo, setActiveDemo] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(26, 31, 44, 0.9), rgba(26, 31, 44, 0.95))"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
            Why <span className="text-kaal-primary">KAAL</span>?
          </h2>
        </div>

        <div className="mb-20">
          <div className="space-y-10">
            <div className="text-2xl md:text-4xl lg:text-5xl text-center max-w-4xl mx-auto font-light">
              "Train soldiers for terrain they've
              <span className="inline-block relative ml-2">
                <span className="text-kaal-primary font-normal">never seen</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-kaal-primary"></span>
              </span>."
            </div>
            
            <div className="text-2xl md:text-4xl lg:text-5xl text-center max-w-4xl mx-auto font-light">
              "Command the battlefield 
              <span className="inline-block relative ml-2">
                <span className="text-kaal-primary font-normal">before stepping on it</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-kaal-primary"></span>
              </span>."
            </div>
            
            <div className="text-2xl md:text-4xl lg:text-5xl text-center max-w-4xl mx-auto font-light">
              "Experience the conditions
              <span className="inline-block relative ml-2">
                <span className="text-kaal-primary font-normal">before the mission begins</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-kaal-primary"></span>
              </span>."
            </div>
          </div>
        </div>

        <div className="bg-black/30 p-8 rounded-lg border border-muted max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold flex items-center">
              <MonitorPlay size={24} className="mr-2 text-kaal-primary" /> 
              One-Click Demo
            </h3>
            <Badge variant={activeDemo ? "default" : "outline"} className={activeDemo ? "bg-green-500" : ""}>
              {activeDemo ? "ACTIVE" : "READY"}
            </Badge>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Experience the full KAAL command room in action with a single click. 
              Perfect for live demonstrations to stakeholders.
            </p>
            
            <Button 
              size="lg" 
              className={`px-8 py-6 text-lg relative ${activeDemo ? "bg-green-600 hover:bg-green-700" : "bg-kaal-primary hover:bg-kaal-primary/90"}`}
              onClick={() => setActiveDemo(!activeDemo)}
            >
              {activeDemo ? (
                <>
                  <Circle className="mr-2 h-5 w-5 animate-pulse" />
                  Simulation Running
                </>
              ) : (
                <>
                  <MonitorPlay className="mr-2 h-5 w-5" />
                  Simulate Ambush
                </>
              )}
            </Button>
            
            {activeDemo && (
              <div className="mt-8 p-4 border border-kaal-primary bg-kaal-primary/10 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Active Simulation Components:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="p-2 border border-muted/50 rounded">
                    <div className="text-sm font-medium">Fog System</div>
                    <div className="text-xs text-green-500">Active</div>
                  </div>
                  <div className="p-2 border border-muted/50 rounded">
                    <div className="text-sm font-medium">Terrain Display</div>
                    <div className="text-xs text-green-500">Active</div>
                  </div>
                  <div className="p-2 border border-muted/50 rounded">
                    <div className="text-sm font-medium">Hologram</div>
                    <div className="text-xs text-green-500">Active</div>
                  </div>
                  <div className="p-2 border border-muted/50 rounded">
                    <div className="text-sm font-medium">Weather Effects</div>
                    <div className="text-xs text-green-500">Active</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="link" className="text-kaal-primary group">
            <span>Learn more about our technical capabilities</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
