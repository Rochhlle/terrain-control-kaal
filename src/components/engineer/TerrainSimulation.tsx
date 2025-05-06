
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Layers,
  Map,
  FileVideo,
  Play,
  Code,
  Workflow,
  Cloud,
  ArrowRight
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function TerrainSimulation() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const handleDemoStart = (demoId: string) => {
    setActiveDemo(demoId === activeDemo ? null : demoId);
  };

  return (
    <div className="system-border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Layers size={20} className="mr-2 text-kaal-primary" /> 
        Terrain Simulation Engine
      </h2>

      <div className="mb-4 p-3 rounded-lg bg-muted/30 border border-muted">
        <h3 className="text-lg font-medium mb-3">Processing Pipeline</h3>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-3 px-3 py-2 bg-muted/20 rounded-lg border border-muted my-1">
            <Map size={18} className="text-blue-500" />
            <span>QGIS</span>
          </div>
          
          <ArrowRight size={14} className="mx-1 text-muted-foreground" />
          
          <div className="flex items-center space-x-3 px-3 py-2 bg-muted/20 rounded-lg border border-muted my-1">
            <Layers size={18} className="text-green-500" />
            <span>DEM Processing</span>
          </div>
          
          <ArrowRight size={14} className="mx-1 text-muted-foreground" />
          
          <div className="flex items-center space-x-3 px-3 py-2 bg-muted/20 rounded-lg border border-muted my-1">
            <Map size={18} className="text-orange-500" />
            <span>Cesium Terrain</span>
          </div>
          
          <ArrowRight size={14} className="mx-1 text-muted-foreground" />
          
          <div className="flex items-center space-x-3 px-3 py-2 bg-muted/20 rounded-lg border border-muted my-1">
            <FileVideo size={18} className="text-kaal-primary" />
            <span>UE5 (Nanite + Lumen)</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="blueprints" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="blueprints">UE5 Blueprints</TabsTrigger>
          <TabsTrigger value="states">Terrain States</TabsTrigger>
          <TabsTrigger value="control">Control Interface</TabsTrigger>
        </TabsList>
        
        <TabsContent value="blueprints" className="p-3 rounded-lg bg-muted/30 border border-muted mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-muted">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Cloud size={18} className="mr-2 text-blue-500" />
                  Fog Activation
                </CardTitle>
                <CardDescription>UE5 Event Trigger</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 p-3 rounded-lg border border-muted mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Blueprint Path</span>
                    <Badge variant="outline" className="text-xs">BP_EnvironmentController</Badge>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mb-2">OnFogActivated {"{"}</div>
                  <div className="font-mono text-xs ml-3 mb-1">- SpawnFogEmitter</div>
                  <div className="font-mono text-xs ml-3 mb-1">- SetLightingProfile("Foggy")</div>
                  <div className="font-mono text-xs ml-3 mb-1">- PlaySound("FogMachine")</div>
                  <div className="font-mono text-xs text-muted-foreground">{"}"}</div>
                </div>
                <Button 
                  variant={activeDemo === "fog" ? "default" : "outline"} 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleDemoStart("fog")}
                >
                  <Play className="mr-2 h-4 w-4" /> 
                  {activeDemo === "fog" ? "Stop Demo" : "Run Demo"}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-muted">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <FileVideo size={18} className="mr-2 text-orange-500" />
                  Lighting Transitions
                </CardTitle>
                <CardDescription>Dynamic Lumen Effects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 p-3 rounded-lg border border-muted mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Blueprint Path</span>
                    <Badge variant="outline" className="text-xs">BP_LightingManager</Badge>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mb-2">TransitionLighting {"{"}</div>
                  <div className="font-mono text-xs ml-3 mb-1">- LerpExposure(Target, Time)</div>
                  <div className="font-mono text-xs ml-3 mb-1">- UpdateSkyLight</div>
                  <div className="font-mono text-xs ml-3 mb-1">- TriggerPostProcess</div>
                  <div className="font-mono text-xs text-muted-foreground">{"}"}</div>
                </div>
                <Button 
                  variant={activeDemo === "lighting" ? "default" : "outline"} 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleDemoStart("lighting")}
                >
                  <Play className="mr-2 h-4 w-4" /> 
                  {activeDemo === "lighting" ? "Stop Demo" : "Run Demo"}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-muted">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Layers size={18} className="mr-2 text-green-500" />
                  Terrain Morph
                </CardTitle>
                <CardDescription>Landscape Transitions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 p-3 rounded-lg border border-muted mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Blueprint Path</span>
                    <Badge variant="outline" className="text-xs">BP_TerrainMorphController</Badge>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mb-2">MorphTerrain {"{"}</div>
                  <div className="font-mono text-xs ml-3 mb-1">- LoadHeightmap(MapID)</div>
                  <div className="font-mono text-xs ml-3 mb-1">- BlendLayers(Duration)</div>
                  <div className="font-mono text-xs ml-3 mb-1">- UpdateCollision</div>
                  <div className="font-mono text-xs text-muted-foreground">{"}"}</div>
                </div>
                <Button 
                  variant={activeDemo === "terrain" ? "default" : "outline"} 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleDemoStart("terrain")}
                >
                  <Play className="mr-2 h-4 w-4" /> 
                  {activeDemo === "terrain" ? "Stop Demo" : "Run Demo"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="states" className="mt-4">
          <div className="p-3 rounded-lg bg-muted/30 border border-muted">
            <h3 className="text-lg font-medium mb-3">Terrain State Definitions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="p-2 border border-muted rounded-lg bg-muted/20">
                <div className="font-medium text-sm mb-1">Mountain</div>
                <div className="text-xs text-muted-foreground mb-2">High elevation terrain</div>
                <div className="flex space-x-1">
                  <Badge variant="outline" className="text-xs bg-blue-500/10 text-blue-500 border-blue-500">Cold</Badge>
                  <Badge variant="outline" className="text-xs bg-gray-500/10 text-gray-500 border-gray-500">Rocky</Badge>
                </div>
              </div>
              
              <div className="p-2 border border-muted rounded-lg bg-muted/20">
                <div className="font-medium text-sm mb-1">Desert</div>
                <div className="text-xs text-muted-foreground mb-2">Arid sandy environment</div>
                <div className="flex space-x-1">
                  <Badge variant="outline" className="text-xs bg-orange-500/10 text-orange-500 border-orange-500">Hot</Badge>
                  <Badge variant="outline" className="text-xs bg-yellow-500/10 text-yellow-500 border-yellow-500">Dry</Badge>
                </div>
              </div>
              
              <div className="p-2 border border-muted rounded-lg bg-muted/20">
                <div className="font-medium text-sm mb-1">Urban</div>
                <div className="text-xs text-muted-foreground mb-2">City environment</div>
                <div className="flex space-x-1">
                  <Badge variant="outline" className="text-xs bg-gray-500/10 text-gray-500 border-gray-500">Buildings</Badge>
                  <Badge variant="outline" className="text-xs bg-red-500/10 text-red-500 border-red-500">Dense</Badge>
                </div>
              </div>
              
              <div className="p-2 border border-muted rounded-lg bg-muted/20">
                <div className="font-medium text-sm mb-1">Forest</div>
                <div className="text-xs text-muted-foreground mb-2">Densely wooded area</div>
                <div className="flex space-x-1">
                  <Badge variant="outline" className="text-xs bg-green-500/10 text-green-500 border-green-500">Lush</Badge>
                  <Badge variant="outline" className="text-xs bg-blue-500/10 text-blue-500 border-blue-500">Humid</Badge>
                </div>
              </div>
            </div>

            <Separator className="my-3" />
            
            <h3 className="text-lg font-medium mb-3">Terrain State Transitions</h3>
            <div className="relative bg-muted/20 p-4 border border-muted rounded-lg">
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="p-2 border border-muted rounded-lg bg-muted/10 flex flex-col items-center">
                    <span className="text-sm font-medium mb-1">Mountain</span>
                    <div className="flex flex-col gap-2">
                      <ArrowRight size={14} className="transform rotate-90 text-kaal-primary mx-auto" />
                    </div>
                  </div>
                  
                  <div className="p-2 border border-muted rounded-lg bg-muted/10 flex flex-col items-center">
                    <span className="text-sm font-medium mb-1">Desert</span>
                    <div className="flex flex-col gap-2">
                      <ArrowRight size={14} className="transform rotate-90 text-kaal-primary mx-auto" />
                    </div>
                  </div>
                  
                  <div className="p-2 border border-muted rounded-lg bg-muted/10 flex flex-col items-center">
                    <span className="text-sm font-medium mb-1">Urban</span>
                    <div className="flex flex-col gap-2">
                      <ArrowRight size={14} className="transform rotate-90 text-kaal-primary mx-auto" />
                    </div>
                  </div>
                  
                  <div className="p-2 border border-muted rounded-lg bg-muted/10 flex flex-col items-center">
                    <span className="text-sm font-medium mb-1">Forest</span>
                    <div className="flex flex-col gap-2">
                      <ArrowRight size={14} className="transform rotate-90 text-kaal-primary mx-auto" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-kaal-primary bg-kaal-primary/10 rounded-lg mb-4">
                  <Workflow size={16} className="inline-block mr-1 text-kaal-primary" />
                  <span className="text-sm font-medium">State Transition Controller</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-2 border border-muted rounded-lg bg-muted/10 flex flex-col items-center">
                    <div className="flex flex-col gap-2">
                      <ArrowRight size={14} className="transform -rotate-90 text-kaal-primary mx-auto" />
                    </div>
                    <span className="text-sm font-medium mt-1">Fog Level</span>
                  </div>
                  
                  <div className="p-2 border border-muted rounded-lg bg-muted/10 flex flex-col items-center">
                    <div className="flex flex-col gap-2">
                      <ArrowRight size={14} className="transform -rotate-90 text-kaal-primary mx-auto" />
                    </div>
                    <span className="text-sm font-medium mt-1">Lighting</span>
                  </div>
                  
                  <div className="p-2 border border-muted rounded-lg bg-muted/10 flex flex-col items-center">
                    <div className="flex flex-col gap-2">
                      <ArrowRight size={14} className="transform -rotate-90 text-kaal-primary mx-auto" />
                    </div>
                    <span className="text-sm font-medium mt-1">Weather</span>
                  </div>
                  
                  <div className="p-2 border border-muted rounded-lg bg-muted/10 flex flex-col items-center">
                    <div className="flex flex-col gap-2">
                      <ArrowRight size={14} className="transform -rotate-90 text-kaal-primary mx-auto" />
                    </div>
                    <span className="text-sm font-medium mt-1">Sound FX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="control" className="mt-4">
          <div className="p-3 rounded-lg bg-muted/30 border border-muted">
            <h3 className="text-lg font-medium mb-3">Tablet Control Interface</h3>
            
            <div className="bg-muted/20 p-3 border border-muted rounded-lg mb-4">
              <div className="flex flex-col md:flex-row items-center md:justify-between mb-4 gap-3">
                <div className="flex items-center gap-2">
                  <Code size={18} className="text-kaal-primary" />
                  <span className="text-sm font-medium">WebSocket Connection</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">CONNECTED</Badge>
                  <span className="text-xs text-muted-foreground">ws://kaal-server.local:8080</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-2 border border-muted rounded bg-muted/10">
                  <div className="text-xs text-muted-foreground mb-1">Command</div>
                  <div className="text-sm font-mono">SET_TERRAIN</div>
                </div>
                
                <div className="p-2 border border-muted rounded bg-muted/10">
                  <div className="text-xs text-muted-foreground mb-1">Format</div>
                  <div className="text-sm font-mono">{"{ \"type\": <string> }"}</div>
                </div>
                
                <div className="p-2 border border-muted rounded bg-muted/10">
                  <div className="text-xs text-muted-foreground mb-1">Response</div>
                  <div className="text-sm font-mono">{"{ \"status\": \"ok\" }"}</div>
                </div>
                
                <div className="p-2 border border-muted rounded bg-muted/10">
                  <div className="text-xs text-muted-foreground mb-1">Latency</div>
                  <div className="text-sm font-mono">42ms <span className="text-green-500">✓</span></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/20 p-3 border border-muted rounded-lg">
                <h4 className="text-sm font-medium mb-2">Available Commands</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-1.5 rounded bg-muted/30">
                    <span className="text-xs font-mono">SET_TERRAIN</span>
                    <Badge variant="outline" className="bg-kaal-primary/10 border-kaal-primary text-kaal-primary text-xs">Terrain</Badge>
                  </div>
                  <div className="flex justify-between items-center p-1.5 rounded bg-muted/30">
                    <span className="text-xs font-mono">SET_FOG_LEVEL</span>
                    <Badge variant="outline" className="bg-blue-500/10 border-blue-500 text-blue-500 text-xs">Environment</Badge>
                  </div>
                  <div className="flex justify-between items-center p-1.5 rounded bg-muted/30">
                    <span className="text-xs font-mono">SET_LIGHTING</span>
                    <Badge variant="outline" className="bg-orange-500/10 border-orange-500 text-orange-500 text-xs">Visual</Badge>
                  </div>
                  <div className="flex justify-between items-center p-1.5 rounded bg-muted/30">
                    <span className="text-xs font-mono">TRIGGER_EVENT</span>
                    <Badge variant="outline" className="bg-red-500/10 border-red-500 text-red-500 text-xs">Scenario</Badge>
                  </div>
                  <div className="flex justify-between items-center p-1.5 rounded bg-muted/30">
                    <span className="text-xs font-mono">SET_WEATHER</span>
                    <Badge variant="outline" className="bg-blue-500/10 border-blue-500 text-blue-500 text-xs">Environment</Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/20 p-3 border border-muted rounded-lg">
                <h4 className="text-sm font-medium mb-2">Example JSON Command</h4>
                <div className="font-mono text-xs bg-muted/30 p-3 rounded border border-muted overflow-auto">
                  {`{
  "command": "SET_TERRAIN",
  "params": {
    "type": "mountain",
    "transitionTime": 2.5,
    "weatherCondition": "foggy",
    "timeOfDay": "dawn"
  },
  "triggerEffects": [
    {
      "device": "fogMachine",
      "value": 75
    },
    {
      "device": "fanArray",
      "value": 40
    }
  ]
}`}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-3 rounded-lg bg-muted/30 border border-muted mt-4">
        <h3 className="text-lg font-medium mb-3">Tech Specifications</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-2 bg-muted/20 border border-muted rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Rendering Engine</div>
            <div className="text-sm font-medium">UE5 (Nanite)</div>
          </div>
          
          <div className="p-2 bg-muted/20 border border-muted rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Lighting System</div>
            <div className="text-sm font-medium">Lumen GI</div>
          </div>
          
          <div className="p-2 bg-muted/20 border border-muted rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Terrain Resolution</div>
            <div className="text-sm font-medium">8K Heightmap</div>
          </div>
          
          <div className="p-2 bg-muted/20 border border-muted rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Texture Quality</div>
            <div className="text-sm font-medium">4K PBR</div>
          </div>
          
          <div className="p-2 bg-muted/20 border border-muted rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Physics Engine</div>
            <div className="text-sm font-medium">Chaos Physics</div>
          </div>
          
          <div className="p-2 bg-muted/20 border border-muted rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Frame Rate</div>
            <div className="text-sm font-medium">60 FPS</div>
          </div>
          
          <div className="p-2 bg-muted/20 border border-muted rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Data Source</div>
            <div className="text-sm font-medium">Cesium World</div>
          </div>
          
          <div className="p-2 bg-muted/20 border border-muted rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Update Frequency</div>
            <div className="text-sm font-medium">Real-time</div>
          </div>
        </div>
      </div>
    </div>
  );
}
