import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerClose,
} from "./ui/drawer";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero",       label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = ["hero", "skills", "projects", "experience", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 90 >= el.offsetTop) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            {/* Green dot before logo */}
            <span
              className="w-2 h-2 rounded-full flex-shrink-0 animate-green-pulse"
              style={{ background: "var(--green)" }}
            />
            <span className="font-mono font-bold text-xl sm:text-2xl text-foreground group-hover:text-green transition-colors duration-300">
              ali.dev
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === link.href
                    ? "text-green"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span
                    className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: "var(--green)" }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Resume button */}
            <a
              href="https://drive.google.com/file/d/1jy4x9PbklN8pO8nkaHR9zGVM7dK9QCw9/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:border-green hover:text-green bg-transparent transition-all duration-300 font-mono text-xs tracking-wide"
              >
                resume.pdf ↗
              </Button>
            </a>

            {/* Mobile drawer */}
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>

              <DrawerContent className="bg-card border-t border-border">
                <div className="flex flex-col p-6 pb-10 gap-2">
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-mono font-bold text-lg text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: "var(--green)" }} />
                      ali.dev
                    </span>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon" className="text-muted-foreground">
                        <X className="h-4 w-4" />
                      </Button>
                    </DrawerClose>
                  </div>

                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          active === link.href
                            ? "bg-green-muted border border-green text-green"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {active === link.href && (
                          <span className="font-mono text-xs text-green">→</span>
                        )}
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href="https://drive.google.com/file/d/1aHdPmieG3Bmp0oQKRfFuZX6pXTDnJN01/view?usp=sharing"
                      target="_blank" rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button className="w-full font-mono text-xs tracking-wide bg-green text-background hover:bg-green/90">
                        resume.pdf ↗
                      </Button>
                    </a>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}
