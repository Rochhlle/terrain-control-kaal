
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import { StatusBar } from "./StatusBar";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings } from "lucide-react";

interface HeaderProps {
  currentMode: "engineer" | "commander";
  onModeChange: (mode: "engineer" | "commander") => void;
}

export function Header({ currentMode, onModeChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <h1 
            className="text-2xl font-bold tracking-tighter cursor-pointer"
            onClick={() => navigate("/")}
          >
            PROJECT <span className="text-kaal-primary">KAAL</span>
          </h1>
          <Badge 
            variant="outline" 
            className={`uppercase ${
              currentMode === "engineer" ? "border-blue-500 text-blue-500" : "border-red-500 text-red-500"
            }`}
          >
            {currentMode === "engineer" ? "Technical" : "Strategic"}
          </Badge>
        </div>

        <div className="flex items-center space-x-6">
          <ModeToggle currentMode={currentMode} onModeChange={onModeChange} />
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-muted transition">
              <Bell size={18} className="text-muted-foreground hover:text-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition">
              <Settings size={18} className="text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 mt-2">
        <StatusBar />
      </div>
    </header>
  );
}
