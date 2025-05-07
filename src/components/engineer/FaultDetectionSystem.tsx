
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ThermometerSun,
  Zap,
  Power,
  ShieldCheck,
  ShieldAlert,
  Gauge,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FaultDetectionSystem() {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);
  const [simulatedFault, setSimulatedFault] = useState<string | null>(null);
  const [faultDetected, setFaultDetected] = useState(false);
  const [recoveryMode, setRecoveryMode] = useState(false);

  // System metrics
  const [metrics, setMetrics] = useState({
    temperature: 32.4,
    currentDraw: 7.2,
    voltage: 11.8,
    fanSpeed: 1800,
    safetyStatus: "Normal",
  });

  const handleSystemHover = (system: string | null) => {
    setActiveSystem(system);
  };

  const simulateFault = (faultType: string | null) => {
    if (faultType === null) {
      // Reset system to normal
      setFaultDetected(false);
      setRecoveryMode(false);
      setSimulatedFault(null);
      
      // Reset metrics to normal values
      setMetrics({
        temperature: 32.4,
        currentDraw: 7.2,
        voltage: 11.8,
        fanSpeed: 1800,
        safetyStatus: "Normal",
      });
      
      return;
    }
    
    setSimulatedFault(faultType);
    setFaultDetected(true);
    
    // Set fault-specific metrics
    switch (faultType) {
      case "temperature":
        setMetrics(prev => ({ ...prev, temperature: 78.6, fanSpeed: 3600, safetyStatus: "Warning" }));
        break;
      case "current":
        setMetrics(prev => ({ ...prev, currentDraw: 15.8, voltage: 10.2, safetyStatus: "Warning" }));
        break;
      case "voltage":
        setMetrics(prev => ({ ...prev, voltage: 8.4, safetyStatus: "Warning" }));
        break;
    }
    
    // After a delay, trigger recovery mode
    setTimeout(() => {
      setRecoveryMode(true);
      
      // After recovery completes, return to normal
      setTimeout(() => {
        simulateFault(null);
      }, 5000);
    }, 3000);
  };

  // Systems to monitor
  const systems = [
    { id: "temperature", name: "Temperature", icon: ThermometerSun, metric: `${metrics.temperature.toFixed(1)}°C`, threshold: "75°C" },
    { id: "current", name: "Current Draw", icon: Zap, metric: `${metrics.currentDraw.toFixed(1)}A`, threshold: "15A" },
    { id: "voltage", name: "Voltage", icon: Power, metric: `${metrics.voltage.toFixed(1)}V`, threshold: "9V" },
    { id: "fan", name: "Fan Speed", icon: Gauge, metric: `${metrics.fanSpeed} RPM`, threshold: "600 RPM" },
  ];

  // Render status indicator based on system state
  const renderStatusIndicator = () => {
    if (recoveryMode) {
      return (
        <div className="flex items-center text-yellow-500">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ShieldCheck size={20} className="mr-2" />
          </motion.div>
          <span>Recovery Mode Active</span>
        </div>
      );
    }
    
    if (faultDetected) {
      return (
        <div className="flex items-center text-red-500">
          <motion.div 
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <ShieldAlert size={20} className="mr-2" />
          </motion.div>
          <span>Fault Detected - {simulatedFault === "temperature" ? "Overheating" : simulatedFault === "current" ? "Overcurrent" : "Undervoltage"}</span>
        </div>
      );
    }
    
    return (
      <div className="flex items-center text-green-500">
        <ShieldCheck size={20} className="mr-2" />
        <span>All Systems Normal</span>
      </div>
    );
  };

  return (
    <div className="p-4 border border-muted rounded-lg bg-muted/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Fault Detection System</h3>
        {renderStatusIndicator()}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {systems.map((system) => {
          const isFaulted = simulatedFault === system.id;
          const isActive = activeSystem === system.id || isFaulted;
          
          return (
            <div 
              key={system.id}
              className={`p-3 rounded-lg border transition-all ${
                isFaulted 
                  ? "border-red-500 bg-red-500/5" 
                  : isActive 
                    ? "border-kaal-primary bg-kaal-primary/5" 
                    : "border-muted bg-muted/5"
              }`}
              onMouseEnter={() => handleSystemHover(system.id)}
              onMouseLeave={() => handleSystemHover(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <system.icon 
                    size={18} 
                    className={isFaulted ? "text-red-500" : isActive ? "text-kaal-primary" : "text-muted-foreground"} 
                  />
                  <h4 className="ml-2 font-medium text-sm">{system.name}</h4>
                </div>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        onClick={() => simulateFault(system.id)}
                        className="px-2 py-0.5 text-xs rounded border border-muted bg-muted/20 hover:bg-muted/40 transition-colors"
                        disabled={faultDetected || recoveryMode}
                      >
                        Test
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-xs">Simulate {system.name} fault</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="mt-3 flex justify-between items-center">
                <div>
                  <p className={`text-lg font-mono ${
                    isFaulted ? "text-red-500" : "text-foreground"
                  }`}>
                    {system.metric}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Threshold: {system.threshold}
                  </p>
                </div>
                
                {isFaulted && (
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-red-500"
                  >
                    <AlertTriangle size={20} />
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-muted/20 border border-muted rounded-lg p-3">
        <h4 className="text-sm font-medium mb-2">Auto-Shutdown Protocols</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className={`p-2 rounded border ${faultDetected ? "border-yellow-500 bg-yellow-500/5" : "border-muted"}`}>
            <p className="font-medium">Primary Protocol</p>
            <p className="text-muted-foreground mt-1">Soft shutdown with alert</p>
            <p className={`mt-2 ${faultDetected ? "text-yellow-500" : "text-muted-foreground"}`}>
              {faultDetected ? "Stage 1 Active" : "Standby"}
            </p>
          </div>
          
          <div className={`p-2 rounded border ${recoveryMode ? "border-yellow-500 bg-yellow-500/5" : "border-muted"}`}>
            <p className="font-medium">Recovery Mode</p>
            <p className="text-muted-foreground mt-1">Reset affected systems</p>
            <p className={`mt-2 ${recoveryMode ? "text-yellow-500" : "text-muted-foreground"}`}>
              {recoveryMode ? "Active" : "Standby"}
            </p>
          </div>
          
          <div className="p-2 rounded border border-muted">
            <p className="font-medium">Emergency Cutoff</p>
            <p className="text-muted-foreground mt-1">Hardware power relay</p>
            <p className="text-muted-foreground mt-2">Standby</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-center">
        <button 
          onClick={() => simulateFault(null)}
          className="px-3 py-1 text-xs rounded-md border border-muted bg-muted/20 hover:bg-muted/40 transition-colors"
          disabled={!faultDetected && !recoveryMode}
        >
          Reset All Systems
        </button>
      </div>
    </div>
  );
}
