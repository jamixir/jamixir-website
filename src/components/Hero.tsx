import { Button } from "@/components/ui/button";
import { Github, BookOpen, Code } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/38efae7b-2eb7-4944-bdd4-28c87cae0e36.png" 
                alt="Jamixir Logo" 
                className="h-24 w-24 md:h-32 md:w-32"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                jamixir
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              JAM + Elixir. A hands-on, code-first approach to understanding and building with the JAM protocol using functional programming.
            </p>
            
            <p className="text-lg text-primary font-medium">
              We make the formal JAM spec approachable by mapping it to clean Elixir code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://github.com/jamixir" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-lg px-8 py-6" asChild>
              <a href="https://t.me/+jlaRqhcS06o1YTYx" target="_blank" rel="noopener noreferrer">
                Join Telegram
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <BookOpen className="mr-2 h-5 w-5" />
              Read the Docs
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">Not just theory</h3>
              <p className="text-muted-foreground">Real implementation</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">Learn JAM</h3>
              <p className="text-muted-foreground">By building</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">Translate math</h3>
              <p className="text-muted-foreground">Into code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};