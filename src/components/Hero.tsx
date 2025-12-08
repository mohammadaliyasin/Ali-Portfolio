import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden"
    >
      {/* Smooth Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-accent/20 to-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.muted/40),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Availability Badge */}
            <Badge
              variant="outline"
              className="bg-card/60 border-border px-4 py-2 flex items-center backdrop-blur"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for new opportunities
            </Badge>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                <span className="block text-muted-foreground">Full Stack</span>
                <span className="block text-foreground">App Developer</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Crafting beautiful, performant mobile apps with Flutter and
                scalable web solutions — focused on delivering clean UI, strong
                architecture, and smooth user experiences.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://github.com/mohammadaliyasin?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 rounded-xl"
                >
                  View My Work
                </Button>
              </a>

              <a
                href="https://linktr.ee/aliyasin.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-card border-border hover:bg-accent px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-muted/40 rounded-3xl blur-3xl rotate-6" />

              {/* Image Container */}
              <div className="relative w-62 h-62 md:w82 md:h-82 lg:w-85 lg:h-[420px] rounded-3xl bg-card/50 backdrop-blur-sm border border-border p-2 shadow-xl transition-transform duration-300 hover:rotate-2">
                <ImageWithFallback
                  src="/assets/ali.jpg"
                  alt="Profile Picture"
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-primary p-4 rounded-2xl shadow-2xl animate-bounce">
                <svg
                  className="w-7 h-7 text-primary-foreground"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z" />
                </svg>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-accent p-3 rounded-xl shadow-2xl animate-pulse">
                <svg
                  className="w-6 h-6 text-accent-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
