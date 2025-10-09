import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-medium text-foreground">
            ali.
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <Button variant="outline" className="bg-card border-border hover:bg-accent transition-all duration-300">
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
}