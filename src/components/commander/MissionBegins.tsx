
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function MissionBegins() {
  const [missionStarted, setMissionStarted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMissionToggle = () => {
    setMissionStarted(!missionStarted);
    // Temporarily hide tooltip when state changes
    setShowTooltip(false);
    setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')",
        }}
        animate={{ 
          filter: missionStarted ? "blur(3px)" : "none",
          scale: missionStarted ? 1.05 : 1
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.h2 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${missionStarted ? "text-kaal-primary" : "text-white"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Mission Begins
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          With a single command, the entire KAAL system activates, transforming your tactical experience in seconds.
        </motion.p>
        
        <div className="mb-10">
          <TooltipProvider>
            <Tooltip open={showTooltip}>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className={`px-8 py-6 text-lg relative group ${missionStarted ? "bg-green-600 hover:bg-green-700" : "bg-kaal-primary hover:bg-kaal-primary/90"}`}
                    onClick={handleMissionToggle}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    {missionStarted ? "Mission Active" : "Activate Mission"}
                    
                    {/* Ripple effect */}
                    <AnimatePresence>
                      {missionStarted && (
                        <motion.span 
                          key="ripple"
                          initial={{ scale: 0.8, opacity: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-md bg-white/30" 
                        />
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="w-80 p-3">
                <p>
                  {missionStarted 
                    ? "KAAL system is active. All subsystems including fog, terrain simulation, and hologram projection are running. Click to deactivate." 
                    : "Click to activate all KAAL subsystems and begin the mission simulation."}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <AnimatePresence>
          {missionStarted && (
            <motion.div 
              className="text-xl md:text-2xl font-light italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              "A single tap. <span className="text-kaal-primary">Mission begins.</span>"
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated dots representing system activation */}
      <AnimatePresence>
        {missionStarted && (
          <div className="absolute inset-0 z-5 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                }}
                animate={{ 
                  opacity: [0.7, 0.2, 0.7],
                  scale: [1, 1.5, 1]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                className="absolute w-2 h-2 rounded-full bg-kaal-primary"
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
