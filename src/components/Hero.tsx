import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { value: "3+", label: "Yrs Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "3", label: "Internships" },
  { value: "2", label: "Live Apps" },
];

// Tech stack pills for rotating display
const techStack = [
  "Flutter",
  "Dart",
  "Firebase",
  "Node.js",
  "React",
  "MongoDB",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 bg-background">
        {/* Faint green top-right corner glow */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.07] animate-green-pulse"
          style={{
            background:
              "radial-gradient(circle, var(--green) 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left dimmer glow */}
        <div
          className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full opacity-[0.05] animate-float-a"
          style={{
            background:
              "radial-gradient(circle, var(--green) 0%, transparent 70%)",
          }}
        />

        {/* Subtle scan-line effect */}
        <div
          className="absolute left-0 right-0 h-px opacity-10"
          style={{
            background: "var(--green)",
            animation: "scan-line 8s linear infinite",
            top: "30%",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4ade80 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT CONTENT ── */}
          <div className="order-2 lg:order-1 space-y-7 text-center lg:text-left">
            {/* Terminal-style status pill */}
            <div className="flex justify-center lg:justify-start animate-fade-up">
              <div className="terminal-pill">
                <span
                  className="animate-green-pulse"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    display: "inline-block",
                    background: "var(--green)",
                  }}
                />
                open_to_work.true
              </div>
            </div>

            {/* Name + Title */}
            <div
              className="space-y-3 animate-fade-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              <p className="text-muted-foreground text-xs sm:text-sm font-mono tracking-[0.2em] uppercase">
                Mohammad Ali Yasin
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-tight">
                <span className="block text-foreground">Full Stack</span>
                <span className="block gradient-text">App Developer</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              I build seamless mobile experiences with Flutter and architect
              backends that actually scale turning complex ideas into polished,
              production ready apps.
            </p>

            {/* Tech chips */}
            <div
              className="flex flex-wrap gap-2 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.25s", opacity: 0 }}
            >
              {techStack.map((tech) => (
                <span key={tech} className="green-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <a
                href="https://github.com/mohammadaliyasin?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base font-semibold text-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ background: "var(--green)", color: "#0a0a0a" }}
                >
                  View My Work →
                </Button>
              </a>

              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border text-foreground hover:border-green hover:text-green bg-transparent px-8 py-3 text-sm sm:text-base rounded-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-4 gap-3 sm:gap-6 pt-4 border-t border-border animate-fade-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-green font-mono">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "0.15s", opacity: 0 }}
          >
            <div className="relative">
              {/* Outer green glow */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 animate-green-pulse"
                style={{ background: "var(--green)" }}
              />

              {/* Image */}
              <div className="relative w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-[360px] lg:w-[320px] lg:h-[400px] rounded-2xl overflow-hidden border border-border shadow-2xl hover:scale-[1.02] transition-transform duration-500 bg-card">
                <ImageWithFallback
                  src="/assets/ali.jpg"
                  alt="Mohammad Ali Yasin – Full Stack App Developer"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                  className="w-full h-full object-cover"
                />
                {/* Bottom name card overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                  <p className="font-mono text-xs text-green">
                    mohammadaliyasin
                  </p>
                  <p className="text-xs text-muted-foreground">
                    flutter · firebase · node.js
                  </p>
                </div>
              </div>

              {/* Floating: code badge */}
              <div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-xl animate-float-b z-10"
                style={{ background: "var(--green)", color: "#0a0a0a" }}
              >
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z" />
                </svg>
              </div>

              {/* Floating: Flutter badge */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl px-3 sm:px-4 py-2 shadow-xl z-10 flex items-center gap-2">
                <span className="text-lg">📱</span>
                <div>
                  <div className="font-mono text-[10px] font-bold text-green leading-none">
                    Flutter Expert
                  </div>
                  <div className="text-[10px] text-muted-foreground leading-none mt-0.5">
                    3+ yrs · cross-platform
                  </div>
                </div>
              </div>

              {/* Vertical label on left edge */}
              <div className="absolute top-1/2 -left-10 sm:-left-14 -translate-y-1/2 hidden sm:flex flex-col items-center gap-1 text-muted-foreground">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
                <span className="font-mono text-[9px] rotate-[-90deg] whitespace-nowrap tracking-widest text-muted-foreground/60">
                  full-stack · mobile
                </span>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-14 lg:mt-20">
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-green transition-colors duration-300 group"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              scroll
            </span>
            <div className="w-5 h-8 rounded-full border border-current flex items-start justify-center pt-1 animate-scroll">
              <div className="w-1 h-2 rounded-full bg-current" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
