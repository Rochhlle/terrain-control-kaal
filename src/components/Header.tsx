
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./ModeToggle";
import { StatusBar } from "./StatusBar";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings, Info, Download } from "lucide-react";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  currentMode: "engineer" | "commander";
  onModeChange: (mode: "engineer" | "commander") => void;
}

export function Header({ currentMode, onModeChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [notifications, setNotifications] = useState<{ id: number; title: string; message: string }[]>([
    { id: 1, title: "System Status", message: "All systems operational" },
    { id: 2, title: "Update Available", message: "New terrain maps available for simulation" },
  ]);
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
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        delay: 0.2 
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.02 }}
        >
          <div 
            className="cursor-pointer flex items-center"
            onClick={() => navigate("/")}
          >
            <img 
              src="/lovable-uploads/7b825a42-916d-4b3d-b7b6-8fd4d30ef9e7.png" 
              alt="Project KAAL Logo" 
              className="h-10 mr-3" 
            />
            <h1 className="text-2xl font-bold tracking-tighter hidden sm:block">
              PROJECT <span className="text-kaal-primary ml-1">KAAL</span>
            </h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={16} className="ml-2 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Advanced terrain simulation and mission-readiness platform</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Badge 
            variant="outline" 
            className={`uppercase transition-colors duration-500 ${
              currentMode === "engineer" ? "border-blue-500 text-blue-500" : "border-red-500 text-red-500"
            }`}
          >
            {currentMode === "engineer" ? "Technical" : "Strategic"}
          </Badge>
        </motion.div>

        <div className="flex items-center space-x-6">
          {/* Download Option */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="hidden md:flex items-center gap-2 border-kaal-primary text-kaal-primary hover:bg-kaal-primary hover:text-white"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1OvUWK_zNXv3vOYzz1ZKOAUSiBrf9gq06/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download size={16} />
                    <span>Download in other languages</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download to view in a different language</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <ModeToggle currentMode={currentMode} onModeChange={onModeChange} />
          
          <div className="hidden md:flex items-center space-x-4">
            <TooltipProvider>
              <Popover>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <PopoverTrigger asChild>
                      <motion.button 
                        className="p-2 rounded-full hover:bg-muted transition relative"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Bell size={18} className="text-muted-foreground hover:text-foreground" />
                        {notifications.length > 0 && (
                          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        )}
                      </motion.button>
                    </PopoverTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>System notifications</p>
                  </TooltipContent>
                </Tooltip>
                
                <PopoverContent className="w-80 p-0">
                  <div className="p-2 border-b">
                    <h3 className="font-medium">Notifications</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <AnimatePresence>
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-3 border-b last:border-0 hover:bg-muted/50"
                          >
                            <h4 className="font-medium">{notification.title}</h4>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                          </motion.div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-muted-foreground">
                          No new notifications
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                  {notifications.length > 0 && (
                    <div className="p-2 border-t">
                      <button 
                        className="text-sm text-center w-full text-muted-foreground hover:text-foreground"
                        onClick={() => setNotifications([])}
                      >
                        Clear all
                      </button>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button 
                    className="p-2 rounded-full hover:bg-muted transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Settings size={18} className="text-muted-foreground hover:text-foreground" />
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>System settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <div className="px-4 mt-2">
        <StatusBar />
      </div>

      {/* Mobile download option */}
      <div className="mt-2 px-4 md:hidden">
        <a 
          href="https://drive.google.com/file/d/1OvUWK_zNXv3vOYzz1ZKOAUSiBrf9gq06/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-1.5 w-full bg-muted/30 backdrop-blur-sm rounded-md text-kaal-primary border border-kaal-primary"
        >
          <Download size={14} />
          <span className="text-sm">Download in other languages</span>
        </a>
      </div>
    </motion.header>
  );
}
