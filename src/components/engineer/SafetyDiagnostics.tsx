
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Progress 
} from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Zap,
  Thermometer,
  StopCircle,
  RotateCcw,
  Clock,
  ShieldCheck,
  BatteryCharging,
} from "lucide-react";

export function SafetyDiagnostics() {
  const [power, setPower] = useState(65);
  const [currentDraw, setCurrentDraw] = useState(3.2);
  const [temperature, setTemperature] = useState(42);
  const [relayResponse, setRelayResponse] = useState(28);
  const [watchdogStatus, setWatchdogStatus] = useState("active");

  // Simulate fluctuating values
  useEffect(() => {
    const interval = setInterval(() => {
      setPower((prev) => {
        const newValue = prev + (Math.random() * 3 - 1.5);
        return Math.min(Math.max(newValue, 55), 85);
      });
      
      setCurrentDraw((prev) => {
        const newValue = prev + (Math.random() * 0.2 - 0.1);
        return Math.min(Math.max(newValue, 2.8), 4.0);
      });
      
      setTemperature((prev) => {
        const newValue = prev + (Math.random() * 2 - 1);
        return Math.min(Math.max(newValue, 38), 52);
      });
      
      setRelayResponse((prev) => {
        const newValue = prev + (Math.random() * 4 - 2);
        return Math.min(Math.max(newValue, 20), 45);
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getTemperatureColor = (temp: number) => {
    if (temp > 48) return "text-red-500";
    if (temp > 44) return "text-yellow-500";
    return "text-green-500";
  };

  const getRelayResponseColor = (response: number) => {
    if (response > 40) return "text-red-500";
    if (response > 35) return "text-yellow-500";
    return "text-green-500";
  };

  const handleWatchdogReset = () => {
    setWatchdogStatus("restarting");
    setTimeout(() => setWatchdogStatus("active"), 2000);
  };

  return (
    <div className="system-border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <ShieldCheck size={20} className="mr-2 text-kaal-primary" /> 
        Safety & Diagnostics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Card className="border-muted">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Activity size={18} className="mr-2 text-kaal-primary" />
              System Monitor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <BatteryCharging size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">Power</span>
                  </div>
                  <span className="text-sm">{power.toFixed(1)}%</span>
                </div>
                <Progress value={power} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Zap size={16} className="mr-2 text-yellow-500" />
                    <span className="text-sm">Current Draw</span>
                  </div>
                  <span className="text-sm">{currentDraw.toFixed(1)}A</span>
                </div>
                <Progress value={currentDraw * 20} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Thermometer size={16} className={`mr-2 ${getTemperatureColor(temperature)}`} />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className={`text-sm ${getTemperatureColor(temperature)}`}>{temperature}°C</span>
                </div>
                <Progress 
                  value={temperature} 
                  max={60} 
                  className={`h-2 ${
                    temperature > 48 
                      ? "[&>div]:bg-red-500" 
                      : temperature > 44 
                        ? "[&>div]:bg-yellow-500" 
                        : "[&>div]:bg-green-500"
                  }`} 
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Clock size={16} className={`mr-2 ${getRelayResponseColor(relayResponse)}`} />
                    <span className="text-sm">Relay Response</span>
                  </div>
                  <span className={`text-sm ${getRelayResponseColor(relayResponse)}`}>{relayResponse}ms</span>
                </div>
                <Progress 
                  value={100 - (relayResponse * 2)} 
                  className={`h-2 ${
                    relayResponse > 40 
                      ? "[&>div]:bg-red-500" 
                      : relayResponse > 35 
                        ? "[&>div]:bg-yellow-500" 
                        : "[&>div]:bg-green-500"
                  }`} 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 rounded-lg bg-muted/30 border border-muted">
          <h3 className="text-lg font-medium mb-3">Kill Switch Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg w-32 text-center">
                <div className="text-xs mb-1">Emergency</div>
                <div className="text-xs">Trigger</div>
              </div>
              <div className="h-8 w-0.5 bg-red-500/50 my-2"></div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg w-32 text-center">
                <div className="text-xs mb-1">System</div>
                <div className="text-xs">Controller</div>
              </div>
              <div className="h-8 w-0.5 bg-red-500/50 my-2"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center">
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-2 rounded-lg w-24 text-center">
                  <div className="text-xs">Power Cut</div>
                </div>
                <div className="h-6 w-0.5 bg-red-500/50 my-1"></div>
                <div className="bg-muted/40 p-2 rounded-lg border border-muted w-24 text-center">
                  <div className="text-xs">Relays</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-2 rounded-lg w-24 text-center">
                  <div className="text-xs">Safe Mode</div>
                </div>
                <div className="h-6 w-0.5 bg-red-500/50 my-1"></div>
                <div className="bg-muted/40 p-2 rounded-lg border border-muted w-24 text-center">
                  <div className="text-xs">Software</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-2 rounded bg-red-500/5 border border-red-500/30 text-xs">
            <div className="flex items-center mb-1">
              <StopCircle size={14} className="text-red-500 mr-1" />
              <span className="font-medium">Response Time:</span>
            </div>
            <ul className="list-disc list-inside ml-4 space-y-0.5">
              <li>Emergency Trigger → Power Cut: &lt;50ms</li>
              <li>Emergency Trigger → Safe Mode: &lt;100ms</li>
              <li>Complete System Shutdown: &lt;1s</li>
            </ul>
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-muted/30 border border-muted">
          <h3 className="text-lg font-medium mb-3">Manual Override Flow</h3>
          <div className="bg-muted/20 p-3 rounded-lg border border-muted">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-muted">
                  <th className="text-left pb-2">Device</th>
                  <th className="text-left pb-2">Override Method</th>
                  <th className="text-left pb-2">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted">
                <tr>
                  <td className="py-2">Fog Machine</td>
                  <td>Physical Switch</td>
                  <td>Unit Rear Panel</td>
                </tr>
                <tr>
                  <td className="py-2">LED Panels</td>
                  <td>Master Controller</td>
                  <td>Control Room</td>
                </tr>
                <tr>
                  <td className="py-2">Fan Arrays</td>
                  <td>Circuit Breaker</td>
                  <td>Power Distribution</td>
                </tr>
                <tr>
                  <td className="py-2">HVAC Unit</td>
                  <td>Thermostat</td>
                  <td>Wall Mounted</td>
                </tr>
                <tr>
                  <td className="py-2">Hologram</td>
                  <td>Power Button</td>
                  <td>Base Unit</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-2 rounded bg-blue-500/5 border border-blue-500/30 text-xs">
            <div className="flex items-center mb-1">
              <ShieldCheck size={14} className="text-blue-500 mr-1" />
              <span className="font-medium">Safety Protocol:</span>
            </div>
            <ul className="list-disc list-inside ml-4 space-y-0.5">
              <li>All manual overrides supersede software control</li>
              <li>Hardware intervention is logged in system records</li>
              <li>Override state persists through system restarts</li>
              <li>Manual reset required after emergency override</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
