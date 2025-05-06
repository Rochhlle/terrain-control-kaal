
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Cloud, Layers3, Monitor } from "lucide-react";

export function RoomAwakens() {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);
  const [allActive, setAllActive] = useState(false);
  
  const toggleSystem = (system: string) => {
    if (activeSystem === system) {
      setActiveSystem(null);
    } else {
      setActiveSystem(system);
    }
    setAllActive(false);
  };
  
  const activateAll = () => {
    setAllActive(true);
    setActiveSystem(null);
  };
  
  // Reset after demo timeout
  useEffect(() => {
    if (activeSystem || allActive) {
      const timer = setTimeout(() => {
        setActiveSystem(null);
        setAllActive(false);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [activeSystem, allActive]);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.95)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80')",
          transform: allActive ? "scale(1.05)" : "scale(1)",
          transition: "transform 5s ease-out"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Room <span className="text-kaal-primary">Awakens</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Witness the KAAL command room transform into an immersive battlefield environment 
            with synchronized environmental effects and holographic terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div 
            className={`p-8 rounded-lg border transition-all duration-500 ${
              activeSystem === "fog" || allActive ? "border-kaal-primary bg-kaal-primary/10" : "border-muted bg-black/30"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <Cloud size={24} className="text-kaal-primary" />
              <span className={`text-xs px-2 py-1 rounded ${
                activeSystem === "fog" || allActive ? "bg-green-500/20 text-green-500" : "bg-muted/50 text-muted-foreground"
              }`}>
                {activeSystem === "fog" || allActive ? "ACTIVE" : "STANDBY"}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Fog Activation</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Dynamic fog system brings atmospheric conditions to life with precise density control and synchronized LED effects.
            </p>
            <Button 
              variant="outline" 
              className={`w-full ${
                activeSystem === "fog" || allActive ? "border-kaal-primary text-kaal-primary" : ""
              }`}
              onClick={() => toggleSystem("fog")}
            >
              <Play className="mr-2 h-4 w-4" />
              {activeSystem === "fog" ? "Deactivate" : "Activate"}
            </Button>
          </div>

          <div 
            className={`p-8 rounded-lg border transition-all duration-500 ${
              activeSystem === "terrain" || allActive ? "border-kaal-primary bg-kaal-primary/10" : "border-muted bg-black/30"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <Monitor size={24} className="text-kaal-primary" />
              <span className={`text-xs px-2 py-1 rounded ${
                activeSystem === "terrain" || allActive ? "bg-green-500/20 text-green-500" : "bg-muted/50 text-muted-foreground"
              }`}>
                {activeSystem === "terrain" || allActive ? "ACTIVE" : "STANDBY"}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Terrain Shifts</h3>
            <p className="text-gray-400 mb-6 text-sm">
              UE5-powered LED wall displays photorealistic terrain with seamless transitions between battlefield environments.
            </p>
            <Button 
              variant="outline" 
              className={`w-full ${
                activeSystem === "terrain" || allActive ? "border-kaal-primary text-kaal-primary" : ""
              }`}
              onClick={() => toggleSystem("terrain")}
            >
              <Play className="mr-2 h-4 w-4" />
              {activeSystem === "terrain" ? "Deactivate" : "Activate"}
            </Button>
          </div>

          <div 
            className={`p-8 rounded-lg border transition-all duration-500 ${
              activeSystem === "hologram" || allActive ? "border-kaal-primary bg-kaal-primary/10" : "border-muted bg-black/30"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <Layers3 size={24} className="text-kaal-primary" />
              <span className={`text-xs px-2 py-1 rounded ${
                activeSystem === "hologram" || allActive ? "bg-green-500/20 text-green-500" : "bg-muted/50 text-muted-foreground"
              }`}>
                {activeSystem === "hologram" || allActive ? "ACTIVE" : "STANDBY"}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Hologram Rises</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Volumetric 3D hologram projects mission-critical terrain and tactical information in stunning detail.
            </p>
            <Button 
              variant="outline" 
              className={`w-full ${
                activeSystem === "hologram" || allActive ? "border-kaal-primary text-kaal-primary" : ""
              }`}
              onClick={() => toggleSystem("hologram")}
            >
              <Play className="mr-2 h-4 w-4" />
              {activeSystem === "hologram" ? "Deactivate" : "Activate"}
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className={`px-8 py-6 text-lg ${allActive ? "bg-green-600 hover:bg-green-700" : "bg-kaal-primary hover:bg-kaal-primary/90"}`}
            onClick={activateAll}
          >
            <Play className="mr-2 h-5 w-5" />
            {allActive ? "System Active" : "Activate All Systems"}
          </Button>
          
          <div className={`mt-10 text-2xl font-light italic transition-all duration-1000 ${
            activeSystem || allActive ? "opacity-100" : "opacity-0"
          }`}>
            "See the terrain. <span className="text-kaal-primary">Hear the storm.</span>"
          </div>
        </div>

        {/* Visualization effects */}
        {(activeSystem === "fog" || allActive) && (
          <div className="absolute inset-0 pointer-events-none z-5">
            <div 
              className="absolute inset-0 bg-white/5"
              style={{
                backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')",
                animation: "drift 20s linear infinite"
              }}
            />
          </div>
        )}

        {(activeSystem === "hologram" || allActive) && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none">
            <div className="absolute inset-0 rounded-full bg-kaal-primary/20 animate-pulse blur-xl"></div>
          </div>
        )}
      </div>
    </section>
  );
}
