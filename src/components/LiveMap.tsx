
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Layers3,
  Cloud,
  Fan,
  Monitor,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

export function LiveMap() {
  const [mapVisible, setMapVisible] = useState(false);
  const [activeDevices, setActiveDevices] = useState<string[]>(["led"]);
  
  const toggleDevice = (device: string) => {
    if (activeDevices.includes(device)) {
      setActiveDevices(activeDevices.filter(d => d !== device));
    } else {
      setActiveDevices([...activeDevices, device]);
    }
  };
  
  const isActive = (device: string) => {
    return activeDevices.includes(device);
  };

  if (!mapVisible) {
    return (
      <div 
        className="fixed bottom-4 right-4 p-3 bg-muted/20 backdrop-blur-sm border border-muted rounded-lg cursor-pointer hover:bg-muted/30 transition-colors z-50"
        onClick={() => setMapVisible(true)}
      >
        <div className="flex items-center">
          <Layers3 size={18} className="text-kaal-primary mr-2" />
          <span className="text-sm font-medium">Show Live Map</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-muted/20 backdrop-blur-sm border border-muted rounded-lg shadow-lg z-50 w-80">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <Layers3 size={18} className="text-kaal-primary mr-2" />
          <span className="font-medium">KAAL Command Room</span>
        </div>
        <div 
          className="cursor-pointer text-muted-foreground hover:text-foreground"
          onClick={() => setMapVisible(false)}
        >
          &times;
        </div>
      </div>
      
      <div className="relative h-44 bg-muted/30 border border-muted rounded-lg mb-3 overflow-hidden">
        {/* Room layout visualization */}
        <div className="absolute inset-2 border-2 border-dashed border-muted/50 rounded"></div>
        
        {/* Central hologram */}
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${
            isActive("hologram") 
              ? "bg-kaal-primary/20 border border-kaal-primary" 
              : "bg-muted/20 border border-muted"
          }`}
          onClick={() => toggleDevice("hologram")}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Layers3 size={14} className={isActive("hologram") ? "text-kaal-primary" : "text-muted-foreground"} />
          </div>
          {isActive("hologram") && (
            <div className="absolute inset-0 rounded-full bg-kaal-primary/30 animate-pulse-glow blur-md -z-10"></div>
          )}
        </div>
        
        {/* LED Wall */}
        <div 
          className={`absolute bottom-2 left-2 right-2 h-4 ${
            isActive("led") 
              ? "bg-kaal-primary/20 border border-kaal-primary" 
              : "bg-muted/20 border border-muted"
          }`}
          onClick={() => toggleDevice("led")}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Monitor size={10} className={isActive("led") ? "text-kaal-primary" : "text-muted-foreground"} />
          </div>
        </div>
        
        {/* Fog Machine */}
        <div 
          className={`absolute top-3 right-3 w-8 h-8 rounded-md ${
            isActive("fog") 
              ? "bg-kaal-primary/20 border border-kaal-primary" 
              : "bg-muted/20 border border-muted"
          }`}
          onClick={() => toggleDevice("fog")}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Cloud size={12} className={isActive("fog") ? "text-kaal-primary" : "text-muted-foreground"} />
          </div>
        </div>
        
        {/* Fan Array */}
        <div 
          className={`absolute top-3 left-3 w-8 h-8 rounded-md ${
            isActive("fan") 
              ? "bg-kaal-primary/20 border border-kaal-primary" 
              : "bg-muted/20 border border-muted"
          }`}
          onClick={() => toggleDevice("fan")}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Fan size={12} className={isActive("fan") ? "text-kaal-primary" : "text-muted-foreground"} />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground mb-1">Toggle Components:</div>
        
        <div className="grid grid-cols-2 gap-2">
          <div 
            className="flex items-center justify-between p-1.5 rounded border border-muted bg-muted/20 cursor-pointer hover:bg-muted/30"
            onClick={() => toggleDevice("hologram")}
          >
            <div className="flex items-center">
              <Layers3 size={12} className="mr-1" />
              <span className="text-xs">Hologram</span>
            </div>
            {isActive("hologram") ? (
              <ToggleRight size={14} className="text-kaal-primary" />
            ) : (
              <ToggleLeft size={14} className="text-muted-foreground" />
            )}
          </div>
          
          <div 
            className="flex items-center justify-between p-1.5 rounded border border-muted bg-muted/20 cursor-pointer hover:bg-muted/30"
            onClick={() => toggleDevice("led")}
          >
            <div className="flex items-center">
              <Monitor size={12} className="mr-1" />
              <span className="text-xs">LED Wall</span>
            </div>
            {isActive("led") ? (
              <ToggleRight size={14} className="text-kaal-primary" />
            ) : (
              <ToggleLeft size={14} className="text-muted-foreground" />
            )}
          </div>
          
          <div 
            className="flex items-center justify-between p-1.5 rounded border border-muted bg-muted/20 cursor-pointer hover:bg-muted/30"
            onClick={() => toggleDevice("fog")}
          >
            <div className="flex items-center">
              <Cloud size={12} className="mr-1" />
              <span className="text-xs">Fog</span>
            </div>
            {isActive("fog") ? (
              <ToggleRight size={14} className="text-kaal-primary" />
            ) : (
              <ToggleLeft size={14} className="text-muted-foreground" />
            )}
          </div>
          
          <div 
            className="flex items-center justify-between p-1.5 rounded border border-muted bg-muted/20 cursor-pointer hover:bg-muted/30"
            onClick={() => toggleDevice("fan")}
          >
            <div className="flex items-center">
              <Fan size={12} className="mr-1" />
              <span className="text-xs">Fans</span>
            </div>
            {isActive("fan") ? (
              <ToggleRight size={14} className="text-kaal-primary" />
            ) : (
              <ToggleLeft size={14} className="text-muted-foreground" />
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-muted flex justify-between items-center">
        <Badge variant="outline" className="text-xs bg-muted/20">
          Room Status: Active
        </Badge>
        <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500 text-green-500">
          Systems Online
        </Badge>
      </div>
    </div>
  );
}
