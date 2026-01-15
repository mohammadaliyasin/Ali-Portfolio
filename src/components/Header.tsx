import { useState } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "./ui/drawer";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-1">
        <div className="flex justify-between items-center h-20">
          <div className="text-4xl font-medium text-foreground">ali.</div>

          <nav className="hidden md:flex space-x-10">
            <a
              href="#hero"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#experience"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile Navigation Drawer */}
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground dark:text-primary"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-background/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border-border dark:border-[#1f1f2e] border-t">
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium text-foreground dark:text-primary">Navigation</h2>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon" className="text-foreground dark:text-primary">
                        <X className="h-5 w-5" />
                      </Button>
                    </DrawerClose>
                  </div>
                  <nav className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground dark:text-[#9999b3] hover:text-foreground dark:hover:text-primary transition-colors duration-300 relative group py-2 px-2 rounded-md"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground dark:bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ))}
                  </nav>
                  <div className="pt-4 border-t border-border dark:border-[#1f1f2e]">
                    <a
                      href="https://drive.google.com/file/d/1aHdPmieG3Bmp0oQKRfFuZX6pXTDnJN01/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="outline"
                        className="w-full bg-card dark:bg-[#13131a] border-border dark:border-[#1f1f2e] text-card-foreground dark:text-primary hover:bg-accent dark:hover:bg-[#2d2d44] hover:text-accent-foreground dark:hover:text-[#e8e8f0] transition-all duration-300"
                      >
                        Resume
                      </Button>
                    </a>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            {/* Desktop Resume Button */}
            <a
              href="https://drive.google.com/file/d/1aHdPmieG3Bmp0oQKRfFuZX6pXTDnJN01/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button
                variant="outline"
                className="bg-card border-border hover:bg-accent transition-all duration-300"
                size={
                  window.innerWidth >= 768 ? "lg" : "sm"
                }
              >
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

