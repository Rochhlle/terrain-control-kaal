
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  AlertTriangle,
  Activity,
  CircleCheck,
  CircleX,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function SystemControl() {
  const [diagnosticRunning, setDiagnosticRunning] = useState(false);
  const [safetyTriggered, setSafetyTriggered] = useState(false);
  
  const runDiagnostic = () => {
    setDiagnosticRunning(true);
    setSafetyTriggered(false);
    
    setTimeout(() => {
      setDiagnosticRunning(false);
    }, 3000);
  };
  
  const triggerSafety = () => {
    setSafetyTriggered(true);
    setDiagnosticRunning(false);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.95)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80')"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            System <span className="text-kaal-primary">Control</span> Confidence
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Built with military-grade reliability and instant safety protocols that ensure 
            mission success without compromising operational security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-muted bg-black/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <ShieldCheck size={24} className="mr-2 text-green-500" />
                Auto-Safety Protocols
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg border border-muted bg-muted/20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Safety Response Time</h3>
                  <Badge variant="outline" className="bg-green-500/10 border-green-500 text-green-500">
                    {safetyTriggered ? "TRIGGERED" : "READY"}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span>Emergency Shutdown</span>
                    <span className="font-mono">&lt;50ms</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-sm">
                    <span>Automatic Backup</span>
                    <span className="font-mono">&lt;100ms</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-sm">
                    <span>Manual Override</span>
                    <span className="font-mono">Immediate</span>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg border ${
                safetyTriggered ? "border-red-500 bg-red-500/10" : "border-muted bg-muted/20"
              }`}>
                <h3 className="font-medium mb-4 flex items-center">
                  <AlertTriangle size={18} className="mr-2 text-yellow-500" />
                  Safety Demo
                </h3>
                
                {safetyTriggered ? (
                  <div className="text-center p-4">
                    <AlertTriangle size={40} className="mx-auto text-red-500 mb-2" />
                    <h4 className="text-xl font-bold text-red-500 mb-1">SAFETY PROTOCOL ACTIVE</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      All systems have been safely deactivated. Manual reset required.
                    </p>
                    <Button variant="outline" onClick={() => setSafetyTriggered(false)}>
                      Reset Safety System
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <Button 
                      variant="destructive" 
                      className="mr-2"
                      onClick={triggerSafety}
                    >
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Trigger Safety
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-muted bg-black/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Activity size={24} className="mr-2 text-kaal-primary" />
                System Diagnostics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg border border-muted bg-muted/20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">System Status</h3>
                  <Badge 
                    variant={diagnosticRunning ? "outline" : "default"} 
                    className={diagnosticRunning ? "bg-yellow-500/10 border-yellow-500 text-yellow-500" : "bg-green-500"}
                  >
                    {diagnosticRunning ? "CHECKING" : "OPERATIONAL"}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <CircleCheck size={16} className="mr-2 text-green-500" />
                      <span>Environmental Systems</span>
                    </div>
                    <span className="text-green-500">Online</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <CircleCheck size={16} className="mr-2 text-green-500" />
                      <span>Hologram Projector</span>
                    </div>
                    <span className="text-green-500">Online</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <CircleCheck size={16} className="mr-2 text-green-500" />
                      <span>Command Interface</span>
                    </div>
                    <span className="text-green-500">Online</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <CircleCheck size={16} className="mr-2 text-green-500" />
                      <span>Safety Protocols</span>
                    </div>
                    <span className="text-green-500">Active</span>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg border ${
                diagnosticRunning ? "border-kaal-primary bg-kaal-primary/10" : "border-muted bg-muted/20"
              }`}>
                <h3 className="font-medium mb-4">Run Diagnostic</h3>
                
                <div className="flex justify-center">
                  <Button 
                    variant={diagnosticRunning ? "secondary" : "default"}
                    onClick={runDiagnostic}
                    disabled={diagnosticRunning || safetyTriggered}
                    className={diagnosticRunning ? "bg-kaal-primary text-white" : ""}
                  >
                    {diagnosticRunning ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Checking Systems...
                      </>
                    ) : (
                      <>
                        <Activity className="mr-2 h-4 w-4" />
                        Start Diagnostic
                      </>
                    )}
                  </Button>
                </div>
                
                {diagnosticRunning && (
                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    Running comprehensive system check...
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="text-2xl font-light italic">
            "Ready. Responsive. <span className="text-kaal-primary">Reliable.</span>"
          </div>
        </div>
      </div>
    </section>
  );
}
