
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function MissionBegins() {
  const [missionStarted, setMissionStarted] = useState(false);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')",
          filter: missionStarted ? "blur(3px)" : "none",
          transition: "all 1s ease-out"
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${missionStarted ? "text-kaal-primary" : "text-white"}`}>
          Mission Begins
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          With a single command, the entire KAAL system activates, transforming your tactical experience in seconds.
        </p>
        
        <div className="mb-10">
          <Button 
            size="lg" 
            className={`px-8 py-6 text-lg relative group ${missionStarted ? "bg-green-600 hover:bg-green-700" : "bg-kaal-primary hover:bg-kaal-primary/90"}`}
            onClick={() => setMissionStarted(!missionStarted)}
          >
            <Play className="mr-2 h-5 w-5" />
            {missionStarted ? "Mission Active" : "Activate Mission"}
            
            {/* Ripple effect */}
            {missionStarted && (
              <span className="absolute inset-0 rounded-md animate-ripple bg-white/30" />
            )}
          </Button>
        </div>
        
        <div 
          className={`text-xl md:text-2xl font-light italic transition-opacity duration-1000 ${missionStarted ? "opacity-100" : "opacity-0"}`}
        >
          "A single tap. <span className="text-kaal-primary">Mission begins.</span>"
        </div>
      </div>

      {/* Animated dots representing system activation */}
      {missionStarted && (
        <div className="absolute inset-0 z-5 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-kaal-primary animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.7
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
