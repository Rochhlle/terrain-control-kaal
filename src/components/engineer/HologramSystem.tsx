
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  PlayCircle, 
  CircleX,
  Layers3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function HologramSystem() {
  const [isActive, setIsActive] = useState(true);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [syncPercentage, setSyncPercentage] = useState(97);

  // Simulate hologram rotation
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setRotationDegree((prev) => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  // Simulate sync percentage fluctuation
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSyncPercentage(Math.floor(94 + Math.random() * 6));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <div className="system-border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Layers3 size={20} className="mr-2 text-kaal-primary" /> 
        Hologram System Architecture
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card className="border-muted md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              <div className="flex items-center">
                <Activity size={18} className="mr-2 text-kaal-primary" />
                Holographic Projection
              </div>
              <Badge 
                variant={isActive ? "default" : "outline"} 
                className={isActive ? "bg-green-500" : ""}
              >
                {isActive ? "ACTIVE" : "INACTIVE"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/20 p-4 border border-muted rounded-lg flex justify-center items-center relative">
              <div className="relative w-48 h-48">
                {/* Hologram base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-muted rounded-full"></div>
                
                {/* Hologram stand */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-muted/60 rounded"></div>

                {/* Holographic terrain model */}
                {isActive && (
                  <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 hologram-glow">
                    <div 
                      className="w-32 h-32 relative"
                      style={{ transform: `rotateY(${rotationDegree}deg)` }}
                    >
                      {/* Mountain terrain approximation with CSS */}
                      <div 
                        className="absolute inset-0 bg-kaal-primary/30 rounded-full backdrop-blur-sm"
                        style={{ 
                          clipPath: 'polygon(50% 0%, 80% 30%, 100% 60%, 70% 90%, 30% 90%, 0% 60%, 20% 30%)',
                          animation: 'float 3s ease-in-out infinite',
                        }}
                      ></div>
                      
                      {/* Holographic wireframe effect */}
                      <div className="absolute inset-0 border border-kaal-primary/50 rounded-full opacity-50"></div>
                      <div className="absolute inset-2 border border-kaal-primary/30 rounded-full opacity-30"></div>
                      <div className="absolute inset-4 border border-kaal-primary/20 rounded-full opacity-20"></div>
                    </div>
                    
                    {/* Holographic glow base */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-kaal-primary/30 rounded-full blur-sm"></div>
                  </div>
                )}

                {/* Scan lines effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="w-full h-full opacity-10"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(155, 135, 245, 0.1) 1px, rgba(155, 135, 245, 0.1) 2px)'
                    }}
                  ></div>
                </div>
                
                {/* Control indicators */}
                {isActive && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow"></div>
                    <div className="text-xs">Real-time sync: {syncPercentage}%</div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Button 
                variant={isActive ? "destructive" : "default"} 
                size="sm" 
                onClick={() => setIsActive(!isActive)}
                className="w-40"
              >
                {isActive ? (
                  <>
                    <CircleX className="mr-2 h-4 w-4" /> Deactivate
                  </>
                ) : (
                  <>
                    <PlayCircle className="mr-2 h-4 w-4" /> Activate
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Activity size={18} className="mr-2 text-kaal-primary" />
              System Control
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-2 bg-muted/20 border border-muted rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Projection Type</div>
                <div className="text-sm font-medium">Volumetric LED Array</div>
              </div>
              
              <div className="p-2 bg-muted/20 border border-muted rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Resolution</div>
                <div className="text-sm font-medium">256 × 256 × 128 voxels</div>
              </div>
              
              <div className="p-2 bg-muted/20 border border-muted rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Refresh Rate</div>
                <div className="text-sm font-medium">60 Hz</div>
              </div>
              
              <div className="p-2 bg-muted/20 border border-muted rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Color Space</div>
                <div className="text-sm font-medium">HDR 10-bit</div>
              </div>
              
              <div className="p-2 bg-muted/20 border border-muted rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Sync Protocol</div>
                <div className="text-sm font-medium">Direct UE5 Stream</div>
              </div>
              
              <div className="p-2 bg-muted/20 border border-muted rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Controller</div>
                <div className="text-sm font-medium">Arduino Mega + FPGA</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-3 rounded-lg bg-muted/30 border border-muted">
        <h3 className="text-lg font-medium mb-3">Architecture Diagram</h3>
        <div className="bg-muted/10 p-4 border border-muted rounded-lg">
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-6 justify-around items-center w-full">
              <div className="flex flex-col items-center">
                <div className="bg-muted/40 p-3 rounded-lg border border-muted w-32 text-center">
                  <div className="text-xs mb-1">UE5 Engine</div>
                  <div className="text-xs text-muted-foreground">Terrain Model</div>
                </div>
                <div className="h-8 w-0.5 bg-muted my-3"></div>
                <div className="bg-muted/40 p-3 rounded-lg border border-muted w-32 text-center">
                  <div className="text-xs mb-1">Sync Logic</div>
                  <div className="text-xs text-muted-foreground">Controller</div>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-kaal-primary">⟹</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-muted/40 p-3 rounded-lg border border-muted w-32 text-center">
                  <div className="text-xs mb-1">Arduino</div>
                  <div className="text-xs text-muted-foreground">Serial Control</div>
                </div>
                <div className="h-8 w-0.5 bg-muted my-3"></div>
                <div className="bg-muted/40 p-3 rounded-lg border border-muted w-32 text-center">
                  <div className="text-xs mb-1">FPGA</div>
                  <div className="text-xs text-muted-foreground">Display Driver</div>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-kaal-primary">⟹</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-muted/40 p-3 rounded-lg border border-kaal-primary w-32 text-center">
                  <div className="text-xs mb-1">Hologram</div>
                  <div className="text-xs text-muted-foreground">Projection</div>
                </div>
                <div className="h-8 w-0.5 bg-muted my-3"></div>
                <div className="bg-muted/40 p-3 rounded-lg border border-muted w-32 text-center">
                  <div className="text-xs mb-1">Event System</div>
                  <div className="text-xs text-muted-foreground">Triggers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 rounded-lg bg-muted/30 border border-muted">
          <h3 className="text-lg font-medium mb-3">Event Sync</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 rounded bg-muted/20 border border-muted">
              <div className="flex items-center">
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500 text-blue-500 mr-2">
                  FOG
                </Badge>
                <span className="text-sm">Fog Activation</span>
              </div>
              <Badge variant="outline" className={`${isActive ? "bg-green-500/10 border-green-500 text-green-500" : "bg-red-500/10 border-red-500 text-red-500"}`}>
                {isActive ? "SYNCED" : "WAITING"}
              </Badge>
            </div>
            
            <div className="flex justify-between items-center p-2 rounded bg-muted/20 border border-muted">
              <div className="flex items-center">
                <Badge variant="outline" className="bg-orange-500/10 border-orange-500 text-orange-500 mr-2">
                  TERRAIN
                </Badge>
                <span className="text-sm">Terrain State</span>
              </div>
              <Badge variant="outline" className={`${isActive ? "bg-green-500/10 border-green-500 text-green-500" : "bg-red-500/10 border-red-500 text-red-500"}`}>
                {isActive ? "SYNCED" : "WAITING"}
              </Badge>
            </div>
            
            <div className="flex justify-between items-center p-2 rounded bg-muted/20 border border-muted">
              <div className="flex items-center">
                <Badge variant="outline" className="bg-kaal-primary/10 border-kaal-primary text-kaal-primary mr-2">
                  LIGHT
                </Badge>
                <span className="text-sm">Lighting Effects</span>
              </div>
              <Badge variant="outline" className={`${isActive ? "bg-green-500/10 border-green-500 text-green-500" : "bg-red-500/10 border-red-500 text-red-500"}`}>
                {isActive ? "SYNCED" : "WAITING"}
              </Badge>
            </div>
            
            <div className="flex justify-between items-center p-2 rounded bg-muted/20 border border-muted">
              <div className="flex items-center">
                <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500 mr-2">
                  WEATHER
                </Badge>
                <span className="text-sm">Weather System</span>
              </div>
              <Badge variant="outline" className={`${isActive ? "bg-green-500/10 border-green-500 text-green-500" : "bg-red-500/10 border-red-500 text-red-500"}`}>
                {isActive ? "SYNCED" : "WAITING"}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-muted/30 border border-muted">
          <h3 className="text-lg font-medium mb-3">Technical Specifications</h3>
          <div className="space-y-1">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-muted/20 border border-muted">
                <div className="text-xs text-muted-foreground">Power Draw</div>
                <div className="text-sm">450W</div>
              </div>
              <div className="p-2 rounded bg-muted/20 border border-muted">
                <div className="text-xs text-muted-foreground">Dimensions</div>
                <div className="text-sm">50 × 50 × 75 cm</div>
              </div>
              <div className="p-2 rounded bg-muted/20 border border-muted">
                <div className="text-xs text-muted-foreground">LED Count</div>
                <div className="text-sm">8,388,608</div>
              </div>
              <div className="p-2 rounded bg-muted/20 border border-muted">
                <div className="text-xs text-muted-foreground">Data Rate</div>
                <div className="text-sm">1.2 Gbps</div>
              </div>
              <div className="p-2 rounded bg-muted/20 border border-muted">
                <div className="text-xs text-muted-foreground">Control Interface</div>
                <div className="text-sm">MQTT/WebSocket</div>
              </div>
              <div className="p-2 rounded bg-muted/20 border border-muted">
                <div className="text-xs text-muted-foreground">Response Time</div>
                <div className="text-sm">16.7ms</div>
              </div>
            </div>
            
            <div className="p-2 rounded bg-muted/20 border border-muted mt-2">
              <div className="text-xs text-muted-foreground">Fallback Mechanism</div>
              <div className="text-sm">Automatic state save every 5s with power-loss recovery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
