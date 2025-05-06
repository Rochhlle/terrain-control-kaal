
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MissionBegins } from "@/components/commander/MissionBegins";
import { RoomAwakens } from "@/components/commander/RoomAwakens";
import { CombatEvolution } from "@/components/commander/CombatEvolution";
import { SystemControl } from "@/components/commander/SystemControl";
import { WhyKaal } from "@/components/commander/WhyKaal";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Volume, VolumeX } from "lucide-react";

export default function CommanderMode() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const { toast } = useToast();
  
  // When the component mounts, show an immersive welcome toast
  useEffect(() => {
    toast({
      title: "Commander Mode Activated",
      description: "Experience the immersive battlefield environment and strategic control system.",
      duration: 5000,
    });
  }, [toast]);

  const handleSectionEnter = (section: string) => {
    setActiveSection(section);
    if (soundEnabled) {
      // Here we would play section-specific sounds
      console.log(`Playing sound for ${section}`);
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    toast({
      title: soundEnabled ? "Sound Disabled" : "Sound Enabled",
      description: soundEnabled ? "Audio effects have been turned off." : "Immersive audio effects are now active.",
      duration: 3000,
    });
  };

  return (
    <div className="relative pt-28 pb-20">
      {/* Floating navigation indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
        {["mission", "room", "combat", "control", "why"].map((section, index) => (
          <a 
            key={section}
            href={`#${section}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section 
                ? "bg-kaal-primary scale-125" 
                : "bg-muted hover:bg-kaal-primary/50"
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>

      {/* Audio toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-muted/80 backdrop-blur-sm hover:bg-muted transition-colors"
        onClick={toggleSound}
        whileTap={{ scale: 0.95 }}
      >
        {soundEnabled ? (
          <Volume size={20} className="text-kaal-primary" />
        ) : (
          <VolumeX size={20} className="text-muted-foreground" />
        )}
      </motion.button>

      {/* Mode indicator badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-20 left-4 z-30"
      >
        <Badge variant="outline" className="border-red-500 text-red-500 bg-muted/30 backdrop-blur-sm px-3 py-1">
          🪖 Commander View
        </Badge>
      </motion.div>

      {/* Main content */}
      <div>
        <div id="mission" onMouseEnter={() => handleSectionEnter('mission')}>
          <MissionBegins />
        </div>
        <div id="room" onMouseEnter={() => handleSectionEnter('room')}>
          <RoomAwakens />
        </div>
        <div id="combat" onMouseEnter={() => handleSectionEnter('combat')}>
          <CombatEvolution />
        </div>
        <div id="control" onMouseEnter={() => handleSectionEnter('control')}>
          <SystemControl />
        </div>
        <div id="why" onMouseEnter={() => handleSectionEnter('why')}>
          <WhyKaal />
        </div>
      </div>
    </div>
  );
}
