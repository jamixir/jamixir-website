import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Github, Twitter } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/38efae7b-2eb7-4944-bdd4-28c87cae0e36.png" 
              alt="Jamixir" 
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold font-inter">jamixir</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#why-elixir" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Why Elixir
            </a>
            <a href="#code" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Code
            </a>
            <a href="#team" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/jamixir" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com/jamixir" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};