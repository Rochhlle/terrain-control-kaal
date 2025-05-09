
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Share2,
  Activity
} from "lucide-react";

export function HardwareControl() {
  return (
    <div className="system-border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Share2 size={20} className="mr-2 text-kaal-primary" /> 
        Hardware Control Chain
      </h2>

      <div className="p-3 rounded-lg bg-muted/30 border border-muted">
        <h3 className="text-lg font-medium mb-3">Hardware-Protocol Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-muted">
                <th className="px-4 py-2 text-left">Device</th>
                <th className="px-4 py-2 text-left">Interface</th>
                <th className="px-4 py-2 text-left">Fallback</th>
                <th className="px-4 py-2 text-left">Latency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Fog Machine</td>
                <td className="px-4 py-2">
                  <Badge variant="outline" className="bg-red-500/10 border-red-500 text-red-500">Relay 2</Badge>
                </td>
                <td className="px-4 py-2">Manual</td>
                <td className="px-4 py-2">30ms</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">LED Panel</td>
                <td className="px-4 py-2">
                  <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500 text-yellow-500">PWM</Badge>
                </td>
                <td className="px-4 py-2">Red LED</td>
                <td className="px-4 py-2">15ms</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">Fan Arrays</td>
                <td className="px-4 py-2">
                  <Badge variant="outline" className="bg-red-500/10 border-red-500 text-red-500">Relay 3</Badge>
                </td>
                <td className="px-4 py-2">None</td>
                <td className="px-4 py-2">22ms</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-2">HVAC Unit</td>
                <td className="px-4 py-2">
                  <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">DMX</Badge>
                </td>
                <td className="px-4 py-2">Manual</td>
                <td className="px-4 py-2">45ms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="p-3 bg-muted/30 rounded-lg border border-muted">
        <h3 className="text-lg font-medium mb-2">Control Flow Visualization</h3>
        <div className="text-sm text-muted-foreground mb-3">
          Hover on components to see the control flow path
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">Tablet UI</span>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-kaal-primary">➤</div>
          </div>
          
          <span className="animate-pulse text-kaal-primary">⟶</span>
          
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">Node.js Server</span>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-kaal-primary">➤</div>
          </div>
          
          <span className="animate-pulse text-kaal-primary">⟶</span>
          
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">Arduino/RPi</span>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-kaal-primary">➤</div>
          </div>
          
          <span className="animate-pulse text-kaal-primary">⟶</span>
          
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">PWM/Relays</span>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-kaal-primary">➤</div>
          </div>
          
          <span className="animate-pulse text-kaal-primary">⟶</span>
          
          <div className="relative glassmorphism p-2 rounded-lg min-w-[120px]">
            <span className="text-sm">Devices</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-muted/30 border border-muted">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Activity size={16} className="mr-2 text-kaal-primary" />
            <span className="text-sm">System Latency:</span>
          </div>
          <Badge variant="outline" className="bg-kaal-primary/10 border-kaal-primary text-kaal-primary">
            28ms
          </Badge>
        </div>
      </div>
    </div>
  );
}
