
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Slider 
} from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Monitor,
  Fan,
  Thermometer,
  Activity,
  CircleCheck,
  CircleX,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function EnvironmentalEffects() {
  const [fogLevel, setFogLevel] = useState(50);
  const [ledIntensity, setLedIntensity] = useState(75);
  const [hvacLevel, setHvacLevel] = useState(40);
  const [fanSpeed, setFanSpeed] = useState(60);
  const [activeDevices, setActiveDevices] = useState<string[]>(["led"]);

  const toggleDevice = (device: string) => {
    setActiveDevices(prev => 
      prev.includes(device) 
        ? prev.filter(d => d !== device) 
        : [...prev, device]
    );
  };

  const isActive = (device: string) => {
    return activeDevices.includes(device);
  };

  return (
    <div className="system-border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Cloud size={20} className="mr-2 text-kaal-primary" /> 
        Environmental Effects Engine
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className={`border ${isActive("fog") ? "border-kaal-primary" : "border-muted"}`}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Cloud size={18} className="mr-2 text-kaal-primary" />
                Fog Machine
              </CardTitle>
              <Badge 
                variant={isActive("fog") ? "default" : "outline"} 
                className={isActive("fog") ? "bg-green-500" : ""}
              >
                {isActive("fog") ? "ACTIVE" : "INACTIVE"}
              </Badge>
            </div>
            <CardDescription>DMX512 Control Protocol</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Intensity</span>
                  <span className="text-sm font-medium">{fogLevel}%</span>
                </div>
                <Slider 
                  value={[fogLevel]} 
                  min={0} 
                  max={100} 
                  step={1} 
                  onValueChange={(value) => setFogLevel(value[0])} 
                  disabled={!isActive("fog")}
                  className={!isActive("fog") ? "opacity-50" : ""}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Protocol</span>
                  <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">DMX</Badge>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Channel</span>
                  <span className="text-xs font-medium">CH 3</span>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Latency</span>
                  <span className="text-xs font-medium">30ms</span>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Relay</span>
                  <span className="text-xs font-medium">#2</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant={isActive("fog") ? "destructive" : "outline"} 
              size="sm" 
              className="w-full"
              onClick={() => toggleDevice("fog")}
            >
              {isActive("fog") ? (
                <>
                  <CircleX className="mr-2 h-4 w-4" /> Deactivate
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Activate
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className={`border ${isActive("led") ? "border-kaal-primary" : "border-muted"}`}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Monitor size={18} className="mr-2 text-kaal-primary" />
                LED Panels
              </CardTitle>
              <Badge 
                variant={isActive("led") ? "default" : "outline"} 
                className={isActive("led") ? "bg-green-500" : ""}
              >
                {isActive("led") ? "ACTIVE" : "INACTIVE"}
              </Badge>
            </div>
            <CardDescription>PWM Brightness Control</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Brightness</span>
                  <span className="text-sm font-medium">{ledIntensity}%</span>
                </div>
                <Slider 
                  value={[ledIntensity]} 
                  min={0} 
                  max={100} 
                  step={1} 
                  onValueChange={(value) => setLedIntensity(value[0])} 
                  disabled={!isActive("led")}
                  className={!isActive("led") ? "opacity-50" : ""}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Protocol</span>
                  <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500 text-yellow-500">PWM</Badge>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Frequency</span>
                  <span className="text-xs font-medium">1000Hz</span>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Latency</span>
                  <span className="text-xs font-medium">15ms</span>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">GPIO</span>
                  <span className="text-xs font-medium">18</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant={isActive("led") ? "destructive" : "outline"} 
              size="sm" 
              className="w-full"
              onClick={() => toggleDevice("led")}
            >
              {isActive("led") ? (
                <>
                  <CircleX className="mr-2 h-4 w-4" /> Deactivate
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Activate
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className={`border ${isActive("hvac") ? "border-kaal-primary" : "border-muted"}`}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Thermometer size={18} className="mr-2 text-kaal-primary" />
                HVAC Unit
              </CardTitle>
              <Badge 
                variant={isActive("hvac") ? "default" : "outline"} 
                className={isActive("hvac") ? "bg-green-500" : ""}
              >
                {isActive("hvac") ? "ACTIVE" : "INACTIVE"}
              </Badge>
            </div>
            <CardDescription>Temperature Control System</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Power</span>
                  <span className="text-sm font-medium">{hvacLevel}%</span>
                </div>
                <Slider 
                  value={[hvacLevel]} 
                  min={0} 
                  max={100} 
                  step={1} 
                  onValueChange={(value) => setHvacLevel(value[0])} 
                  disabled={!isActive("hvac")}
                  className={!isActive("hvac") ? "opacity-50" : ""}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Protocol</span>
                  <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">DMX</Badge>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Channel</span>
                  <span className="text-xs font-medium">CH 7</span>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Latency</span>
                  <span className="text-xs font-medium">45ms</span>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Relay</span>
                  <span className="text-xs font-medium">#4</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant={isActive("hvac") ? "destructive" : "outline"} 
              size="sm" 
              className="w-full"
              onClick={() => toggleDevice("hvac")}
            >
              {isActive("hvac") ? (
                <>
                  <CircleX className="mr-2 h-4 w-4" /> Deactivate
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Activate
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className={`border ${isActive("fan") ? "border-kaal-primary" : "border-muted"}`}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Fan size={18} className="mr-2 text-kaal-primary" />
                Fan Arrays
              </CardTitle>
              <Badge 
                variant={isActive("fan") ? "default" : "outline"} 
                className={isActive("fan") ? "bg-green-500" : ""}
              >
                {isActive("fan") ? "ACTIVE" : "INACTIVE"}
              </Badge>
            </div>
            <CardDescription>Wind Effect Generation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Speed</span>
                  <span className="text-sm font-medium">{fanSpeed}%</span>
                </div>
                <Slider 
                  value={[fanSpeed]} 
                  min={0} 
                  max={100} 
                  step={1} 
                  onValueChange={(value) => setFanSpeed(value[0])} 
                  disabled={!isActive("fan")}
                  className={!isActive("fan") ? "opacity-50" : ""}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Protocol</span>
                  <Badge variant="outline" className="bg-red-500/10 border-red-500 text-red-500">Relay</Badge>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Relay #</span>
                  <span className="text-xs font-medium">3</span>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">Latency</span>
                  <span className="text-xs font-medium">22ms</span>
                </div>
                <div className="p-2 rounded bg-muted/20 border border-muted flex justify-between items-center">
                  <span className="text-xs">GPIO</span>
                  <span className="text-xs font-medium">27</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant={isActive("fan") ? "destructive" : "outline"} 
              size="sm" 
              className="w-full"
              onClick={() => toggleDevice("fan")}
            >
              {isActive("fan") ? (
                <>
                  <CircleX className="mr-2 h-4 w-4" /> Deactivate
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Activate
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Separator className="my-4" />

      <div className="p-3 rounded-lg bg-muted/30 border border-muted mt-4">
        <h3 className="text-lg font-medium mb-3">DMX/PWM Wiring Diagram</h3>
        <div className="bg-muted/10 p-4 rounded-lg border border-muted min-h-[120px] relative">
          <div className="flex flex-col md:flex-row gap-6 justify-around items-center">
            <div className="flex flex-col items-center">
              <div className="bg-muted/40 p-3 rounded-lg border border-muted w-24 text-center">
                <div className="text-xs mb-1">Arduino</div>
                <div className="text-xs text-muted-foreground">Controller</div>
              </div>
              <div className="h-8 w-0.5 bg-muted my-3"></div>
              <div className="grid grid-cols-2 gap-2 w-40">
                <div className="bg-muted/40 p-2 rounded-lg border border-muted text-center">
                  <div className="text-xs">DMX Shield</div>
                </div>
                <div className="bg-muted/40 p-2 rounded-lg border border-muted text-center">
                  <div className="text-xs">PWM Out</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className={`bg-muted/40 p-3 rounded-lg border ${isActive("led") ? "border-kaal-primary" : "border-muted"} w-24 text-center`}>
                <div className="text-xs mb-1">LED Panel</div>
                <div className="text-xs text-muted-foreground">RGB Control</div>
              </div>
              <div className="h-8 w-0.5 bg-muted my-3"></div>
              <div className={`bg-muted/40 p-3 rounded-lg border ${isActive("hvac") ? "border-kaal-primary" : "border-muted"} w-24 text-center`}>
                <div className="text-xs mb-1">HVAC Unit</div>
                <div className="text-xs text-muted-foreground">Climate</div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-muted/40 p-3 rounded-lg border border-muted w-24 text-center">
                <div className="text-xs mb-1">Relay Board</div>
                <div className="text-xs text-muted-foreground">Control</div>
              </div>
              <div className="h-8 w-0.5 bg-muted my-3"></div>
              <div className="grid grid-cols-2 gap-2 w-40">
                <div className={`bg-muted/40 p-2 rounded-lg border ${isActive("fog") ? "border-kaal-primary" : "border-muted"} text-center`}>
                  <div className="text-xs">Fog Machine</div>
                </div>
                <div className={`bg-muted/40 p-2 rounded-lg border ${isActive("fan") ? "border-kaal-primary" : "border-muted"} text-center`}>
                  <div className="text-xs">Fan Arrays</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            {isActive("led") && (
              <div className="absolute left-[38%] top-[20%] w-16 h-16 rounded-full bg-kaal-primary/20 animate-pulse-glow blur-xl"></div>
            )}
            {isActive("hvac") && (
              <div className="absolute left-[38%] bottom-[20%] w-16 h-16 rounded-full bg-kaal-primary/20 animate-pulse-glow blur-xl"></div>
            )}
            {isActive("fog") && (
              <div className="absolute right-[34%] bottom-[20%] w-16 h-16 rounded-full bg-kaal-primary/20 animate-pulse-glow blur-xl"></div>
            )}
            {isActive("fan") && (
              <div className="absolute right-[17%] bottom-[20%] w-16 h-16 rounded-full bg-kaal-primary/20 animate-pulse-glow blur-xl"></div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
