
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Target,
  MapPin,
  PlayCircle,
  CircleX,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CombatEvolution() {
  const [showEnemies, setShowEnemies] = useState(false);

  const toggleEnemies = () => {
    setShowEnemies(!showEnemies);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.95)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Combat <span className="text-kaal-primary">Evolution</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time tactical updates with dynamic enemy positions and battlefield conditions that evolve to match mission parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          <div className="bg-black/30 p-8 rounded-lg border border-muted">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold flex items-center">
                <Activity size={24} className="mr-2 text-kaal-primary" /> 
                Holographic Battlefield
              </h3>
              <Badge 
                variant={showEnemies ? "default" : "outline"}
                className={showEnemies ? "bg-red-500" : ""}
              >
                {showEnemies ? "ENEMIES VISIBLE" : "AREA SECURE"}
              </Badge>
            </div>
            
            <div className="relative h-80 bg-muted/20 rounded-lg border border-muted mb-4 overflow-hidden">
              {/* Simulated holographic terrain display */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-kaal-primary/10 to-transparent"></div>
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/lovable-uploads/77322e4b-09f6-4262-8e7f-4cf7d891ed53.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(30%) brightness(0.8)',
                    opacity: 0.7
                  }}
                ></div>
                
                {/* Terrain grid overlay */}
                <div className="absolute inset-0" 
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 19px,
                      rgba(155, 135, 245, 0.1) 20px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 19px,
                      rgba(155, 135, 245, 0.1) 20px
                    )`,
                  }}
                ></div>
                
                {/* Enemy positions */}
                {showEnemies && (
                  <>
                    <div className="absolute top-1/4 right-1/3">
                      <div className="relative">
                        <Target size={20} className="text-red-500" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 animate-ping rounded-full bg-red-500/50"></span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/3 left-1/4">
                      <div className="relative">
                        <Target size={20} className="text-red-500" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 animate-ping rounded-full bg-red-500/50"></span>
                      </div>
                    </div>
                    
                    <div className="absolute top-2/3 right-1/4">
                      <div className="relative">
                        <Target size={20} className="text-red-500" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 animate-ping rounded-full bg-red-500/50"></span>
                      </div>
                    </div>
                  </>
                )}
                
                {/* Friendly position */}
                <div className="absolute bottom-1/4 right-1/2">
                  <div className="relative">
                    <MapPin size={20} className="text-green-500" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 animate-ping rounded-full bg-green-500/50"></span>
                  </div>
                </div>
              </div>
              
              {/* Hologram controls */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={toggleEnemies}
                  className="border-kaal-primary text-kaal-primary hover:bg-kaal-primary hover:text-white"
                >
                  {showEnemies ? (
                    <>
                      <CircleX className="mr-2 h-4 w-4" /> Hide Enemies
                    </>
                  ) : (
                    <>
                      <PlayCircle className="mr-2 h-4 w-4" /> Show Enemies
                    </>
                  )}
                </Button>
                
                <div className="text-xs">
                  <span className="text-kaal-primary font-medium mr-2">STATUS:</span>
                  <span className="text-green-500">LIVE FEED</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span className="text-sm text-muted-foreground mr-2">Tactical Data:</span>
              <Badge variant="outline" className="bg-blue-500/10 border-blue-500 text-blue-500">
                Elevation: 1,240m
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">
                Vegetation: Dense
              </Badge>
              <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500 text-yellow-500">
                Visibility: 80%
              </Badge>
              <Badge variant="outline" className="bg-red-500/10 border-red-500 text-red-500">
                Threat Level: Medium
              </Badge>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-light italic">
            "Command the unknown. <span className="text-kaal-primary">In real time.</span>"
          </div>
        </div>
      </div>
    </section>
  );
}
